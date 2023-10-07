// TODO: better import syntax?
import {BaseAPIRequestFactory, RequiredError, COLLECTION_FORMATS} from './baseapi';
import {Configuration} from '../configuration';
import {RequestContext, HttpMethod, ResponseContext, HttpFile, HttpInfo} from '../http/http';
import {ObjectSerializer} from '../models/ObjectSerializer';
import {ApiException} from './exception';
import {canConsumeForm, isCodeInRange} from '../util';
import {SecurityAuthentication} from '../auth/auth';


import { MailForwards } from '../models/MailForwards';
import { Model6 } from '../models/Model6';
import { PostMails201Response } from '../models/PostMails201Response';

/**
 * no description
 */
export class ForwardApiRequestFactory extends BaseAPIRequestFactory {

    /**
     * add address endpoint to forwarding mails
     * @param mailServerID 
     * @param accountID 
     * @param body 
     */
    public async createAddressForwarding(mailServerID: string, accountID: string, body?: Model6, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mailServerID' is not null or undefined
        if (mailServerID === null || mailServerID === undefined) {
            throw new RequiredError("ForwardApi", "createAddressForwarding", "mailServerID");
        }


        // verify required parameter 'accountID' is not null or undefined
        if (accountID === null || accountID === undefined) {
            throw new RequiredError("ForwardApi", "createAddressForwarding", "accountID");
        }



        // Path Params
        const localVarPath = '/api/v1/mails/{mailServerID}/accounts/{accountID}/forwards'
            .replace('{' + 'mailServerID' + '}', encodeURIComponent(String(mailServerID)))
            .replace('{' + 'accountID' + '}', encodeURIComponent(String(accountID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.POST);
        requestContext.setHeaderParam("Accept", "application/json, */*;q=0.8")


        // Body Params
        const contentType = ObjectSerializer.getPreferredMediaType([
            "application/json"
        ]);
        requestContext.setHeaderParam("Content-Type", contentType);
        const serializedBody = ObjectSerializer.stringify(
            ObjectSerializer.serialize(body, "Model6", ""),
            contentType
        );
        requestContext.setBody(serializedBody);

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
     * delete extra endpoint address
     * @param mailServerID 
     * @param accountID 
     * @param addressID 
     */
    public async deleteExtraEndpoint(mailServerID: string, accountID: string, addressID: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mailServerID' is not null or undefined
        if (mailServerID === null || mailServerID === undefined) {
            throw new RequiredError("ForwardApi", "deleteExtraEndpoint", "mailServerID");
        }


        // verify required parameter 'accountID' is not null or undefined
        if (accountID === null || accountID === undefined) {
            throw new RequiredError("ForwardApi", "deleteExtraEndpoint", "accountID");
        }


        // verify required parameter 'addressID' is not null or undefined
        if (addressID === null || addressID === undefined) {
            throw new RequiredError("ForwardApi", "deleteExtraEndpoint", "addressID");
        }


        // Path Params
        const localVarPath = '/api/v1/mails/{mailServerID}/accounts/{accountID}/forwards/{addressID}'
            .replace('{' + 'mailServerID' + '}', encodeURIComponent(String(mailServerID)))
            .replace('{' + 'accountID' + '}', encodeURIComponent(String(accountID)))
            .replace('{' + 'addressID' + '}', encodeURIComponent(String(addressID)));

        // Make Request Context
        const requestContext = _config.baseServer.makeRequestContext(localVarPath, HttpMethod.DELETE);
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
     * get all extra address to forwarding mails
     * @param mailServerID 
     * @param accountID 
     */
    public async getListAddressForwarding(mailServerID: string, accountID: string, _options?: Configuration): Promise<RequestContext> {
        let _config = _options || this.configuration;

        // verify required parameter 'mailServerID' is not null or undefined
        if (mailServerID === null || mailServerID === undefined) {
            throw new RequiredError("ForwardApi", "getListAddressForwarding", "mailServerID");
        }


        // verify required parameter 'accountID' is not null or undefined
        if (accountID === null || accountID === undefined) {
            throw new RequiredError("ForwardApi", "getListAddressForwarding", "accountID");
        }


        // Path Params
        const localVarPath = '/api/v1/mails/{mailServerID}/accounts/{accountID}/forwards'
            .replace('{' + 'mailServerID' + '}', encodeURIComponent(String(mailServerID)))
            .replace('{' + 'accountID' + '}', encodeURIComponent(String(accountID)));

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

export class ForwardApiResponseProcessor {

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to createAddressForwarding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async createAddressForwardingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<PostMails201Response >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("201", response.httpStatusCode)) {
            const body: PostMails201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostMails201Response", ""
            ) as PostMails201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("403", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Max number of forwarders", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Mail Server or Mail Account not found", undefined, response.headers);
        }
        if (isCodeInRange("409", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Address endpoint already exists", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unexpected error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: PostMails201Response = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "PostMails201Response", ""
            ) as PostMails201Response;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to deleteExtraEndpoint
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async deleteExtraEndpointWithHttpInfo(response: ResponseContext): Promise<HttpInfo<void >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("204", response.httpStatusCode)) {
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, undefined);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Mail Server or Mail Account or Mail Forward not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unexpected error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: void = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "void", ""
            ) as void;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

    /**
     * Unwraps the actual response sent by the server from the response context and deserializes the response content
     * to the expected objects
     *
     * @params response Response returned by the server for a request to getListAddressForwarding
     * @throws ApiException if the response code was not in [200, 299]
     */
     public async getListAddressForwardingWithHttpInfo(response: ResponseContext): Promise<HttpInfo<MailForwards >> {
        const contentType = ObjectSerializer.normalizeMediaType(response.headers["content-type"]);
        if (isCodeInRange("200", response.httpStatusCode)) {
            const body: MailForwards = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MailForwards", ""
            ) as MailForwards;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }
        if (isCodeInRange("400", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Bad Request", undefined, response.headers);
        }
        if (isCodeInRange("404", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Mail Server or Mail Account not found", undefined, response.headers);
        }
        if (isCodeInRange("500", response.httpStatusCode)) {
            throw new ApiException<undefined>(response.httpStatusCode, "Unexpected error", undefined, response.headers);
        }

        // Work around for missing responses in specification, e.g. for petstore.yaml
        if (response.httpStatusCode >= 200 && response.httpStatusCode <= 299) {
            const body: MailForwards = ObjectSerializer.deserialize(
                ObjectSerializer.parse(await response.body.text(), contentType),
                "MailForwards", ""
            ) as MailForwards;
            return new HttpInfo(response.httpStatusCode, response.headers, response.body, body);
        }

        throw new ApiException<string | Blob | undefined>(response.httpStatusCode, "Unknown API Status Code!", await response.getBodyAsAny(), response.headers);
    }

}
