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
var register_InstancePing_pb = require('../register/InstancePing_pb.js');
var common_common_pb = require('../common/common_pb.js');

function serialize_Commands(arg) {
  if (!(arg instanceof common_common_pb.Commands)) {
    throw new Error('Expected argument of type Commands');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Commands(buffer_arg) {
  return common_common_pb.Commands.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServiceInstancePingPkg(arg) {
  if (!(arg instanceof register_InstancePing_pb.ServiceInstancePingPkg)) {
    throw new Error('Expected argument of type ServiceInstancePingPkg');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServiceInstancePingPkg(buffer_arg) {
  return register_InstancePing_pb.ServiceInstancePingPkg.deserializeBinary(new Uint8Array(buffer_arg));
}


var ServiceInstancePingService = exports.ServiceInstancePingService = {
  doPing: {
    path: '/ServiceInstancePing/doPing',
    requestStream: false,
    responseStream: false,
    requestType: register_InstancePing_pb.ServiceInstancePingPkg,
    responseType: common_common_pb.Commands,
    requestSerialize: serialize_ServiceInstancePingPkg,
    requestDeserialize: deserialize_ServiceInstancePingPkg,
    responseSerialize: serialize_Commands,
    responseDeserialize: deserialize_Commands,
  },
};

exports.ServiceInstancePingClient = grpc.makeGenericClientConstructor(ServiceInstancePingService);
