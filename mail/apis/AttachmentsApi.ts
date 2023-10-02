// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { MailAttachment } from '../models/MailAttachment';
import { MailAttachments } from '../models/MailAttachments';

/**
 * no description
 */
export class AttachmentsApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * download attachment
     * @param mailServerID 
     * @param messageID 
     * @param attachmentID 
     */
    public async downloadAttachments(mailServerID: string, messageID: string, attachmentID: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mailServerID' is not null or undefined
        if (mailServerID === null || mailServerID === undefined) {
            throw new RequiredError("AttachmentsApi", "downloadAttachments", "mailServerID");
        }


        // verify required parameter 'messageID' is not null or undefined
        if (messageID === null || messageID === undefined) {
            throw new RequiredError("AttachmentsApi", "downloadAttachments", "messageID");
        }


        // verify required parameter 'attachmentID' is not null or undefined
        if (attachmentID === null || attachmentID === undefined) {
            throw new RequiredError("AttachmentsApi", "downloadAttachments", "attachmentID");
        }


        // Path Params
        const localVarPath = '/mails/{mailServerID}/messages/{messageID}/attachments/{attachmentID}'
            .replace('{' + 'mailServerID' + '}', encodeURIComponent(String(mailServerID)))
            .replace('{' + 'messageID' + '}', encodeURIComponent(String(messageID)))
            .replace('{' + 'attachmentID' + '}', encodeURIComponent(String(attachmentID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

    /**
     * get all attachments for message
     * @param mailServerID 
     * @param messageID 
     */
    public async getAllAttachments(mailServerID: string, messageID: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mailServerID' is not null or undefined
        if (mailServerID === null || mailServerID === undefined) {
            throw new RequiredError("AttachmentsApi", "getAllAttachments", "mailServerID");
        }


        // verify required parameter 'messageID' is not null or undefined
        if (messageID === null || messageID === undefined) {
            throw new RequiredError("AttachmentsApi", "getAllAttachments", "messageID");
        }


        // Path Params
        const localVarPath = '/mails/{mailServerID}/messages/{messageID}/attachments'
            .replace('{' + 'mailServerID' + '}', encodeURIComponent(String(mailServerID)))
            .replace('{' + 'messageID' + '}', encodeURIComponent(String(messageID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.GET);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        let authMethod: SecurityAuthentication | undefined;
        // Apply auth methods
        authMethod = _config.authMethods["jwt"]
        if (authMethod?.applySecurityAuthentication) {
            await authMethod?.applySecurityAuthentication(requestContext);
        }
        
        const defaultAuth: SecurityAuthentication | undefined = _options?.authMethods?.default || this.configuration?.authMethods?.default
        if (defaultAuth?.applySecurityAuthentication) {
            await defaultAuth?.applySecurityAuthentication(requestContext);
        }

        return requestContext;
    }

}

export class AttachmentsApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to downloadAttachments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async downloadAttachmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MailAttachment >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MailAttachment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MailAttachment", ""
            ) as MailAttachment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Mail Server or Mail Message not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unexpected error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MailAttachment = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MailAttachment", ""
            ) as MailAttachment;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getAllAttachments
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getAllAttachmentsWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MailAttachments >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MailAttachments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MailAttachments", ""
            ) as MailAttachments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Mail Server or Mail Message not found", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Account already taken.", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unexpected error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MailAttachments = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MailAttachments", ""
            ) as MailAttachments;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
