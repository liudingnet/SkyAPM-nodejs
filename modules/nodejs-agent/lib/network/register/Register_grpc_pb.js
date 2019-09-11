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
var register_Register_pb = require('../register/Register_pb.js');
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

function serialize_EndpointMapping(arg) {
  if (!(arg instanceof register_Register_pb.EndpointMapping)) {
    throw new Error('Expected argument of type EndpointMapping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_EndpointMapping(buffer_arg) {
  return register_Register_pb.EndpointMapping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Enpoints(arg) {
  if (!(arg instanceof register_Register_pb.Enpoints)) {
    throw new Error('Expected argument of type Enpoints');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Enpoints(buffer_arg) {
  return register_Register_pb.Enpoints.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetAddressMapping(arg) {
  if (!(arg instanceof register_Register_pb.NetAddressMapping)) {
    throw new Error('Expected argument of type NetAddressMapping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetAddressMapping(buffer_arg) {
  return register_Register_pb.NetAddressMapping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_NetAddresses(arg) {
  if (!(arg instanceof register_Register_pb.NetAddresses)) {
    throw new Error('Expected argument of type NetAddresses');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_NetAddresses(buffer_arg) {
  return register_Register_pb.NetAddresses.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServiceAndNetworkAddressMappings(arg) {
  if (!(arg instanceof register_Register_pb.ServiceAndNetworkAddressMappings)) {
    throw new Error('Expected argument of type ServiceAndNetworkAddressMappings');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServiceAndNetworkAddressMappings(buffer_arg) {
  return register_Register_pb.ServiceAndNetworkAddressMappings.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServiceInstanceRegisterMapping(arg) {
  if (!(arg instanceof register_Register_pb.ServiceInstanceRegisterMapping)) {
    throw new Error('Expected argument of type ServiceInstanceRegisterMapping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServiceInstanceRegisterMapping(buffer_arg) {
  return register_Register_pb.ServiceInstanceRegisterMapping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServiceInstances(arg) {
  if (!(arg instanceof register_Register_pb.ServiceInstances)) {
    throw new Error('Expected argument of type ServiceInstances');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServiceInstances(buffer_arg) {
  return register_Register_pb.ServiceInstances.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_ServiceRegisterMapping(arg) {
  if (!(arg instanceof register_Register_pb.ServiceRegisterMapping)) {
    throw new Error('Expected argument of type ServiceRegisterMapping');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_ServiceRegisterMapping(buffer_arg) {
  return register_Register_pb.ServiceRegisterMapping.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_Services(arg) {
  if (!(arg instanceof register_Register_pb.Services)) {
    throw new Error('Expected argument of type Services');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_Services(buffer_arg) {
  return register_Register_pb.Services.deserializeBinary(new Uint8Array(buffer_arg));
}


// register service for ApplicationCode, this service is called when service starts.
var RegisterService = exports.RegisterService = {
  doServiceRegister: {
    path: '/Register/doServiceRegister',
    requestStream: false,
    responseStream: false,
    requestType: register_Register_pb.Services,
    responseType: register_Register_pb.ServiceRegisterMapping,
    requestSerialize: serialize_Services,
    requestDeserialize: deserialize_Services,
    responseSerialize: serialize_ServiceRegisterMapping,
    responseDeserialize: deserialize_ServiceRegisterMapping,
  },
  doServiceInstanceRegister: {
    path: '/Register/doServiceInstanceRegister',
    requestStream: false,
    responseStream: false,
    requestType: register_Register_pb.ServiceInstances,
    responseType: register_Register_pb.ServiceInstanceRegisterMapping,
    requestSerialize: serialize_ServiceInstances,
    requestDeserialize: deserialize_ServiceInstances,
    responseSerialize: serialize_ServiceInstanceRegisterMapping,
    responseDeserialize: deserialize_ServiceInstanceRegisterMapping,
  },
  doEndpointRegister: {
    path: '/Register/doEndpointRegister',
    requestStream: false,
    responseStream: false,
    requestType: register_Register_pb.Enpoints,
    responseType: register_Register_pb.EndpointMapping,
    requestSerialize: serialize_Enpoints,
    requestDeserialize: deserialize_Enpoints,
    responseSerialize: serialize_EndpointMapping,
    responseDeserialize: deserialize_EndpointMapping,
  },
  doNetworkAddressRegister: {
    path: '/Register/doNetworkAddressRegister',
    requestStream: false,
    responseStream: false,
    requestType: register_Register_pb.NetAddresses,
    responseType: register_Register_pb.NetAddressMapping,
    requestSerialize: serialize_NetAddresses,
    requestDeserialize: deserialize_NetAddresses,
    responseSerialize: serialize_NetAddressMapping,
    responseDeserialize: deserialize_NetAddressMapping,
  },
  doServiceAndNetworkAddressMappingRegister: {
    path: '/Register/doServiceAndNetworkAddressMappingRegister',
    requestStream: false,
    responseStream: false,
    requestType: register_Register_pb.ServiceAndNetworkAddressMappings,
    responseType: common_common_pb.Commands,
    requestSerialize: serialize_ServiceAndNetworkAddressMappings,
    requestDeserialize: deserialize_ServiceAndNetworkAddressMappings,
    responseSerialize: serialize_Commands,
    responseDeserialize: deserialize_Commands,
  },
};

exports.RegisterClient = grpc.makeGenericClientConstructor(RegisterService);
