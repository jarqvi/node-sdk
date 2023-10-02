import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AllDnsRecordResponse } from '../models/AllDnsRecordResponse';
import { CreateZoneRequest } from '../models/CreateZoneRequest';
import { DnsRecord } from '../models/DnsRecord';
import { DnsRecordId } from '../models/DnsRecordId';
import { DnsRecordResponse } from '../models/DnsRecordResponse';
import { Submitted } from '../models/Submitted';
import { Zone } from '../models/Zone';

import { ObservableCheckNameServersApi } from "./ObservableAPI";
import { CheckNameServersApiRequestFactory, CheckNameServersApiResponseProcessor} from "../apis/CheckNameServersApi";

export interface CheckNameServersApiCheckNameServerRequest {
    /**
     * The name of the zone to check status
     * @type string
     * @memberof CheckNameServersApicheckNameServer
     */
    zone: string
}

export class ObjectCheckNameServersApi {
    private api: ObservableCheckNameServersApi

    public constructor(configuration: Configuration, requestFactory?: CheckNameServersApiRequestFactory, responseProcessor?: CheckNameServersApiResponseProcessor) {
        this.api = new ObservableCheckNameServersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * check nameserver of zone
     * check nameserver
     * @param param the request object
     */
    public checkNameServerWithHttpInfo(param: CheckNameServersApiCheckNameServerRequest, options?: Configuration): Promise<HttpInfo<Submitted>> {
        return this.api.checkNameServerWithHttpInfo(param.zone,  options).toPromise();
    }

    /**
     * check nameserver of zone
     * check nameserver
     * @param param the request object
     */
    public checkNameServer(param: CheckNameServersApiCheckNameServerRequest, options?: Configuration): Promise<Submitted> {
        return this.api.checkNameServer(param.zone,  options).toPromise();
    }

}

import { ObservableDnsRecordApi } from "./ObservableAPI";
import { DnsRecordApiRequestFactory, DnsRecordApiResponseProcessor} from "../apis/DnsRecordApi";

export interface DnsRecordApiCreateDnsRecordRequest {
    /**
     * The name of the zone to delete
     * @type string
     * @memberof DnsRecordApicreateDnsRecord
     */
    zone: string
    /**
     * 
     * @type DnsRecord
     * @memberof DnsRecordApicreateDnsRecord
     */
    dnsRecord: DnsRecord
}

export interface DnsRecordApiDeleteDnsRecordRequest {
    /**
     * The name of the zone to delete dns record
     * @type string
     * @memberof DnsRecordApideleteDnsRecord
     */
    zone: string
    /**
     * The id of dns record to delete its data
     * @type string
     * @memberof DnsRecordApideleteDnsRecord
     */
    id: string
}

export interface DnsRecordApiEditDnsRecordRequest {
    /**
     * The name of the zone to edit dns record
     * @type string
     * @memberof DnsRecordApieditDnsRecord
     */
    zone: string
    /**
     * The id of dns record to edit its data
     * @type string
     * @memberof DnsRecordApieditDnsRecord
     */
    id: string
    /**
     * 
     * @type DnsRecord
     * @memberof DnsRecordApieditDnsRecord
     */
    dnsRecord: DnsRecord
}

export interface DnsRecordApiGetDnsRecordRequest {
    /**
     * The name of the zone to see dns record
     * @type string
     * @memberof DnsRecordApigetDnsRecord
     */
    zone: string
    /**
     * The id of dns record to see its data
     * @type string
     * @memberof DnsRecordApigetDnsRecord
     */
    id: string
}

export interface DnsRecordApiGetListDnsRecordsRequest {
    /**
     * The name of the zone to see all dns records
     * @type string
     * @memberof DnsRecordApigetListDnsRecords
     */
    zone: string
}

export class ObjectDnsRecordApi {
    private api: ObservableDnsRecordApi

    public constructor(configuration: Configuration, requestFactory?: DnsRecordApiRequestFactory, responseProcessor?: DnsRecordApiResponseProcessor) {
        this.api = new ObservableDnsRecordApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new dns record, returns the dns record on creation
     * Create dns record
     * @param param the request object
     */
    public createDnsRecordWithHttpInfo(param: DnsRecordApiCreateDnsRecordRequest, options?: Configuration): Promise<HttpInfo<DnsRecordResponse>> {
        return this.api.createDnsRecordWithHttpInfo(param.zone, param.dnsRecord,  options).toPromise();
    }

    /**
     * Creates a new dns record, returns the dns record on creation
     * Create dns record
     * @param param the request object
     */
    public createDnsRecord(param: DnsRecordApiCreateDnsRecordRequest, options?: Configuration): Promise<DnsRecordResponse> {
        return this.api.createDnsRecord(param.zone, param.dnsRecord,  options).toPromise();
    }

    /**
     * Delete dns record from this zone
     * delete dns record
     * @param param the request object
     */
    public deleteDnsRecordWithHttpInfo(param: DnsRecordApiDeleteDnsRecordRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDnsRecordWithHttpInfo(param.zone, param.id,  options).toPromise();
    }

    /**
     * Delete dns record from this zone
     * delete dns record
     * @param param the request object
     */
    public deleteDnsRecord(param: DnsRecordApiDeleteDnsRecordRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDnsRecord(param.zone, param.id,  options).toPromise();
    }

    /**
     * you can not edit type of dns record
     * edit dns record
     * @param param the request object
     */
    public editDnsRecordWithHttpInfo(param: DnsRecordApiEditDnsRecordRequest, options?: Configuration): Promise<HttpInfo<DnsRecordResponse>> {
        return this.api.editDnsRecordWithHttpInfo(param.zone, param.id, param.dnsRecord,  options).toPromise();
    }

    /**
     * you can not edit type of dns record
     * edit dns record
     * @param param the request object
     */
    public editDnsRecord(param: DnsRecordApiEditDnsRecordRequest, options?: Configuration): Promise<DnsRecordResponse> {
        return this.api.editDnsRecord(param.zone, param.id, param.dnsRecord,  options).toPromise();
    }

    /**
     * Get Dns Record data on this zone
     * Get dns record
     * @param param the request object
     */
    public getDnsRecordWithHttpInfo(param: DnsRecordApiGetDnsRecordRequest, options?: Configuration): Promise<HttpInfo<DnsRecordResponse>> {
        return this.api.getDnsRecordWithHttpInfo(param.zone, param.id,  options).toPromise();
    }

    /**
     * Get Dns Record data on this zone
     * Get dns record
     * @param param the request object
     */
    public getDnsRecord(param: DnsRecordApiGetDnsRecordRequest, options?: Configuration): Promise<DnsRecordResponse> {
        return this.api.getDnsRecord(param.zone, param.id,  options).toPromise();
    }

    /**
     * Get all Dns Records on this zone
     * Get all dns record
     * @param param the request object
     */
    public getListDnsRecordsWithHttpInfo(param: DnsRecordApiGetListDnsRecordsRequest, options?: Configuration): Promise<HttpInfo<AllDnsRecordResponse>> {
        return this.api.getListDnsRecordsWithHttpInfo(param.zone,  options).toPromise();
    }

    /**
     * Get all Dns Records on this zone
     * Get all dns record
     * @param param the request object
     */
    public getListDnsRecords(param: DnsRecordApiGetListDnsRecordsRequest, options?: Configuration): Promise<AllDnsRecordResponse> {
        return this.api.getListDnsRecords(param.zone,  options).toPromise();
    }

}

import { ObservableZoneApi } from "./ObservableAPI";
import { ZoneApiRequestFactory, ZoneApiResponseProcessor} from "../apis/ZoneApi";

export interface ZoneApiCreateZoneRequest {
    /**
     * The zone to create
     * @type CreateZoneRequest
     * @memberof ZoneApicreateZone
     */
    zoneStruct: CreateZoneRequest
}

export interface ZoneApiDeleteZoneRequest {
    /**
     * The name of the zone to delete
     * @type string
     * @memberof ZoneApideleteZone
     */
    zone: string
}

export interface ZoneApiGetListZonesRequest {
}

export interface ZoneApiGetZoneRequest {
    /**
     * The name of the zone to delete
     * @type string
     * @memberof ZoneApigetZone
     */
    zone: string
}

export class ObjectZoneApi {
    private api: ObservableZoneApi

    public constructor(configuration: Configuration, requestFactory?: ZoneApiRequestFactory, responseProcessor?: ZoneApiResponseProcessor) {
        this.api = new ObservableZoneApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * creates a new zone on dns server
     * Create Zone
     * @param param the request object
     */
    public createZoneWithHttpInfo(param: ZoneApiCreateZoneRequest, options?: Configuration): Promise<HttpInfo<Zone>> {
        return this.api.createZoneWithHttpInfo(param.zoneStruct,  options).toPromise();
    }

    /**
     * creates a new zone on dns server
     * Create Zone
     * @param param the request object
     */
    public createZone(param: ZoneApiCreateZoneRequest, options?: Configuration): Promise<Zone> {
        return this.api.createZone(param.zoneStruct,  options).toPromise();
    }

    /**
     * Deletes this zone, all dns records
     * Delete Zone
     * @param param the request object
     */
    public deleteZoneWithHttpInfo(param: ZoneApiDeleteZoneRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteZoneWithHttpInfo(param.zone,  options).toPromise();
    }

    /**
     * Deletes this zone, all dns records
     * Delete Zone
     * @param param the request object
     */
    public deleteZone(param: ZoneApiDeleteZoneRequest, options?: Configuration): Promise<void> {
        return this.api.deleteZone(param.zone,  options).toPromise();
    }

    /**
     * list all zones that user owns
     * List all zones
     * @param param the request object
     */
    public getListZonesWithHttpInfo(param: ZoneApiGetListZonesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Zone>>> {
        return this.api.getListZonesWithHttpInfo( options).toPromise();
    }

    /**
     * list all zones that user owns
     * List all zones
     * @param param the request object
     */
    public getListZones(param: ZoneApiGetListZonesRequest = {}, options?: Configuration): Promise<Array<Zone>> {
        return this.api.getListZones( options).toPromise();
    }

    /**
     * Get this zone, all dns records
     * Get Zone
     * @param param the request object
     */
    public getZoneWithHttpInfo(param: ZoneApiGetZoneRequest, options?: Configuration): Promise<HttpInfo<Zone>> {
        return this.api.getZoneWithHttpInfo(param.zone,  options).toPromise();
    }

    /**
     * Get this zone, all dns records
     * Get Zone
     * @param param the request object
     */
    public getZone(param: ZoneApiGetZoneRequest, options?: Configuration): Promise<Zone> {
        return this.api.getZone(param.zone,  options).toPromise();
    }

}
