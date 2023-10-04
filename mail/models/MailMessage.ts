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

export class MailMessage {
    'createdAt'?: string;
    'direction'?: string;
    '_from'?: string;
    'hasHtml'?: boolean;
    'isDev'?: boolean;
    'isFree'?: boolean;
    'spamScore'?: boolean;
    'subject'?: string;
    'to'?: string;
    'text'?: string;
    'status'?: any;
    'spamReson'?: any;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "string",
            "format": ""
        },
        {
            "name": "direction",
            "baseName": "direction",
            "type": "string",
            "format": ""
        },
        {
            "name": "_from",
            "baseName": "from",
            "type": "string",
            "format": ""
        },
        {
            "name": "hasHtml",
            "baseName": "hasHtml",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isDev",
            "baseName": "isDev",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "isFree",
            "baseName": "isFree",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "spamScore",
            "baseName": "spamScore",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "subject",
            "baseName": "subject",
            "type": "string",
            "format": ""
        },
        {
            "name": "to",
            "baseName": "to",
            "type": "string",
            "format": ""
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "any",
            "format": ""
        },
        {
            "name": "spamReson",
            "baseName": "spamReson",
            "type": "any",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MailMessage.attributeTypeMap;
    }

    public constructor() {
    }
}
