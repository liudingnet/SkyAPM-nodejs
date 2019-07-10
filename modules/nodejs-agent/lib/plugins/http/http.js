/*
 * Licensed to the SkyAPM under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

"use strict";

const onFinished = require("on-finished");
const ContextCarrier = require("../../trace/context-carrier");
const layerDefine = require("../../trace/span-layer");
const componentDefine = require("../../trace/component-define");
const ContextManager = require("../../trace/context-manager");

/**
 *
 * @param {httpModule} httpModule
 * @param {instrumentation} instrumentation
 * @param {contextManager} contextManager
 * @return {*}
 * @author zhang xin
 */
module.exports = function(httpModule, instrumentation, contextManager) {
    instrumentation.enhanceMethod(httpModule && httpModule.Server && httpModule.Server.prototype, "emit", wrapEmit);

    instrumentation.enhanceMethod(httpModule, "request", wrapRequest);

    // Initialize the call-chain by CLS
    let _session = contextManager.createNamespace("skywalking");
    _session.enter(_session.createContext());

    return httpModule;

    /**
     * filterParams
     * @param {endpointName} endpointName
     * @return {*}
     */
    function filterParams(endpointName) {
        if (endpointName && endpointName.indexOf("?") > -1) {
            // filter params
            return endpointName.split("?")[0];
        }
        return endpointName;
    }

    /**
     *
     * @param {original} original
     * @return {function(*, *, *=): *}
     */
    function wrapEmit(original) {
        return function(event, req, res) {
            if (event === "request") {
                let contextCarrier = new ContextCarrier();
                contextCarrier.fetchBy(function(key) {
                    if (req.headers.hasOwnProperty(key)) {
                        return req.headers[key];
                    }
                    return undefined;
                });

                let ctx = new ContextManager();
                let _session = contextManager.getNamespace("skywalking");
                _session.set("ctx", ctx);
                let span = ctx.createEntrySpan(filterParams(req.url), contextCarrier);

                span.component(componentDefine.Components.HTTP);
                span.spanLayer(layerDefine.Layers.HTTP);
                onFinished(res, function(err) {
                    if (err) {
                        span.errorOccurred();
                        span.log(err);
                    }

                    if (this.statusCode > 400) {
                        span.errorOccurred();
                    }

                    ctx.finishSpan(span);
                });
            }
            return original.apply(this, arguments);
        };
    }

    /**
     *
     * @param {original} original
     * @return {function(*, *): *}
     */
    function wrapRequest(original) {
        return function(options, callback) {
            let contextCarrier = new ContextCarrier();
            let _session = contextManager.getNamespace("skywalking");
            let ctx = _session.get("ctx");
            let span = ctx.createExitSpan(options.path, options.host + ":" + options.port, contextCarrier);
            contextCarrier.pushBy(function(key, value) {
                if (!options.hasOwnProperty("headers")) {
                    options.headers = {};
                }
                options.headers[key] = value;
            });
            span.component(componentDefine.Components.HTTP);
            span.spanLayer(layerDefine.Layers.HTTP);
            let result = original.apply(this, arguments);
            ctx.finishSpan(span);
            return result;
        };
    }
};
