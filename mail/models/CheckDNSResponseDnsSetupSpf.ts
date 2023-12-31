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

export class CheckDNSResponseDnsSetupSpf {
    'spfError'?: string;
    'spfRecord'?: string;
    'spfStatus'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "spfError",
            "baseName": "spf_error",
            "type": "string",
            "format": ""
        },
        {
            "name": "spfRecord",
            "baseName": "spf_record",
            "type": "string",
            "format": ""
        },
        {
            "name": "spfStatus",
            "baseName": "spf_status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckDNSResponseDnsSetupSpf.attributeTypeMap;
    }

    public constructor() {
    }
}

