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

import { CheckDNSResponse } from '../models/CheckDNSResponse';
import { HttpFile } from '../http/http';

export class CheckDNSData {
    'mailServer'?: CheckDNSResponse;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "mailServer",
            "baseName": "mailServer",
            "type": "CheckDNSResponse",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return CheckDNSData.attributeTypeMap;
    }

    public constructor() {
    }
}
