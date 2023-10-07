import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { ChangeControlPanel200Response } from '../models/ChangeControlPanel200Response';
import { CreateDatabase200Response } from '../models/CreateDatabase200Response';
import { CreateDatabases } from '../models/CreateDatabases';
import { CreateDatabasesOptions } from '../models/CreateDatabasesOptions';
import { DBDetails } from '../models/DBDetails';
import { DBDetailsDatabase } from '../models/DBDetailsDatabase';
import { DBDetailsDatabaseMetaData } from '../models/DBDetailsDatabaseMetaData';
import { DBDetailsDatabaseNode } from '../models/DBDetailsDatabaseNode';
import { DBsDetails } from '../models/DBsDetails';
import { DBsDetailsDatabasesInner } from '../models/DBsDetailsDatabasesInner';
import { DownloadBackup200Response } from '../models/DownloadBackup200Response';
import { GetDatabaseSummaryReports200Response } from '../models/GetDatabaseSummaryReports200Response';
import { GetDatabaseSummaryReports200ResponseCpuUsageInner } from '../models/GetDatabaseSummaryReports200ResponseCpuUsageInner';
import { GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner } from '../models/GetDatabaseSummaryReports200ResponseCpuUsageInnerValueInner';
import { GetDatabaseSummaryReports200ResponseDisksUsageInner } from '../models/GetDatabaseSummaryReports200ResponseDisksUsageInner';
import { GetListBackups200Response } from '../models/GetListBackups200Response';
import { GetListBackups200ResponseBackupsInner } from '../models/GetListBackups200ResponseBackupsInner';
import { Reports } from '../models/Reports';
import { ReportsResultInner } from '../models/ReportsResultInner';
import { ResizeDatabaseRequest } from '../models/ResizeDatabaseRequest';
import { TurnDatabaseRequest } from '../models/TurnDatabaseRequest';
import { ObservableBackupsApi } from './ObservableAPI';

import { BackupsApiRequestFactory, BackupsApiResponseProcessor} from "../apis/BackupsApi";
export class PromiseBackupsApi {
    private api: ObservableBackupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BackupsApiRequestFactory,
        responseProcessor?: BackupsApiResponseProcessor
    ) {
        this.api = new ObservableBackupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * backup a database that user owns
     * Backup a database
     * @param id 
     */
    public createBackupWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createBackupWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * backup a database that user owns
     * Backup a database
     * @param id 
     */
    public createBackup(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.createBackup(id, _options);
        return result.toPromise();
    }

    /**
     * download a backup that user owns
     * Download a backup
     * @param id The id of your database
     * @param name The name of your backup
     */
    public downloadBackupWithHttpInfo(id: string, name: string, _options?: Configuration): Promise<HttpInfo<DownloadBackup200Response>> {
        const result = this.api.downloadBackupWithHttpInfo(id, name, _options);
        return result.toPromise();
    }

    /**
     * download a backup that user owns
     * Download a backup
     * @param id The id of your database
     * @param name The name of your backup
     */
    public downloadBackup(id: string, name: string, _options?: Configuration): Promise<DownloadBackup200Response> {
        const result = this.api.downloadBackup(id, name, _options);
        return result.toPromise();
    }

    /**
     * get all backups that user owns
     * Get all backups
     * @param id 
     */
    public getListBackupsWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<GetListBackups200Response>> {
        const result = this.api.getListBackupsWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * get all backups that user owns
     * Get all backups
     * @param id 
     */
    public getListBackups(id: string, _options?: Configuration): Promise<GetListBackups200Response> {
        const result = this.api.getListBackups(id, _options);
        return result.toPromise();
    }


}



import { ObservableDatabasesApi } from './ObservableAPI';

import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";
export class PromiseDatabasesApi {
    private api: ObservableDatabasesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DatabasesApiRequestFactory,
        responseProcessor?: DatabasesApiResponseProcessor
    ) {
        this.api = new ObservableDatabasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * change control-panel status that user owns
     * Change control-panel status
     * @param id 
     * @param status 
     */
    public changeControlPanelWithHttpInfo(id: string, status: 'enable' | 'disable', _options?: Configuration): Promise<HttpInfo<ChangeControlPanel200Response>> {
        const result = this.api.changeControlPanelWithHttpInfo(id, status, _options);
        return result.toPromise();
    }

    /**
     * change control-panel status that user owns
     * Change control-panel status
     * @param id 
     * @param status 
     */
    public changeControlPanel(id: string, status: 'enable' | 'disable', _options?: Configuration): Promise<ChangeControlPanel200Response> {
        const result = this.api.changeControlPanel(id, status, _options);
        return result.toPromise();
    }

    /**
     * change public network status that user owns
     * Change public network status
     * @param id 
     * @param status 
     */
    public changePublicNetworkWithHttpInfo(id: string, status: 'enable' | 'disable', _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.changePublicNetworkWithHttpInfo(id, status, _options);
        return result.toPromise();
    }

    /**
     * change public network status that user owns
     * Change public network status
     * @param id 
     * @param status 
     */
    public changePublicNetwork(id: string, status: 'enable' | 'disable', _options?: Configuration): Promise<void> {
        const result = this.api.changePublicNetwork(id, status, _options);
        return result.toPromise();
    }

    /**
     * create a database that user owns
     * Create a database
     * @param createADatabases 
     */
    public createDatabaseWithHttpInfo(createADatabases: CreateDatabases, _options?: Configuration): Promise<HttpInfo<CreateDatabase200Response>> {
        const result = this.api.createDatabaseWithHttpInfo(createADatabases, _options);
        return result.toPromise();
    }

    /**
     * create a database that user owns
     * Create a database
     * @param createADatabases 
     */
    public createDatabase(createADatabases: CreateDatabases, _options?: Configuration): Promise<CreateDatabase200Response> {
        const result = this.api.createDatabase(createADatabases, _options);
        return result.toPromise();
    }

    /**
     * delete a database that user owns
     * Delete a database
     * @param id 
     */
    public deleteDatabaseWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDatabaseWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * delete a database that user owns
     * Delete a database
     * @param id 
     */
    public deleteDatabase(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDatabase(id, _options);
        return result.toPromise();
    }

    /**
     * get a database that user owns
     * Get a database
     * @param id 
     */
    public getDatabaseWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<DBDetails>> {
        const result = this.api.getDatabaseWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * get a database that user owns
     * Get a database
     * @param id 
     */
    public getDatabase(id: string, _options?: Configuration): Promise<DBDetails> {
        const result = this.api.getDatabase(id, _options);
        return result.toPromise();
    }

    /**
     * get all databases that user owns
     * Get all databases
     */
    public getListDatabasesWithHttpInfo(_options?: Configuration): Promise<HttpInfo<DBsDetails>> {
        const result = this.api.getListDatabasesWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * get all databases that user owns
     * Get all databases
     */
    public getListDatabases(_options?: Configuration): Promise<DBsDetails> {
        const result = this.api.getListDatabases(_options);
        return result.toPromise();
    }

    /**
     * resize a database that user owns
     * Resize a database
     * @param id 
     * @param resize 
     */
    public resizeDatabaseWithHttpInfo(id: string, resize: ResizeDatabaseRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.resizeDatabaseWithHttpInfo(id, resize, _options);
        return result.toPromise();
    }

    /**
     * resize a database that user owns
     * Resize a database
     * @param id 
     * @param resize 
     */
    public resizeDatabase(id: string, resize: ResizeDatabaseRequest, _options?: Configuration): Promise<void> {
        const result = this.api.resizeDatabase(id, resize, _options);
        return result.toPromise();
    }

    /**
     * power on or power off a database that user owns
     * Power on or power off a database
     * @param id 
     * @param scale 1 for power on or 0 for power off
     */
    public turnDatabaseWithHttpInfo(id: string, scale: TurnDatabaseRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.turnDatabaseWithHttpInfo(id, scale, _options);
        return result.toPromise();
    }

    /**
     * power on or power off a database that user owns
     * Power on or power off a database
     * @param id 
     * @param scale 1 for power on or 0 for power off
     */
    public turnDatabase(id: string, scale: TurnDatabaseRequest, _options?: Configuration): Promise<void> {
        const result = this.api.turnDatabase(id, scale, _options);
        return result.toPromise();
    }


}



import { ObservableReportsApi } from './ObservableAPI';

import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";
export class PromiseReportsApi {
    private api: ObservableReportsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ReportsApiRequestFactory,
        responseProcessor?: ReportsApiResponseProcessor
    ) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get cpu reports of database that user owns
     * Get cpu reports of database
     * @param id The name of your database
     * @param since The since of your cpu reports
     */
    public getDatabaseCpuReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Promise<HttpInfo<Reports>> {
        const result = this.api.getDatabaseCpuReportsWithHttpInfo(id, since, _options);
        return result.toPromise();
    }

    /**
     * get cpu reports of database that user owns
     * Get cpu reports of database
     * @param id The name of your database
     * @param since The since of your cpu reports
     */
    public getDatabaseCpuReports(id: string, since: number, _options?: Configuration): Promise<Reports> {
        const result = this.api.getDatabaseCpuReports(id, since, _options);
        return result.toPromise();
    }

    /**
     * get memory reports of database that user owns
     * Get memory reports of database
     * @param id The name of your database
     * @param since The since of your memory reports
     */
    public getDatabaseMemoryReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Promise<HttpInfo<Reports>> {
        const result = this.api.getDatabaseMemoryReportsWithHttpInfo(id, since, _options);
        return result.toPromise();
    }

    /**
     * get memory reports of database that user owns
     * Get memory reports of database
     * @param id The name of your database
     * @param since The since of your memory reports
     */
    public getDatabaseMemoryReports(id: string, since: number, _options?: Configuration): Promise<Reports> {
        const result = this.api.getDatabaseMemoryReports(id, since, _options);
        return result.toPromise();
    }

    /**
     * get network-receive reports of database that user owns
     * Get network-receive reports of database
     * @param id The name of your database
     * @param since The since of your network-receive reports
     */
    public getDatabaseNetworkReceiveReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Promise<HttpInfo<Reports>> {
        const result = this.api.getDatabaseNetworkReceiveReportsWithHttpInfo(id, since, _options);
        return result.toPromise();
    }

    /**
     * get network-receive reports of database that user owns
     * Get network-receive reports of database
     * @param id The name of your database
     * @param since The since of your network-receive reports
     */
    public getDatabaseNetworkReceiveReports(id: string, since: number, _options?: Configuration): Promise<Reports> {
        const result = this.api.getDatabaseNetworkReceiveReports(id, since, _options);
        return result.toPromise();
    }

    /**
     * get network-transmit reports of database that user owns
     * Get network-transmit reports of database
     * @param id The name of your database
     * @param since The since of your network-transmit reports
     */
    public getDatabaseNetworkTransmitReportsWithHttpInfo(id: string, since: number, _options?: Configuration): Promise<HttpInfo<Reports>> {
        const result = this.api.getDatabaseNetworkTransmitReportsWithHttpInfo(id, since, _options);
        return result.toPromise();
    }

    /**
     * get network-transmit reports of database that user owns
     * Get network-transmit reports of database
     * @param id The name of your database
     * @param since The since of your network-transmit reports
     */
    public getDatabaseNetworkTransmitReports(id: string, since: number, _options?: Configuration): Promise<Reports> {
        const result = this.api.getDatabaseNetworkTransmitReports(id, since, _options);
        return result.toPromise();
    }

    /**
     * get summary reports of database that user owns
     * Get summary reports of database
     * @param id The name of your database
     */
    public getDatabaseSummaryReportsWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<GetDatabaseSummaryReports200Response>> {
        const result = this.api.getDatabaseSummaryReportsWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * get summary reports of database that user owns
     * Get summary reports of database
     * @param id The name of your database
     */
    public getDatabaseSummaryReports(id: string, _options?: Configuration): Promise<GetDatabaseSummaryReports200Response> {
        const result = this.api.getDatabaseSummaryReports(id, _options);
        return result.toPromise();
    }


}



