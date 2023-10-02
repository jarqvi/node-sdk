import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
import { CreateBucket } from '../models/CreateBucket';
import { CreateFolder } from '../models/CreateFolder';
import { CreateKey } from '../models/CreateKey';
import { MigrateBucket } from '../models/MigrateBucket';

import { BucketApiRequestFactory, BucketApiResponseProcessor} from "../apis/BucketApi";
export class ObservableBucketApi {
    private requestFactory: BucketApiRequestFactory;
    private responseProcessor: BucketApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BucketApiRequestFactory,
        responseProcessor?: BucketApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BucketApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BucketApiResponseProcessor();
    }

    /**
     * Change Bucket Access policy on an object storage ( public / private )
     * change Bucket Access Policy
     * @param bucket 
     * @param permission 
     */
    public changeBucketAccessWithHttpInfo(bucket: string, permission: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.changeBucketAccess(bucket, permission, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.changeBucketAccessWithHttpInfo(rsp)));
            }));
    }

    /**
     * Change Bucket Access policy on an object storage ( public / private )
     * change Bucket Access Policy
     * @param bucket 
     * @param permission 
     */
    public changeBucketAccess(bucket: string, permission: string, _options?: Configuration): Observable<void> {
        return this.changeBucketAccessWithHttpInfo(bucket, permission, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Check if you can create Bucket with specified Name.
     * Check Bucket availability
     * @param bucket 
     */
    public checkBucketWithHttpInfo(bucket: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.checkBucket(bucket, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.checkBucketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Check if you can create Bucket with specified Name.
     * Check Bucket availability
     * @param bucket 
     */
    public checkBucket(bucket: string, _options?: Configuration): Observable<void> {
        return this.checkBucketWithHttpInfo(bucket, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * creates a new bucket on an object storage
     * Create Bucket
     * @param body create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g )
     */
    public createBucketWithHttpInfo(body: CreateBucket, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createBucket(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBucketWithHttpInfo(rsp)));
            }));
    }

    /**
     * creates a new bucket on an object storage
     * Create Bucket
     * @param body create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g )
     */
    public createBucket(body: CreateBucket, _options?: Configuration): Observable<void> {
        return this.createBucketWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Bucket on an object storage
     * Destroy Bucket
     * @param bucket 
     */
    public destroyBucketWithHttpInfo(bucket: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.destroyBucket(bucket, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.destroyBucketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Bucket on an object storage
     * Destroy Bucket
     * @param bucket 
     */
    public destroyBucket(bucket: string, _options?: Configuration): Observable<void> {
        return this.destroyBucketWithHttpInfo(bucket, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * List all Bucket
     * List all Buckets
     */
    public getBucketsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getBuckets(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBucketsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List all Bucket
     * List all Buckets
     */
    public getBuckets(_options?: Configuration): Observable<void> {
        return this.getBucketsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * List previous buckets of storage service in liara.
     * List storage service buckets
     */
    public getListPreviousBucketsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getListPreviousBuckets(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListPreviousBucketsWithHttpInfo(rsp)));
            }));
    }

    /**
     * List previous buckets of storage service in liara.
     * List storage service buckets
     */
    public getListPreviousBuckets(_options?: Configuration): Observable<void> {
        return this.getListPreviousBucketsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * list migration operation
     * list migration operation
     */
    public getMigrationsWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getMigrations(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMigrationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * list migration operation
     * list migration operation
     */
    public getMigrations(_options?: Configuration): Observable<void> {
        return this.getMigrationsWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get Single Buckets
     * @param bucket 
     */
    public getSingleBucketsWithHttpInfo(bucket: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getSingleBuckets(bucket, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSingleBucketsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Single Buckets
     * @param bucket 
     */
    public getSingleBuckets(bucket: string, _options?: Configuration): Observable<void> {
        return this.getSingleBucketsWithHttpInfo(bucket, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Move data from one bucket to another
     * Migrating buckets
     * @param body Migrate buckets
     */
    public migratingBucketsWithHttpInfo(body: MigrateBucket, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.migratingBuckets(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.migratingBucketsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Move data from one bucket to another
     * Migrating buckets
     * @param body Migrate buckets
     */
    public migratingBuckets(body: MigrateBucket, _options?: Configuration): Observable<void> {
        return this.migratingBucketsWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Upgrade Bucket plan ( just make space bigger )
     * Upgrade Bucket
     * @param bucket 
     * @param plan 
     */
    public upgradeBucketWithHttpInfo(bucket: string, plan: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.upgradeBucket(bucket, plan, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.upgradeBucketWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upgrade Bucket plan ( just make space bigger )
     * Upgrade Bucket
     * @param bucket 
     * @param plan 
     */
    public upgradeBucket(bucket: string, plan: string, _options?: Configuration): Observable<void> {
        return this.upgradeBucketWithHttpInfo(bucket, plan, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { FolderApiRequestFactory, FolderApiResponseProcessor} from "../apis/FolderApi";
export class ObservableFolderApi {
    private requestFactory: FolderApiRequestFactory;
    private responseProcessor: FolderApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: FolderApiRequestFactory,
        responseProcessor?: FolderApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new FolderApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new FolderApiResponseProcessor();
    }

    /**
     * Create Folder in Bucket
     * Create Folder
     * @param bucket 
     * @param body 
     */
    public createFolderWithHttpInfo(bucket: string, body: CreateFolder, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createFolder(bucket, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create Folder in Bucket
     * Create Folder
     * @param bucket 
     * @param body 
     */
    public createFolder(bucket: string, body: CreateFolder, _options?: Configuration): Observable<void> {
        return this.createFolderWithHttpInfo(bucket, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete Folder in Bucket
     * Delete Folder
     * @param bucket 
     * @param path 
     */
    public deleteFolderWithHttpInfo(bucket: string, path: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteFolder(bucket, path, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteFolderWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete Folder in Bucket
     * Delete Folder
     * @param bucket 
     * @param path 
     */
    public deleteFolder(bucket: string, path: string, _options?: Configuration): Observable<void> {
        return this.deleteFolderWithHttpInfo(bucket, path, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { KeyApiRequestFactory, KeyApiResponseProcessor} from "../apis/KeyApi";
export class ObservableKeyApi {
    private requestFactory: KeyApiRequestFactory;
    private responseProcessor: KeyApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: KeyApiRequestFactory,
        responseProcessor?: KeyApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new KeyApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new KeyApiResponseProcessor();
    }

    /**
     * Create access and secret key
     * Create Keys
     * @param body Declare Buckets for access key
     */
    public createKeyWithHttpInfo(body: CreateKey, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createKey(body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Create access and secret key
     * Create Keys
     * @param body Declare Buckets for access key
     */
    public createKey(body: CreateKey, _options?: Configuration): Observable<void> {
        return this.createKeyWithHttpInfo(body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete access key
     * Delete Key
     * @param key 
     */
    public deleteKeyWithHttpInfo(key: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteKey(key, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete access key
     * Delete Key
     * @param key 
     */
    public deleteKey(key: string, _options?: Configuration): Observable<void> {
        return this.deleteKeyWithHttpInfo(key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get a key
     * Get Key
     * @param key 
     */
    public getKeyWithHttpInfo(key: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getKey(key, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get a key
     * Get Key
     * @param key 
     */
    public getKey(key: string, _options?: Configuration): Observable<void> {
        return this.getKeyWithHttpInfo(key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get List of Keys
     */
    public getListKeysWithHttpInfo(_options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getListKeys(_options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListKeysWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get List of Keys
     */
    public getListKeys(_options?: Configuration): Observable<void> {
        return this.getListKeysWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Revoke secret key
     * Revoke secret key
     * @param key 
     */
    public revokeSecretKeyWithHttpInfo(key: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.revokeSecretKey(key, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.revokeSecretKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Revoke secret key
     * Revoke secret key
     * @param key 
     */
    public revokeSecretKey(key: string, _options?: Configuration): Observable<void> {
        return this.revokeSecretKeyWithHttpInfo(key, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Update buckets of key ( redefine )
     * Update key
     * @param key 
     * @param body Declare Buckets for access key
     */
    public updateKeyWithHttpInfo(key: string, body: CreateKey, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateKey(key, body, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateKeyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Update buckets of key ( redefine )
     * Update key
     * @param key 
     * @param body Declare Buckets for access key
     */
    public updateKey(key: string, body: CreateKey, _options?: Configuration): Observable<void> {
        return this.updateKeyWithHttpInfo(key, body, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi";
export class ObservableMetricsApi {
    private requestFactory: MetricsApiRequestFactory;
    private responseProcessor: MetricsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsApiRequestFactory,
        responseProcessor?: MetricsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new MetricsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new MetricsApiResponseProcessor();
    }

    /**
     * hisotrical metrics
     * @param bucket 
     * @param since unix time
     */
    public getHisotricalMetricsWithHttpInfo(bucket: string, since: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getHisotricalMetrics(bucket, since, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getHisotricalMetricsWithHttpInfo(rsp)));
            }));
    }

    /**
     * hisotrical metrics
     * @param bucket 
     * @param since unix time
     */
    public getHisotricalMetrics(bucket: string, since: string, _options?: Configuration): Observable<void> {
        return this.getHisotricalMetricsWithHttpInfo(bucket, since, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * metrics summary
     * @param bucket 
     */
    public getMetricsSummaryWithHttpInfo(bucket: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getMetricsSummary(bucket, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getMetricsSummaryWithHttpInfo(rsp)));
            }));
    }

    /**
     * metrics summary
     * @param bucket 
     */
    public getMetricsSummary(bucket: string, _options?: Configuration): Observable<void> {
        return this.getMetricsSummaryWithHttpInfo(bucket, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";
export class ObservableObjectApi {
    private requestFactory: ObjectApiRequestFactory;
    private responseProcessor: ObjectApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ObjectApiRequestFactory,
        responseProcessor?: ObjectApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ObjectApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ObjectApiResponseProcessor();
    }

    /**
     * Delete an object from storage
     * Delete Object
     * @param bucket 
     * @param prefix 
     */
    public deleteObjectWithHttpInfo(bucket: string, prefix: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteObject(bucket, prefix, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete an object from storage
     * Delete Object
     * @param bucket 
     * @param prefix 
     */
    public deleteObject(bucket: string, prefix: string, _options?: Configuration): Observable<void> {
        return this.deleteObjectWithHttpInfo(bucket, prefix, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Return presigned url for download object
     * Download Object
     * @param bucket 
     * @param object specify object path
     * @param expiry example: 2 days 7 hours 45 minutes
     */
    public downloadObjectWithHttpInfo(bucket: string, object: string, expiry?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.downloadObject(bucket, object, expiry, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.downloadObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return presigned url for download object
     * Download Object
     * @param bucket 
     * @param object specify object path
     * @param expiry example: 2 days 7 hours 45 minutes
     */
    public downloadObject(bucket: string, object: string, expiry?: string, _options?: Configuration): Observable<void> {
        return this.downloadObjectWithHttpInfo(bucket, object, expiry, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Return list of objects ( max:50, min:1 )
     * List Objects
     * @param bucket 
     * @param prefix 
     * @param number specify number of object ( max: 50, min: 1 )
     * @param page 
     */
    public getListObjectsWithHttpInfo(bucket: string, prefix: string, number?: string, page?: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getListObjects(bucket, prefix, number, page, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getListObjectsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return list of objects ( max:50, min:1 )
     * List Objects
     * @param bucket 
     * @param prefix 
     * @param number specify number of object ( max: 50, min: 1 )
     * @param page 
     */
    public getListObjects(bucket: string, prefix: string, number?: string, page?: string, _options?: Configuration): Observable<void> {
        return this.getListObjectsWithHttpInfo(bucket, prefix, number, page, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Get Stat Object
     * @param bucket 
     * @param object 
     */
    public getStatObjectWithHttpInfo(bucket: string, object: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.getStatObject(bucket, object, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getStatObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Get Stat Object
     * @param bucket 
     * @param object 
     */
    public getStatObject(bucket: string, object: string, _options?: Configuration): Observable<void> {
        return this.getStatObjectWithHttpInfo(bucket, object, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Return presigned url for download object
     * Upload Object
     * @param bucket 
     * @param object specify object path
     */
    public uploadObjectWithHttpInfo(bucket: string, object: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.uploadObject(bucket, object, _options);

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
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.uploadObjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Return presigned url for download object
     * Upload Object
     * @param bucket 
     * @param object specify object path
     */
    public uploadObject(bucket: string, object: string, _options?: Configuration): Observable<void> {
        return this.uploadObjectWithHttpInfo(bucket, object, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}
