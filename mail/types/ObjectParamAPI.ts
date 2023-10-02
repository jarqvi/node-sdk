import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CheckDNS } from '../models/CheckDNS';
import { CountMailPerDay } from '../models/CountMailPerDay';
import { CreateSMTP } from '../models/CreateSMTP';
import { CreateSMTPData } from '../models/CreateSMTPData';
import { MailAccounts } from '../models/MailAccounts';
import { MailAccountsData } from '../models/MailAccountsData';
import { MailAttachment } from '../models/MailAttachment';
import { MailAttachments } from '../models/MailAttachments';
import { MailAttachmentsData } from '../models/MailAttachmentsData';
import { MailEvents } from '../models/MailEvents';
import { MailEventsData } from '../models/MailEventsData';
import { MailForwards } from '../models/MailForwards';
import { MailForwardsData } from '../models/MailForwardsData';
import { MailMessage } from '../models/MailMessage';
import { MailMessages } from '../models/MailMessages';
import { MailMessagesData } from '../models/MailMessagesData';
import { MailServer } from '../models/MailServer';
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
import { RemainingFreeMails } from '../models/RemainingFreeMails';
import { RemainingFreeMailsData } from '../models/RemainingFreeMailsData';
import { SMTP } from '../models/SMTP';
import { SMTPData } from '../models/SMTPData';
import { Timeout } from '../models/Timeout';
import { TmpAccess } from '../models/TmpAccess';
import { TmpAccessData } from '../models/TmpAccessData';

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiCheckMailAvailableRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApicheckMailAvailable
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof AccountsApicheckMailAvailable
     */
    accountName: string
}

export interface AccountsApiCreateMailACcountRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApicreateMailACcount
     */
    mailServerID: string
    /**
     * 
     * @type Model5
     * @memberof AccountsApicreateMailACcount
     */
    body?: Model5
}

export interface AccountsApiDeleteMailAccountRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApideleteMailAccount
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof AccountsApideleteMailAccount
     */
    accountID: string
}

export interface AccountsApiGetAllMailAccountsRequest {
    /**
     * 
     * @type string
     * @memberof AccountsApigetAllMailAccounts
     */
    mailServerID: string
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * check if mail account is available
     * @param param the request object
     */
    public checkMailAvailableWithHttpInfo(param: AccountsApiCheckMailAvailableRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.checkMailAvailableWithHttpInfo(param.mailServerID, param.accountName,  options).toPromise();
    }

    /**
     * check if mail account is available
     * @param param the request object
     */
    public checkMailAvailable(param: AccountsApiCheckMailAvailableRequest, options?: Configuration): Promise<void> {
        return this.api.checkMailAvailable(param.mailServerID, param.accountName,  options).toPromise();
    }

    /**
     * add mail account
     * @param param the request object
     */
    public createMailACcountWithHttpInfo(param: AccountsApiCreateMailACcountRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createMailACcountWithHttpInfo(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * add mail account
     * @param param the request object
     */
    public createMailACcount(param: AccountsApiCreateMailACcountRequest, options?: Configuration): Promise<void> {
        return this.api.createMailACcount(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * delete mail account
     * @param param the request object
     */
    public deleteMailAccountWithHttpInfo(param: AccountsApiDeleteMailAccountRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteMailAccountWithHttpInfo(param.mailServerID, param.accountID,  options).toPromise();
    }

    /**
     * delete mail account
     * @param param the request object
     */
    public deleteMailAccount(param: AccountsApiDeleteMailAccountRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMailAccount(param.mailServerID, param.accountID,  options).toPromise();
    }

    /**
     * get all mail accounts
     * @param param the request object
     */
    public getAllMailAccountsWithHttpInfo(param: AccountsApiGetAllMailAccountsRequest, options?: Configuration): Promise<HttpInfo<MailAccounts>> {
        return this.api.getAllMailAccountsWithHttpInfo(param.mailServerID,  options).toPromise();
    }

    /**
     * get all mail accounts
     * @param param the request object
     */
    public getAllMailAccounts(param: AccountsApiGetAllMailAccountsRequest, options?: Configuration): Promise<MailAccounts> {
        return this.api.getAllMailAccounts(param.mailServerID,  options).toPromise();
    }

}

import { ObservableAttachmentsApi } from "./ObservableAPI";
import { AttachmentsApiRequestFactory, AttachmentsApiResponseProcessor} from "../apis/AttachmentsApi";

export interface AttachmentsApiDownloadAttachmentsRequest {
    /**
     * 
     * @type string
     * @memberof AttachmentsApidownloadAttachments
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof AttachmentsApidownloadAttachments
     */
    messageID: string
    /**
     * 
     * @type string
     * @memberof AttachmentsApidownloadAttachments
     */
    attachmentID: string
}

export interface AttachmentsApiGetAllAttachmentsRequest {
    /**
     * 
     * @type string
     * @memberof AttachmentsApigetAllAttachments
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof AttachmentsApigetAllAttachments
     */
    messageID: string
}

export class ObjectAttachmentsApi {
    private api: ObservableAttachmentsApi

    public constructor(configuration: Configuration, requestFactory?: AttachmentsApiRequestFactory, responseProcessor?: AttachmentsApiResponseProcessor) {
        this.api = new ObservableAttachmentsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * download attachment
     * @param param the request object
     */
    public downloadAttachmentsWithHttpInfo(param: AttachmentsApiDownloadAttachmentsRequest, options?: Configuration): Promise<HttpInfo<MailAttachment>> {
        return this.api.downloadAttachmentsWithHttpInfo(param.mailServerID, param.messageID, param.attachmentID,  options).toPromise();
    }

    /**
     * download attachment
     * @param param the request object
     */
    public downloadAttachments(param: AttachmentsApiDownloadAttachmentsRequest, options?: Configuration): Promise<MailAttachment> {
        return this.api.downloadAttachments(param.mailServerID, param.messageID, param.attachmentID,  options).toPromise();
    }

    /**
     * get all attachments for message
     * @param param the request object
     */
    public getAllAttachmentsWithHttpInfo(param: AttachmentsApiGetAllAttachmentsRequest, options?: Configuration): Promise<HttpInfo<MailAttachments>> {
        return this.api.getAllAttachmentsWithHttpInfo(param.mailServerID, param.messageID,  options).toPromise();
    }

    /**
     * get all attachments for message
     * @param param the request object
     */
    public getAllAttachments(param: AttachmentsApiGetAllAttachmentsRequest, options?: Configuration): Promise<MailAttachments> {
        return this.api.getAllAttachments(param.mailServerID, param.messageID,  options).toPromise();
    }

}

import { ObservableEventApi } from "./ObservableAPI";
import { EventApiRequestFactory, EventApiResponseProcessor} from "../apis/EventApi";

export interface EventApiGetAllEventsRequest {
    /**
     * 
     * @type string
     * @memberof EventApigetAllEvents
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof EventApigetAllEvents
     */
    messageID: string
    /**
     * 
     * @type number
     * @memberof EventApigetAllEvents
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof EventApigetAllEvents
     */
    count?: number
}

export class ObjectEventApi {
    private api: ObservableEventApi

    public constructor(configuration: Configuration, requestFactory?: EventApiRequestFactory, responseProcessor?: EventApiResponseProcessor) {
        this.api = new ObservableEventApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get all events for message
     * @param param the request object
     */
    public getAllEventsWithHttpInfo(param: EventApiGetAllEventsRequest, options?: Configuration): Promise<HttpInfo<MailEvents>> {
        return this.api.getAllEventsWithHttpInfo(param.mailServerID, param.messageID, param.page, param.count,  options).toPromise();
    }

    /**
     * get all events for message
     * @param param the request object
     */
    public getAllEvents(param: EventApiGetAllEventsRequest, options?: Configuration): Promise<MailEvents> {
        return this.api.getAllEvents(param.mailServerID, param.messageID, param.page, param.count,  options).toPromise();
    }

}

import { ObservableForwardApi } from "./ObservableAPI";
import { ForwardApiRequestFactory, ForwardApiResponseProcessor} from "../apis/ForwardApi";

export interface ForwardApiCreateAddressForwardingRequest {
    /**
     * 
     * @type string
     * @memberof ForwardApicreateAddressForwarding
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof ForwardApicreateAddressForwarding
     */
    accountID: string
    /**
     * 
     * @type Model6
     * @memberof ForwardApicreateAddressForwarding
     */
    body?: Model6
}

export interface ForwardApiDeleteExtraEndpointRequest {
    /**
     * 
     * @type string
     * @memberof ForwardApideleteExtraEndpoint
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof ForwardApideleteExtraEndpoint
     */
    accountID: string
    /**
     * 
     * @type string
     * @memberof ForwardApideleteExtraEndpoint
     */
    addressID: string
}

export interface ForwardApiGetListAddressForwardingRequest {
    /**
     * 
     * @type string
     * @memberof ForwardApigetListAddressForwarding
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof ForwardApigetListAddressForwarding
     */
    accountID: string
}

export class ObjectForwardApi {
    private api: ObservableForwardApi

    public constructor(configuration: Configuration, requestFactory?: ForwardApiRequestFactory, responseProcessor?: ForwardApiResponseProcessor) {
        this.api = new ObservableForwardApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * add address endpoint to forwarding mails
     * @param param the request object
     */
    public createAddressForwardingWithHttpInfo(param: ForwardApiCreateAddressForwardingRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createAddressForwardingWithHttpInfo(param.mailServerID, param.accountID, param.body,  options).toPromise();
    }

    /**
     * add address endpoint to forwarding mails
     * @param param the request object
     */
    public createAddressForwarding(param: ForwardApiCreateAddressForwardingRequest, options?: Configuration): Promise<void> {
        return this.api.createAddressForwarding(param.mailServerID, param.accountID, param.body,  options).toPromise();
    }

    /**
     * delete extra endpoint address
     * @param param the request object
     */
    public deleteExtraEndpointWithHttpInfo(param: ForwardApiDeleteExtraEndpointRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteExtraEndpointWithHttpInfo(param.mailServerID, param.accountID, param.addressID,  options).toPromise();
    }

    /**
     * delete extra endpoint address
     * @param param the request object
     */
    public deleteExtraEndpoint(param: ForwardApiDeleteExtraEndpointRequest, options?: Configuration): Promise<void> {
        return this.api.deleteExtraEndpoint(param.mailServerID, param.accountID, param.addressID,  options).toPromise();
    }

    /**
     * get all extra address to forwarding mails
     * @param param the request object
     */
    public getListAddressForwardingWithHttpInfo(param: ForwardApiGetListAddressForwardingRequest, options?: Configuration): Promise<HttpInfo<MailForwards>> {
        return this.api.getListAddressForwardingWithHttpInfo(param.mailServerID, param.accountID,  options).toPromise();
    }

    /**
     * get all extra address to forwarding mails
     * @param param the request object
     */
    public getListAddressForwarding(param: ForwardApiGetListAddressForwardingRequest, options?: Configuration): Promise<MailForwards> {
        return this.api.getListAddressForwarding(param.mailServerID, param.accountID,  options).toPromise();
    }

}

import { ObservableMailsApi } from "./ObservableAPI";
import { MailsApiRequestFactory, MailsApiResponseProcessor} from "../apis/MailsApi";

export interface MailsApiChangeMailServerModeRequest {
    /**
     * 
     * @type string
     * @memberof MailsApichangeMailServerMode
     */
    mailServerID: string
    /**
     * 
     * @type Model8
     * @memberof MailsApichangeMailServerMode
     */
    body?: Model8
}

export interface MailsApiChangeMailServerPlanRequest {
    /**
     * 
     * @type string
     * @memberof MailsApichangeMailServerPlan
     */
    mailServerID: string
    /**
     * 
     * @type Model10
     * @memberof MailsApichangeMailServerPlan
     */
    body?: Model10
}

export interface MailsApiCheckDomainAvailableRequest {
    /**
     * 
     * @type string
     * @memberof MailsApicheckDomainAvailable
     */
    domain: string
}

export interface MailsApiCheckMailServerDnsStatusRequest {
    /**
     * 
     * @type string
     * @memberof MailsApicheckMailServerDnsStatus
     */
    mailServerID: string
}

export interface MailsApiDeleteMailServerRequest {
    /**
     * 
     * @type string
     * @memberof MailsApideleteMailServer
     */
    mailServerID: string
}

export interface MailsApiGetCountFreeMailsRequest {
    /**
     * 
     * @type string
     * @memberof MailsApigetCountFreeMails
     */
    mailServerID: string
}

export interface MailsApiGetCountMailsRequest {
    /**
     * 
     * @type string
     * @memberof MailsApigetCountMails
     */
    mailServerID: string
    /**
     * 
     * @type number
     * @memberof MailsApigetCountMails
     */
    lastNDays?: number
}

export interface MailsApiGetMailsRequest {
}

export interface MailsApiGetSingleMailServerRequest {
    /**
     * 
     * @type string
     * @memberof MailsApigetSingleMailServer
     */
    mailServerID: string
}

export interface MailsApiPostMailsRequest {
    /**
     * 
     * @type Model1
     * @memberof MailsApipostMails
     */
    body?: Model1
}

export class ObjectMailsApi {
    private api: ObservableMailsApi

    public constructor(configuration: Configuration, requestFactory?: MailsApiRequestFactory, responseProcessor?: MailsApiResponseProcessor) {
        this.api = new ObservableMailsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * chagen mail server mode
     * @param param the request object
     */
    public changeMailServerModeWithHttpInfo(param: MailsApiChangeMailServerModeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.changeMailServerModeWithHttpInfo(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * chagen mail server mode
     * @param param the request object
     */
    public changeMailServerMode(param: MailsApiChangeMailServerModeRequest, options?: Configuration): Promise<void> {
        return this.api.changeMailServerMode(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * change mail server plan
     * @param param the request object
     */
    public changeMailServerPlanWithHttpInfo(param: MailsApiChangeMailServerPlanRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.changeMailServerPlanWithHttpInfo(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * change mail server plan
     * @param param the request object
     */
    public changeMailServerPlan(param: MailsApiChangeMailServerPlanRequest, options?: Configuration): Promise<void> {
        return this.api.changeMailServerPlan(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * check if domain name is available
     * @param param the request object
     */
    public checkDomainAvailableWithHttpInfo(param: MailsApiCheckDomainAvailableRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.checkDomainAvailableWithHttpInfo(param.domain,  options).toPromise();
    }

    /**
     * check if domain name is available
     * @param param the request object
     */
    public checkDomainAvailable(param: MailsApiCheckDomainAvailableRequest, options?: Configuration): Promise<void> {
        return this.api.checkDomainAvailable(param.domain,  options).toPromise();
    }

    /**
     * mail server check dns status
     * @param param the request object
     */
    public checkMailServerDnsStatusWithHttpInfo(param: MailsApiCheckMailServerDnsStatusRequest, options?: Configuration): Promise<HttpInfo<CheckDNS>> {
        return this.api.checkMailServerDnsStatusWithHttpInfo(param.mailServerID,  options).toPromise();
    }

    /**
     * mail server check dns status
     * @param param the request object
     */
    public checkMailServerDnsStatus(param: MailsApiCheckMailServerDnsStatusRequest, options?: Configuration): Promise<CheckDNS> {
        return this.api.checkMailServerDnsStatus(param.mailServerID,  options).toPromise();
    }

    /**
     * delete mail server
     * @param param the request object
     */
    public deleteMailServerWithHttpInfo(param: MailsApiDeleteMailServerRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteMailServerWithHttpInfo(param.mailServerID,  options).toPromise();
    }

    /**
     * delete mail server
     * @param param the request object
     */
    public deleteMailServer(param: MailsApiDeleteMailServerRequest, options?: Configuration): Promise<void> {
        return this.api.deleteMailServer(param.mailServerID,  options).toPromise();
    }

    /**
     * count number of free mails every month
     * @param param the request object
     */
    public getCountFreeMailsWithHttpInfo(param: MailsApiGetCountFreeMailsRequest, options?: Configuration): Promise<HttpInfo<RemainingFreeMails>> {
        return this.api.getCountFreeMailsWithHttpInfo(param.mailServerID,  options).toPromise();
    }

    /**
     * count number of free mails every month
     * @param param the request object
     */
    public getCountFreeMails(param: MailsApiGetCountFreeMailsRequest, options?: Configuration): Promise<RemainingFreeMails> {
        return this.api.getCountFreeMails(param.mailServerID,  options).toPromise();
    }

    /**
     * count number of sent mails every day
     * @param param the request object
     */
    public getCountMailsWithHttpInfo(param: MailsApiGetCountMailsRequest, options?: Configuration): Promise<HttpInfo<CountMailPerDay>> {
        return this.api.getCountMailsWithHttpInfo(param.mailServerID, param.lastNDays,  options).toPromise();
    }

    /**
     * count number of sent mails every day
     * @param param the request object
     */
    public getCountMails(param: MailsApiGetCountMailsRequest, options?: Configuration): Promise<CountMailPerDay> {
        return this.api.getCountMails(param.mailServerID, param.lastNDays,  options).toPromise();
    }

    /**
     * get all mail servers
     * @param param the request object
     */
    public getMailsWithHttpInfo(param: MailsApiGetMailsRequest = {}, options?: Configuration): Promise<HttpInfo<Array<MailServer>>> {
        return this.api.getMailsWithHttpInfo( options).toPromise();
    }

    /**
     * get all mail servers
     * @param param the request object
     */
    public getMails(param: MailsApiGetMailsRequest = {}, options?: Configuration): Promise<Array<MailServer>> {
        return this.api.getMails( options).toPromise();
    }

    /**
     * get single mail server
     * @param param the request object
     */
    public getSingleMailServerWithHttpInfo(param: MailsApiGetSingleMailServerRequest, options?: Configuration): Promise<HttpInfo<MailServer>> {
        return this.api.getSingleMailServerWithHttpInfo(param.mailServerID,  options).toPromise();
    }

    /**
     * get single mail server
     * @param param the request object
     */
    public getSingleMailServer(param: MailsApiGetSingleMailServerRequest, options?: Configuration): Promise<MailServer> {
        return this.api.getSingleMailServer(param.mailServerID,  options).toPromise();
    }

    /**
     * create mail server
     * @param param the request object
     */
    public postMailsWithHttpInfo(param: MailsApiPostMailsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.postMailsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * create mail server
     * @param param the request object
     */
    public postMails(param: MailsApiPostMailsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.postMails(param.body,  options).toPromise();
    }

}

import { ObservableMessagesApi } from "./ObservableAPI";
import { MessagesApiRequestFactory, MessagesApiResponseProcessor} from "../apis/MessagesApi";

export interface MessagesApiGenerateTemporaryRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApigenerateTemporary
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof MessagesApigenerateTemporary
     */
    messageID: string
    /**
     * Specifying hourly expiration schedule options
     * @type number
     * @memberof MessagesApigenerateTemporary
     */
    expiration?: number
}

export interface MessagesApiGetAllMailsRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApigetAllMails
     */
    mailServerID: string
    /**
     * 
     * @type &#39;incoming&#39; | &#39;outgoing&#39;
     * @memberof MessagesApigetAllMails
     */
    direction: 'incoming' | 'outgoing'
    /**
     * 
     * @type number
     * @memberof MessagesApigetAllMails
     */
    page?: number
    /**
     * 
     * @type number
     * @memberof MessagesApigetAllMails
     */
    count?: number
    /**
     * 
     * @type string
     * @memberof MessagesApigetAllMails
     */
    state?: string
    /**
     * 
     * @type string
     * @memberof MessagesApigetAllMails
     */
    subject?: string
    /**
     * 
     * @type string
     * @memberof MessagesApigetAllMails
     */
    _from?: string
    /**
     * 
     * @type string
     * @memberof MessagesApigetAllMails
     */
    to?: string
}

export interface MessagesApiGetSingleMailRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApigetSingleMail
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof MessagesApigetSingleMail
     */
    messageID: string
}

export interface MessagesApiGetSingleMailHtmlRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApigetSingleMailHtml
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof MessagesApigetSingleMailHtml
     */
    messageID: string
    /**
     * 
     * @type string
     * @memberof MessagesApigetSingleMailHtml
     */
    token: string
}

export interface MessagesApiSendMailRequest {
    /**
     * 
     * @type string
     * @memberof MessagesApisendMail
     */
    mailServerID: string
    /**
     * 
     * @type Model3
     * @memberof MessagesApisendMail
     */
    body?: Model3
}

export class ObjectMessagesApi {
    private api: ObservableMessagesApi

    public constructor(configuration: Configuration, requestFactory?: MessagesApiRequestFactory, responseProcessor?: MessagesApiResponseProcessor) {
        this.api = new ObservableMessagesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * generate temporary access to email html
     * @param param the request object
     */
    public generateTemporaryWithHttpInfo(param: MessagesApiGenerateTemporaryRequest, options?: Configuration): Promise<HttpInfo<TmpAccess>> {
        return this.api.generateTemporaryWithHttpInfo(param.mailServerID, param.messageID, param.expiration,  options).toPromise();
    }

    /**
     * generate temporary access to email html
     * @param param the request object
     */
    public generateTemporary(param: MessagesApiGenerateTemporaryRequest, options?: Configuration): Promise<TmpAccess> {
        return this.api.generateTemporary(param.mailServerID, param.messageID, param.expiration,  options).toPromise();
    }

    /**
     * get all mails
     * @param param the request object
     */
    public getAllMailsWithHttpInfo(param: MessagesApiGetAllMailsRequest, options?: Configuration): Promise<HttpInfo<MailMessages>> {
        return this.api.getAllMailsWithHttpInfo(param.mailServerID, param.direction, param.page, param.count, param.state, param.subject, param._from, param.to,  options).toPromise();
    }

    /**
     * get all mails
     * @param param the request object
     */
    public getAllMails(param: MessagesApiGetAllMailsRequest, options?: Configuration): Promise<MailMessages> {
        return this.api.getAllMails(param.mailServerID, param.direction, param.page, param.count, param.state, param.subject, param._from, param.to,  options).toPromise();
    }

    /**
     * get single mail
     * @param param the request object
     */
    public getSingleMailWithHttpInfo(param: MessagesApiGetSingleMailRequest, options?: Configuration): Promise<HttpInfo<MailMessage>> {
        return this.api.getSingleMailWithHttpInfo(param.mailServerID, param.messageID,  options).toPromise();
    }

    /**
     * get single mail
     * @param param the request object
     */
    public getSingleMail(param: MessagesApiGetSingleMailRequest, options?: Configuration): Promise<MailMessage> {
        return this.api.getSingleMail(param.mailServerID, param.messageID,  options).toPromise();
    }

    /**
     * get single mail html
     * @param param the request object
     */
    public getSingleMailHtmlWithHttpInfo(param: MessagesApiGetSingleMailHtmlRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getSingleMailHtmlWithHttpInfo(param.mailServerID, param.messageID, param.token,  options).toPromise();
    }

    /**
     * get single mail html
     * @param param the request object
     */
    public getSingleMailHtml(param: MessagesApiGetSingleMailHtmlRequest, options?: Configuration): Promise<void> {
        return this.api.getSingleMailHtml(param.mailServerID, param.messageID, param.token,  options).toPromise();
    }

    /**
     * send a mail
     * @param param the request object
     */
    public sendMailWithHttpInfo(param: MessagesApiSendMailRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sendMailWithHttpInfo(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * send a mail
     * @param param the request object
     */
    public sendMail(param: MessagesApiSendMailRequest, options?: Configuration): Promise<void> {
        return this.api.sendMail(param.mailServerID, param.body,  options).toPromise();
    }

}

import { ObservableSmtpApi } from "./ObservableAPI";
import { SmtpApiRequestFactory, SmtpApiResponseProcessor} from "../apis/SmtpApi";

export interface SmtpApiDeleteSmtpCredentialRequest {
    /**
     * 
     * @type string
     * @memberof SmtpApideleteSmtpCredential
     */
    mailServerID: string
    /**
     * 
     * @type string
     * @memberof SmtpApideleteSmtpCredential
     */
    username: string
}

export interface SmtpApiGenerateCredentialsRequest {
    /**
     * 
     * @type string
     * @memberof SmtpApigenerateCredentials
     */
    mailServerID: string
    /**
     * 
     * @type Model4
     * @memberof SmtpApigenerateCredentials
     */
    body?: Model4
}

export interface SmtpApiGetCredentialRequest {
    /**
     * 
     * @type string
     * @memberof SmtpApigetCredential
     */
    mailServerID: string
}

export interface SmtpApiRevokeCredentialsRequest {
    /**
     * 
     * @type string
     * @memberof SmtpApirevokeCredentials
     */
    mailServerID: string
    /**
     * 
     * @type Model9
     * @memberof SmtpApirevokeCredentials
     */
    body?: Model9
}

export class ObjectSmtpApi {
    private api: ObservableSmtpApi

    public constructor(configuration: Configuration, requestFactory?: SmtpApiRequestFactory, responseProcessor?: SmtpApiResponseProcessor) {
        this.api = new ObservableSmtpApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * delete smtp credential
     * @param param the request object
     */
    public deleteSmtpCredentialWithHttpInfo(param: SmtpApiDeleteSmtpCredentialRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteSmtpCredentialWithHttpInfo(param.mailServerID, param.username,  options).toPromise();
    }

    /**
     * delete smtp credential
     * @param param the request object
     */
    public deleteSmtpCredential(param: SmtpApiDeleteSmtpCredentialRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSmtpCredential(param.mailServerID, param.username,  options).toPromise();
    }

    /**
     * generate credentials to connet mail server with SMTP
     * @param param the request object
     */
    public generateCredentialsWithHttpInfo(param: SmtpApiGenerateCredentialsRequest, options?: Configuration): Promise<HttpInfo<CreateSMTP>> {
        return this.api.generateCredentialsWithHttpInfo(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * generate credentials to connet mail server with SMTP
     * @param param the request object
     */
    public generateCredentials(param: SmtpApiGenerateCredentialsRequest, options?: Configuration): Promise<CreateSMTP> {
        return this.api.generateCredentials(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * get credential to connect to mail server with SMTP
     * @param param the request object
     */
    public getCredentialWithHttpInfo(param: SmtpApiGetCredentialRequest, options?: Configuration): Promise<HttpInfo<SMTP>> {
        return this.api.getCredentialWithHttpInfo(param.mailServerID,  options).toPromise();
    }

    /**
     * get credential to connect to mail server with SMTP
     * @param param the request object
     */
    public getCredential(param: SmtpApiGetCredentialRequest, options?: Configuration): Promise<SMTP> {
        return this.api.getCredential(param.mailServerID,  options).toPromise();
    }

    /**
     * revoke credentials to connect mail server with SMTP
     * @param param the request object
     */
    public revokeCredentialsWithHttpInfo(param: SmtpApiRevokeCredentialsRequest, options?: Configuration): Promise<HttpInfo<CreateSMTP>> {
        return this.api.revokeCredentialsWithHttpInfo(param.mailServerID, param.body,  options).toPromise();
    }

    /**
     * revoke credentials to connect mail server with SMTP
     * @param param the request object
     */
    public revokeCredentials(param: SmtpApiRevokeCredentialsRequest, options?: Configuration): Promise<CreateSMTP> {
        return this.api.revokeCredentials(param.mailServerID, param.body,  options).toPromise();
    }

}
