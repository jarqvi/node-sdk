import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { AllDnsRecordResponse } from '../models/AllDnsRecordResponse';
import { CreateZoneRequest } from '../models/CreateZoneRequest';
import { DnsRecord } from '../models/DnsRecord';
import { DnsRecordId } from '../models/DnsRecordId';
import { DnsRecordResponse } from '../models/DnsRecordResponse';
import { Submitted } from '../models/Submitted';
import { Zone } from '../models/Zone';

import { CheckNameServersApiRequestFactory, CheckNameServersApiResponseProcessor} from "../apis/CheckNameServersApi";
export class ObservableCheckNameServersApi {
    private requestFactory: CheckNameServersApiRequestFactory;
    private responseProcessor: CheckNameServersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CheckNameServersApiRequestFactory,
        responseProcessor?: CheckNameServersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CheckNameServersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CheckNameServersApiResponseProcessor();
    }

    /**
     * check nameserver of zone
     * check nameserver
     * @param zone The name of the zone to check status
     */
    public checkNameServerWithHttpInfo(zone: string, _options?: Configuration): Observable<HttpInfo<Submitted>> {
        const requestContextPromise = this.requestFactory.checkNameServer(zone, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkNameServerWithHttpInfo(rsp)));
            }));
    }

    /**
     * check nameserver of zone
     * check nameserver
     * @param zone The name of the zone to check status
     */
    public checkNameServer(zone: string, _options?: Configuration): Observable<Submitted> {
        return this.checkNameServerWithHttpInfo(zone, _options).pipe(map((apiResponse: HttpInfo<Submitted>) => apiResponse.data));
    }

}

import { DnsRecordApiRequestFactory, DnsRecordApiResponseProcessor} from "../apis/DnsRecordApi";
export class ObservableDnsRecordApi {
    private requestFactory: DnsRecordApiRequestFactory;
    private responseProcessor: DnsRecordApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DnsRecordApiRequestFactory,
        responseProcessor?: DnsRecordApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DnsRecordApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DnsRecordApiResponseProcessor();
    }

    /**
     * Creates a new dns record, returns the dns record on creation
     * Create dns record
     * @param zone The name of the zone to delete
     * @param dnsRecord 
     */
    public createDnsRecordWithHttpInfo(zone: string, dnsRecord: DnsRecord, _options?: Configuration): Observable<HttpInfo<DnsRecordResponse>> {
        const requestContextPromise = this.requestFactory.createDnsRecord(zone, dnsRecord, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDnsRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new dns record, returns the dns record on creation
     * Create dns record
     * @param zone The name of the zone to delete
     * @param dnsRecord 
     */
    public createDnsRecord(zone: string, dnsRecord: DnsRecord, _options?: Configuration): Observable<DnsRecordResponse> {
        return this.createDnsRecordWithHttpInfo(zone, dnsRecord, _options).pipe(map((apiResponse: HttpInfo<DnsRecordResponse>) => apiResponse.data));
    }

    /**
     * Delete dns record from this zone
     * delete dns record
     * @param zone The name of the zone to delete dns record
     * @param id The id of dns record to delete its data
     */
    public deleteDnsRecordWithHttpInfo(zone: string, id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDnsRecord(zone, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDnsRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete dns record from this zone
     * delete dns record
     * @param zone The name of the zone to delete dns record
     * @param id The id of dns record to delete its data
     */
    public deleteDnsRecord(zone: string, id: string, _options?: Configuration): Observable<void> {
        return this.deleteDnsRecordWithHttpInfo(zone, id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * you can not edit type of dns record
     * edit dns record
     * @param zone The name of the zone to edit dns record
     * @param id The id of dns record to edit its data
     * @param dnsRecord 
     */
    public editDnsRecordWithHttpInfo(zone: string, id: string, dnsRecord: DnsRecord, _options?: Configuration): Observable<HttpInfo<DnsRecordResponse>> {
        const requestContextPromise = this.requestFactory.editDnsRecord(zone, id, dnsRecord, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.editDnsRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * you can not edit type of dns record
     * edit dns record
     * @param zone The name of the zone to edit dns record
     * @param id The id of dns record to edit its data
     * @param dnsRecord 
     */
    public editDnsRecord(zone: string, id: string, dnsRecord: DnsRecord, _options?: Configuration): Observable<DnsRecordResponse> {
        return this.editDnsRecordWithHttpInfo(zone, id, dnsRecord, _options).pipe(map((apiResponse: HttpInfo<DnsRecordResponse>) => apiResponse.data));
    }

    /**
     * Get Dns Record data on this zone
     * Get dns record
     * @param zone The name of the zone to see dns record
     * @param id The id of dns record to see its data
     */
    public getDnsRecordWithHttpInfo(zone: string, id: string, _options?: Configuration): Observable<HttpInfo<DnsRecordResponse>> {
        const requestContextPromise = this.requestFactory.getDnsRecord(zone, id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDnsRecordWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Dns Record data on this zone
     * Get dns record
     * @param zone The name of the zone to see dns record
     * @param id The id of dns record to see its data
     */
    public getDnsRecord(zone: string, id: string, _options?: Configuration): Observable<DnsRecordResponse> {
        return this.getDnsRecordWithHttpInfo(zone, id, _options).pipe(map((apiResponse: HttpInfo<DnsRecordResponse>) => apiResponse.data));
    }

    /**
     * Get all Dns Records on this zone
     * Get all dns record
     * @param zone The name of the zone to see all dns records
     */
    public getListDnsRecordsWithHttpInfo(zone: string, _options?: Configuration): Observable<HttpInfo<AllDnsRecordResponse>> {
        const requestContextPromise = this.requestFactory.getListDnsRecords(zone, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListDnsRecordsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get all Dns Records on this zone
     * Get all dns record
     * @param zone The name of the zone to see all dns records
     */
    public getListDnsRecords(zone: string, _options?: Configuration): Observable<AllDnsRecordResponse> {
        return this.getListDnsRecordsWithHttpInfo(zone, _options).pipe(map((apiResponse: HttpInfo<AllDnsRecordResponse>) => apiResponse.data));
    }

}

import { ZoneApiRequestFactory, ZoneApiResponseProcessor} from "../apis/ZoneApi";
export class ObservableZoneApi {
    private requestFactory: ZoneApiRequestFactory;
    private responseProcessor: ZoneApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ZoneApiRequestFactory,
        responseProcessor?: ZoneApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ZoneApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ZoneApiResponseProcessor();
    }

    /**
     * creates a new zone on dns server
     * Create Zone
     * @param zoneStruct The zone to create
     */
    public createZoneWithHttpInfo(zoneStruct: CreateZoneRequest, _options?: Configuration): Observable<HttpInfo<Zone>> {
        const requestContextPromise = this.requestFactory.createZone(zoneStruct, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createZoneWithHttpInfo(rsp)));
            }));
    }

    /**
     * creates a new zone on dns server
     * Create Zone
     * @param zoneStruct The zone to create
     */
    public createZone(zoneStruct: CreateZoneRequest, _options?: Configuration): Observable<Zone> {
        return this.createZoneWithHttpInfo(zoneStruct, _options).pipe(map((apiResponse: HttpInfo<Zone>) => apiResponse.data));
    }

    /**
     * Deletes this zone, all dns records
     * Delete Zone
     * @param zone The name of the zone to delete
     */
    public deleteZoneWithHttpInfo(zone: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteZone(zone, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteZoneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Deletes this zone, all dns records
     * Delete Zone
     * @param zone The name of the zone to delete
     */
    public deleteZone(zone: string, _options?: Configuration): Observable<void> {
        return this.deleteZoneWithHttpInfo(zone, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * list all zones that user owns
     * List all zones
     */
    public getListZonesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Array<Zone>>> {
        const requestContextPromise = this.requestFactory.getListZones(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListZonesWithHttpInfo(rsp)));
            }));
    }

    /**
     * list all zones that user owns
     * List all zones
     */
    public getListZones(_options?: Configuration): Observable<Array<Zone>> {
        return this.getListZonesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Array<Zone>>) => apiResponse.data));
    }

    /**
     * Get this zone, all dns records
     * Get Zone
     * @param zone The name of the zone to delete
     */
    public getZoneWithHttpInfo(zone: string, _options?: Configuration): Observable<HttpInfo<Zone>> {
        const requestContextPromise = this.requestFactory.getZone(zone, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getZoneWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get this zone, all dns records
     * Get Zone
     * @param zone The name of the zone to delete
     */
    public getZone(zone: string, _options?: Configuration): Observable<Zone> {
        return this.getZoneWithHttpInfo(zone, _options).pipe(map((apiResponse: HttpInfo<Zone>) => apiResponse.data));
    }

}
