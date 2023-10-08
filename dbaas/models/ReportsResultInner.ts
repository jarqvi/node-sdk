/**
 * DBaaS
 * Manage your databases using our API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner } from '../models/GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner';
import { HttpFile } from '../http/http';

export class ReportsResultInner {
    'values'?: Array<Array<GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner>>;
    'applet'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Array<GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner>>",
            "format": ""
        },
        {
            "name": "applet",
            "baseName": "applet",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ReportsResultInner.attributeTypeMap;
    }

    public constructor() {
    }
}
