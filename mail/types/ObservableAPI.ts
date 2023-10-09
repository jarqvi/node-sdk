import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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
import { MailInboundRules } from '../models/MailInboundRules';
import { MailInboundRulesData } from '../models/MailInboundRulesData';
import { MailInboundRulesDataMailInboundrulesInner } from '../models/MailInboundRulesDataMailInboundrulesInner';
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
import { Model1 } from '../models/Model1';
import { Model10 } from '../models/Model10';
import { Model11 } from '../models/Model11';
import { Model2 } from '../models/Model2';
import { Model3 } from '../models/Model3';
import { Model4 } from '../models/Model4';
import { Model5 } from '../models/Model5';
import { Model6 } from '../models/Model6';
import { Model8 } from '../models/Model8';
import { Model9 } from '../models/Model9';
import { PostMails201Response } from '../models/PostMails201Response';
import { RemainingFreeMails } from '../models/RemainingFreeMails';
import { RemainingFreeMailsData } from '../models/RemainingFreeMailsData';
import { SMTP } from '../models/SMTP';
import { SMTPData } from '../models/SMTPData';
import { SMTPDataCredentialsInner } from '../models/SMTPDataCredentialsInner';
import { TmpAccess } from '../models/TmpAccess';
import { TmpAccessData } from '../models/TmpAccessData';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * check if mail account is available
     * @param mailServerID 
     * @param accountName 
     */
    public checkMailAvailableWithHttpInfo(mailServerID: string, accountName: string, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.checkMailAvailable(mailServerID, accountName, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkMailAvailableWithHttpInfo(rsp)));
            }));
    }

    /**
     * check if mail account is available
     * @param mailServerID 
     * @param accountName 
     */
    public checkMailAvailable(mailServerID: string, accountName: string, _options?: Configuration): Observable<PostMails201Response> {
        return this.checkMailAvailableWithHttpInfo(mailServerID, accountName, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

    /**
     * add mail account
     * @param mailServerID 
     * @param body 
     */
    public createMailACcountWithHttpInfo(mailServerID: string, body?: Model5, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.createMailACcount(mailServerID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createMailACcountWithHttpInfo(rsp)));
            }));
    }

    /**
     * add mail account
     * @param mailServerID 
     * @param body 
     */
    public createMailACcount(mailServerID: string, body?: Model5, _options?: Configuration): Observable<PostMails201Response> {
        return this.createMailACcountWithHttpInfo(mailServerID, body, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

    /**
     * delete mail account
     * @param mailServerID 
     * @param accountID 
     */
    public deleteMailAccountWithHttpInfo(mailServerID: string, accountID: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteMailAccount(mailServerID, accountID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMailAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete mail account
     * @param mailServerID 
     * @param accountID 
     */
    public deleteMailAccount(mailServerID: string, accountID: string, _options?: Configuration): Observable<void> {
        return this.deleteMailAccountWithHttpInfo(mailServerID, accountID, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get all mail accounts
     * @param mailServerID 
     */
    public getAllMailAccountsWithHttpInfo(mailServerID: string, _options?: Configuration): Observable<HttpInfo<MailAccounts>> {
        const requestContextPromise = this.requestFactory.getAllMailAccounts(mailServerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMailAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all mail accounts
     * @param mailServerID 
     */
    public getAllMailAccounts(mailServerID: string, _options?: Configuration): Observable<MailAccounts> {
        return this.getAllMailAccountsWithHttpInfo(mailServerID, _options).pipe(map((apiResponse: HttpInfo<MailAccounts>) => apiResponse.data));
    }

}

import { AttachmentsApiRequestFactory, AttachmentsApiResponseProcessor} from "../apis/AttachmentsApi";
export class ObservableAttachmentsApi {
    private requestFactory: AttachmentsApiRequestFactory;
    private responseProcessor: AttachmentsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AttachmentsApiRequestFactory,
        responseProcessor?: AttachmentsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AttachmentsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AttachmentsApiResponseProcessor();
    }

    /**
     * download attachment
     * @param mailServerID 
     * @param messageID 
     * @param attachmentID 
     */
    public downloadAttachmentsWithHttpInfo(mailServerID: string, messageID: string, attachmentID: string, _options?: Configuration): Observable<HttpInfo<DownloadAttachments200Response>> {
        const requestContextPromise = this.requestFactory.downloadAttachments(mailServerID, messageID, attachmentID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * download attachment
     * @param mailServerID 
     * @param messageID 
     * @param attachmentID 
     */
    public downloadAttachments(mailServerID: string, messageID: string, attachmentID: string, _options?: Configuration): Observable<DownloadAttachments200Response> {
        return this.downloadAttachmentsWithHttpInfo(mailServerID, messageID, attachmentID, _options).pipe(map((apiResponse: HttpInfo<DownloadAttachments200Response>) => apiResponse.data));
    }

    /**
     * get all attachments for message
     * @param mailServerID 
     * @param messageID 
     */
    public getAllAttachmentsWithHttpInfo(mailServerID: string, messageID: string, _options?: Configuration): Observable<HttpInfo<MailAttachments>> {
        const requestContextPromise = this.requestFactory.getAllAttachments(mailServerID, messageID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all attachments for message
     * @param mailServerID 
     * @param messageID 
     */
    public getAllAttachments(mailServerID: string, messageID: string, _options?: Configuration): Observable<MailAttachments> {
        return this.getAllAttachmentsWithHttpInfo(mailServerID, messageID, _options).pipe(map((apiResponse: HttpInfo<MailAttachments>) => apiResponse.data));
    }

}

import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";
export class ObservableEventApi {
    private requestFactory: EventApiRequestFactory;
    private responseProcessor: EventApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: EventApiRequestFactory,
        responseProcessor?: EventApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new EventApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new EventApiResponseProcessor();
    }

    /**
     * get all events for message
     * @param mailServerID 
     * @param messageID 
     * @param page 
     * @param count 
     */
    public getAllEventsWithHttpInfo(mailServerID: string, messageID: string, page?: number, count?: number, _options?: Configuration): Observable<HttpInfo<MailEvents>> {
        const requestContextPromise = this.requestFactory.getAllEvents(mailServerID, messageID, page, count, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllEventsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all events for message
     * @param mailServerID 
     * @param messageID 
     * @param page 
     * @param count 
     */
    public getAllEvents(mailServerID: string, messageID: string, page?: number, count?: number, _options?: Configuration): Observable<MailEvents> {
        return this.getAllEventsWithHttpInfo(mailServerID, messageID, page, count, _options).pipe(map((apiResponse: HttpInfo<MailEvents>) => apiResponse.data));
    }

}

import { ForwardApiRequestFactory, ForwardApiResponseProcessor} from "../apis/ForwardApi";
export class ObservableForwardApi {
    private requestFactory: ForwardApiRequestFactory;
    private responseProcessor: ForwardApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ForwardApiRequestFactory,
        responseProcessor?: ForwardApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ForwardApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ForwardApiResponseProcessor();
    }

    /**
     * add address endpoint to forwarding mails
     * @param mailServerID 
     * @param accountID 
     * @param body 
     */
    public createAddressForwardingWithHttpInfo(mailServerID: string, accountID: string, body?: Model6, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.createAddressForwarding(mailServerID, accountID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAddressForwardingWithHttpInfo(rsp)));
            }));
    }

    /**
     * add address endpoint to forwarding mails
     * @param mailServerID 
     * @param accountID 
     * @param body 
     */
    public createAddressForwarding(mailServerID: string, accountID: string, body?: Model6, _options?: Configuration): Observable<PostMails201Response> {
        return this.createAddressForwardingWithHttpInfo(mailServerID, accountID, body, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

    /**
     * delete extra endpoint address
     * @param mailServerID 
     * @param accountID 
     * @param addressID 
     */
    public deleteExtraEndpointWithHttpInfo(mailServerID: string, accountID: string, addressID: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteExtraEndpoint(mailServerID, accountID, addressID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteExtraEndpointWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete extra endpoint address
     * @param mailServerID 
     * @param accountID 
     * @param addressID 
     */
    public deleteExtraEndpoint(mailServerID: string, accountID: string, addressID: string, _options?: Configuration): Observable<void> {
        return this.deleteExtraEndpointWithHttpInfo(mailServerID, accountID, addressID, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get all extra address to forwarding mails
     * @param mailServerID 
     * @param accountID 
     */
    public getListAddressForwardingWithHttpInfo(mailServerID: string, accountID: string, _options?: Configuration): Observable<HttpInfo<MailForwards>> {
        const requestContextPromise = this.requestFactory.getListAddressForwarding(mailServerID, accountID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListAddressForwardingWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all extra address to forwarding mails
     * @param mailServerID 
     * @param accountID 
     */
    public getListAddressForwarding(mailServerID: string, accountID: string, _options?: Configuration): Observable<MailForwards> {
        return this.getListAddressForwardingWithHttpInfo(mailServerID, accountID, _options).pipe(map((apiResponse: HttpInfo<MailForwards>) => apiResponse.data));
    }

}

import { InboundrulesApiRequestFactory, InboundrulesApiResponseProcessor} from "../apis/InboundrulesApi";
export class ObservableInboundrulesApi {
    private requestFactory: InboundrulesApiRequestFactory;
    private responseProcessor: InboundrulesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboundrulesApiRequestFactory,
        responseProcessor?: InboundrulesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboundrulesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboundrulesApiResponseProcessor();
    }

    /**
     * add inbound rule.
     * @param mailServerID 
     * @param model11 
     */
    public addInboundRuleWithHttpInfo(mailServerID: string, model11?: Model11, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.addInboundRule(mailServerID, model11, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addInboundRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * add inbound rule.
     * @param mailServerID 
     * @param model11 
     */
    public addInboundRule(mailServerID: string, model11?: Model11, _options?: Configuration): Observable<PostMails201Response> {
        return this.addInboundRuleWithHttpInfo(mailServerID, model11, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

    /**
     * delete inbound rule.
     * @param mailServerID 
     * @param inboundruleID 
     */
    public deleteInboundRuleWithHttpInfo(mailServerID: string, inboundruleID: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteInboundRule(mailServerID, inboundruleID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInboundRuleWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete inbound rule.
     * @param mailServerID 
     * @param inboundruleID 
     */
    public deleteInboundRule(mailServerID: string, inboundruleID: string, _options?: Configuration): Observable<void> {
        return this.deleteInboundRuleWithHttpInfo(mailServerID, inboundruleID, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get all inbound rules.
     * @param mailServerID 
     */
    public getAllInboundRulesWithHttpInfo(mailServerID: string, _options?: Configuration): Observable<HttpInfo<MailInboundRules>> {
        const requestContextPromise = this.requestFactory.getAllInboundRules(mailServerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllInboundRulesWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all inbound rules.
     * @param mailServerID 
     */
    public getAllInboundRules(mailServerID: string, _options?: Configuration): Observable<MailInboundRules> {
        return this.getAllInboundRulesWithHttpInfo(mailServerID, _options).pipe(map((apiResponse: HttpInfo<MailInboundRules>) => apiResponse.data));
    }

}

import { MailsApiRequestFactory, MailsApiResponseProcessor} from "../apis/MailsApi";
export class ObservableMailsApi {
    private requestFactory: MailsApiRequestFactory;
    private responseProcessor: MailsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MailsApiRequestFactory,
        responseProcessor?: MailsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MailsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MailsApiResponseProcessor();
    }

    /**
     * change mail server plan
     * @param mailServerID 
     * @param body 
     */
    public changeMailServerPlanWithHttpInfo(mailServerID: string, body?: Model10, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.changeMailServerPlan(mailServerID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changeMailServerPlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * change mail server plan
     * @param mailServerID 
     * @param body 
     */
    public changeMailServerPlan(mailServerID: string, body?: Model10, _options?: Configuration): Observable<PostMails201Response> {
        return this.changeMailServerPlanWithHttpInfo(mailServerID, body, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

    /**
     * check if domain name is available
     * @param domain 
     */
    public checkDomainAvailableWithHttpInfo(domain: string, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.checkDomainAvailable(domain, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkDomainAvailableWithHttpInfo(rsp)));
            }));
    }

    /**
     * check if domain name is available
     * @param domain 
     */
    public checkDomainAvailable(domain: string, _options?: Configuration): Observable<PostMails201Response> {
        return this.checkDomainAvailableWithHttpInfo(domain, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

    /**
     * mail server check dns status
     * @param mailServerID 
     */
    public checkMailServerDnsStatusWithHttpInfo(mailServerID: string, _options?: Configuration): Observable<HttpInfo<CheckDNS>> {
        const requestContextPromise = this.requestFactory.checkMailServerDnsStatus(mailServerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkMailServerDnsStatusWithHttpInfo(rsp)));
            }));
    }

    /**
     * mail server check dns status
     * @param mailServerID 
     */
    public checkMailServerDnsStatus(mailServerID: string, _options?: Configuration): Observable<CheckDNS> {
        return this.checkMailServerDnsStatusWithHttpInfo(mailServerID, _options).pipe(map((apiResponse: HttpInfo<CheckDNS>) => apiResponse.data));
    }

    /**
     * delete mail server
     * @param mailServerID 
     */
    public deleteMailServerWithHttpInfo(mailServerID: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteMailServer(mailServerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteMailServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete mail server
     * @param mailServerID 
     */
    public deleteMailServer(mailServerID: string, _options?: Configuration): Observable<void> {
        return this.deleteMailServerWithHttpInfo(mailServerID, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * edit mail server
     * @param mailServerID 
     * @param body 
     */
    public editMailServerWithHttpInfo(mailServerID: string, body?: Model8, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.editMailServer(mailServerID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editMailServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * edit mail server
     * @param mailServerID 
     * @param body 
     */
    public editMailServer(mailServerID: string, body?: Model8, _options?: Configuration): Observable<PostMails201Response> {
        return this.editMailServerWithHttpInfo(mailServerID, body, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

    /**
     * count number of free mails every month
     * @param mailServerID 
     */
    public getCountFreeMailsWithHttpInfo(mailServerID: string, _options?: Configuration): Observable<HttpInfo<RemainingFreeMails>> {
        const requestContextPromise = this.requestFactory.getCountFreeMails(mailServerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCountFreeMailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * count number of free mails every month
     * @param mailServerID 
     */
    public getCountFreeMails(mailServerID: string, _options?: Configuration): Observable<RemainingFreeMails> {
        return this.getCountFreeMailsWithHttpInfo(mailServerID, _options).pipe(map((apiResponse: HttpInfo<RemainingFreeMails>) => apiResponse.data));
    }

    /**
     * count number of sent mails every day
     * @param mailServerID 
     * @param lastNDays 
     */
    public getCountMailsWithHttpInfo(mailServerID: string, lastNDays?: number, _options?: Configuration): Observable<HttpInfo<CountMailPerDay>> {
        const requestContextPromise = this.requestFactory.getCountMails(mailServerID, lastNDays, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCountMailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * count number of sent mails every day
     * @param mailServerID 
     * @param lastNDays 
     */
    public getCountMails(mailServerID: string, lastNDays?: number, _options?: Configuration): Observable<CountMailPerDay> {
        return this.getCountMailsWithHttpInfo(mailServerID, lastNDays, _options).pipe(map((apiResponse: HttpInfo<CountMailPerDay>) => apiResponse.data));
    }

    /**
     * get all mail servers
     */
    public getMailsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<MailServers>> {
        const requestContextPromise = this.requestFactory.getMails(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all mail servers
     */
    public getMails(_options?: Configuration): Observable<MailServers> {
        return this.getMailsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<MailServers>) => apiResponse.data));
    }

    /**
     * get single mail server
     * @param mailServerID 
     */
    public getSingleMailServerWithHttpInfo(mailServerID: string, _options?: Configuration): Observable<HttpInfo<MailServer>> {
        const requestContextPromise = this.requestFactory.getSingleMailServer(mailServerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSingleMailServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * get single mail server
     * @param mailServerID 
     */
    public getSingleMailServer(mailServerID: string, _options?: Configuration): Observable<MailServer> {
        return this.getSingleMailServerWithHttpInfo(mailServerID, _options).pipe(map((apiResponse: HttpInfo<MailServer>) => apiResponse.data));
    }

    /**
     * create mail server
     * @param body 
     */
    public postMailsWithHttpInfo(body?: Model1, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.postMails(body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.postMailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * create mail server
     * @param body 
     */
    public postMails(body?: Model1, _options?: Configuration): Observable<PostMails201Response> {
        return this.postMailsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

}

import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";
export class ObservableMessagesApi {
    private requestFactory: MessagesApiRequestFactory;
    private responseProcessor: MessagesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagesApiRequestFactory,
        responseProcessor?: MessagesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MessagesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MessagesApiResponseProcessor();
    }

    /**
     * generate temporary access to email html
     * @param mailServerID 
     * @param messageID 
     * @param expiration Specifying hourly expiration schedule options
     */
    public generateTemporaryWithHttpInfo(mailServerID: string, messageID: string, expiration?: number, _options?: Configuration): Observable<HttpInfo<TmpAccess>> {
        const requestContextPromise = this.requestFactory.generateTemporary(mailServerID, messageID, expiration, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateTemporaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * generate temporary access to email html
     * @param mailServerID 
     * @param messageID 
     * @param expiration Specifying hourly expiration schedule options
     */
    public generateTemporary(mailServerID: string, messageID: string, expiration?: number, _options?: Configuration): Observable<TmpAccess> {
        return this.generateTemporaryWithHttpInfo(mailServerID, messageID, expiration, _options).pipe(map((apiResponse: HttpInfo<TmpAccess>) => apiResponse.data));
    }

    /**
     * get all mails
     * @param mailServerID 
     * @param direction 
     * @param page 
     * @param count 
     * @param state 
     * @param subject 
     * @param _from 
     * @param to 
     */
    public getAllMailsWithHttpInfo(mailServerID: string, direction: 'incoming' | 'outgoing', page?: number, count?: number, state?: string, subject?: string, _from?: string, to?: string, _options?: Configuration): Observable<HttpInfo<MailMessages>> {
        const requestContextPromise = this.requestFactory.getAllMails(mailServerID, direction, page, count, state, subject, _from, to, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAllMailsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all mails
     * @param mailServerID 
     * @param direction 
     * @param page 
     * @param count 
     * @param state 
     * @param subject 
     * @param _from 
     * @param to 
     */
    public getAllMails(mailServerID: string, direction: 'incoming' | 'outgoing', page?: number, count?: number, state?: string, subject?: string, _from?: string, to?: string, _options?: Configuration): Observable<MailMessages> {
        return this.getAllMailsWithHttpInfo(mailServerID, direction, page, count, state, subject, _from, to, _options).pipe(map((apiResponse: HttpInfo<MailMessages>) => apiResponse.data));
    }

    /**
     * get single mail
     * @param mailServerID 
     * @param messageID 
     */
    public getSingleMailWithHttpInfo(mailServerID: string, messageID: string, _options?: Configuration): Observable<HttpInfo<GetSingleMail200Response>> {
        const requestContextPromise = this.requestFactory.getSingleMail(mailServerID, messageID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSingleMailWithHttpInfo(rsp)));
            }));
    }

    /**
     * get single mail
     * @param mailServerID 
     * @param messageID 
     */
    public getSingleMail(mailServerID: string, messageID: string, _options?: Configuration): Observable<GetSingleMail200Response> {
        return this.getSingleMailWithHttpInfo(mailServerID, messageID, _options).pipe(map((apiResponse: HttpInfo<GetSingleMail200Response>) => apiResponse.data));
    }

    /**
     * get single mail html
     * @param mailServerID 
     * @param messageID 
     * @param token 
     */
    public getSingleMailHtmlWithHttpInfo(mailServerID: string, messageID: string, token: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getSingleMailHtml(mailServerID, messageID, token, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSingleMailHtmlWithHttpInfo(rsp)));
            }));
    }

    /**
     * get single mail html
     * @param mailServerID 
     * @param messageID 
     * @param token 
     */
    public getSingleMailHtml(mailServerID: string, messageID: string, token: string, _options?: Configuration): Observable<void> {
        return this.getSingleMailHtmlWithHttpInfo(mailServerID, messageID, token, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * send a mail
     * @param mailServerID 
     * @param body 
     */
    public sendMailWithHttpInfo(mailServerID: string, body?: Model3, _options?: Configuration): Observable<HttpInfo<PostMails201Response>> {
        const requestContextPromise = this.requestFactory.sendMail(mailServerID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendMailWithHttpInfo(rsp)));
            }));
    }

    /**
     * send a mail
     * @param mailServerID 
     * @param body 
     */
    public sendMail(mailServerID: string, body?: Model3, _options?: Configuration): Observable<PostMails201Response> {
        return this.sendMailWithHttpInfo(mailServerID, body, _options).pipe(map((apiResponse: HttpInfo<PostMails201Response>) => apiResponse.data));
    }

}

import { SmtpApiRequestFactory, SmtpApiResponseProcessor} from "../apis/SmtpApi";
export class ObservableSmtpApi {
    private requestFactory: SmtpApiRequestFactory;
    private responseProcessor: SmtpApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SmtpApiRequestFactory,
        responseProcessor?: SmtpApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SmtpApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SmtpApiResponseProcessor();
    }

    /**
     * delete smtp credential
     * @param mailServerID 
     * @param username 
     */
    public deleteSmtpCredentialWithHttpInfo(mailServerID: string, username: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteSmtpCredential(mailServerID, username, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSmtpCredentialWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete smtp credential
     * @param mailServerID 
     * @param username 
     */
    public deleteSmtpCredential(mailServerID: string, username: string, _options?: Configuration): Observable<void> {
        return this.deleteSmtpCredentialWithHttpInfo(mailServerID, username, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * generate credentials to connet mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public generateCredentialsWithHttpInfo(mailServerID: string, body?: Model4, _options?: Configuration): Observable<HttpInfo<CreateSMTP>> {
        const requestContextPromise = this.requestFactory.generateCredentials(mailServerID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.generateCredentialsWithHttpInfo(rsp)));
            }));
    }

    /**
     * generate credentials to connet mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public generateCredentials(mailServerID: string, body?: Model4, _options?: Configuration): Observable<CreateSMTP> {
        return this.generateCredentialsWithHttpInfo(mailServerID, body, _options).pipe(map((apiResponse: HttpInfo<CreateSMTP>) => apiResponse.data));
    }

    /**
     * get credential to connect to mail server with SMTP
     * @param mailServerID 
     */
    public getCredentialWithHttpInfo(mailServerID: string, _options?: Configuration): Observable<HttpInfo<SMTP>> {
        const requestContextPromise = this.requestFactory.getCredential(mailServerID, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCredentialWithHttpInfo(rsp)));
            }));
    }

    /**
     * get credential to connect to mail server with SMTP
     * @param mailServerID 
     */
    public getCredential(mailServerID: string, _options?: Configuration): Observable<SMTP> {
        return this.getCredentialWithHttpInfo(mailServerID, _options).pipe(map((apiResponse: HttpInfo<SMTP>) => apiResponse.data));
    }

    /**
     * revoke credentials to connect mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public revokeCredentialsWithHttpInfo(mailServerID: string, body?: Model9, _options?: Configuration): Observable<HttpInfo<CreateSMTP>> {
        const requestContextPromise = this.requestFactory.revokeCredentials(mailServerID, body, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeCredentialsWithHttpInfo(rsp)));
            }));
    }

    /**
     * revoke credentials to connect mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public revokeCredentials(mailServerID: string, body?: Model9, _options?: Configuration): Observable<CreateSMTP> {
        return this.revokeCredentialsWithHttpInfo(mailServerID, body, _options).pipe(map((apiResponse: HttpInfo<CreateSMTP>) => apiResponse.data));
    }

}
