// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Licensed to the Apache Software Foundation (ASF) under one or more
// contributor license agreements.  See the NOTICE file distributed with
// this work for additional information regarding copyright ownership.
// The ASF licenses this file to You under the Apache License, Version 2.0
// (the "License"); you may not use this file except in compliance with
// the License.  You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
//
'use strict';
var grpc = require('grpc');
var language$agent$v2_JVMMetric_pb = require('../language-agent-v2/JVMMetric_pb.js');
var common_common_pb = require('../common/common_pb.js');
var common_JVM_pb = require('../common/JVM_pb.js');

function serialize_Commands(arg) {
  if (!(arg instanceof common_common_pb.Commands)) {
    throw new Error('Expected argument of type Commands');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Commands(buffer_arg) {
  return common_common_pb.Commands.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_JVMMetricCollection(arg) {
  if (!(arg instanceof language$agent$v2_JVMMetric_pb.JVMMetricCollection)) {
    throw new Error('Expected argument of type JVMMetricCollection');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_JVMMetricCollection(buffer_arg) {
  return language$agent$v2_JVMMetric_pb.JVMMetricCollection.deserializeBinary(new Uint8Array(buffer_arg));
}


var JVMMetricReportServiceService = exports.JVMMetricReportServiceService = {
  collect: {
    path: '/JVMMetricReportService/collect',
    requestStream: false,
    responseStream: false,
    requestType: language$agent$v2_JVMMetric_pb.JVMMetricCollection,
    responseType: common_common_pb.Commands,
    requestSerialize: serialize_JVMMetricCollection,
    requestDeserialize: deserialize_JVMMetricCollection,
    responseSerialize: serialize_Commands,
    responseDeserialize: deserialize_Commands,
  },
};

exports.JVMMetricReportServiceClient = grpc.makeGenericClientConstructor(JVMMetricReportServiceService);
