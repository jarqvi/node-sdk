/**
 * PaaS
 * Manage your apps using our API  [wss://api.iran.liara.ir?token=<api-token>&cmd=/bin/bash&project_id=<project-id>]( wss://api.iran.liara.ir?token=<api-token>&cmd=/bin/bash&project_id=<project-id>)  Parameters: - `token`: Your api token in liara - `cmd`: By default /bin/bash - `project_id`: The id of your project in liara  This `WebSocket` endpoint allows `real-time` communication with the projects service hosted at `Liara` You can use `WebSocket protocols` to send and receive data, enabling efficient and low-latency interactions with the projects
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { CheckDomainDomain } from '../models/CheckDomainDomain';
import { HttpFile } from '../http/http';

export class CheckDomain {
    'domain'?: CheckDomainDomain;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "domain",
            "baseName": "domain",
            "type": "CheckDomainDomain",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckDomain.attributeTypeMap;
    }

    public constructor() {
    }
}

