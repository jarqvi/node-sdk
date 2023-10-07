/**
 * Liara Mail API Documentaion
 * A fully featured mail delivery platform for incoming & outgoing e-mail
 *
 * OpenAPI spec version: 1.0.0
 * Contact: support@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class MailServerResponseRateLimitTier {
    'hourly'?: number;
    'daily'?: number;
    'monthly'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "hourly",
            "baseName": "hourly",
            "type": "number",
            "format": ""
        },
        {
            "name": "daily",
            "baseName": "daily",
            "type": "number",
            "format": ""
        },
        {
            "name": "monthly",
            "baseName": "monthly",
            "type": "number",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MailServerResponseRateLimitTier.attributeTypeMap;
    }

    public constructor() {
    }
}

