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

import { GetFtps200ResponseAccessesInner } from '../models/GetFtps200ResponseAccessesInner';
import { HttpFile } from '../http/http';

export class GetFtps200Response {
    'accesses'?: Array<GetFtps200ResponseAccessesInner>;
    'host'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "accesses",
            "baseName": "accesses",
            "type": "Array<GetFtps200ResponseAccessesInner>",
            "format": ""
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetFtps200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

