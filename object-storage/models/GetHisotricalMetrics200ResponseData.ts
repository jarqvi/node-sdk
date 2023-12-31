/**
 * Object Storage API Documentaion
 * A scalable, reliable, and cost effective Object Storage solution to support your application from liara-cloud
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetHisotricalMetrics200ResponseDataMetrics } from '../models/GetHisotricalMetrics200ResponseDataMetrics';
import { HttpFile } from '../http/http';

export class GetHisotricalMetrics200ResponseData {
    'bucket'?: string;
    'metrics'?: GetHisotricalMetrics200ResponseDataMetrics;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "bucket",
            "baseName": "bucket",
            "type": "string",
            "format": ""
        },
        {
            "name": "metrics",
            "baseName": "metrics",
            "type": "GetHisotricalMetrics200ResponseDataMetrics",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetHisotricalMetrics200ResponseData.attributeTypeMap;
    }

    public constructor() {
    }
}

