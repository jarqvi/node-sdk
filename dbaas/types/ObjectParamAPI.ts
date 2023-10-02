import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateDatabases } from '../models/CreateDatabases';
import { DBDetails } from '../models/DBDetails';
import { DBDetailsDatabase } from '../models/DBDetailsDatabase';
import { DBDetailsDatabaseMetaData } from '../models/DBDetailsDatabaseMetaData';
import { DBDetailsDatabaseNode } from '../models/DBDetailsDatabaseNode';
import { DBsDetails } from '../models/DBsDetails';
import { DBsDetailsDatabasesInner } from '../models/DBsDetailsDatabasesInner';
import { ResizeDatabaseRequest } from '../models/ResizeDatabaseRequest';
import { TurnDatabaseRequest } from '../models/TurnDatabaseRequest';

import { ObservableBackupsApi } from "./ObservableAPI";
import { BackupsApiRequestFactory, BackupsApiResponseProcessor} from "../apis/BackupsApi";

export interface BackupsApiCreateBackupRequest {
    /**
     * 
     * @type string
     * @memberof BackupsApicreateBackup
     */
    id: string
}

export interface BackupsApiDownloadBackupRequest {
    /**
     * The id of your database
     * @type string
     * @memberof BackupsApidownloadBackup
     */
    id: string
    /**
     * The name of your backup
     * @type string
     * @memberof BackupsApidownloadBackup
     */
    name: string
}

export interface BackupsApiGetListBackupsRequest {
    /**
     * 
     * @type string
     * @memberof BackupsApigetListBackups
     */
    id: string
}

export class ObjectBackupsApi {
    private api: ObservableBackupsApi

    public constructor(configuration: Configuration, requestFactory?: BackupsApiRequestFactory, responseProcessor?: BackupsApiResponseProcessor) {
        this.api = new ObservableBackupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * backup a database that user owns
     * Backup a database
     * @param param the request object
     */
    public createBackupWithHttpInfo(param: BackupsApiCreateBackupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createBackupWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * backup a database that user owns
     * Backup a database
     * @param param the request object
     */
    public createBackup(param: BackupsApiCreateBackupRequest, options?: Configuration): Promise<void> {
        return this.api.createBackup(param.id,  options).toPromise();
    }

    /**
     * download a backup that user owns
     * Download a backup
     * @param param the request object
     */
    public downloadBackupWithHttpInfo(param: BackupsApiDownloadBackupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.downloadBackupWithHttpInfo(param.id, param.name,  options).toPromise();
    }

    /**
     * download a backup that user owns
     * Download a backup
     * @param param the request object
     */
    public downloadBackup(param: BackupsApiDownloadBackupRequest, options?: Configuration): Promise<void> {
        return this.api.downloadBackup(param.id, param.name,  options).toPromise();
    }

    /**
     * get all backups that user owns
     * Get all backups
     * @param param the request object
     */
    public getListBackupsWithHttpInfo(param: BackupsApiGetListBackupsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getListBackupsWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * get all backups that user owns
     * Get all backups
     * @param param the request object
     */
    public getListBackups(param: BackupsApiGetListBackupsRequest, options?: Configuration): Promise<void> {
        return this.api.getListBackups(param.id,  options).toPromise();
    }

}

import { ObservableDatabasesApi } from "./ObservableAPI";
import { DatabasesApiRequestFactory, DatabasesApiResponseProcessor} from "../apis/DatabasesApi";

export interface DatabasesApiChangeControlPanelRequest {
    /**
     * 
     * @type string
     * @memberof DatabasesApichangeControlPanel
     */
    id: string
    /**
     * 
     * @type &#39;enable&#39; | &#39;disable&#39;
     * @memberof DatabasesApichangeControlPanel
     */
    status: 'enable' | 'disable'
}

export interface DatabasesApiChangePublicNetworkRequest {
    /**
     * 
     * @type string
     * @memberof DatabasesApichangePublicNetwork
     */
    id: string
    /**
     * 
     * @type &#39;enable&#39; | &#39;disable&#39;
     * @memberof DatabasesApichangePublicNetwork
     */
    status: 'enable' | 'disable'
}

export interface DatabasesApiCreateDatabaseRequest {
    /**
     * 
     * @type CreateDatabases
     * @memberof DatabasesApicreateDatabase
     */
    createADatabases: CreateDatabases
}

export interface DatabasesApiDeleteDatabaseRequest {
    /**
     * 
     * @type string
     * @memberof DatabasesApideleteDatabase
     */
    id: string
}

export interface DatabasesApiGetDatabaseRequest {
    /**
     * 
     * @type string
     * @memberof DatabasesApigetDatabase
     */
    id: string
}

export interface DatabasesApiGetListDatabasesRequest {
}

export interface DatabasesApiResizeDatabaseRequest {
    /**
     * 
     * @type string
     * @memberof DatabasesApiresizeDatabase
     */
    id: string
    /**
     * 
     * @type ResizeDatabaseRequest
     * @memberof DatabasesApiresizeDatabase
     */
    resize: ResizeDatabaseRequest
}

export interface DatabasesApiTurnDatabaseRequest {
    /**
     * 
     * @type string
     * @memberof DatabasesApiturnDatabase
     */
    id: string
    /**
     * 1 for power on or 0 for power off
     * @type TurnDatabaseRequest
     * @memberof DatabasesApiturnDatabase
     */
    scale: TurnDatabaseRequest
}

export class ObjectDatabasesApi {
    private api: ObservableDatabasesApi

    public constructor(configuration: Configuration, requestFactory?: DatabasesApiRequestFactory, responseProcessor?: DatabasesApiResponseProcessor) {
        this.api = new ObservableDatabasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * change control-panel status that user owns
     * Change control-panel status
     * @param param the request object
     */
    public changeControlPanelWithHttpInfo(param: DatabasesApiChangeControlPanelRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.changeControlPanelWithHttpInfo(param.id, param.status,  options).toPromise();
    }

    /**
     * change control-panel status that user owns
     * Change control-panel status
     * @param param the request object
     */
    public changeControlPanel(param: DatabasesApiChangeControlPanelRequest, options?: Configuration): Promise<void> {
        return this.api.changeControlPanel(param.id, param.status,  options).toPromise();
    }

    /**
     * change public network status that user owns
     * Change public network status
     * @param param the request object
     */
    public changePublicNetworkWithHttpInfo(param: DatabasesApiChangePublicNetworkRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.changePublicNetworkWithHttpInfo(param.id, param.status,  options).toPromise();
    }

    /**
     * change public network status that user owns
     * Change public network status
     * @param param the request object
     */
    public changePublicNetwork(param: DatabasesApiChangePublicNetworkRequest, options?: Configuration): Promise<void> {
        return this.api.changePublicNetwork(param.id, param.status,  options).toPromise();
    }

    /**
     * create a database that user owns
     * Create a database
     * @param param the request object
     */
    public createDatabaseWithHttpInfo(param: DatabasesApiCreateDatabaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createDatabaseWithHttpInfo(param.createADatabases,  options).toPromise();
    }

    /**
     * create a database that user owns
     * Create a database
     * @param param the request object
     */
    public createDatabase(param: DatabasesApiCreateDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.createDatabase(param.createADatabases,  options).toPromise();
    }

    /**
     * delete a database that user owns
     * Delete a database
     * @param param the request object
     */
    public deleteDatabaseWithHttpInfo(param: DatabasesApiDeleteDatabaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDatabaseWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * delete a database that user owns
     * Delete a database
     * @param param the request object
     */
    public deleteDatabase(param: DatabasesApiDeleteDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDatabase(param.id,  options).toPromise();
    }

    /**
     * get a database that user owns
     * Get a database
     * @param param the request object
     */
    public getDatabaseWithHttpInfo(param: DatabasesApiGetDatabaseRequest, options?: Configuration): Promise<HttpInfo<DBDetails>> {
        return this.api.getDatabaseWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * get a database that user owns
     * Get a database
     * @param param the request object
     */
    public getDatabase(param: DatabasesApiGetDatabaseRequest, options?: Configuration): Promise<DBDetails> {
        return this.api.getDatabase(param.id,  options).toPromise();
    }

    /**
     * get all databases that user owns
     * Get all databases
     * @param param the request object
     */
    public getListDatabasesWithHttpInfo(param: DatabasesApiGetListDatabasesRequest = {}, options?: Configuration): Promise<HttpInfo<DBsDetails>> {
        return this.api.getListDatabasesWithHttpInfo( options).toPromise();
    }

    /**
     * get all databases that user owns
     * Get all databases
     * @param param the request object
     */
    public getListDatabases(param: DatabasesApiGetListDatabasesRequest = {}, options?: Configuration): Promise<DBsDetails> {
        return this.api.getListDatabases( options).toPromise();
    }

    /**
     * resize a database that user owns
     * Resize a database
     * @param param the request object
     */
    public resizeDatabaseWithHttpInfo(param: DatabasesApiResizeDatabaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resizeDatabaseWithHttpInfo(param.id, param.resize,  options).toPromise();
    }

    /**
     * resize a database that user owns
     * Resize a database
     * @param param the request object
     */
    public resizeDatabase(param: DatabasesApiResizeDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.resizeDatabase(param.id, param.resize,  options).toPromise();
    }

    /**
     * power on or power off a database that user owns
     * Power on or power off a database
     * @param param the request object
     */
    public turnDatabaseWithHttpInfo(param: DatabasesApiTurnDatabaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.turnDatabaseWithHttpInfo(param.id, param.scale,  options).toPromise();
    }

    /**
     * power on or power off a database that user owns
     * Power on or power off a database
     * @param param the request object
     */
    public turnDatabase(param: DatabasesApiTurnDatabaseRequest, options?: Configuration): Promise<void> {
        return this.api.turnDatabase(param.id, param.scale,  options).toPromise();
    }

}

import { ObservableReportsApi } from "./ObservableAPI";
import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";

export interface ReportsApiGetDatabaseCpuReportsRequest {
    /**
     * The name of your database
     * @type string
     * @memberof ReportsApigetDatabaseCpuReports
     */
    id: string
    /**
     * The since of your cpu reports
     * @type number
     * @memberof ReportsApigetDatabaseCpuReports
     */
    since: number
}

export interface ReportsApiGetDatabaseMemoryReportsRequest {
    /**
     * The name of your database
     * @type string
     * @memberof ReportsApigetDatabaseMemoryReports
     */
    id: string
    /**
     * The since of your memory reports
     * @type number
     * @memberof ReportsApigetDatabaseMemoryReports
     */
    since: number
}

export interface ReportsApiGetDatabaseNetworkReceiveReportsRequest {
    /**
     * The name of your database
     * @type string
     * @memberof ReportsApigetDatabaseNetworkReceiveReports
     */
    id: string
    /**
     * The since of your network-receive reports
     * @type number
     * @memberof ReportsApigetDatabaseNetworkReceiveReports
     */
    since: number
}

export interface ReportsApiGetDatabaseNetworkTransmitReportsRequest {
    /**
     * The name of your database
     * @type string
     * @memberof ReportsApigetDatabaseNetworkTransmitReports
     */
    id: string
    /**
     * The since of your network-transmit reports
     * @type number
     * @memberof ReportsApigetDatabaseNetworkTransmitReports
     */
    since: number
}

export interface ReportsApiGetDatabaseSummaryReportsRequest {
    /**
     * The name of your database
     * @type string
     * @memberof ReportsApigetDatabaseSummaryReports
     */
    id: string
}

export class ObjectReportsApi {
    private api: ObservableReportsApi

    public constructor(configuration: Configuration, requestFactory?: ReportsApiRequestFactory, responseProcessor?: ReportsApiResponseProcessor) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get cpu reports of database that user owns
     * Get cpu reports of database
     * @param param the request object
     */
    public getDatabaseCpuReportsWithHttpInfo(param: ReportsApiGetDatabaseCpuReportsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDatabaseCpuReportsWithHttpInfo(param.id, param.since,  options).toPromise();
    }

    /**
     * get cpu reports of database that user owns
     * Get cpu reports of database
     * @param param the request object
     */
    public getDatabaseCpuReports(param: ReportsApiGetDatabaseCpuReportsRequest, options?: Configuration): Promise<void> {
        return this.api.getDatabaseCpuReports(param.id, param.since,  options).toPromise();
    }

    /**
     * get memory reports of database that user owns
     * Get memory reports of database
     * @param param the request object
     */
    public getDatabaseMemoryReportsWithHttpInfo(param: ReportsApiGetDatabaseMemoryReportsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDatabaseMemoryReportsWithHttpInfo(param.id, param.since,  options).toPromise();
    }

    /**
     * get memory reports of database that user owns
     * Get memory reports of database
     * @param param the request object
     */
    public getDatabaseMemoryReports(param: ReportsApiGetDatabaseMemoryReportsRequest, options?: Configuration): Promise<void> {
        return this.api.getDatabaseMemoryReports(param.id, param.since,  options).toPromise();
    }

    /**
     * get network-receive reports of database that user owns
     * Get network-receive reports of database
     * @param param the request object
     */
    public getDatabaseNetworkReceiveReportsWithHttpInfo(param: ReportsApiGetDatabaseNetworkReceiveReportsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDatabaseNetworkReceiveReportsWithHttpInfo(param.id, param.since,  options).toPromise();
    }

    /**
     * get network-receive reports of database that user owns
     * Get network-receive reports of database
     * @param param the request object
     */
    public getDatabaseNetworkReceiveReports(param: ReportsApiGetDatabaseNetworkReceiveReportsRequest, options?: Configuration): Promise<void> {
        return this.api.getDatabaseNetworkReceiveReports(param.id, param.since,  options).toPromise();
    }

    /**
     * get network-transmit reports of database that user owns
     * Get network-transmit reports of database
     * @param param the request object
     */
    public getDatabaseNetworkTransmitReportsWithHttpInfo(param: ReportsApiGetDatabaseNetworkTransmitReportsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDatabaseNetworkTransmitReportsWithHttpInfo(param.id, param.since,  options).toPromise();
    }

    /**
     * get network-transmit reports of database that user owns
     * Get network-transmit reports of database
     * @param param the request object
     */
    public getDatabaseNetworkTransmitReports(param: ReportsApiGetDatabaseNetworkTransmitReportsRequest, options?: Configuration): Promise<void> {
        return this.api.getDatabaseNetworkTransmitReports(param.id, param.since,  options).toPromise();
    }

    /**
     * get summary reports of database that user owns
     * Get summary reports of database
     * @param param the request object
     */
    public getDatabaseSummaryReportsWithHttpInfo(param: ReportsApiGetDatabaseSummaryReportsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getDatabaseSummaryReportsWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * get summary reports of database that user owns
     * Get summary reports of database
     * @param param the request object
     */
    public getDatabaseSummaryReports(param: ReportsApiGetDatabaseSummaryReportsRequest, options?: Configuration): Promise<void> {
        return this.api.getDatabaseSummaryReports(param.id,  options).toPromise();
    }

}
