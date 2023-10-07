import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AppsApiRequestFactory, AppsApiResponseProcessor} from "../apis/AppsApi";
export class ObservableAppsApi {
    private requestFactory: AppsApiRequestFactory;
    private responseProcessor: AppsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AppsApiRequestFactory,
        responseProcessor?: AppsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AppsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AppsApiResponseProcessor();
    }

    /**
     * create app that user owns
     * Change plan
     * @param name The name of your app
     * @param plan The plan of your app
     */
    public changePlanWithHttpInfo(name: string, plan: ChangePlanRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.changePlan(name, plan, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changePlanWithHttpInfo(rsp)));
            }));
    }

    /**
     * create app that user owns
     * Change plan
     * @param name The name of your app
     * @param plan The plan of your app
     */
    public changePlan(name: string, plan: ChangePlanRequest, _options?: Configuration): Observable<void> {
        return this.changePlanWithHttpInfo(name, plan, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * create app that user owns
     * Create a app
     * @param createApp 
     */
    public createAppWithHttpInfo(createApp: CreateApp, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createApp(createApp, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * create app that user owns
     * Create a app
     * @param createApp 
     */
    public createApp(createApp: CreateApp, _options?: Configuration): Observable<void> {
        return this.createAppWithHttpInfo(createApp, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * delete app that user owns
     * Delete a app
     * @param name The name of the app to delete
     */
    public deleteAppByNameWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteAppByName(name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteAppByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete app that user owns
     * Delete a app
     * @param name The name of the app to delete
     */
    public deleteAppByName(name: string, _options?: Configuration): Observable<void> {
        return this.deleteAppByNameWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * get applets of app that user owns
     * Get applets of app
     * @param name The name of your app
     */
    public getAppAppletsWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<Applets>> {
        const requestContextPromise = this.requestFactory.getAppApplets(name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppAppletsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get applets of app that user owns
     * Get applets of app
     * @param name The name of your app
     */
    public getAppApplets(name: string, _options?: Configuration): Observable<Applets> {
        return this.getAppAppletsWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<Applets>) => apiResponse.data));
    }

    /**
     * get all details of all project that user owns
     * Get details of a project
     * @param name The name of your app
     */
    public getAppByNameWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<ProjectAllDetails>> {
        const requestContextPromise = this.requestFactory.getAppByName(name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppByNameWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all details of all project that user owns
     * Get details of a project
     * @param name The name of your app
     */
    public getAppByName(name: string, _options?: Configuration): Observable<ProjectAllDetails> {
        return this.getAppByNameWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<ProjectAllDetails>) => apiResponse.data));
    }

    /**
     * get logs of app that user owns
     * Get logs of app
     * @param name The name of your app
     * @param since Show logs since timestamp
     */
    public getAppLogsWithHttpInfo(name: string, since: string, _options?: Configuration): Observable<HttpInfo<Array<LogsInner>>> {
        const requestContextPromise = this.requestFactory.getAppLogs(name, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppLogsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get logs of app that user owns
     * Get logs of app
     * @param name The name of your app
     * @param since Show logs since timestamp
     */
    public getAppLogs(name: string, since: string, _options?: Configuration): Observable<Array<LogsInner>> {
        return this.getAppLogsWithHttpInfo(name, since, _options).pipe(map((apiResponse: HttpInfo<Array<LogsInner>>) => apiResponse.data));
    }

    /**
     * get releases of app that user owns
     * Get releases of app
     * @param name The name of your app
     * @param page The page of your releases
     * @param count The count of your releases
     */
    public getAppReleasesWithHttpInfo(name: string, page: number, count: number, _options?: Configuration): Observable<HttpInfo<Releases>> {
        const requestContextPromise = this.requestFactory.getAppReleases(name, page, count, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppReleasesWithHttpInfo(rsp)));
            }));
    }

    /**
     * get releases of app that user owns
     * Get releases of app
     * @param name The name of your app
     * @param page The page of your releases
     * @param count The count of your releases
     */
    public getAppReleases(name: string, page: number, count: number, _options?: Configuration): Observable<Releases> {
        return this.getAppReleasesWithHttpInfo(name, page, count, _options).pipe(map((apiResponse: HttpInfo<Releases>) => apiResponse.data));
    }

    /**
     * get all details of all projects that user owns
     * Get details of all projects
     */
    public getAppsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Projects>> {
        const requestContextPromise = this.requestFactory.getApps(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all details of all projects that user owns
     * Get details of all projects
     */
    public getApps(_options?: Configuration): Observable<Projects> {
        return this.getAppsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Projects>) => apiResponse.data));
    }

    /**
     * to restart app that user owns
     * To restart a app
     * @param name The name of the app to restart
     */
    public restartAppWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.restartApp(name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.restartAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * to restart app that user owns
     * To restart a app
     * @param name The name of the app to restart
     */
    public restartApp(name: string, _options?: Configuration): Observable<void> {
        return this.restartAppWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * turn on or off a app that user owns
     * Turn on or off a app
     * @param name The name of the app to turn on or off
     * @param scale Return 1 to turn on or 0 to turn off
     */
    public turnAppWithHttpInfo(name: string, scale: TurnAppRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.turnApp(name, scale, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.turnAppWithHttpInfo(rsp)));
            }));
    }

    /**
     * turn on or off a app that user owns
     * Turn on or off a app
     * @param name The name of the app to turn on or off
     * @param scale Return 1 to turn on or 0 to turn off
     */
    public turnApp(name: string, scale: TurnAppRequest, _options?: Configuration): Observable<void> {
        return this.turnAppWithHttpInfo(name, scale, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DeployApiRequestFactory, DeployApiResponseProcessor} from "../apis/DeployApi";
export class ObservableDeployApi {
    private requestFactory: DeployApiRequestFactory;
    private responseProcessor: DeployApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DeployApiRequestFactory,
        responseProcessor?: DeployApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DeployApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DeployApiResponseProcessor();
    }

    /**
     * deploy releases that user owns
     * Deploy releases
     * @param name The name of your app for deploy
     * @param deployReleases 
     */
    public releasesDeployWithHttpInfo(name: string, deployReleases: DeployReleases, _options?: Configuration): Observable<HttpInfo<ReleasesDeploy200Response>> {
        const requestContextPromise = this.requestFactory.releasesDeploy(name, deployReleases, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.releasesDeployWithHttpInfo(rsp)));
            }));
    }

    /**
     * deploy releases that user owns
     * Deploy releases
     * @param name The name of your app for deploy
     * @param deployReleases 
     */
    public releasesDeploy(name: string, deployReleases: DeployReleases, _options?: Configuration): Observable<ReleasesDeploy200Response> {
        return this.releasesDeployWithHttpInfo(name, deployReleases, _options).pipe(map((apiResponse: HttpInfo<ReleasesDeploy200Response>) => apiResponse.data));
    }

    /**
     * deploy sources code that user owns
     * Deploy sources code
     * @param name The name of your app for deploy
     * @param file The .gz file to deploy
     */
    public sourcesDeployWithHttpInfo(name: string, file: HttpFile, _options?: Configuration): Observable<HttpInfo<SourcesDeploy200Response>> {
        const requestContextPromise = this.requestFactory.sourcesDeploy(name, file, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sourcesDeployWithHttpInfo(rsp)));
            }));
    }

    /**
     * deploy sources code that user owns
     * Deploy sources code
     * @param name The name of your app for deploy
     * @param file The .gz file to deploy
     */
    public sourcesDeploy(name: string, file: HttpFile, _options?: Configuration): Observable<SourcesDeploy200Response> {
        return this.sourcesDeployWithHttpInfo(name, file, _options).pipe(map((apiResponse: HttpInfo<SourcesDeploy200Response>) => apiResponse.data));
    }

}

import { DisksApiRequestFactory, DisksApiResponseProcessor} from "../apis/DisksApi";
export class ObservableDisksApi {
    private requestFactory: DisksApiRequestFactory;
    private responseProcessor: DisksApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DisksApiRequestFactory,
        responseProcessor?: DisksApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DisksApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DisksApiResponseProcessor();
    }

    /**
     * create backup disk that user owns
     * Create backup disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public createBackupWithHttpInfo(id: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createBackup(id, name, _options);

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
     * create backup disk that user owns
     * Create backup disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public createBackup(id: string, name: string, _options?: Configuration): Observable<void> {
        return this.createBackupWithHttpInfo(id, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * create a disk that user owns
     * Create a disk
     * @param name The name of your app
     * @param disk The disk of your app
     */
    public createDiskWithHttpInfo(name: string, disk: CreateDiskRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createDisk(name, disk, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createDiskWithHttpInfo(rsp)));
            }));
    }

    /**
     * create a disk that user owns
     * Create a disk
     * @param name The name of your app
     * @param disk The disk of your app
     */
    public createDisk(name: string, disk: CreateDiskRequest, _options?: Configuration): Observable<void> {
        return this.createDiskWithHttpInfo(name, disk, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * create ftp that user owns
     * Create ftp
     * @param name The name of your app
     * @param dname The name of your disk
     * @param createFtp The plan of your app
     */
    public createFtpWithHttpInfo(name: string, dname: string, createFtp: CreateFtpRequest, _options?: Configuration): Observable<HttpInfo<CreateFtp200Response>> {
        const requestContextPromise = this.requestFactory.createFtp(name, dname, createFtp, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFtpWithHttpInfo(rsp)));
            }));
    }

    /**
     * create ftp that user owns
     * Create ftp
     * @param name The name of your app
     * @param dname The name of your disk
     * @param createFtp The plan of your app
     */
    public createFtp(name: string, dname: string, createFtp: CreateFtpRequest, _options?: Configuration): Observable<CreateFtp200Response> {
        return this.createFtpWithHttpInfo(name, dname, createFtp, _options).pipe(map((apiResponse: HttpInfo<CreateFtp200Response>) => apiResponse.data));
    }

    /**
     * delete a disk that user owns
     * Delete a disk
     * @param id The id of your app
     * @param name The name of your disk of app
     */
    public deleteDiskWithHttpInfo(id: string, name: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDisk(id, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDiskWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete a disk that user owns
     * Delete a disk
     * @param id The id of your app
     * @param name The name of your disk of app
     */
    public deleteDisk(id: string, name: string, _options?: Configuration): Observable<void> {
        return this.deleteDiskWithHttpInfo(id, name, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * delete a ftp that user owns
     * Delete a ftp
     * @param fname The name of your ftp
     */
    public deleteFtpWithHttpInfo(fname: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFtp(fname, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFtpWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete a ftp that user owns
     * Delete a ftp
     * @param fname The name of your ftp
     */
    public deleteFtp(fname: string, _options?: Configuration): Observable<void> {
        return this.deleteFtpWithHttpInfo(fname, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * download backup disk that user owns
     * Download backup disk
     * @param id The id of your app
     * @param dname The name of your disk
     * @param bname The name of your backup
     */
    public downloadBackupWithHttpInfo(id: string, dname: string, bname: string, _options?: Configuration): Observable<HttpInfo<DownloadBackup200Response>> {
        const requestContextPromise = this.requestFactory.downloadBackup(id, dname, bname, _options);

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
     * download backup disk that user owns
     * Download backup disk
     * @param id The id of your app
     * @param dname The name of your disk
     * @param bname The name of your backup
     */
    public downloadBackup(id: string, dname: string, bname: string, _options?: Configuration): Observable<DownloadBackup200Response> {
        return this.downloadBackupWithHttpInfo(id, dname, bname, _options).pipe(map((apiResponse: HttpInfo<DownloadBackup200Response>) => apiResponse.data));
    }

    /**
     * get backups disk that user owns
     * Get backups disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public getBackupsWithHttpInfo(id: string, name: string, _options?: Configuration): Observable<HttpInfo<GetDiskBackup>> {
        const requestContextPromise = this.requestFactory.getBackups(id, name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBackupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get backups disk that user owns
     * Get backups disk
     * @param id The id of your app
     * @param name The name of your disk
     */
    public getBackups(id: string, name: string, _options?: Configuration): Observable<GetDiskBackup> {
        return this.getBackupsWithHttpInfo(id, name, _options).pipe(map((apiResponse: HttpInfo<GetDiskBackup>) => apiResponse.data));
    }

    /**
     * get disks that user owns
     * Get disks
     * @param id The id of your app
     */
    public getDisksWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<GetDisks>> {
        const requestContextPromise = this.requestFactory.getDisks(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getDisksWithHttpInfo(rsp)));
            }));
    }

    /**
     * get disks that user owns
     * Get disks
     * @param id The id of your app
     */
    public getDisks(id: string, _options?: Configuration): Observable<GetDisks> {
        return this.getDisksWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<GetDisks>) => apiResponse.data));
    }

    /**
     * get ftps that user owns
     * Get ftps
     * @param name The name of your app
     * @param dname The name of your disk
     */
    public getFtpsWithHttpInfo(name: string, dname: string, _options?: Configuration): Observable<HttpInfo<GetFtps200Response>> {
        const requestContextPromise = this.requestFactory.getFtps(name, dname, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getFtpsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get ftps that user owns
     * Get ftps
     * @param name The name of your app
     * @param dname The name of your disk
     */
    public getFtps(name: string, dname: string, _options?: Configuration): Observable<GetFtps200Response> {
        return this.getFtpsWithHttpInfo(name, dname, _options).pipe(map((apiResponse: HttpInfo<GetFtps200Response>) => apiResponse.data));
    }

    /**
     * resize disk that user owns
     * Resize disk
     * @param name The name of your app
     * @param dname The name of your disk
     * @param resizeDisk The size of your disk
     */
    public resizeDiskWithHttpInfo(name: string, dname: string, resizeDisk: ResizeDiskRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.resizeDisk(name, dname, resizeDisk, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.resizeDiskWithHttpInfo(rsp)));
            }));
    }

    /**
     * resize disk that user owns
     * Resize disk
     * @param name The name of your app
     * @param dname The name of your disk
     * @param resizeDisk The size of your disk
     */
    public resizeDisk(name: string, dname: string, resizeDisk: ResizeDiskRequest, _options?: Configuration): Observable<void> {
        return this.resizeDiskWithHttpInfo(name, dname, resizeDisk, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { DomainsApiRequestFactory, DomainsApiResponseProcessor} from "../apis/DomainsApi";
export class ObservableDomainsApi {
    private requestFactory: DomainsApiRequestFactory;
    private responseProcessor: DomainsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: DomainsApiRequestFactory,
        responseProcessor?: DomainsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new DomainsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new DomainsApiResponseProcessor();
    }

    /**
     * check a domain that user owns
     * Check a domain
     * @param id The id of your domain
     */
    public checkDomainWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<CheckDomain>> {
        const requestContextPromise = this.requestFactory.checkDomain(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkDomainWithHttpInfo(rsp)));
            }));
    }

    /**
     * check a domain that user owns
     * Check a domain
     * @param id The id of your domain
     */
    public checkDomain(id: string, _options?: Configuration): Observable<CheckDomain> {
        return this.checkDomainWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<CheckDomain>) => apiResponse.data));
    }

    /**
     * create a domain that user owns
     * Create a domain
     * @param domain The domain of your app
     */
    public createAppDomainWithHttpInfo(domain: CreateAppDomainRequest, _options?: Configuration): Observable<HttpInfo<CreateAppDomain201Response>> {
        const requestContextPromise = this.requestFactory.createAppDomain(domain, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createAppDomainWithHttpInfo(rsp)));
            }));
    }

    /**
     * create a domain that user owns
     * Create a domain
     * @param domain The domain of your app
     */
    public createAppDomain(domain: CreateAppDomainRequest, _options?: Configuration): Observable<CreateAppDomain201Response> {
        return this.createAppDomainWithHttpInfo(domain, _options).pipe(map((apiResponse: HttpInfo<CreateAppDomain201Response>) => apiResponse.data));
    }

    /**
     * delete a domain that user owns
     * Delete a domain
     * @param id The id of your domain
     */
    public deleteDomainWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteDomain(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteDomainWithHttpInfo(rsp)));
            }));
    }

    /**
     * delete a domain that user owns
     * Delete a domain
     * @param id The id of your domain
     */
    public deleteDomain(id: string, _options?: Configuration): Observable<void> {
        return this.deleteDomainWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * disable ssl that user owns
     * Disable ssl
     * @param id The id of your domain
     */
    public disableSslWithHttpInfo(id: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.disableSsl(id, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.disableSslWithHttpInfo(rsp)));
            }));
    }

    /**
     * disable ssl that user owns
     * Disable ssl
     * @param id The id of your domain
     */
    public disableSsl(id: string, _options?: Configuration): Observable<void> {
        return this.disableSslWithHttpInfo(id, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * enable ssl that user owns
     * Enable ssl
     * @param domain The domain of your app
     */
    public enableSslWithHttpInfo(domain: EnableSslRequest, _options?: Configuration): Observable<HttpInfo<EnableSsl200Response>> {
        const requestContextPromise = this.requestFactory.enableSsl(domain, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.enableSslWithHttpInfo(rsp)));
            }));
    }

    /**
     * enable ssl that user owns
     * Enable ssl
     * @param domain The domain of your app
     */
    public enableSsl(domain: EnableSslRequest, _options?: Configuration): Observable<EnableSsl200Response> {
        return this.enableSslWithHttpInfo(domain, _options).pipe(map((apiResponse: HttpInfo<EnableSsl200Response>) => apiResponse.data));
    }

    /**
     * get all domains that user owns
     * Get all domains
     * @param project The name of your app
     */
    public getAppDomainsWithHttpInfo(project: string, _options?: Configuration): Observable<HttpInfo<Domains>> {
        const requestContextPromise = this.requestFactory.getAppDomains(project, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppDomainsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get all domains that user owns
     * Get all domains
     * @param project The name of your app
     */
    public getAppDomains(project: string, _options?: Configuration): Observable<Domains> {
        return this.getAppDomainsWithHttpInfo(project, _options).pipe(map((apiResponse: HttpInfo<Domains>) => apiResponse.data));
    }

    /**
     * redirect a domain that user owns
     * Redirect a domain
     * @param id The id of your domain
     * @param domain The domain of your app
     */
    public redirectDomainWithHttpInfo(id: string, domain: RedirectDomainRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.redirectDomain(id, domain, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.redirectDomainWithHttpInfo(rsp)));
            }));
    }

    /**
     * redirect a domain that user owns
     * Redirect a domain
     * @param id The id of your domain
     * @param domain The domain of your app
     */
    public redirectDomain(id: string, domain: RedirectDomainRequest, _options?: Configuration): Observable<void> {
        return this.redirectDomainWithHttpInfo(id, domain, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * set a domain for project that user owns
     * Set a domain for project
     * @param domain The domain of your app
     */
    public setAppDomainWithHttpInfo(domain: SetAppDomainRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.setAppDomain(domain, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.setAppDomainWithHttpInfo(rsp)));
            }));
    }

    /**
     * set a domain for project that user owns
     * Set a domain for project
     * @param domain The domain of your app
     */
    public setAppDomain(domain: SetAppDomainRequest, _options?: Configuration): Observable<void> {
        return this.setAppDomainWithHttpInfo(domain, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
     * get cpu reports of app that user owns
     * Get cpu reports of app
     * @param name The name of your app
     * @param since The since of your cpu reports
     */
    public getAppCpuReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Observable<HttpInfo<Reports>> {
        const requestContextPromise = this.requestFactory.getAppCpuReports(name, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppCpuReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get cpu reports of app that user owns
     * Get cpu reports of app
     * @param name The name of your app
     * @param since The since of your cpu reports
     */
    public getAppCpuReports(name: string, since: number, _options?: Configuration): Observable<Reports> {
        return this.getAppCpuReportsWithHttpInfo(name, since, _options).pipe(map((apiResponse: HttpInfo<Reports>) => apiResponse.data));
    }

    /**
     * get memory reports of app that user owns
     * Get memory reports of app
     * @param name The name of your app
     * @param since The since of your memory reports
     */
    public getAppMemoryReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Observable<HttpInfo<Reports>> {
        const requestContextPromise = this.requestFactory.getAppMemoryReports(name, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppMemoryReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get memory reports of app that user owns
     * Get memory reports of app
     * @param name The name of your app
     * @param since The since of your memory reports
     */
    public getAppMemoryReports(name: string, since: number, _options?: Configuration): Observable<Reports> {
        return this.getAppMemoryReportsWithHttpInfo(name, since, _options).pipe(map((apiResponse: HttpInfo<Reports>) => apiResponse.data));
    }

    /**
     * get network-receive reports of app that user owns
     * Get network-receive reports of app
     * @param name The name of your app
     * @param since The since of your network-receive reports
     */
    public getAppNetworkReceiveReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Observable<HttpInfo<Reports>> {
        const requestContextPromise = this.requestFactory.getAppNetworkReceiveReports(name, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppNetworkReceiveReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get network-receive reports of app that user owns
     * Get network-receive reports of app
     * @param name The name of your app
     * @param since The since of your network-receive reports
     */
    public getAppNetworkReceiveReports(name: string, since: number, _options?: Configuration): Observable<Reports> {
        return this.getAppNetworkReceiveReportsWithHttpInfo(name, since, _options).pipe(map((apiResponse: HttpInfo<Reports>) => apiResponse.data));
    }

    /**
     * get summary reports of app that user owns
     * Get summary reports of app
     * @param name The name of your app
     */
    public getAppSummaryReportsWithHttpInfo(name: string, _options?: Configuration): Observable<HttpInfo<GetAppSummaryReports200Response>> {
        const requestContextPromise = this.requestFactory.getAppSummaryReports(name, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAppSummaryReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get summary reports of app that user owns
     * Get summary reports of app
     * @param name The name of your app
     */
    public getAppSummaryReports(name: string, _options?: Configuration): Observable<GetAppSummaryReports200Response> {
        return this.getAppSummaryReportsWithHttpInfo(name, _options).pipe(map((apiResponse: HttpInfo<GetAppSummaryReports200Response>) => apiResponse.data));
    }

    /**
     * get network-transmit reports of app that user owns
     * Get network-transmit reports of app
     * @param name The name of your app
     * @param since The since of your network-transmit reports
     */
    public getNetworkTransmitReportsWithHttpInfo(name: string, since: number, _options?: Configuration): Observable<HttpInfo<Reports>> {
        const requestContextPromise = this.requestFactory.getNetworkTransmitReports(name, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getNetworkTransmitReportsWithHttpInfo(rsp)));
            }));
    }

    /**
     * get network-transmit reports of app that user owns
     * Get network-transmit reports of app
     * @param name The name of your app
     * @param since The since of your network-transmit reports
     */
    public getNetworkTransmitReports(name: string, since: number, _options?: Configuration): Observable<Reports> {
        return this.getNetworkTransmitReportsWithHttpInfo(name, since, _options).pipe(map((apiResponse: HttpInfo<Reports>) => apiResponse.data));
    }

}

import { SettingsApiRequestFactory, SettingsApiResponseProcessor} from "../apis/SettingsApi";
export class ObservableSettingsApi {
    private requestFactory: SettingsApiRequestFactory;
    private responseProcessor: SettingsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SettingsApiRequestFactory,
        responseProcessor?: SettingsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SettingsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SettingsApiResponseProcessor();
    }

    /**
     * default subdomain that user owns
     * Default subdomain
     * @param id 
     * @param status disable or enable
     */
    public defaultSubdomainWithHttpInfo(id: string, status: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.defaultSubdomain(id, status, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.defaultSubdomainWithHttpInfo(rsp)));
            }));
    }

    /**
     * default subdomain that user owns
     * Default subdomain
     * @param id 
     * @param status disable or enable
     */
    public defaultSubdomain(id: string, status: string, _options?: Configuration): Observable<void> {
        return this.defaultSubdomainWithHttpInfo(id, status, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * ip static that user owns
     * IP static
     * @param id 
     * @param status disable or enable
     */
    public ipStaticWithHttpInfo(id: string, status: string, _options?: Configuration): Observable<HttpInfo<IpStatic200Response>> {
        const requestContextPromise = this.requestFactory.ipStatic(id, status, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.ipStaticWithHttpInfo(rsp)));
            }));
    }

    /**
     * ip static that user owns
     * IP static
     * @param id 
     * @param status disable or enable
     */
    public ipStatic(id: string, status: string, _options?: Configuration): Observable<IpStatic200Response> {
        return this.ipStaticWithHttpInfo(id, status, _options).pipe(map((apiResponse: HttpInfo<IpStatic200Response>) => apiResponse.data));
    }

    /**
     * update envs that user owns
     * Update envs
     * @param updateEnvs 
     */
    public updateEnvsWithHttpInfo(updateEnvs: UpdateEnvs, _options?: Configuration): Observable<HttpInfo<UpdateEnvs200Response>> {
        const requestContextPromise = this.requestFactory.updateEnvs(updateEnvs, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateEnvsWithHttpInfo(rsp)));
            }));
    }

    /**
     * update envs that user owns
     * Update envs
     * @param updateEnvs 
     */
    public updateEnvs(updateEnvs: UpdateEnvs, _options?: Configuration): Observable<UpdateEnvs200Response> {
        return this.updateEnvsWithHttpInfo(updateEnvs, _options).pipe(map((apiResponse: HttpInfo<UpdateEnvs200Response>) => apiResponse.data));
    }

    /**
     * zero downtime that user owns
     * Zero downtime
     * @param id 
     * @param status disable or enable
     */
    public zeroDowntimeWithHttpInfo(id: string, status: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.zeroDowntime(id, status, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.zeroDowntimeWithHttpInfo(rsp)));
            }));
    }

    /**
     * zero downtime that user owns
     * Zero downtime
     * @param id 
     * @param status disable or enable
     */
    public zeroDowntime(id: string, status: string, _options?: Configuration): Observable<void> {
        return this.zeroDowntimeWithHttpInfo(id, status, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
