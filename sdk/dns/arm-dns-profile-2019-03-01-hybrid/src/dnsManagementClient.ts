/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { DnsManagementClientContext } from "./dnsManagementClientContext";


class DnsManagementClient extends DnsManagementClientContext {
  // Operation groups
  recordSets: operations.RecordSets;
  zones: operations.Zones;

  /**
   * Initializes a new instance of the DnsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId The ID of the target subscription.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.DnsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.recordSets = new operations.RecordSets(this);
    this.zones = new operations.Zones(this);
  }
}

// Operation Specifications

export {
  DnsManagementClient,
  DnsManagementClientContext,
  Models as DnsManagementModels,
  Mappers as DnsManagementMappers
};
export * from "./operations";
