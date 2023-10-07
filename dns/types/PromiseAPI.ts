import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { AllDnsRecordResponse } from '../models/AllDnsRecordResponse';
import { CreateZone } from '../models/CreateZone';
import { CreateZoneRequest } from '../models/CreateZoneRequest';
import { DnsRecord } from '../models/DnsRecord';
import { DnsRecordId } from '../models/DnsRecordId';
import { DnsRecordResponse } from '../models/DnsRecordResponse';
import { Submitted } from '../models/Submitted';
import { Zone } from '../models/Zone';
import { Zones } from '../models/Zones';
import { ObservableCheckNameServersApi } from './ObservableAPI';

import { CheckNameServersApiRequestFactory, CheckNameServersApiResponseProcessor} from "../apis/CheckNameServersApi";
export class PromiseCheckNameServersApi {
    private api: ObservableCheckNameServersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CheckNameServersApiRequestFactory,
        responseProcessor?: CheckNameServersApiResponseProcessor
    ) {
        this.api = new ObservableCheckNameServersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * check nameserver of zone
     * check nameserver
     * @param zone The name of the zone to check status
     */
    public checkNameServerWithHttpInfo(zone: string, _options?: Configuration): Promise<HttpInfo<Submitted>> {
        const result = this.api.checkNameServerWithHttpInfo(zone, _options);
        return result.toPromise();
    }

    /**
     * check nameserver of zone
     * check nameserver
     * @param zone The name of the zone to check status
     */
    public checkNameServer(zone: string, _options?: Configuration): Promise<Submitted> {
        const result = this.api.checkNameServer(zone, _options);
        return result.toPromise();
    }


}



import { ObservableDnsRecordApi } from './ObservableAPI';

import { DnsRecordApiRequestFactory, DnsRecordApiResponseProcessor} from "../apis/DnsRecordApi";
export class PromiseDnsRecordApi {
    private api: ObservableDnsRecordApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DnsRecordApiRequestFactory,
        responseProcessor?: DnsRecordApiResponseProcessor
    ) {
        this.api = new ObservableDnsRecordApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new dns record, returns the dns record on creation
     * Create dns record
     * @param zone The name of the zone to delete
     * @param dnsRecord 
     */
    public createDnsRecordWithHttpInfo(zone: string, dnsRecord: DnsRecord, _options?: Configuration): Promise<HttpInfo<DnsRecordResponse>> {
        const result = this.api.createDnsRecordWithHttpInfo(zone, dnsRecord, _options);
        return result.toPromise();
    }

    /**
     * Creates a new dns record, returns the dns record on creation
     * Create dns record
     * @param zone The name of the zone to delete
     * @param dnsRecord 
     */
    public createDnsRecord(zone: string, dnsRecord: DnsRecord, _options?: Configuration): Promise<DnsRecordResponse> {
        const result = this.api.createDnsRecord(zone, dnsRecord, _options);
        return result.toPromise();
    }

    /**
     * Delete dns record from this zone
     * delete dns record
     * @param zone The name of the zone to delete dns record
     * @param id The id of dns record to delete its data
     */
    public deleteDnsRecordWithHttpInfo(zone: string, id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDnsRecordWithHttpInfo(zone, id, _options);
        return result.toPromise();
    }

    /**
     * Delete dns record from this zone
     * delete dns record
     * @param zone The name of the zone to delete dns record
     * @param id The id of dns record to delete its data
     */
    public deleteDnsRecord(zone: string, id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDnsRecord(zone, id, _options);
        return result.toPromise();
    }

    /**
     * you can not edit type of dns record
     * edit dns record
     * @param zone The name of the zone to edit dns record
     * @param id The id of dns record to edit its data
     * @param dnsRecord 
     */
    public editDnsRecordWithHttpInfo(zone: string, id: string, dnsRecord: DnsRecord, _options?: Configuration): Promise<HttpInfo<DnsRecordResponse>> {
        const result = this.api.editDnsRecordWithHttpInfo(zone, id, dnsRecord, _options);
        return result.toPromise();
    }

    /**
     * you can not edit type of dns record
     * edit dns record
     * @param zone The name of the zone to edit dns record
     * @param id The id of dns record to edit its data
     * @param dnsRecord 
     */
    public editDnsRecord(zone: string, id: string, dnsRecord: DnsRecord, _options?: Configuration): Promise<DnsRecordResponse> {
        const result = this.api.editDnsRecord(zone, id, dnsRecord, _options);
        return result.toPromise();
    }

    /**
     * Get Dns Record data on this zone
     * Get dns record
     * @param zone The name of the zone to see dns record
     * @param id The id of dns record to see its data
     */
    public getDnsRecordWithHttpInfo(zone: string, id: string, _options?: Configuration): Promise<HttpInfo<DnsRecordResponse>> {
        const result = this.api.getDnsRecordWithHttpInfo(zone, id, _options);
        return result.toPromise();
    }

    /**
     * Get Dns Record data on this zone
     * Get dns record
     * @param zone The name of the zone to see dns record
     * @param id The id of dns record to see its data
     */
    public getDnsRecord(zone: string, id: string, _options?: Configuration): Promise<DnsRecordResponse> {
        const result = this.api.getDnsRecord(zone, id, _options);
        return result.toPromise();
    }

    /**
     * Get all Dns Records on this zone
     * Get all dns record
     * @param zone The name of the zone to see all dns records
     */
    public getListDnsRecordsWithHttpInfo(zone: string, _options?: Configuration): Promise<HttpInfo<AllDnsRecordResponse>> {
        const result = this.api.getListDnsRecordsWithHttpInfo(zone, _options);
        return result.toPromise();
    }

    /**
     * Get all Dns Records on this zone
     * Get all dns record
     * @param zone The name of the zone to see all dns records
     */
    public getListDnsRecords(zone: string, _options?: Configuration): Promise<AllDnsRecordResponse> {
        const result = this.api.getListDnsRecords(zone, _options);
        return result.toPromise();
    }


}



import { ObservableZoneApi } from './ObservableAPI';

import { ZoneApiRequestFactory, ZoneApiResponseProcessor} from "../apis/ZoneApi";
export class PromiseZoneApi {
    private api: ObservableZoneApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ZoneApiRequestFactory,
        responseProcessor?: ZoneApiResponseProcessor
    ) {
        this.api = new ObservableZoneApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * creates a new zone on dns server
     * Create Zone
     * @param zoneStruct The zone to create
     */
    public createZoneWithHttpInfo(zoneStruct: CreateZoneRequest, _options?: Configuration): Promise<HttpInfo<CreateZone>> {
        const result = this.api.createZoneWithHttpInfo(zoneStruct, _options);
        return result.toPromise();
    }

    /**
     * creates a new zone on dns server
     * Create Zone
     * @param zoneStruct The zone to create
     */
    public createZone(zoneStruct: CreateZoneRequest, _options?: Configuration): Promise<CreateZone> {
        const result = this.api.createZone(zoneStruct, _options);
        return result.toPromise();
    }

    /**
     * Deletes this zone, all dns records
     * Delete Zone
     * @param zone The name of the zone to delete
     */
    public deleteZoneWithHttpInfo(zone: string, _options?: Configuration): Promise<HttpInfo<Submitted | void>> {
        const result = this.api.deleteZoneWithHttpInfo(zone, _options);
        return result.toPromise();
    }

    /**
     * Deletes this zone, all dns records
     * Delete Zone
     * @param zone The name of the zone to delete
     */
    public deleteZone(zone: string, _options?: Configuration): Promise<Submitted | void> {
        const result = this.api.deleteZone(zone, _options);
        return result.toPromise();
    }

    /**
     * list all zones that user owns
     * List all zones
     */
    public getListZonesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Zones>> {
        const result = this.api.getListZonesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * list all zones that user owns
     * List all zones
     */
    public getListZones(_options?: Configuration): Promise<Zones> {
        const result = this.api.getListZones(_options);
        return result.toPromise();
    }

    /**
     * Get this zone, all dns records
     * Get Zone
     * @param zone The name of the zone
     */
    public getZoneWithHttpInfo(zone: string, _options?: Configuration): Promise<HttpInfo<CreateZone>> {
        const result = this.api.getZoneWithHttpInfo(zone, _options);
        return result.toPromise();
    }

    /**
     * Get this zone, all dns records
     * Get Zone
     * @param zone The name of the zone
     */
    public getZone(zone: string, _options?: Configuration): Promise<CreateZone> {
        const result = this.api.getZone(zone, _options);
        return result.toPromise();
    }


}



