import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

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
import { Model1 } from '../models/Model1';
import { Model10 } from '../models/Model10';
import { Model2 } from '../models/Model2';
import { Model3 } from '../models/Model3';
import { Model4 } from '../models/Model4';
import { Model5 } from '../models/Model5';
import { Model6 } from '../models/Model6';
import { Model7 } from '../models/Model7';
import { Model8 } from '../models/Model8';
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
import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * check if mail account is available
     * @param mailServerID 
     * @param accountName 
     */
    public checkMailAvailableWithHttpInfo(mailServerID: string, accountName: string, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.checkMailAvailableWithHttpInfo(mailServerID, accountName, _options);
        return result.toPromise();
    }

    /**
     * check if mail account is available
     * @param mailServerID 
     * @param accountName 
     */
    public checkMailAvailable(mailServerID: string, accountName: string, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.checkMailAvailable(mailServerID, accountName, _options);
        return result.toPromise();
    }

    /**
     * add mail account
     * @param mailServerID 
     * @param body 
     */
    public createMailACcountWithHttpInfo(mailServerID: string, body?: Model5, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.createMailACcountWithHttpInfo(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * add mail account
     * @param mailServerID 
     * @param body 
     */
    public createMailACcount(mailServerID: string, body?: Model5, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.createMailACcount(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * delete mail account
     * @param mailServerID 
     * @param accountID 
     */
    public deleteMailAccountWithHttpInfo(mailServerID: string, accountID: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteMailAccountWithHttpInfo(mailServerID, accountID, _options);
        return result.toPromise();
    }

    /**
     * delete mail account
     * @param mailServerID 
     * @param accountID 
     */
    public deleteMailAccount(mailServerID: string, accountID: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMailAccount(mailServerID, accountID, _options);
        return result.toPromise();
    }

    /**
     * get all mail accounts
     * @param mailServerID 
     */
    public getAllMailAccountsWithHttpInfo(mailServerID: string, _options?: Configuration): Promise<HttpInfo<MailAccounts>> {
        const result = this.api.getAllMailAccountsWithHttpInfo(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * get all mail accounts
     * @param mailServerID 
     */
    public getAllMailAccounts(mailServerID: string, _options?: Configuration): Promise<MailAccounts> {
        const result = this.api.getAllMailAccounts(mailServerID, _options);
        return result.toPromise();
    }


}



import { ObservableAttachmentsApi } from './ObservableAPI';

import { AttachmentsApiRequestFactory, AttachmentsApiResponseProcessor} from "../apis/AttachmentsApi";
export class PromiseAttachmentsApi {
    private api: ObservableAttachmentsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AttachmentsApiRequestFactory,
        responseProcessor?: AttachmentsApiResponseProcessor
    ) {
        this.api = new ObservableAttachmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * download attachment
     * @param mailServerID 
     * @param messageID 
     * @param attachmentID 
     */
    public downloadAttachmentsWithHttpInfo(mailServerID: string, messageID: string, attachmentID: string, _options?: Configuration): Promise<HttpInfo<DownloadAttachments200Response>> {
        const result = this.api.downloadAttachmentsWithHttpInfo(mailServerID, messageID, attachmentID, _options);
        return result.toPromise();
    }

    /**
     * download attachment
     * @param mailServerID 
     * @param messageID 
     * @param attachmentID 
     */
    public downloadAttachments(mailServerID: string, messageID: string, attachmentID: string, _options?: Configuration): Promise<DownloadAttachments200Response> {
        const result = this.api.downloadAttachments(mailServerID, messageID, attachmentID, _options);
        return result.toPromise();
    }

    /**
     * get all attachments for message
     * @param mailServerID 
     * @param messageID 
     */
    public getAllAttachmentsWithHttpInfo(mailServerID: string, messageID: string, _options?: Configuration): Promise<HttpInfo<MailAttachments>> {
        const result = this.api.getAllAttachmentsWithHttpInfo(mailServerID, messageID, _options);
        return result.toPromise();
    }

    /**
     * get all attachments for message
     * @param mailServerID 
     * @param messageID 
     */
    public getAllAttachments(mailServerID: string, messageID: string, _options?: Configuration): Promise<MailAttachments> {
        const result = this.api.getAllAttachments(mailServerID, messageID, _options);
        return result.toPromise();
    }


}



import { ObservableEventApi } from './ObservableAPI';

import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";
export class PromiseEventApi {
    private api: ObservableEventApi

    public constructor(
        configuration: Configuration,
        requestFactory?: EventApiRequestFactory,
        responseProcessor?: EventApiResponseProcessor
    ) {
        this.api = new ObservableEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get all events for message
     * @param mailServerID 
     * @param messageID 
     * @param page 
     * @param count 
     */
    public getAllEventsWithHttpInfo(mailServerID: string, messageID: string, page?: number, count?: number, _options?: Configuration): Promise<HttpInfo<MailEvents>> {
        const result = this.api.getAllEventsWithHttpInfo(mailServerID, messageID, page, count, _options);
        return result.toPromise();
    }

    /**
     * get all events for message
     * @param mailServerID 
     * @param messageID 
     * @param page 
     * @param count 
     */
    public getAllEvents(mailServerID: string, messageID: string, page?: number, count?: number, _options?: Configuration): Promise<MailEvents> {
        const result = this.api.getAllEvents(mailServerID, messageID, page, count, _options);
        return result.toPromise();
    }


}



import { ObservableForwardApi } from './ObservableAPI';

import { ForwardApiRequestFactory, ForwardApiResponseProcessor} from "../apis/ForwardApi";
export class PromiseForwardApi {
    private api: ObservableForwardApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ForwardApiRequestFactory,
        responseProcessor?: ForwardApiResponseProcessor
    ) {
        this.api = new ObservableForwardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * add address endpoint to forwarding mails
     * @param mailServerID 
     * @param accountID 
     * @param body 
     */
    public createAddressForwardingWithHttpInfo(mailServerID: string, accountID: string, body?: Model6, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.createAddressForwardingWithHttpInfo(mailServerID, accountID, body, _options);
        return result.toPromise();
    }

    /**
     * add address endpoint to forwarding mails
     * @param mailServerID 
     * @param accountID 
     * @param body 
     */
    public createAddressForwarding(mailServerID: string, accountID: string, body?: Model6, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.createAddressForwarding(mailServerID, accountID, body, _options);
        return result.toPromise();
    }

    /**
     * delete extra endpoint address
     * @param mailServerID 
     * @param accountID 
     * @param addressID 
     */
    public deleteExtraEndpointWithHttpInfo(mailServerID: string, accountID: string, addressID: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteExtraEndpointWithHttpInfo(mailServerID, accountID, addressID, _options);
        return result.toPromise();
    }

    /**
     * delete extra endpoint address
     * @param mailServerID 
     * @param accountID 
     * @param addressID 
     */
    public deleteExtraEndpoint(mailServerID: string, accountID: string, addressID: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteExtraEndpoint(mailServerID, accountID, addressID, _options);
        return result.toPromise();
    }

    /**
     * get all extra address to forwarding mails
     * @param mailServerID 
     * @param accountID 
     */
    public getListAddressForwardingWithHttpInfo(mailServerID: string, accountID: string, _options?: Configuration): Promise<HttpInfo<MailForwards>> {
        const result = this.api.getListAddressForwardingWithHttpInfo(mailServerID, accountID, _options);
        return result.toPromise();
    }

    /**
     * get all extra address to forwarding mails
     * @param mailServerID 
     * @param accountID 
     */
    public getListAddressForwarding(mailServerID: string, accountID: string, _options?: Configuration): Promise<MailForwards> {
        const result = this.api.getListAddressForwarding(mailServerID, accountID, _options);
        return result.toPromise();
    }


}



import { ObservableMailsApi } from './ObservableAPI';

import { MailsApiRequestFactory, MailsApiResponseProcessor} from "../apis/MailsApi";
export class PromiseMailsApi {
    private api: ObservableMailsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MailsApiRequestFactory,
        responseProcessor?: MailsApiResponseProcessor
    ) {
        this.api = new ObservableMailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * chagen mail server mode
     * @param mailServerID 
     * @param body 
     */
    public changeMailServerModeWithHttpInfo(mailServerID: string, body?: Model8, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.changeMailServerModeWithHttpInfo(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * chagen mail server mode
     * @param mailServerID 
     * @param body 
     */
    public changeMailServerMode(mailServerID: string, body?: Model8, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.changeMailServerMode(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * change mail server plan
     * @param mailServerID 
     * @param body 
     */
    public changeMailServerPlanWithHttpInfo(mailServerID: string, body?: Model10, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.changeMailServerPlanWithHttpInfo(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * change mail server plan
     * @param mailServerID 
     * @param body 
     */
    public changeMailServerPlan(mailServerID: string, body?: Model10, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.changeMailServerPlan(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * check if domain name is available
     * @param domain 
     */
    public checkDomainAvailableWithHttpInfo(domain: string, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.checkDomainAvailableWithHttpInfo(domain, _options);
        return result.toPromise();
    }

    /**
     * check if domain name is available
     * @param domain 
     */
    public checkDomainAvailable(domain: string, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.checkDomainAvailable(domain, _options);
        return result.toPromise();
    }

    /**
     * mail server check dns status
     * @param mailServerID 
     */
    public checkMailServerDnsStatusWithHttpInfo(mailServerID: string, _options?: Configuration): Promise<HttpInfo<CheckDNS>> {
        const result = this.api.checkMailServerDnsStatusWithHttpInfo(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * mail server check dns status
     * @param mailServerID 
     */
    public checkMailServerDnsStatus(mailServerID: string, _options?: Configuration): Promise<CheckDNS> {
        const result = this.api.checkMailServerDnsStatus(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * delete mail server
     * @param mailServerID 
     */
    public deleteMailServerWithHttpInfo(mailServerID: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteMailServerWithHttpInfo(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * delete mail server
     * @param mailServerID 
     */
    public deleteMailServer(mailServerID: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteMailServer(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * count number of free mails every month
     * @param mailServerID 
     */
    public getCountFreeMailsWithHttpInfo(mailServerID: string, _options?: Configuration): Promise<HttpInfo<RemainingFreeMails>> {
        const result = this.api.getCountFreeMailsWithHttpInfo(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * count number of free mails every month
     * @param mailServerID 
     */
    public getCountFreeMails(mailServerID: string, _options?: Configuration): Promise<RemainingFreeMails> {
        const result = this.api.getCountFreeMails(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * count number of sent mails every day
     * @param mailServerID 
     * @param lastNDays 
     */
    public getCountMailsWithHttpInfo(mailServerID: string, lastNDays?: number, _options?: Configuration): Promise<HttpInfo<CountMailPerDay>> {
        const result = this.api.getCountMailsWithHttpInfo(mailServerID, lastNDays, _options);
        return result.toPromise();
    }

    /**
     * count number of sent mails every day
     * @param mailServerID 
     * @param lastNDays 
     */
    public getCountMails(mailServerID: string, lastNDays?: number, _options?: Configuration): Promise<CountMailPerDay> {
        const result = this.api.getCountMails(mailServerID, lastNDays, _options);
        return result.toPromise();
    }

    /**
     * get all mail servers
     */
    public getMailsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<MailServers>> {
        const result = this.api.getMailsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * get all mail servers
     */
    public getMails(_options?: Configuration): Promise<MailServers> {
        const result = this.api.getMails(_options);
        return result.toPromise();
    }

    /**
     * get single mail server
     * @param mailServerID 
     */
    public getSingleMailServerWithHttpInfo(mailServerID: string, _options?: Configuration): Promise<HttpInfo<MailServer>> {
        const result = this.api.getSingleMailServerWithHttpInfo(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * get single mail server
     * @param mailServerID 
     */
    public getSingleMailServer(mailServerID: string, _options?: Configuration): Promise<MailServer> {
        const result = this.api.getSingleMailServer(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * create mail server
     * @param body 
     */
    public postMailsWithHttpInfo(body?: Model1, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.postMailsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * create mail server
     * @param body 
     */
    public postMails(body?: Model1, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.postMails(body, _options);
        return result.toPromise();
    }


}



import { ObservableMessagesApi } from './ObservableAPI';

import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";
export class PromiseMessagesApi {
    private api: ObservableMessagesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MessagesApiRequestFactory,
        responseProcessor?: MessagesApiResponseProcessor
    ) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * generate temporary access to email html
     * @param mailServerID 
     * @param messageID 
     * @param expiration Specifying hourly expiration schedule options
     */
    public generateTemporaryWithHttpInfo(mailServerID: string, messageID: string, expiration?: number, _options?: Configuration): Promise<HttpInfo<TmpAccess>> {
        const result = this.api.generateTemporaryWithHttpInfo(mailServerID, messageID, expiration, _options);
        return result.toPromise();
    }

    /**
     * generate temporary access to email html
     * @param mailServerID 
     * @param messageID 
     * @param expiration Specifying hourly expiration schedule options
     */
    public generateTemporary(mailServerID: string, messageID: string, expiration?: number, _options?: Configuration): Promise<TmpAccess> {
        const result = this.api.generateTemporary(mailServerID, messageID, expiration, _options);
        return result.toPromise();
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
    public getAllMailsWithHttpInfo(mailServerID: string, direction: 'incoming' | 'outgoing', page?: number, count?: number, state?: string, subject?: string, _from?: string, to?: string, _options?: Configuration): Promise<HttpInfo<MailMessages>> {
        const result = this.api.getAllMailsWithHttpInfo(mailServerID, direction, page, count, state, subject, _from, to, _options);
        return result.toPromise();
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
    public getAllMails(mailServerID: string, direction: 'incoming' | 'outgoing', page?: number, count?: number, state?: string, subject?: string, _from?: string, to?: string, _options?: Configuration): Promise<MailMessages> {
        const result = this.api.getAllMails(mailServerID, direction, page, count, state, subject, _from, to, _options);
        return result.toPromise();
    }

    /**
     * get single mail
     * @param mailServerID 
     * @param messageID 
     */
    public getSingleMailWithHttpInfo(mailServerID: string, messageID: string, _options?: Configuration): Promise<HttpInfo<GetSingleMail200Response>> {
        const result = this.api.getSingleMailWithHttpInfo(mailServerID, messageID, _options);
        return result.toPromise();
    }

    /**
     * get single mail
     * @param mailServerID 
     * @param messageID 
     */
    public getSingleMail(mailServerID: string, messageID: string, _options?: Configuration): Promise<GetSingleMail200Response> {
        const result = this.api.getSingleMail(mailServerID, messageID, _options);
        return result.toPromise();
    }

    /**
     * get single mail html
     * @param mailServerID 
     * @param messageID 
     * @param token 
     */
    public getSingleMailHtmlWithHttpInfo(mailServerID: string, messageID: string, token: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getSingleMailHtmlWithHttpInfo(mailServerID, messageID, token, _options);
        return result.toPromise();
    }

    /**
     * get single mail html
     * @param mailServerID 
     * @param messageID 
     * @param token 
     */
    public getSingleMailHtml(mailServerID: string, messageID: string, token: string, _options?: Configuration): Promise<void> {
        const result = this.api.getSingleMailHtml(mailServerID, messageID, token, _options);
        return result.toPromise();
    }

    /**
     * send a mail
     * @param mailServerID 
     * @param body 
     */
    public sendMailWithHttpInfo(mailServerID: string, body?: Model3, _options?: Configuration): Promise<HttpInfo<PostMails201Response>> {
        const result = this.api.sendMailWithHttpInfo(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * send a mail
     * @param mailServerID 
     * @param body 
     */
    public sendMail(mailServerID: string, body?: Model3, _options?: Configuration): Promise<PostMails201Response> {
        const result = this.api.sendMail(mailServerID, body, _options);
        return result.toPromise();
    }


}



import { ObservableSmtpApi } from './ObservableAPI';

import { SmtpApiRequestFactory, SmtpApiResponseProcessor} from "../apis/SmtpApi";
export class PromiseSmtpApi {
    private api: ObservableSmtpApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SmtpApiRequestFactory,
        responseProcessor?: SmtpApiResponseProcessor
    ) {
        this.api = new ObservableSmtpApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete smtp credential
     * @param mailServerID 
     * @param username 
     */
    public deleteSmtpCredentialWithHttpInfo(mailServerID: string, username: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteSmtpCredentialWithHttpInfo(mailServerID, username, _options);
        return result.toPromise();
    }

    /**
     * delete smtp credential
     * @param mailServerID 
     * @param username 
     */
    public deleteSmtpCredential(mailServerID: string, username: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSmtpCredential(mailServerID, username, _options);
        return result.toPromise();
    }

    /**
     * generate credentials to connet mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public generateCredentialsWithHttpInfo(mailServerID: string, body?: Model4, _options?: Configuration): Promise<HttpInfo<CreateSMTP>> {
        const result = this.api.generateCredentialsWithHttpInfo(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * generate credentials to connet mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public generateCredentials(mailServerID: string, body?: Model4, _options?: Configuration): Promise<CreateSMTP> {
        const result = this.api.generateCredentials(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * get credential to connect to mail server with SMTP
     * @param mailServerID 
     */
    public getCredentialWithHttpInfo(mailServerID: string, _options?: Configuration): Promise<HttpInfo<SMTP>> {
        const result = this.api.getCredentialWithHttpInfo(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * get credential to connect to mail server with SMTP
     * @param mailServerID 
     */
    public getCredential(mailServerID: string, _options?: Configuration): Promise<SMTP> {
        const result = this.api.getCredential(mailServerID, _options);
        return result.toPromise();
    }

    /**
     * revoke credentials to connect mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public revokeCredentialsWithHttpInfo(mailServerID: string, body?: Model9, _options?: Configuration): Promise<HttpInfo<CreateSMTP>> {
        const result = this.api.revokeCredentialsWithHttpInfo(mailServerID, body, _options);
        return result.toPromise();
    }

    /**
     * revoke credentials to connect mail server with SMTP
     * @param mailServerID 
     * @param body 
     */
    public revokeCredentials(mailServerID: string, body?: Model9, _options?: Configuration): Promise<CreateSMTP> {
        const result = this.api.revokeCredentials(mailServerID, body, _options);
        return result.toPromise();
    }


}



