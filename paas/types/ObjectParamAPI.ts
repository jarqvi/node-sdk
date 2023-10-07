import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Applets } from '../models/Applets';
import { AppletsAppletsInner } from '../models/AppletsAppletsInner';
import { AppletsAppletsInnerRelease } from '../models/AppletsAppletsInnerRelease';
import { ChangePlanRequest } from '../models/ChangePlanRequest';
import { CheckDomain } from '../models/CheckDomain';
import { CheckDomainDomain } from '../models/CheckDomainDomain';
import { CheckDomainDomainProject } from '../models/CheckDomainDomainProject';
import { CreateApp } from '../models/CreateApp';
import { CreateAppDomain201Response } from '../models/CreateAppDomain201Response';
import { CreateAppDomain201ResponseDomain } from '../models/CreateAppDomain201ResponseDomain';
import { CreateAppDomainRequest } from '../models/CreateAppDomainRequest';
import { CreateDiskRequest } from '../models/CreateDiskRequest';
import { CreateFtp200Response } from '../models/CreateFtp200Response';
import { CreateFtpRequest } from '../models/CreateFtpRequest';
import { DeployReleases } from '../models/DeployReleases';
import { Domains } from '../models/Domains';
import { DomainsDomainsInner } from '../models/DomainsDomainsInner';
import { DomainsDomainsInnerProject } from '../models/DomainsDomainsInnerProject';
import { DownloadBackup200Response } from '../models/DownloadBackup200Response';
import { EnableSsl200Response } from '../models/EnableSsl200Response';
import { EnableSslRequest } from '../models/EnableSslRequest';
import { GetAppSummaryReports200Response } from '../models/GetAppSummaryReports200Response';
import { GetAppSummaryReports200ResponseCpuUsageInner } from '../models/GetAppSummaryReports200ResponseCpuUsageInner';
import { GetAppSummaryReports200ResponseCpuUsageInnerValueInner } from '../models/GetAppSummaryReports200ResponseCpuUsageInnerValueInner';
import { GetAppSummaryReports200ResponseDisksUsageInner } from '../models/GetAppSummaryReports200ResponseDisksUsageInner';
import { GetDiskBackup } from '../models/GetDiskBackup';
import { GetDiskBackupBackupsInner } from '../models/GetDiskBackupBackupsInner';
import { GetDisks } from '../models/GetDisks';
import { GetDisksDisksInner } from '../models/GetDisksDisksInner';
import { GetDisksMountsInner } from '../models/GetDisksMountsInner';
import { GetFtps200Response } from '../models/GetFtps200Response';
import { GetFtps200ResponseAccessesInner } from '../models/GetFtps200ResponseAccessesInner';
import { IpStatic200Response } from '../models/IpStatic200Response';
import { LogsInner } from '../models/LogsInner';
import { ProjectAllDetails } from '../models/ProjectAllDetails';
import { ProjectAllDetailsProject } from '../models/ProjectAllDetailsProject';
import { ProjectAllDetailsProjectEnvsInner } from '../models/ProjectAllDetailsProjectEnvsInner';
import { ProjectAllDetailsProjectNode } from '../models/ProjectAllDetailsProjectNode';
import { Projects } from '../models/Projects';
import { ProjectsProjectsInner } from '../models/ProjectsProjectsInner';
import { RedirectDomainRequest } from '../models/RedirectDomainRequest';
import { Releases } from '../models/Releases';
import { ReleasesDeploy200Response } from '../models/ReleasesDeploy200Response';
import { ReleasesReleasesInner } from '../models/ReleasesReleasesInner';
import { ReleasesReleasesInnerGitInfo } from '../models/ReleasesReleasesInnerGitInfo';
import { ReleasesReleasesInnerGitInfoAuthor } from '../models/ReleasesReleasesInnerGitInfoAuthor';
import { Reports } from '../models/Reports';
import { ReportsResultInner } from '../models/ReportsResultInner';
import { ResizeDiskRequest } from '../models/ResizeDiskRequest';
import { SetAppDomainRequest } from '../models/SetAppDomainRequest';
import { SourcesDeploy200Response } from '../models/SourcesDeploy200Response';
import { TurnAppRequest } from '../models/TurnAppRequest';
import { UpdateEnvs } from '../models/UpdateEnvs';
import { UpdateEnvs200Response } from '../models/UpdateEnvs200Response';
import { UpdateEnvsVariablesInner } from '../models/UpdateEnvsVariablesInner';

import { ObservableAppsApi } from "./ObservableAPI";
import { AppsApiRequestFactory, AppsApiResponseProcessor} from "../apis/AppsApi";

export interface AppsApiChangePlanRequest {
    /**
     * The name of your app
     * @type string
     * @memberof AppsApichangePlan
     */
    name: string
    /**
     * The plan of your app
     * @type ChangePlanRequest
     * @memberof AppsApichangePlan
     */
    plan: ChangePlanRequest
}

export interface AppsApiCreateAppRequest {
    /**
     * 
     * @type CreateApp
     * @memberof AppsApicreateApp
     */
    createApp: CreateApp
}

export interface AppsApiDeleteAppByNameRequest {
    /**
     * The name of the app to delete
     * @type string
     * @memberof AppsApideleteAppByName
     */
    name: string
}

export interface AppsApiGetAppAppletsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof AppsApigetAppApplets
     */
    name: string
}

export interface AppsApiGetAppByNameRequest {
    /**
     * The name of your app
     * @type string
     * @memberof AppsApigetAppByName
     */
    name: string
}

export interface AppsApiGetAppLogsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof AppsApigetAppLogs
     */
    name: string
    /**
     * Show logs since timestamp
     * @type string
     * @memberof AppsApigetAppLogs
     */
    since: string
}

export interface AppsApiGetAppReleasesRequest {
    /**
     * The name of your app
     * @type string
     * @memberof AppsApigetAppReleases
     */
    name: string
    /**
     * The page of your releases
     * @type number
     * @memberof AppsApigetAppReleases
     */
    page: number
    /**
     * The count of your releases
     * @type number
     * @memberof AppsApigetAppReleases
     */
    count: number
}

export interface AppsApiGetAppsRequest {
}

export interface AppsApiRestartAppRequest {
    /**
     * The name of the app to restart
     * @type string
     * @memberof AppsApirestartApp
     */
    name: string
}

export interface AppsApiTurnAppRequest {
    /**
     * The name of the app to turn on or off
     * @type string
     * @memberof AppsApiturnApp
     */
    name: string
    /**
     * Return 1 to turn on or 0 to turn off
     * @type TurnAppRequest
     * @memberof AppsApiturnApp
     */
    scale: TurnAppRequest
}

export class ObjectAppsApi {
    private api: ObservableAppsApi

    public constructor(configuration: Configuration, requestFactory?: AppsApiRequestFactory, responseProcessor?: AppsApiResponseProcessor) {
        this.api = new ObservableAppsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create app that user owns
     * Change plan
     * @param param the request object
     */
    public changePlanWithHttpInfo(param: AppsApiChangePlanRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.changePlanWithHttpInfo(param.name, param.plan,  options).toPromise();
    }

    /**
     * create app that user owns
     * Change plan
     * @param param the request object
     */
    public changePlan(param: AppsApiChangePlanRequest, options?: Configuration): Promise<void> {
        return this.api.changePlan(param.name, param.plan,  options).toPromise();
    }

    /**
     * create app that user owns
     * Create a app
     * @param param the request object
     */
    public createAppWithHttpInfo(param: AppsApiCreateAppRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createAppWithHttpInfo(param.createApp,  options).toPromise();
    }

    /**
     * create app that user owns
     * Create a app
     * @param param the request object
     */
    public createApp(param: AppsApiCreateAppRequest, options?: Configuration): Promise<void> {
        return this.api.createApp(param.createApp,  options).toPromise();
    }

    /**
     * delete app that user owns
     * Delete a app
     * @param param the request object
     */
    public deleteAppByNameWithHttpInfo(param: AppsApiDeleteAppByNameRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteAppByNameWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * delete app that user owns
     * Delete a app
     * @param param the request object
     */
    public deleteAppByName(param: AppsApiDeleteAppByNameRequest, options?: Configuration): Promise<void> {
        return this.api.deleteAppByName(param.name,  options).toPromise();
    }

    /**
     * get applets of app that user owns
     * Get applets of app
     * @param param the request object
     */
    public getAppAppletsWithHttpInfo(param: AppsApiGetAppAppletsRequest, options?: Configuration): Promise<HttpInfo<Applets>> {
        return this.api.getAppAppletsWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * get applets of app that user owns
     * Get applets of app
     * @param param the request object
     */
    public getAppApplets(param: AppsApiGetAppAppletsRequest, options?: Configuration): Promise<Applets> {
        return this.api.getAppApplets(param.name,  options).toPromise();
    }

    /**
     * get all details of all project that user owns
     * Get details of a project
     * @param param the request object
     */
    public getAppByNameWithHttpInfo(param: AppsApiGetAppByNameRequest, options?: Configuration): Promise<HttpInfo<ProjectAllDetails>> {
        return this.api.getAppByNameWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * get all details of all project that user owns
     * Get details of a project
     * @param param the request object
     */
    public getAppByName(param: AppsApiGetAppByNameRequest, options?: Configuration): Promise<ProjectAllDetails> {
        return this.api.getAppByName(param.name,  options).toPromise();
    }

    /**
     * get logs of app that user owns
     * Get logs of app
     * @param param the request object
     */
    public getAppLogsWithHttpInfo(param: AppsApiGetAppLogsRequest, options?: Configuration): Promise<HttpInfo<Array<LogsInner>>> {
        return this.api.getAppLogsWithHttpInfo(param.name, param.since,  options).toPromise();
    }

    /**
     * get logs of app that user owns
     * Get logs of app
     * @param param the request object
     */
    public getAppLogs(param: AppsApiGetAppLogsRequest, options?: Configuration): Promise<Array<LogsInner>> {
        return this.api.getAppLogs(param.name, param.since,  options).toPromise();
    }

    /**
     * get releases of app that user owns
     * Get releases of app
     * @param param the request object
     */
    public getAppReleasesWithHttpInfo(param: AppsApiGetAppReleasesRequest, options?: Configuration): Promise<HttpInfo<Releases>> {
        return this.api.getAppReleasesWithHttpInfo(param.name, param.page, param.count,  options).toPromise();
    }

    /**
     * get releases of app that user owns
     * Get releases of app
     * @param param the request object
     */
    public getAppReleases(param: AppsApiGetAppReleasesRequest, options?: Configuration): Promise<Releases> {
        return this.api.getAppReleases(param.name, param.page, param.count,  options).toPromise();
    }

    /**
     * get all details of all projects that user owns
     * Get details of all projects
     * @param param the request object
     */
    public getAppsWithHttpInfo(param: AppsApiGetAppsRequest = {}, options?: Configuration): Promise<HttpInfo<Projects>> {
        return this.api.getAppsWithHttpInfo( options).toPromise();
    }

    /**
     * get all details of all projects that user owns
     * Get details of all projects
     * @param param the request object
     */
    public getApps(param: AppsApiGetAppsRequest = {}, options?: Configuration): Promise<Projects> {
        return this.api.getApps( options).toPromise();
    }

    /**
     * to restart app that user owns
     * To restart a app
     * @param param the request object
     */
    public restartAppWithHttpInfo(param: AppsApiRestartAppRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.restartAppWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * to restart app that user owns
     * To restart a app
     * @param param the request object
     */
    public restartApp(param: AppsApiRestartAppRequest, options?: Configuration): Promise<void> {
        return this.api.restartApp(param.name,  options).toPromise();
    }

    /**
     * turn on or off a app that user owns
     * Turn on or off a app
     * @param param the request object
     */
    public turnAppWithHttpInfo(param: AppsApiTurnAppRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.turnAppWithHttpInfo(param.name, param.scale,  options).toPromise();
    }

    /**
     * turn on or off a app that user owns
     * Turn on or off a app
     * @param param the request object
     */
    public turnApp(param: AppsApiTurnAppRequest, options?: Configuration): Promise<void> {
        return this.api.turnApp(param.name, param.scale,  options).toPromise();
    }

}

import { ObservableDeployApi } from "./ObservableAPI";
import { DeployApiRequestFactory, DeployApiResponseProcessor} from "../apis/DeployApi";

export interface DeployApiReleasesDeployRequest {
    /**
     * The name of your app for deploy
     * @type string
     * @memberof DeployApireleasesDeploy
     */
    name: string
    /**
     * 
     * @type DeployReleases
     * @memberof DeployApireleasesDeploy
     */
    deployReleases: DeployReleases
}

export interface DeployApiSourcesDeployRequest {
    /**
     * The name of your app for deploy
     * @type string
     * @memberof DeployApisourcesDeploy
     */
    name: string
    /**
     * The .gz file to deploy
     * @type HttpFile
     * @memberof DeployApisourcesDeploy
     */
    file: HttpFile
}

export class ObjectDeployApi {
    private api: ObservableDeployApi

    public constructor(configuration: Configuration, requestFactory?: DeployApiRequestFactory, responseProcessor?: DeployApiResponseProcessor) {
        this.api = new ObservableDeployApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * deploy releases that user owns
     * Deploy releases
     * @param param the request object
     */
    public releasesDeployWithHttpInfo(param: DeployApiReleasesDeployRequest, options?: Configuration): Promise<HttpInfo<ReleasesDeploy200Response>> {
        return this.api.releasesDeployWithHttpInfo(param.name, param.deployReleases,  options).toPromise();
    }

    /**
     * deploy releases that user owns
     * Deploy releases
     * @param param the request object
     */
    public releasesDeploy(param: DeployApiReleasesDeployRequest, options?: Configuration): Promise<ReleasesDeploy200Response> {
        return this.api.releasesDeploy(param.name, param.deployReleases,  options).toPromise();
    }

    /**
     * deploy sources code that user owns
     * Deploy sources code
     * @param param the request object
     */
    public sourcesDeployWithHttpInfo(param: DeployApiSourcesDeployRequest, options?: Configuration): Promise<HttpInfo<SourcesDeploy200Response>> {
        return this.api.sourcesDeployWithHttpInfo(param.name, param.file,  options).toPromise();
    }

    /**
     * deploy sources code that user owns
     * Deploy sources code
     * @param param the request object
     */
    public sourcesDeploy(param: DeployApiSourcesDeployRequest, options?: Configuration): Promise<SourcesDeploy200Response> {
        return this.api.sourcesDeploy(param.name, param.file,  options).toPromise();
    }

}

import { ObservableDisksApi } from "./ObservableAPI";
import { DisksApiRequestFactory, DisksApiResponseProcessor} from "../apis/DisksApi";

export interface DisksApiCreateBackupRequest {
    /**
     * The id of your app
     * @type string
     * @memberof DisksApicreateBackup
     */
    id: string
    /**
     * The name of your disk
     * @type string
     * @memberof DisksApicreateBackup
     */
    name: string
}

export interface DisksApiCreateDiskRequest {
    /**
     * The name of your app
     * @type string
     * @memberof DisksApicreateDisk
     */
    name: string
    /**
     * The disk of your app
     * @type CreateDiskRequest
     * @memberof DisksApicreateDisk
     */
    disk: CreateDiskRequest
}

export interface DisksApiCreateFtpRequest {
    /**
     * The name of your app
     * @type string
     * @memberof DisksApicreateFtp
     */
    name: string
    /**
     * The name of your disk
     * @type string
     * @memberof DisksApicreateFtp
     */
    dname: string
    /**
     * The plan of your app
     * @type CreateFtpRequest
     * @memberof DisksApicreateFtp
     */
    createFtp: CreateFtpRequest
}

export interface DisksApiDeleteDiskRequest {
    /**
     * The id of your app
     * @type string
     * @memberof DisksApideleteDisk
     */
    id: string
    /**
     * The name of your disk of app
     * @type string
     * @memberof DisksApideleteDisk
     */
    name: string
}

export interface DisksApiDeleteFtpRequest {
    /**
     * The name of your ftp
     * @type string
     * @memberof DisksApideleteFtp
     */
    fname: string
}

export interface DisksApiDownloadBackupRequest {
    /**
     * The id of your app
     * @type string
     * @memberof DisksApidownloadBackup
     */
    id: string
    /**
     * The name of your disk
     * @type string
     * @memberof DisksApidownloadBackup
     */
    dname: string
    /**
     * The name of your backup
     * @type string
     * @memberof DisksApidownloadBackup
     */
    bname: string
}

export interface DisksApiGetBackupsRequest {
    /**
     * The id of your app
     * @type string
     * @memberof DisksApigetBackups
     */
    id: string
    /**
     * The name of your disk
     * @type string
     * @memberof DisksApigetBackups
     */
    name: string
}

export interface DisksApiGetDisksRequest {
    /**
     * The id of your app
     * @type string
     * @memberof DisksApigetDisks
     */
    id: string
}

export interface DisksApiGetFtpsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof DisksApigetFtps
     */
    name: string
    /**
     * The name of your disk
     * @type string
     * @memberof DisksApigetFtps
     */
    dname: string
}

export interface DisksApiResizeDiskRequest {
    /**
     * The name of your app
     * @type string
     * @memberof DisksApiresizeDisk
     */
    name: string
    /**
     * The name of your disk
     * @type string
     * @memberof DisksApiresizeDisk
     */
    dname: string
    /**
     * The size of your disk
     * @type ResizeDiskRequest
     * @memberof DisksApiresizeDisk
     */
    resizeDisk: ResizeDiskRequest
}

export class ObjectDisksApi {
    private api: ObservableDisksApi

    public constructor(configuration: Configuration, requestFactory?: DisksApiRequestFactory, responseProcessor?: DisksApiResponseProcessor) {
        this.api = new ObservableDisksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create backup disk that user owns
     * Create backup disk
     * @param param the request object
     */
    public createBackupWithHttpInfo(param: DisksApiCreateBackupRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createBackupWithHttpInfo(param.id, param.name,  options).toPromise();
    }

    /**
     * create backup disk that user owns
     * Create backup disk
     * @param param the request object
     */
    public createBackup(param: DisksApiCreateBackupRequest, options?: Configuration): Promise<void> {
        return this.api.createBackup(param.id, param.name,  options).toPromise();
    }

    /**
     * create a disk that user owns
     * Create a disk
     * @param param the request object
     */
    public createDiskWithHttpInfo(param: DisksApiCreateDiskRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createDiskWithHttpInfo(param.name, param.disk,  options).toPromise();
    }

    /**
     * create a disk that user owns
     * Create a disk
     * @param param the request object
     */
    public createDisk(param: DisksApiCreateDiskRequest, options?: Configuration): Promise<void> {
        return this.api.createDisk(param.name, param.disk,  options).toPromise();
    }

    /**
     * create ftp that user owns
     * Create ftp
     * @param param the request object
     */
    public createFtpWithHttpInfo(param: DisksApiCreateFtpRequest, options?: Configuration): Promise<HttpInfo<CreateFtp200Response>> {
        return this.api.createFtpWithHttpInfo(param.name, param.dname, param.createFtp,  options).toPromise();
    }

    /**
     * create ftp that user owns
     * Create ftp
     * @param param the request object
     */
    public createFtp(param: DisksApiCreateFtpRequest, options?: Configuration): Promise<CreateFtp200Response> {
        return this.api.createFtp(param.name, param.dname, param.createFtp,  options).toPromise();
    }

    /**
     * delete a disk that user owns
     * Delete a disk
     * @param param the request object
     */
    public deleteDiskWithHttpInfo(param: DisksApiDeleteDiskRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDiskWithHttpInfo(param.id, param.name,  options).toPromise();
    }

    /**
     * delete a disk that user owns
     * Delete a disk
     * @param param the request object
     */
    public deleteDisk(param: DisksApiDeleteDiskRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDisk(param.id, param.name,  options).toPromise();
    }

    /**
     * delete a ftp that user owns
     * Delete a ftp
     * @param param the request object
     */
    public deleteFtpWithHttpInfo(param: DisksApiDeleteFtpRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFtpWithHttpInfo(param.fname,  options).toPromise();
    }

    /**
     * delete a ftp that user owns
     * Delete a ftp
     * @param param the request object
     */
    public deleteFtp(param: DisksApiDeleteFtpRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFtp(param.fname,  options).toPromise();
    }

    /**
     * download backup disk that user owns
     * Download backup disk
     * @param param the request object
     */
    public downloadBackupWithHttpInfo(param: DisksApiDownloadBackupRequest, options?: Configuration): Promise<HttpInfo<DownloadBackup200Response>> {
        return this.api.downloadBackupWithHttpInfo(param.id, param.dname, param.bname,  options).toPromise();
    }

    /**
     * download backup disk that user owns
     * Download backup disk
     * @param param the request object
     */
    public downloadBackup(param: DisksApiDownloadBackupRequest, options?: Configuration): Promise<DownloadBackup200Response> {
        return this.api.downloadBackup(param.id, param.dname, param.bname,  options).toPromise();
    }

    /**
     * get backups disk that user owns
     * Get backups disk
     * @param param the request object
     */
    public getBackupsWithHttpInfo(param: DisksApiGetBackupsRequest, options?: Configuration): Promise<HttpInfo<GetDiskBackup>> {
        return this.api.getBackupsWithHttpInfo(param.id, param.name,  options).toPromise();
    }

    /**
     * get backups disk that user owns
     * Get backups disk
     * @param param the request object
     */
    public getBackups(param: DisksApiGetBackupsRequest, options?: Configuration): Promise<GetDiskBackup> {
        return this.api.getBackups(param.id, param.name,  options).toPromise();
    }

    /**
     * get disks that user owns
     * Get disks
     * @param param the request object
     */
    public getDisksWithHttpInfo(param: DisksApiGetDisksRequest, options?: Configuration): Promise<HttpInfo<GetDisks>> {
        return this.api.getDisksWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * get disks that user owns
     * Get disks
     * @param param the request object
     */
    public getDisks(param: DisksApiGetDisksRequest, options?: Configuration): Promise<GetDisks> {
        return this.api.getDisks(param.id,  options).toPromise();
    }

    /**
     * get ftps that user owns
     * Get ftps
     * @param param the request object
     */
    public getFtpsWithHttpInfo(param: DisksApiGetFtpsRequest, options?: Configuration): Promise<HttpInfo<GetFtps200Response>> {
        return this.api.getFtpsWithHttpInfo(param.name, param.dname,  options).toPromise();
    }

    /**
     * get ftps that user owns
     * Get ftps
     * @param param the request object
     */
    public getFtps(param: DisksApiGetFtpsRequest, options?: Configuration): Promise<GetFtps200Response> {
        return this.api.getFtps(param.name, param.dname,  options).toPromise();
    }

    /**
     * resize disk that user owns
     * Resize disk
     * @param param the request object
     */
    public resizeDiskWithHttpInfo(param: DisksApiResizeDiskRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.resizeDiskWithHttpInfo(param.name, param.dname, param.resizeDisk,  options).toPromise();
    }

    /**
     * resize disk that user owns
     * Resize disk
     * @param param the request object
     */
    public resizeDisk(param: DisksApiResizeDiskRequest, options?: Configuration): Promise<void> {
        return this.api.resizeDisk(param.name, param.dname, param.resizeDisk,  options).toPromise();
    }

}

import { ObservableDomainsApi } from "./ObservableAPI";
import { DomainsApiRequestFactory, DomainsApiResponseProcessor} from "../apis/DomainsApi";

export interface DomainsApiCheckDomainRequest {
    /**
     * The id of your domain
     * @type string
     * @memberof DomainsApicheckDomain
     */
    id: string
}

export interface DomainsApiCreateAppDomainRequest {
    /**
     * The domain of your app
     * @type CreateAppDomainRequest
     * @memberof DomainsApicreateAppDomain
     */
    domain: CreateAppDomainRequest
}

export interface DomainsApiDeleteDomainRequest {
    /**
     * The id of your domain
     * @type string
     * @memberof DomainsApideleteDomain
     */
    id: string
}

export interface DomainsApiDisableSslRequest {
    /**
     * The id of your domain
     * @type string
     * @memberof DomainsApidisableSsl
     */
    id: string
}

export interface DomainsApiEnableSslRequest {
    /**
     * The domain of your app
     * @type EnableSslRequest
     * @memberof DomainsApienableSsl
     */
    domain: EnableSslRequest
}

export interface DomainsApiGetAppDomainsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof DomainsApigetAppDomains
     */
    project: string
}

export interface DomainsApiRedirectDomainRequest {
    /**
     * The id of your domain
     * @type string
     * @memberof DomainsApiredirectDomain
     */
    id: string
    /**
     * The domain of your app
     * @type RedirectDomainRequest
     * @memberof DomainsApiredirectDomain
     */
    domain: RedirectDomainRequest
}

export interface DomainsApiSetAppDomainRequest {
    /**
     * The domain of your app
     * @type SetAppDomainRequest
     * @memberof DomainsApisetAppDomain
     */
    domain: SetAppDomainRequest
}

export class ObjectDomainsApi {
    private api: ObservableDomainsApi

    public constructor(configuration: Configuration, requestFactory?: DomainsApiRequestFactory, responseProcessor?: DomainsApiResponseProcessor) {
        this.api = new ObservableDomainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * check a domain that user owns
     * Check a domain
     * @param param the request object
     */
    public checkDomainWithHttpInfo(param: DomainsApiCheckDomainRequest, options?: Configuration): Promise<HttpInfo<CheckDomain>> {
        return this.api.checkDomainWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * check a domain that user owns
     * Check a domain
     * @param param the request object
     */
    public checkDomain(param: DomainsApiCheckDomainRequest, options?: Configuration): Promise<CheckDomain> {
        return this.api.checkDomain(param.id,  options).toPromise();
    }

    /**
     * create a domain that user owns
     * Create a domain
     * @param param the request object
     */
    public createAppDomainWithHttpInfo(param: DomainsApiCreateAppDomainRequest, options?: Configuration): Promise<HttpInfo<CreateAppDomain201Response>> {
        return this.api.createAppDomainWithHttpInfo(param.domain,  options).toPromise();
    }

    /**
     * create a domain that user owns
     * Create a domain
     * @param param the request object
     */
    public createAppDomain(param: DomainsApiCreateAppDomainRequest, options?: Configuration): Promise<CreateAppDomain201Response> {
        return this.api.createAppDomain(param.domain,  options).toPromise();
    }

    /**
     * delete a domain that user owns
     * Delete a domain
     * @param param the request object
     */
    public deleteDomainWithHttpInfo(param: DomainsApiDeleteDomainRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteDomainWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * delete a domain that user owns
     * Delete a domain
     * @param param the request object
     */
    public deleteDomain(param: DomainsApiDeleteDomainRequest, options?: Configuration): Promise<void> {
        return this.api.deleteDomain(param.id,  options).toPromise();
    }

    /**
     * disable ssl that user owns
     * Disable ssl
     * @param param the request object
     */
    public disableSslWithHttpInfo(param: DomainsApiDisableSslRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.disableSslWithHttpInfo(param.id,  options).toPromise();
    }

    /**
     * disable ssl that user owns
     * Disable ssl
     * @param param the request object
     */
    public disableSsl(param: DomainsApiDisableSslRequest, options?: Configuration): Promise<void> {
        return this.api.disableSsl(param.id,  options).toPromise();
    }

    /**
     * enable ssl that user owns
     * Enable ssl
     * @param param the request object
     */
    public enableSslWithHttpInfo(param: DomainsApiEnableSslRequest, options?: Configuration): Promise<HttpInfo<EnableSsl200Response>> {
        return this.api.enableSslWithHttpInfo(param.domain,  options).toPromise();
    }

    /**
     * enable ssl that user owns
     * Enable ssl
     * @param param the request object
     */
    public enableSsl(param: DomainsApiEnableSslRequest, options?: Configuration): Promise<EnableSsl200Response> {
        return this.api.enableSsl(param.domain,  options).toPromise();
    }

    /**
     * get all domains that user owns
     * Get all domains
     * @param param the request object
     */
    public getAppDomainsWithHttpInfo(param: DomainsApiGetAppDomainsRequest, options?: Configuration): Promise<HttpInfo<Domains>> {
        return this.api.getAppDomainsWithHttpInfo(param.project,  options).toPromise();
    }

    /**
     * get all domains that user owns
     * Get all domains
     * @param param the request object
     */
    public getAppDomains(param: DomainsApiGetAppDomainsRequest, options?: Configuration): Promise<Domains> {
        return this.api.getAppDomains(param.project,  options).toPromise();
    }

    /**
     * redirect a domain that user owns
     * Redirect a domain
     * @param param the request object
     */
    public redirectDomainWithHttpInfo(param: DomainsApiRedirectDomainRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.redirectDomainWithHttpInfo(param.id, param.domain,  options).toPromise();
    }

    /**
     * redirect a domain that user owns
     * Redirect a domain
     * @param param the request object
     */
    public redirectDomain(param: DomainsApiRedirectDomainRequest, options?: Configuration): Promise<void> {
        return this.api.redirectDomain(param.id, param.domain,  options).toPromise();
    }

    /**
     * set a domain for project that user owns
     * Set a domain for project
     * @param param the request object
     */
    public setAppDomainWithHttpInfo(param: DomainsApiSetAppDomainRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.setAppDomainWithHttpInfo(param.domain,  options).toPromise();
    }

    /**
     * set a domain for project that user owns
     * Set a domain for project
     * @param param the request object
     */
    public setAppDomain(param: DomainsApiSetAppDomainRequest, options?: Configuration): Promise<void> {
        return this.api.setAppDomain(param.domain,  options).toPromise();
    }

}

import { ObservableReportsApi } from "./ObservableAPI";
import { ReportsApiRequestFactory, ReportsApiResponseProcessor} from "../apis/ReportsApi";

export interface ReportsApiGetAppCpuReportsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof ReportsApigetAppCpuReports
     */
    name: string
    /**
     * The since of your cpu reports
     * @type number
     * @memberof ReportsApigetAppCpuReports
     */
    since: number
}

export interface ReportsApiGetAppMemoryReportsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof ReportsApigetAppMemoryReports
     */
    name: string
    /**
     * The since of your memory reports
     * @type number
     * @memberof ReportsApigetAppMemoryReports
     */
    since: number
}

export interface ReportsApiGetAppNetworkReceiveReportsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof ReportsApigetAppNetworkReceiveReports
     */
    name: string
    /**
     * The since of your network-receive reports
     * @type number
     * @memberof ReportsApigetAppNetworkReceiveReports
     */
    since: number
}

export interface ReportsApiGetAppSummaryReportsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof ReportsApigetAppSummaryReports
     */
    name: string
}

export interface ReportsApiGetNetworkTransmitReportsRequest {
    /**
     * The name of your app
     * @type string
     * @memberof ReportsApigetNetworkTransmitReports
     */
    name: string
    /**
     * The since of your network-transmit reports
     * @type number
     * @memberof ReportsApigetNetworkTransmitReports
     */
    since: number
}

export class ObjectReportsApi {
    private api: ObservableReportsApi

    public constructor(configuration: Configuration, requestFactory?: ReportsApiRequestFactory, responseProcessor?: ReportsApiResponseProcessor) {
        this.api = new ObservableReportsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * get cpu reports of app that user owns
     * Get cpu reports of app
     * @param param the request object
     */
    public getAppCpuReportsWithHttpInfo(param: ReportsApiGetAppCpuReportsRequest, options?: Configuration): Promise<HttpInfo<Reports>> {
        return this.api.getAppCpuReportsWithHttpInfo(param.name, param.since,  options).toPromise();
    }

    /**
     * get cpu reports of app that user owns
     * Get cpu reports of app
     * @param param the request object
     */
    public getAppCpuReports(param: ReportsApiGetAppCpuReportsRequest, options?: Configuration): Promise<Reports> {
        return this.api.getAppCpuReports(param.name, param.since,  options).toPromise();
    }

    /**
     * get memory reports of app that user owns
     * Get memory reports of app
     * @param param the request object
     */
    public getAppMemoryReportsWithHttpInfo(param: ReportsApiGetAppMemoryReportsRequest, options?: Configuration): Promise<HttpInfo<Reports>> {
        return this.api.getAppMemoryReportsWithHttpInfo(param.name, param.since,  options).toPromise();
    }

    /**
     * get memory reports of app that user owns
     * Get memory reports of app
     * @param param the request object
     */
    public getAppMemoryReports(param: ReportsApiGetAppMemoryReportsRequest, options?: Configuration): Promise<Reports> {
        return this.api.getAppMemoryReports(param.name, param.since,  options).toPromise();
    }

    /**
     * get network-receive reports of app that user owns
     * Get network-receive reports of app
     * @param param the request object
     */
    public getAppNetworkReceiveReportsWithHttpInfo(param: ReportsApiGetAppNetworkReceiveReportsRequest, options?: Configuration): Promise<HttpInfo<Reports>> {
        return this.api.getAppNetworkReceiveReportsWithHttpInfo(param.name, param.since,  options).toPromise();
    }

    /**
     * get network-receive reports of app that user owns
     * Get network-receive reports of app
     * @param param the request object
     */
    public getAppNetworkReceiveReports(param: ReportsApiGetAppNetworkReceiveReportsRequest, options?: Configuration): Promise<Reports> {
        return this.api.getAppNetworkReceiveReports(param.name, param.since,  options).toPromise();
    }

    /**
     * get summary reports of app that user owns
     * Get summary reports of app
     * @param param the request object
     */
    public getAppSummaryReportsWithHttpInfo(param: ReportsApiGetAppSummaryReportsRequest, options?: Configuration): Promise<HttpInfo<GetAppSummaryReports200Response>> {
        return this.api.getAppSummaryReportsWithHttpInfo(param.name,  options).toPromise();
    }

    /**
     * get summary reports of app that user owns
     * Get summary reports of app
     * @param param the request object
     */
    public getAppSummaryReports(param: ReportsApiGetAppSummaryReportsRequest, options?: Configuration): Promise<GetAppSummaryReports200Response> {
        return this.api.getAppSummaryReports(param.name,  options).toPromise();
    }

    /**
     * get network-transmit reports of app that user owns
     * Get network-transmit reports of app
     * @param param the request object
     */
    public getNetworkTransmitReportsWithHttpInfo(param: ReportsApiGetNetworkTransmitReportsRequest, options?: Configuration): Promise<HttpInfo<Reports>> {
        return this.api.getNetworkTransmitReportsWithHttpInfo(param.name, param.since,  options).toPromise();
    }

    /**
     * get network-transmit reports of app that user owns
     * Get network-transmit reports of app
     * @param param the request object
     */
    public getNetworkTransmitReports(param: ReportsApiGetNetworkTransmitReportsRequest, options?: Configuration): Promise<Reports> {
        return this.api.getNetworkTransmitReports(param.name, param.since,  options).toPromise();
    }

}

import { ObservableSettingsApi } from "./ObservableAPI";
import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";

export interface SettingsApiDefaultSubdomainRequest {
    /**
     * 
     * @type string
     * @memberof SettingsApidefaultSubdomain
     */
    id: string
    /**
     * disable or enable
     * @type string
     * @memberof SettingsApidefaultSubdomain
     */
    status: string
}

export interface SettingsApiIpStaticRequest {
    /**
     * 
     * @type string
     * @memberof SettingsApiipStatic
     */
    id: string
    /**
     * disable or enable
     * @type string
     * @memberof SettingsApiipStatic
     */
    status: string
}

export interface SettingsApiUpdateEnvsRequest {
    /**
     * 
     * @type UpdateEnvs
     * @memberof SettingsApiupdateEnvs
     */
    updateEnvs: UpdateEnvs
}

export interface SettingsApiZeroDowntimeRequest {
    /**
     * 
     * @type string
     * @memberof SettingsApizeroDowntime
     */
    id: string
    /**
     * disable or enable
     * @type string
     * @memberof SettingsApizeroDowntime
     */
    status: string
}

export class ObjectSettingsApi {
    private api: ObservableSettingsApi

    public constructor(configuration: Configuration, requestFactory?: SettingsApiRequestFactory, responseProcessor?: SettingsApiResponseProcessor) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * default subdomain that user owns
     * Default subdomain
     * @param param the request object
     */
    public defaultSubdomainWithHttpInfo(param: SettingsApiDefaultSubdomainRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.defaultSubdomainWithHttpInfo(param.id, param.status,  options).toPromise();
    }

    /**
     * default subdomain that user owns
     * Default subdomain
     * @param param the request object
     */
    public defaultSubdomain(param: SettingsApiDefaultSubdomainRequest, options?: Configuration): Promise<void> {
        return this.api.defaultSubdomain(param.id, param.status,  options).toPromise();
    }

    /**
     * ip static that user owns
     * IP static
     * @param param the request object
     */
    public ipStaticWithHttpInfo(param: SettingsApiIpStaticRequest, options?: Configuration): Promise<HttpInfo<IpStatic200Response>> {
        return this.api.ipStaticWithHttpInfo(param.id, param.status,  options).toPromise();
    }

    /**
     * ip static that user owns
     * IP static
     * @param param the request object
     */
    public ipStatic(param: SettingsApiIpStaticRequest, options?: Configuration): Promise<IpStatic200Response> {
        return this.api.ipStatic(param.id, param.status,  options).toPromise();
    }

    /**
     * update envs that user owns
     * Update envs
     * @param param the request object
     */
    public updateEnvsWithHttpInfo(param: SettingsApiUpdateEnvsRequest, options?: Configuration): Promise<HttpInfo<UpdateEnvs200Response>> {
        return this.api.updateEnvsWithHttpInfo(param.updateEnvs,  options).toPromise();
    }

    /**
     * update envs that user owns
     * Update envs
     * @param param the request object
     */
    public updateEnvs(param: SettingsApiUpdateEnvsRequest, options?: Configuration): Promise<UpdateEnvs200Response> {
        return this.api.updateEnvs(param.updateEnvs,  options).toPromise();
    }

    /**
     * zero downtime that user owns
     * Zero downtime
     * @param param the request object
     */
    public zeroDowntimeWithHttpInfo(param: SettingsApiZeroDowntimeRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.zeroDowntimeWithHttpInfo(param.id, param.status,  options).toPromise();
    }

    /**
     * zero downtime that user owns
     * Zero downtime
     * @param param the request object
     */
    public zeroDowntime(param: SettingsApiZeroDowntimeRequest, options?: Configuration): Promise<void> {
        return this.api.zeroDowntime(param.id, param.status,  options).toPromise();
    }

}
