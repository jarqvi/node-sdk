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

import { MailAttachment } from '../models/MailAttachment';
import { HttpFile } from '../http/http';

export class DownloadAttachments200ResponseData {
    'attachment'?: MailAttachment;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "attachment",
            "baseName": "attachment",
            "type": "MailAttachment",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return DownloadAttachments200ResponseData.attributeTypeMap;
    }

    public constructor() {
    }
}
