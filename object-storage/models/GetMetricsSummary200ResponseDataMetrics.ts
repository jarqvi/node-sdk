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

import { GetMetricsSummary200ResponseDataMetricsTotolObjectsInner } from '../models/GetMetricsSummary200ResponseDataMetricsTotolObjectsInner';
import { HttpFile } from '../http/http';

export class GetMetricsSummary200ResponseDataMetrics {
    'totolObjects'?: Array<GetMetricsSummary200ResponseDataMetricsTotolObjectsInner>;
    'totalBytes'?: Array<GetMetricsSummary200ResponseDataMetricsTotolObjectsInner>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "totolObjects",
            "baseName": "totol_objects",
            "type": "Array<GetMetricsSummary200ResponseDataMetricsTotolObjectsInner>",
            "format": ""
        },
        {
            "name": "totalBytes",
            "baseName": "total_bytes",
            "type": "Array<GetMetricsSummary200ResponseDataMetricsTotolObjectsInner>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return GetMetricsSummary200ResponseDataMetrics.attributeTypeMap;
    }

    public constructor() {
    }
}
