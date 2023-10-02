import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CreateDatabases } from '../models/CreateDatabases';
import { DBDetails } from '../models/DBDetails';
import { DBDetailsDatabase } from '../models/DBDetailsDatabase';
import { DBDetailsDatabaseMetaData } from '../models/DBDetailsDatabaseMetaData';
import { DBDetailsDatabaseNode } from '../models/DBDetailsDatabaseNode';
import { DBsDetails } from '../models/DBsDetails';
import { DBsDetailsDatabasesInner } from '../models/DBsDetailsDatabasesInner';
import { ResizeDatabaseRequest } from '../models/ResizeDatabaseRequest';
import { TurnDatabaseRequest } from '../models/TurnDatabaseRequest';

import { BackupsApiRequestFactory, BackupsApiResponseProcessor} from "../apis/BackupsApi";
export class ObservableBackupsApi {
    private requestFactory: BackupsApiRequestFactory;
    private responseProcessor: BackupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BackupsApiRequestFactory,
        responseProcessor?: BackupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BackupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BackupsApiResponseProcessor();
    }

    /**
     * backup a database that user owns
     * Backup a database
     * @param id 
     */
    public createBackupWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createBackup(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * backup a database that user owns
     * Backup a database
     * @param id 
     */
    public createBackup(id: string, _options?: Configuration): Observable<void> {
        return this.createBackupWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * download a backup that user owns
     * Download a backup
     * @param id The id of your database
     * @param name The name of your backup
     */
    public downloadBackupWithHttpInfo(id: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.downloadBackup(id, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadBackupWithHttpInfo(rsp)));
            }));
    }

    /**
     * download a backup that user owns
     * Download a backup
     * @param id The id of your database
     * @param name The name of your backup
     */
    public downloadBackup(id: string, name: string, _options?: Configuration): Observable<void> {
        return this.downloadBackupWithHttpInfo(id, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get all backups that user owns
     * Get all backups
     * @param id 
     */
    public getListBackupsWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getListBackups(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListBackupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all backups that user owns
     * Get all backups
     * @param id 
     */
    public getListBackups(id: string, _options?: Configuration): Observable<void> {
        return this.getListBackupsWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";
export class ObservableDatabasesApi {
    private requestFactory: DatabasesApiRequestFactory;
    private responseProcessor: DatabasesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabasesApiRequestFactory,
        responseProcessor?: DatabasesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DatabasesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DatabasesApiResponseProcessor();
    }

    /**
     * change control-panel status that user owns
     * Change control-panel status
     * @param id 
     * @param status 
     */
    public changeControlPanelWithHttpInfo(id: string, status: 'enable' | 'disable', _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.changeControlPanel(id, status, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changeControlPanelWithHttpInfo(rsp)));
            }));
    }

    /**
     * change control-panel status that user owns
     * Change control-panel status
     * @param id 
     * @param status 
     */
    public changeControlPanel(id: string, status: 'enable' | 'disable', _options?: Configuration): Observable<void> {
        return this.changeControlPanelWithHttpInfo(id, status, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * change public network status that user owns
     * Change public network status
     * @param id 
     * @param status 
     */
    public changePublicNetworkWithHttpInfo(id: string, status: 'enable' | 'disable', _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.changePublicNetwork(id, status, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changePublicNetworkWithHttpInfo(rsp)));
            }));
    }

    /**
     * change public network status that user owns
     * Change public network status
     * @param id 
     * @param status 
     */
    public changePublicNetwork(id: string, status: 'enable' | 'disable', _options?: Configuration): Observable<void> {
        return this.changePublicNetworkWithHttpInfo(id, status, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * create a database that user owns
     * Create a database
     * @param createADatabases 
     */
    public createDatabaseWithHttpInfo(createADatabases: CreateDatabases, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createDatabase(createADatabases, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDatabaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * create a database that user owns
     * Create a database
     * @param createADatabases 
     */
    public createDatabase(createADatabases: CreateDatabases, _options?: Configuration): Observable<void> {
        return this.createDatabaseWithHttpInfo(createADatabases, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * delete a database that user owns
     * Delete a database
     * @param id 
     */
    public deleteDatabaseWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDatabase(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDatabaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete a database that user owns
     * Delete a database
     * @param id 
     */
    public deleteDatabase(id: string, _options?: Configuration): Observable<void> {
        return this.deleteDatabaseWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get a database that user owns
     * Get a database
     * @param id 
     */
    public getDatabaseWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<DBDetails>> {
        const requestContextPromise = this.requestFactory.getDatabase(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * get a database that user owns
     * Get a database
     * @param id 
     */
    public getDatabase(id: string, _options?: Configuration): Observable<DBDetails> {
        return this.getDatabaseWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<DBDetails>) => apiResponse.data));
    }

    /**
     * get all databases that user owns
     * Get all databases
     */
    public getListDatabasesWithHttpInfo(_options?: Configuration): Observable<HttpInfo<DBsDetails>> {
        const requestContextPromise = this.requestFactory.getListDatabases(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListDatabasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all databases that user owns
     * Get all databases
     */
    public getListDatabases(_options?: Configuration): Observable<DBsDetails> {
        return this.getListDatabasesWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<DBsDetails>) => apiResponse.data));
    }

    /**
     * resize a database that user owns
     * Resize a database
     * @param id 
     * @param resize 
     */
    public resizeDatabaseWithHttpInfo(id: string, resize: ResizeDatabaseRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resizeDatabase(id, resize, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resizeDatabaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * resize a database that user owns
     * Resize a database
     * @param id 
     * @param resize 
     */
    public resizeDatabase(id: string, resize: ResizeDatabaseRequest, _options?: Configuration): Observable<void> {
        return this.resizeDatabaseWithHttpInfo(id, resize, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * power on or power off a database that user owns
     * Power on or power off a database
     * @param id 
     * @param scale 1 for power on or 0 for power off
     */
    public turnDatabaseWithHttpInfo(id: string, scale: TurnDatabaseRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.turnDatabase(id, scale, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.turnDatabaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * power on or power off a database that user owns
     * Power on or power off a database
     * @param id 
     * @param scale 1 for power on or 0 for power off
     */
    public turnDatabase(id: string, scale: TurnDatabaseRequest, _options?: Configuration): Observable<void> {
        return this.turnDatabaseWithHttpInfo(id, scale, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";
export class ObservableReportsApi {
    private requestFactory: ReportsApiRequestFactory;
    private responseProcessor: ReportsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ReportsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ReportsApiResponseProcessor();
    }

    /**
     * get cpu reports of database that user owns
     * Get cpu reports of database
     * @param id The name of your database
     * @param since The since of your cpu reports
     */
    public getDatabaseCpuReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDatabaseCpuReports(id, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseCpuReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get cpu reports of database that user owns
     * Get cpu reports of database
     * @param id The name of your database
     * @param since The since of your cpu reports
     */
    public getDatabaseCpuReports(id: string, since: number, _options?: Configuration): Observable<void> {
        return this.getDatabaseCpuReportsWithHttpInfo(id, since, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get memory reports of database that user owns
     * Get memory reports of database
     * @param id The name of your database
     * @param since The since of your memory reports
     */
    public getDatabaseMemoryReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDatabaseMemoryReports(id, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseMemoryReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get memory reports of database that user owns
     * Get memory reports of database
     * @param id The name of your database
     * @param since The since of your memory reports
     */
    public getDatabaseMemoryReports(id: string, since: number, _options?: Configuration): Observable<void> {
        return this.getDatabaseMemoryReportsWithHttpInfo(id, since, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get network-receive reports of database that user owns
     * Get network-receive reports of database
     * @param id The name of your database
     * @param since The since of your network-receive reports
     */
    public getDatabaseNetworkReceiveReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDatabaseNetworkReceiveReports(id, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseNetworkReceiveReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get network-receive reports of database that user owns
     * Get network-receive reports of database
     * @param id The name of your database
     * @param since The since of your network-receive reports
     */
    public getDatabaseNetworkReceiveReports(id: string, since: number, _options?: Configuration): Observable<void> {
        return this.getDatabaseNetworkReceiveReportsWithHttpInfo(id, since, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get network-transmit reports of database that user owns
     * Get network-transmit reports of database
     * @param id The name of your database
     * @param since The since of your network-transmit reports
     */
    public getDatabaseNetworkTransmitReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDatabaseNetworkTransmitReports(id, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseNetworkTransmitReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get network-transmit reports of database that user owns
     * Get network-transmit reports of database
     * @param id The name of your database
     * @param since The since of your network-transmit reports
     */
    public getDatabaseNetworkTransmitReports(id: string, since: number, _options?: Configuration): Observable<void> {
        return this.getDatabaseNetworkTransmitReportsWithHttpInfo(id, since, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get summary reports of database that user owns
     * Get summary reports of database
     * @param id The name of your database
     */
    public getDatabaseSummaryReportsWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getDatabaseSummaryReports(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDatabaseSummaryReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get summary reports of database that user owns
     * Get summary reports of database
     * @param id The name of your database
     */
    public getDatabaseSummaryReports(id: string, _options?: Configuration): Observable<void> {
        return this.getDatabaseSummaryReportsWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
