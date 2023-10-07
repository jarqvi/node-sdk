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

import { GetAppSummaryReports200ResponseCpuUsageInner } from '../models/GetAppSummaryReports200ResponseCpuUsageInner';
import { GetAppSummaryReports200ResponseDisksUsageInner } from '../models/GetAppSummaryReports200ResponseDisksUsageInner';
import { HttpFile } from '../http/http';

export class GetAppSummaryReports200Response {
    'cpuUsage'?: Array<GetAppSummaryReports200ResponseCpuUsageInner>;
    'memoryUsage'?: Array<GetAppSummaryReports200ResponseCpuUsageInner>;
    'disksUsage'?: Array<GetAppSummaryReports200ResponseDisksUsageInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "cpuUsage",
            "baseName": "cpuUsage",
            "type": "Array<GetAppSummaryReports200ResponseCpuUsageInner>",
            "format": ""
        },
        {
            "name": "memoryUsage",
            "baseName": "memoryUsage",
            "type": "Array<GetAppSummaryReports200ResponseCpuUsageInner>",
            "format": ""
        },
        {
            "name": "disksUsage",
            "baseName": "disksUsage",
            "type": "Array<GetAppSummaryReports200ResponseDisksUsageInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetAppSummaryReports200Response.attributeTypeMap;
    }

    public constructor() {
    }
}

