import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Applets } from '../models/Applets';
import { AppletsAppletsInner } from '../models/AppletsAppletsInner';
import { AppletsAppletsInnerRelease } from '../models/AppletsAppletsInnerRelease';
import { ChangePlanRequest } from '../models/ChangePlanRequest';
import { CheckDomain } from '../models/CheckDomain';
import { CheckDomainDomain } from '../models/CheckDomainDomain';
import { CheckDomainDomainProject } from '../models/CheckDomainDomainProject';
import { CheckDomainDomainProjectCurrentService } from '../models/CheckDomainDomainProjectCurrentService';
import { CreateApp } from '../models/CreateApp';
import { CreateAppDomainRequest } from '../models/CreateAppDomainRequest';
import { CreateDiskRequest } from '../models/CreateDiskRequest';
import { DeployReleases } from '../models/DeployReleases';
import { Domains } from '../models/Domains';
import { DomainsDomainsInner } from '../models/DomainsDomainsInner';
import { DomainsDomainsInnerProject } from '../models/DomainsDomainsInnerProject';
import { EnableSslRequest } from '../models/EnableSslRequest';
import { ProjectAllDetails } from '../models/ProjectAllDetails';
import { ProjectAllDetailsProject } from '../models/ProjectAllDetailsProject';
import { ProjectAllDetailsProjectEnvsInner } from '../models/ProjectAllDetailsProjectEnvsInner';
import { ProjectAllDetailsProjectNode } from '../models/ProjectAllDetailsProjectNode';
import { Projects } from '../models/Projects';
import { ProjectsProjectsInner } from '../models/ProjectsProjectsInner';
import { RedirectDomainRequest } from '../models/RedirectDomainRequest';
import { Releases } from '../models/Releases';
import { ReleasesReleasesInner } from '../models/ReleasesReleasesInner';
import { SetAppDomainRequest } from '../models/SetAppDomainRequest';
import { TurnAppRequest } from '../models/TurnAppRequest';
import { UpdateEnvs } from '../models/UpdateEnvs';
import { UpdateEnvsVariablesInner } from '../models/UpdateEnvsVariablesInner';
import { ObservableAppsApi } from './ObservableAPI';

import { AppsApiRequestFactory, AppsApiResponseProcessor} from "../apis/AppsApi";
export class PromiseAppsApi {
    private api: ObservableAppsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AppsApiRequestFactory,
        responseProcessor?: AppsApiResponseProcessor
    ) {
        this.api = new ObservableAppsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create app that user owns
     * Change plan
     * @param name The name of your app
     * @param plan The plan of your app
     */
    public changePlanWithHttpInfo(name: string, plan: ChangePlanRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.changePlanWithHttpInfo(name, plan, _options);
        return result.toPromise();
    }

    /**
     * create app that user owns
     * Change plan
     * @param name The name of your app
     * @param plan The plan of your app
     */
    public changePlan(name: string, plan: ChangePlanRequest, _options?: Configuration): Promise<void> {
        const result = this.api.changePlan(name, plan, _options);
        return result.toPromise();
    }

    /**
     * create app that user owns
     * Create a app
     * @param createApp 
     */
    public createAppWithHttpInfo(createApp: CreateApp, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createAppWithHttpInfo(createApp, _options);
        return result.toPromise();
    }

    /**
     * create app that user owns
     * Create a app
     * @param createApp 
     */
    public createApp(createApp: CreateApp, _options?: Configuration): Promise<void> {
        const result = this.api.createApp(createApp, _options);
        return result.toPromise();
    }

    /**
     * delete app that user owns
     * Delete a app
     * @param name The name of the app to delete
     */
    public deleteAppByNameWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteAppByNameWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * delete app that user owns
     * Delete a app
     * @param name The name of the app to delete
     */
    public deleteAppByName(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteAppByName(name, _options);
        return result.toPromise();
    }

    /**
     * get applets of app that user owns
     * Get applets of app
     * @param name The name of your app
     */
    public getAppAppletsWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<Applets>> {
        const result = this.api.getAppAppletsWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * get applets of app that user owns
     * Get applets of app
     * @param name The name of your app
     */
    public getAppApplets(name: string, _options?: Configuration): Promise<Applets> {
        const result = this.api.getAppApplets(name, _options);
        return result.toPromise();
    }

    /**
     * get all details of all project that user owns
     * Get details of a project
     * @param name The name of your app
     */
    public getAppByNameWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<ProjectAllDetails>> {
        const result = this.api.getAppByNameWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * get all details of all project that user owns
     * Get details of a project
     * @param name The name of your app
     */
    public getAppByName(name: string, _options?: Configuration): Promise<ProjectAllDetails> {
        const result = this.api.getAppByName(name, _options);
        return result.toPromise();
    }

    /**
     * get logs of app that user owns
     * Get logs of app
     * @param name The name of your app
     * @param since Show logs since timestamp
     */
    public getAppLogsWithHttpInfo(name: string, since: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getAppLogsWithHttpInfo(name, since, _options);
        return result.toPromise();
    }

    /**
     * get logs of app that user owns
     * Get logs of app
     * @param name The name of your app
     * @param since Show logs since timestamp
     */
    public getAppLogs(name: string, since: string, _options?: Configuration): Promise<void> {
        const result = this.api.getAppLogs(name, since, _options);
        return result.toPromise();
    }

    /**
     * get releases of app that user owns
     * Get releases of app
     * @param name The name of your app
     * @param page The page of your releases
     * @param count The count of your releases
     */
    public getAppReleasesWithHttpInfo(name: string, page: number, count: number, _options?: Configuration): Promise<HttpInfo<Releases>> {
        const result = this.api.getAppReleasesWithHttpInfo(name, page, count, _options);
        return result.toPromise();
    }

    /**
     * get releases of app that user owns
     * Get releases of app
     * @param name The name of your app
     * @param page The page of your releases
     * @param count The count of your releases
     */
    public getAppReleases(name: string, page: number, count: number, _options?: Configuration): Promise<Releases> {
        const result = this.api.getAppReleases(name, page, count, _options);
        return result.toPromise();
    }

    /**
     * get all details of all projects that user owns
     * Get details of all projects
     */
    public getAppsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Projects>> {
        const result = this.api.getAppsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * get all details of all projects that user owns
     * Get details of all projects
     */
    public getApps(_options?: Configuration): Promise<Projects> {
        const result = this.api.getApps(_options);
        return result.toPromise();
    }

    /**
     * to restart app that user owns
     * To restart a app
     * @param name The name of the app to restart
     */
    public restartAppWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.restartAppWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * to restart app that user owns
     * To restart a app
     * @param name The name of the app to restart
     */
    public restartApp(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.restartApp(name, _options);
        return result.toPromise();
    }

    /**
     * turn on or off a app that user owns
     * Turn on or off a app
     * @param name The name of the app to turn on or off
     * @param scale Return 1 to turn on or 0 to turn off
     */
    public turnAppWithHttpInfo(name: string, scale: TurnAppRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.turnAppWithHttpInfo(name, scale, _options);
        return result.toPromise();
    }

    /**
     * turn on or off a app that user owns
     * Turn on or off a app
     * @param name The name of the app to turn on or off
     * @param scale Return 1 to turn on or 0 to turn off
     */
    public turnApp(name: string, scale: TurnAppRequest, _options?: Configuration): Promise<void> {
        const result = this.api.turnApp(name, scale, _options);
        return result.toPromise();
    }


}



import { ObservableDeployApi } from './ObservableAPI';

import { DeployApiRequestFactory, DeployApiResponseProcessor} from "../apis/DeployApi";
export class PromiseDeployApi {
    private api: ObservableDeployApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DeployApiRequestFactory,
        responseProcessor?: DeployApiResponseProcessor
    ) {
        this.api = new ObservableDeployApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * deploy releases that user owns
     * Deploy releases
     * @param name The name of your app for deploy
     * @param deployReleases 
     */
    public releasesDeployWithHttpInfo(name: string, deployReleases: DeployReleases, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.releasesDeployWithHttpInfo(name, deployReleases, _options);
        return result.toPromise();
    }

    /**
     * deploy releases that user owns
     * Deploy releases
     * @param name The name of your app for deploy
     * @param deployReleases 
     */
    public releasesDeploy(name: string, deployReleases: DeployReleases, _options?: Configuration): Promise<void> {
        const result = this.api.releasesDeploy(name, deployReleases, _options);
        return result.toPromise();
    }

    /**
     * deploy sources code that user owns
     * Deploy sources code
     * @param name The name of your app for deploy
     * @param file The .gz file to deploy
     */
    public sourcesDeployWithHttpInfo(name: string, file: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sourcesDeployWithHttpInfo(name, file, _options);
        return result.toPromise();
    }

    /**
     * deploy sources code that user owns
     * Deploy sources code
     * @param name The name of your app for deploy
     * @param file The .gz file to deploy
     */
    public sourcesDeploy(name: string, file: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.sourcesDeploy(name, file, _options);
        return result.toPromise();
    }


}



import { ObservableDisksApi } from './ObservableAPI';

import { DisksApiRequestFactory, DisksApiResponseProcessor} from "../apis/DisksApi";
export class PromiseDisksApi {
    private api: ObservableDisksApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DisksApiRequestFactory,
        responseProcessor?: DisksApiResponseProcessor
    ) {
        this.api = new ObservableDisksApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * create backup disk that user owns
     * Create backup disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public createBackupWithHttpInfo(id: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createBackupWithHttpInfo(id, name, _options);
        return result.toPromise();
    }

    /**
     * create backup disk that user owns
     * Create backup disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public createBackup(id: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.createBackup(id, name, _options);
        return result.toPromise();
    }

    /**
     * create a disk that user owns
     * Create a disk
     * @param name The name of your app
     * @param disk The disk of your app
     */
    public createDiskWithHttpInfo(name: string, disk: CreateDiskRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createDiskWithHttpInfo(name, disk, _options);
        return result.toPromise();
    }

    /**
     * create a disk that user owns
     * Create a disk
     * @param name The name of your app
     * @param disk The disk of your app
     */
    public createDisk(name: string, disk: CreateDiskRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createDisk(name, disk, _options);
        return result.toPromise();
    }

    /**
     * delete a disk that user owns
     * Delete a disk
     * @param id The id of your app
     * @param name The name of your disk of app
     */
    public deleteDiskWithHttpInfo(id: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDiskWithHttpInfo(id, name, _options);
        return result.toPromise();
    }

    /**
     * delete a disk that user owns
     * Delete a disk
     * @param id The id of your app
     * @param name The name of your disk of app
     */
    public deleteDisk(id: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDisk(id, name, _options);
        return result.toPromise();
    }

    /**
     * download backup disk that user owns
     * Download backup disk
     * @param id The id of your app
     * @param dname The name of your disk
     * @param bname The name of your backup
     */
    public downloadBackupWithHttpInfo(id: string, dname: string, bname: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.downloadBackupWithHttpInfo(id, dname, bname, _options);
        return result.toPromise();
    }

    /**
     * download backup disk that user owns
     * Download backup disk
     * @param id The id of your app
     * @param dname The name of your disk
     * @param bname The name of your backup
     */
    public downloadBackup(id: string, dname: string, bname: string, _options?: Configuration): Promise<void> {
        const result = this.api.downloadBackup(id, dname, bname, _options);
        return result.toPromise();
    }

    /**
     * get backups disk that user owns
     * Get backups disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public getBackupsWithHttpInfo(id: string, name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getBackupsWithHttpInfo(id, name, _options);
        return result.toPromise();
    }

    /**
     * get backups disk that user owns
     * Get backups disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public getBackups(id: string, name: string, _options?: Configuration): Promise<void> {
        const result = this.api.getBackups(id, name, _options);
        return result.toPromise();
    }

    /**
     * get disks that user owns
     * Get disks
     * @param id The id of your app
     */
    public getDisksWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getDisksWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * get disks that user owns
     * Get disks
     * @param id The id of your app
     */
    public getDisks(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.getDisks(id, _options);
        return result.toPromise();
    }


}



import { ObservableDomainsApi } from './ObservableAPI';

import { DomainsApiRequestFactory, DomainsApiResponseProcessor} from "../apis/DomainsApi";
export class PromiseDomainsApi {
    private api: ObservableDomainsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainsApiRequestFactory,
        responseProcessor?: DomainsApiResponseProcessor
    ) {
        this.api = new ObservableDomainsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * check a domain that user owns
     * Check a domain
     * @param id The id of your domain
     */
    public checkDomainWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<CheckDomain>> {
        const result = this.api.checkDomainWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * check a domain that user owns
     * Check a domain
     * @param id The id of your domain
     */
    public checkDomain(id: string, _options?: Configuration): Promise<CheckDomain> {
        const result = this.api.checkDomain(id, _options);
        return result.toPromise();
    }

    /**
     * create a domain that user owns
     * Create a domain
     * @param domain The domain of your app
     */
    public createAppDomainWithHttpInfo(domain: CreateAppDomainRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createAppDomainWithHttpInfo(domain, _options);
        return result.toPromise();
    }

    /**
     * create a domain that user owns
     * Create a domain
     * @param domain The domain of your app
     */
    public createAppDomain(domain: CreateAppDomainRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createAppDomain(domain, _options);
        return result.toPromise();
    }

    /**
     * delete a domain that user owns
     * Delete a domain
     * @param id The id of your domain
     */
    public deleteDomainWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteDomainWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * delete a domain that user owns
     * Delete a domain
     * @param id The id of your domain
     */
    public deleteDomain(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteDomain(id, _options);
        return result.toPromise();
    }

    /**
     * disable ssl that user owns
     * Disable ssl
     * @param id The id of your domain
     */
    public disableSslWithHttpInfo(id: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.disableSslWithHttpInfo(id, _options);
        return result.toPromise();
    }

    /**
     * disable ssl that user owns
     * Disable ssl
     * @param id The id of your domain
     */
    public disableSsl(id: string, _options?: Configuration): Promise<void> {
        const result = this.api.disableSsl(id, _options);
        return result.toPromise();
    }

    /**
     * enable ssl that user owns
     * Enable ssl
     * @param domain The domain of your app
     */
    public enableSslWithHttpInfo(domain: EnableSslRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.enableSslWithHttpInfo(domain, _options);
        return result.toPromise();
    }

    /**
     * enable ssl that user owns
     * Enable ssl
     * @param domain The domain of your app
     */
    public enableSsl(domain: EnableSslRequest, _options?: Configuration): Promise<void> {
        const result = this.api.enableSsl(domain, _options);
        return result.toPromise();
    }

    /**
     * get all domains that user owns
     * Get all domains
     * @param name The name of your app
     */
    public getAppDomainsWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<Domains>> {
        const result = this.api.getAppDomainsWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * get all domains that user owns
     * Get all domains
     * @param name The name of your app
     */
    public getAppDomains(name: string, _options?: Configuration): Promise<Domains> {
        const result = this.api.getAppDomains(name, _options);
        return result.toPromise();
    }

    /**
     * redirect a domain that user owns
     * Redirect a domain
     * @param id The id of your domain
     * @param domain The domain of your app
     */
    public redirectDomainWithHttpInfo(id: string, domain: RedirectDomainRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.redirectDomainWithHttpInfo(id, domain, _options);
        return result.toPromise();
    }

    /**
     * redirect a domain that user owns
     * Redirect a domain
     * @param id The id of your domain
     * @param domain The domain of your app
     */
    public redirectDomain(id: string, domain: RedirectDomainRequest, _options?: Configuration): Promise<void> {
        const result = this.api.redirectDomain(id, domain, _options);
        return result.toPromise();
    }

    /**
     * set a domain for project that user owns
     * Set a domain for project
     * @param domain The domain of your app
     */
    public setAppDomainWithHttpInfo(domain: SetAppDomainRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.setAppDomainWithHttpInfo(domain, _options);
        return result.toPromise();
    }

    /**
     * set a domain for project that user owns
     * Set a domain for project
     * @param domain The domain of your app
     */
    public setAppDomain(domain: SetAppDomainRequest, _options?: Configuration): Promise<void> {
        const result = this.api.setAppDomain(domain, _options);
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
     * get cpu reports of app that user owns
     * Get cpu reports of app
     * @param name The name of your app
     * @param since The since of your cpu reports
     */
    public getAppCpuReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getAppCpuReportsWithHttpInfo(name, since, _options);
        return result.toPromise();
    }

    /**
     * get cpu reports of app that user owns
     * Get cpu reports of app
     * @param name The name of your app
     * @param since The since of your cpu reports
     */
    public getAppCpuReports(name: string, since: number, _options?: Configuration): Promise<void> {
        const result = this.api.getAppCpuReports(name, since, _options);
        return result.toPromise();
    }

    /**
     * get memory reports of app that user owns
     * Get memory reports of app
     * @param name The name of your app
     * @param since The since of your memory reports
     */
    public getAppMemoryReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getAppMemoryReportsWithHttpInfo(name, since, _options);
        return result.toPromise();
    }

    /**
     * get memory reports of app that user owns
     * Get memory reports of app
     * @param name The name of your app
     * @param since The since of your memory reports
     */
    public getAppMemoryReports(name: string, since: number, _options?: Configuration): Promise<void> {
        const result = this.api.getAppMemoryReports(name, since, _options);
        return result.toPromise();
    }

    /**
     * get network-receive reports of app that user owns
     * Get network-receive reports of app
     * @param name The name of your app
     * @param since The since of your network-receive reports
     */
    public getAppNetworkReceiveReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getAppNetworkReceiveReportsWithHttpInfo(name, since, _options);
        return result.toPromise();
    }

    /**
     * get network-receive reports of app that user owns
     * Get network-receive reports of app
     * @param name The name of your app
     * @param since The since of your network-receive reports
     */
    public getAppNetworkReceiveReports(name: string, since: number, _options?: Configuration): Promise<void> {
        const result = this.api.getAppNetworkReceiveReports(name, since, _options);
        return result.toPromise();
    }

    /**
     * get summary reports of app that user owns
     * Get summary reports of app
     * @param name The name of your app
     */
    public getAppSummaryReportsWithHttpInfo(name: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getAppSummaryReportsWithHttpInfo(name, _options);
        return result.toPromise();
    }

    /**
     * get summary reports of app that user owns
     * Get summary reports of app
     * @param name The name of your app
     */
    public getAppSummaryReports(name: string, _options?: Configuration): Promise<void> {
        const result = this.api.getAppSummaryReports(name, _options);
        return result.toPromise();
    }

    /**
     * get network-transmit reports of app that user owns
     * Get network-transmit reports of app
     * @param name The name of your app
     * @param since The since of your network-transmit reports
     */
    public getNetworkTransmitReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getNetworkTransmitReportsWithHttpInfo(name, since, _options);
        return result.toPromise();
    }

    /**
     * get network-transmit reports of app that user owns
     * Get network-transmit reports of app
     * @param name The name of your app
     * @param since The since of your network-transmit reports
     */
    public getNetworkTransmitReports(name: string, since: number, _options?: Configuration): Promise<void> {
        const result = this.api.getNetworkTransmitReports(name, since, _options);
        return result.toPromise();
    }


}



import { ObservableSettingsApi } from './ObservableAPI';

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class PromiseSettingsApi {
    private api: ObservableSettingsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.api = new ObservableSettingsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * default subdomain that user owns
     * Default subdomain
     * @param id 
     * @param status disable or enable
     */
    public defaultSubdomainWithHttpInfo(id: string, status: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.defaultSubdomainWithHttpInfo(id, status, _options);
        return result.toPromise();
    }

    /**
     * default subdomain that user owns
     * Default subdomain
     * @param id 
     * @param status disable or enable
     */
    public defaultSubdomain(id: string, status: string, _options?: Configuration): Promise<void> {
        const result = this.api.defaultSubdomain(id, status, _options);
        return result.toPromise();
    }

    /**
     * ip static that user owns
     * IP static
     * @param id 
     * @param status disable or enable
     */
    public ipStaticWithHttpInfo(id: string, status: string, _options?: Configuration): Promise<HttpInfo<any>> {
        const result = this.api.ipStaticWithHttpInfo(id, status, _options);
        return result.toPromise();
    }

    /**
     * ip static that user owns
     * IP static
     * @param id 
     * @param status disable or enable
     */
    public ipStatic(id: string, status: string, _options?: Configuration): Promise<any> {
        const result = this.api.ipStatic(id, status, _options);
        return result.toPromise();
    }

    /**
     * update envs that user owns
     * Update envs
     * @param updateEnvs 
     */
    public updateEnvsWithHttpInfo(updateEnvs: UpdateEnvs, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateEnvsWithHttpInfo(updateEnvs, _options);
        return result.toPromise();
    }

    /**
     * update envs that user owns
     * Update envs
     * @param updateEnvs 
     */
    public updateEnvs(updateEnvs: UpdateEnvs, _options?: Configuration): Promise<void> {
        const result = this.api.updateEnvs(updateEnvs, _options);
        return result.toPromise();
    }

    /**
     * zero downtime that user owns
     * Zero downtime
     * @param id 
     * @param status disable or enable
     */
    public zeroDowntimeWithHttpInfo(id: string, status: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.zeroDowntimeWithHttpInfo(id, status, _options);
        return result.toPromise();
    }

    /**
     * zero downtime that user owns
     * Zero downtime
     * @param id 
     * @param status disable or enable
     */
    public zeroDowntime(id: string, status: string, _options?: Configuration): Promise<void> {
        const result = this.api.zeroDowntime(id, status, _options);
        return result.toPromise();
    }


}



