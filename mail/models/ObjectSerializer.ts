export * from '../models/CheckDNS';
export * from '../models/CheckDNSData';
export * from '../models/CheckDNSResponse';
export * from '../models/CheckDNSResponseDnsSetup';
export * from '../models/CheckDNSResponseDnsSetupDkim';
export * from '../models/CheckDNSResponseDnsSetupMxRecord';
export * from '../models/CheckDNSResponseDnsSetupReturnPath';
export * from '../models/CheckDNSResponseDnsSetupSpf';
export * from '../models/CountMailPerDay';
export * from '../models/CountMailPerDayData';
export * from '../models/CountMailPerDayDataEmailPerDayInner';
export * from '../models/CreateSMTP';
export * from '../models/CreateSMTPData';
export * from '../models/DownloadAttachments200Response';
export * from '../models/DownloadAttachments200ResponseData';
export * from '../models/GetSingleMail200Response';
export * from '../models/GetSingleMail200ResponseData';
export * from '../models/MailAccounts';
export * from '../models/MailAccountsData';
export * from '../models/MailAccountsDataAccountsInner';
export * from '../models/MailAttachment';
export * from '../models/MailAttachments';
export * from '../models/MailAttachmentsData';
export * from '../models/MailEvents';
export * from '../models/MailEventsData';
export * from '../models/MailForwards';
export * from '../models/MailForwardsData';
export * from '../models/MailForwardsDataForwardersInner';
export * from '../models/MailMessage';
export * from '../models/MailMessageStatus';
export * from '../models/MailMessages';
export * from '../models/MailMessagesData';
export * from '../models/MailServer';
export * from '../models/MailServerData';
export * from '../models/MailServerResponse';
export * from '../models/MailServerResponseRateLimitTier';
export * from '../models/MailServers';
export * from '../models/MailServersData';
export * from '../models/Mode';
export * from '../models/Model1';
export * from '../models/Model10';
export * from '../models/Model2';
export * from '../models/Model3';
export * from '../models/Model4';
export * from '../models/Model5';
export * from '../models/Model6';
export * from '../models/Model7';
export * from '../models/Model8';
export * from '../models/Model9';
export * from '../models/PostMails201Response';
export * from '../models/RemainingFreeMails';
export * from '../models/RemainingFreeMailsData';
export * from '../models/SMTP';
export * from '../models/SMTPData';
export * from '../models/SMTPDataCredentialsInner';
export * from '../models/Timeout';
export * from '../models/TmpAccess';
export * from '../models/TmpAccessData';

import { CheckDNS } from '../models/CheckDNS';
import { CheckDNSData } from '../models/CheckDNSData';
import { CheckDNSResponse } from '../models/CheckDNSResponse';
import { CheckDNSResponseDnsSetup } from '../models/CheckDNSResponseDnsSetup';
import { CheckDNSResponseDnsSetupDkim } from '../models/CheckDNSResponseDnsSetupDkim';
import { CheckDNSResponseDnsSetupMxRecord } from '../models/CheckDNSResponseDnsSetupMxRecord';
import { CheckDNSResponseDnsSetupReturnPath } from '../models/CheckDNSResponseDnsSetupReturnPath';
import { CheckDNSResponseDnsSetupSpf } from '../models/CheckDNSResponseDnsSetupSpf';
import { CountMailPerDay } from '../models/CountMailPerDay';
import { CountMailPerDayData } from '../models/CountMailPerDayData';
import { CountMailPerDayDataEmailPerDayInner } from '../models/CountMailPerDayDataEmailPerDayInner';
import { CreateSMTP } from '../models/CreateSMTP';
import { CreateSMTPData } from '../models/CreateSMTPData';
import { DownloadAttachments200Response } from '../models/DownloadAttachments200Response';
import { DownloadAttachments200ResponseData } from '../models/DownloadAttachments200ResponseData';
import { GetSingleMail200Response } from '../models/GetSingleMail200Response';
import { GetSingleMail200ResponseData } from '../models/GetSingleMail200ResponseData';
import { MailAccounts } from '../models/MailAccounts';
import { MailAccountsData } from '../models/MailAccountsData';
import { MailAccountsDataAccountsInner } from '../models/MailAccountsDataAccountsInner';
import { MailAttachment } from '../models/MailAttachment';
import { MailAttachments } from '../models/MailAttachments';
import { MailAttachmentsData } from '../models/MailAttachmentsData';
import { MailEvents } from '../models/MailEvents';
import { MailEventsData } from '../models/MailEventsData';
import { MailForwards } from '../models/MailForwards';
import { MailForwardsData } from '../models/MailForwardsData';
import { MailForwardsDataForwardersInner } from '../models/MailForwardsDataForwardersInner';
import { MailMessage } from '../models/MailMessage';
import { MailMessageStatus } from '../models/MailMessageStatus';
import { MailMessages } from '../models/MailMessages';
import { MailMessagesData } from '../models/MailMessagesData';
import { MailServer } from '../models/MailServer';
import { MailServerData } from '../models/MailServerData';
import { MailServerResponse } from '../models/MailServerResponse';
import { MailServerResponseRateLimitTier } from '../models/MailServerResponseRateLimitTier';
import { MailServers } from '../models/MailServers';
import { MailServersData } from '../models/MailServersData';
import { Mode } from '../models/Mode';
import { Model1    } from '../models/Model1';
import { Model10 } from '../models/Model10';
import { Model2 } from '../models/Model2';
import { Model3 } from '../models/Model3';
import { Model4 } from '../models/Model4';
import { Model5 } from '../models/Model5';
import { Model6 } from '../models/Model6';
import { Model7      } from '../models/Model7';
import { Model8  } from '../models/Model8';
import { Model9 } from '../models/Model9';
import { PostMails201Response } from '../models/PostMails201Response';
import { RemainingFreeMails } from '../models/RemainingFreeMails';
import { RemainingFreeMailsData } from '../models/RemainingFreeMailsData';
import { SMTP } from '../models/SMTP';
import { SMTPData } from '../models/SMTPData';
import { SMTPDataCredentialsInner } from '../models/SMTPDataCredentialsInner';
import { Timeout } from '../models/Timeout';
import { TmpAccess } from '../models/TmpAccess';
import { TmpAccessData } from '../models/TmpAccessData';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

const supportedMediaTypes: { [mediaType: string]: number } = {
  "application/json": Infinity,
  "application/json-patch+json": 1,
  "application/merge-patch+json": 1,
  "application/strategic-merge-patch+json": 1,
  "application/octet-stream": 0,
  "application/x-www-form-urlencoded": 0
}


let enumsMap: Set<string> = new Set<string>([
    "Mode",
    "Timeout",
]);

let typeMap: {[index: string]: any} = {
    "CheckDNS": CheckDNS,
    "CheckDNSData": CheckDNSData,
    "CheckDNSResponse": CheckDNSResponse,
    "CheckDNSResponseDnsSetup": CheckDNSResponseDnsSetup,
    "CheckDNSResponseDnsSetupDkim": CheckDNSResponseDnsSetupDkim,
    "CheckDNSResponseDnsSetupMxRecord": CheckDNSResponseDnsSetupMxRecord,
    "CheckDNSResponseDnsSetupReturnPath": CheckDNSResponseDnsSetupReturnPath,
    "CheckDNSResponseDnsSetupSpf": CheckDNSResponseDnsSetupSpf,
    "CountMailPerDay": CountMailPerDay,
    "CountMailPerDayData": CountMailPerDayData,
    "CountMailPerDayDataEmailPerDayInner": CountMailPerDayDataEmailPerDayInner,
    "CreateSMTP": CreateSMTP,
    "CreateSMTPData": CreateSMTPData,
    "DownloadAttachments200Response": DownloadAttachments200Response,
    "DownloadAttachments200ResponseData": DownloadAttachments200ResponseData,
    "GetSingleMail200Response": GetSingleMail200Response,
    "GetSingleMail200ResponseData": GetSingleMail200ResponseData,
    "MailAccounts": MailAccounts,
    "MailAccountsData": MailAccountsData,
    "MailAccountsDataAccountsInner": MailAccountsDataAccountsInner,
    "MailAttachment": MailAttachment,
    "MailAttachments": MailAttachments,
    "MailAttachmentsData": MailAttachmentsData,
    "MailEvents": MailEvents,
    "MailEventsData": MailEventsData,
    "MailForwards": MailForwards,
    "MailForwardsData": MailForwardsData,
    "MailForwardsDataForwardersInner": MailForwardsDataForwardersInner,
    "MailMessage": MailMessage,
    "MailMessageStatus": MailMessageStatus,
    "MailMessages": MailMessages,
    "MailMessagesData": MailMessagesData,
    "MailServer": MailServer,
    "MailServerData": MailServerData,
    "MailServerResponse": MailServerResponse,
    "MailServerResponseRateLimitTier": MailServerResponseRateLimitTier,
    "MailServers": MailServers,
    "MailServersData": MailServersData,
    "Model1": Model1,
    "Model10": Model10,
    "Model2": Model2,
    "Model3": Model3,
    "Model4": Model4,
    "Model5": Model5,
    "Model6": Model6,
    "Model7": Model7,
    "Model8": Model8,
    "Model9": Model9,
    "PostMails201Response": PostMails201Response,
    "RemainingFreeMails": RemainingFreeMails,
    "RemainingFreeMailsData": RemainingFreeMailsData,
    "SMTP": SMTP,
    "SMTPData": SMTPData,
    "SMTPDataCredentialsInner": SMTPDataCredentialsInner,
    "TmpAccess": TmpAccess,
    "TmpAccessData": TmpAccessData,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType: string | undefined = undefined;
        let selectedRank: number = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType!] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType!];
            }
        }

        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }

        return selectedMediaType!;
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (mediaType === "text/plain") {
            return String(data);
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (mediaType === "text/plain") {
            return rawData;
        }

        if (mediaType === "application/json" || mediaType === "application/json-patch+json" || mediaType === "application/merge-patch+json" || mediaType === "application/strategic-merge-patch+json") {
            return JSON.parse(rawData);
        }

        if (mediaType === "text/html") {
            return rawData;
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
