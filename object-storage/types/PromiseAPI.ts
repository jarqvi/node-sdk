import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateBucket } from '../models/CreateBucket';
import { CreateFolder } from '../models/CreateFolder';
import { CreateKey } from '../models/CreateKey';
import { MigrateBucket } from '../models/MigrateBucket';
import { ObservableBucketApi } from './ObservableAPI';

import { BucketApiRequestFactory, BucketApiResponseProcessor} from "../apis/BucketApi";
export class PromiseBucketApi {
    private api: ObservableBucketApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BucketApiRequestFactory,
        responseProcessor?: BucketApiResponseProcessor
    ) {
        this.api = new ObservableBucketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change Bucket Access policy on an object storage ( public / private )
     * change Bucket Access Policy
     * @param bucket 
     * @param permission 
     */
    public changeBucketAccessWithHttpInfo(bucket: string, permission: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.changeBucketAccessWithHttpInfo(bucket, permission, _options);
        return result.toPromise();
    }

    /**
     * Change Bucket Access policy on an object storage ( public / private )
     * change Bucket Access Policy
     * @param bucket 
     * @param permission 
     */
    public changeBucketAccess(bucket: string, permission: string, _options?: Configuration): Promise<void> {
        const result = this.api.changeBucketAccess(bucket, permission, _options);
        return result.toPromise();
    }

    /**
     * Check if you can create Bucket with specified Name.
     * Check Bucket availability
     * @param bucket 
     */
    public checkBucketWithHttpInfo(bucket: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.checkBucketWithHttpInfo(bucket, _options);
        return result.toPromise();
    }

    /**
     * Check if you can create Bucket with specified Name.
     * Check Bucket availability
     * @param bucket 
     */
    public checkBucket(bucket: string, _options?: Configuration): Promise<void> {
        const result = this.api.checkBucket(bucket, _options);
        return result.toPromise();
    }

    /**
     * creates a new bucket on an object storage
     * Create Bucket
     * @param body create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g )
     */
    public createBucketWithHttpInfo(body: CreateBucket, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createBucketWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * creates a new bucket on an object storage
     * Create Bucket
     * @param body create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g )
     */
    public createBucket(body: CreateBucket, _options?: Configuration): Promise<void> {
        const result = this.api.createBucket(body, _options);
        return result.toPromise();
    }

    /**
     * Delete Bucket on an object storage
     * Destroy Bucket
     * @param bucket 
     */
    public destroyBucketWithHttpInfo(bucket: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.destroyBucketWithHttpInfo(bucket, _options);
        return result.toPromise();
    }

    /**
     * Delete Bucket on an object storage
     * Destroy Bucket
     * @param bucket 
     */
    public destroyBucket(bucket: string, _options?: Configuration): Promise<void> {
        const result = this.api.destroyBucket(bucket, _options);
        return result.toPromise();
    }

    /**
     * List all Bucket
     * List all Buckets
     */
    public getBucketsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getBucketsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List all Bucket
     * List all Buckets
     */
    public getBuckets(_options?: Configuration): Promise<void> {
        const result = this.api.getBuckets(_options);
        return result.toPromise();
    }

    /**
     * List previous buckets of storage service in liara.
     * List storage service buckets
     */
    public getListPreviousBucketsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getListPreviousBucketsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * List previous buckets of storage service in liara.
     * List storage service buckets
     */
    public getListPreviousBuckets(_options?: Configuration): Promise<void> {
        const result = this.api.getListPreviousBuckets(_options);
        return result.toPromise();
    }

    /**
     * list migration operation
     * list migration operation
     */
    public getMigrationsWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getMigrationsWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * list migration operation
     * list migration operation
     */
    public getMigrations(_options?: Configuration): Promise<void> {
        const result = this.api.getMigrations(_options);
        return result.toPromise();
    }

    /**
     * Get Single Buckets
     * @param bucket 
     */
    public getSingleBucketsWithHttpInfo(bucket: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getSingleBucketsWithHttpInfo(bucket, _options);
        return result.toPromise();
    }

    /**
     * Get Single Buckets
     * @param bucket 
     */
    public getSingleBuckets(bucket: string, _options?: Configuration): Promise<void> {
        const result = this.api.getSingleBuckets(bucket, _options);
        return result.toPromise();
    }

    /**
     * Move data from one bucket to another
     * Migrating buckets
     * @param body Migrate buckets
     */
    public migratingBucketsWithHttpInfo(body: MigrateBucket, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.migratingBucketsWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Move data from one bucket to another
     * Migrating buckets
     * @param body Migrate buckets
     */
    public migratingBuckets(body: MigrateBucket, _options?: Configuration): Promise<void> {
        const result = this.api.migratingBuckets(body, _options);
        return result.toPromise();
    }

    /**
     * Upgrade Bucket plan ( just make space bigger )
     * Upgrade Bucket
     * @param bucket 
     * @param plan 
     */
    public upgradeBucketWithHttpInfo(bucket: string, plan: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.upgradeBucketWithHttpInfo(bucket, plan, _options);
        return result.toPromise();
    }

    /**
     * Upgrade Bucket plan ( just make space bigger )
     * Upgrade Bucket
     * @param bucket 
     * @param plan 
     */
    public upgradeBucket(bucket: string, plan: string, _options?: Configuration): Promise<void> {
        const result = this.api.upgradeBucket(bucket, plan, _options);
        return result.toPromise();
    }


}



import { ObservableFolderApi } from './ObservableAPI';

import { FolderApiRequestFactory, FolderApiResponseProcessor} from "../apis/FolderApi";
export class PromiseFolderApi {
    private api: ObservableFolderApi

    public constructor(
        configuration: Configuration,
        requestFactory?: FolderApiRequestFactory,
        responseProcessor?: FolderApiResponseProcessor
    ) {
        this.api = new ObservableFolderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Folder in Bucket
     * Create Folder
     * @param bucket 
     * @param body 
     */
    public createFolderWithHttpInfo(bucket: string, body: CreateFolder, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createFolderWithHttpInfo(bucket, body, _options);
        return result.toPromise();
    }

    /**
     * Create Folder in Bucket
     * Create Folder
     * @param bucket 
     * @param body 
     */
    public createFolder(bucket: string, body: CreateFolder, _options?: Configuration): Promise<void> {
        const result = this.api.createFolder(bucket, body, _options);
        return result.toPromise();
    }

    /**
     * Delete Folder in Bucket
     * Delete Folder
     * @param bucket 
     * @param path 
     */
    public deleteFolderWithHttpInfo(bucket: string, path: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteFolderWithHttpInfo(bucket, path, _options);
        return result.toPromise();
    }

    /**
     * Delete Folder in Bucket
     * Delete Folder
     * @param bucket 
     * @param path 
     */
    public deleteFolder(bucket: string, path: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteFolder(bucket, path, _options);
        return result.toPromise();
    }


}



import { ObservableKeyApi } from './ObservableAPI';

import { KeyApiRequestFactory, KeyApiResponseProcessor} from "../apis/KeyApi";
export class PromiseKeyApi {
    private api: ObservableKeyApi

    public constructor(
        configuration: Configuration,
        requestFactory?: KeyApiRequestFactory,
        responseProcessor?: KeyApiResponseProcessor
    ) {
        this.api = new ObservableKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create access and secret key
     * Create Keys
     * @param body Declare Buckets for access key
     */
    public createKeyWithHttpInfo(body: CreateKey, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createKeyWithHttpInfo(body, _options);
        return result.toPromise();
    }

    /**
     * Create access and secret key
     * Create Keys
     * @param body Declare Buckets for access key
     */
    public createKey(body: CreateKey, _options?: Configuration): Promise<void> {
        const result = this.api.createKey(body, _options);
        return result.toPromise();
    }

    /**
     * Delete access key
     * Delete Key
     * @param key 
     */
    public deleteKeyWithHttpInfo(key: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteKeyWithHttpInfo(key, _options);
        return result.toPromise();
    }

    /**
     * Delete access key
     * Delete Key
     * @param key 
     */
    public deleteKey(key: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteKey(key, _options);
        return result.toPromise();
    }

    /**
     * Get a key
     * Get Key
     * @param key 
     */
    public getKeyWithHttpInfo(key: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getKeyWithHttpInfo(key, _options);
        return result.toPromise();
    }

    /**
     * Get a key
     * Get Key
     * @param key 
     */
    public getKey(key: string, _options?: Configuration): Promise<void> {
        const result = this.api.getKey(key, _options);
        return result.toPromise();
    }

    /**
     * Get List of Keys
     */
    public getListKeysWithHttpInfo(_options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getListKeysWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Get List of Keys
     */
    public getListKeys(_options?: Configuration): Promise<void> {
        const result = this.api.getListKeys(_options);
        return result.toPromise();
    }

    /**
     * Revoke secret key
     * Revoke secret key
     * @param key 
     */
    public revokeSecretKeyWithHttpInfo(key: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.revokeSecretKeyWithHttpInfo(key, _options);
        return result.toPromise();
    }

    /**
     * Revoke secret key
     * Revoke secret key
     * @param key 
     */
    public revokeSecretKey(key: string, _options?: Configuration): Promise<void> {
        const result = this.api.revokeSecretKey(key, _options);
        return result.toPromise();
    }

    /**
     * Update buckets of key ( redefine )
     * Update key
     * @param key 
     * @param body Declare Buckets for access key
     */
    public updateKeyWithHttpInfo(key: string, body: CreateKey, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateKeyWithHttpInfo(key, body, _options);
        return result.toPromise();
    }

    /**
     * Update buckets of key ( redefine )
     * Update key
     * @param key 
     * @param body Declare Buckets for access key
     */
    public updateKey(key: string, body: CreateKey, _options?: Configuration): Promise<void> {
        const result = this.api.updateKey(key, body, _options);
        return result.toPromise();
    }


}



import { ObservableMetricsApi } from './ObservableAPI';

import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi";
export class PromiseMetricsApi {
    private api: ObservableMetricsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: MetricsApiRequestFactory,
        responseProcessor?: MetricsApiResponseProcessor
    ) {
        this.api = new ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * hisotrical metrics
     * @param bucket 
     * @param since unix time
     */
    public getHisotricalMetricsWithHttpInfo(bucket: string, since: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getHisotricalMetricsWithHttpInfo(bucket, since, _options);
        return result.toPromise();
    }

    /**
     * hisotrical metrics
     * @param bucket 
     * @param since unix time
     */
    public getHisotricalMetrics(bucket: string, since: string, _options?: Configuration): Promise<void> {
        const result = this.api.getHisotricalMetrics(bucket, since, _options);
        return result.toPromise();
    }

    /**
     * metrics summary
     * @param bucket 
     */
    public getMetricsSummaryWithHttpInfo(bucket: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getMetricsSummaryWithHttpInfo(bucket, _options);
        return result.toPromise();
    }

    /**
     * metrics summary
     * @param bucket 
     */
    public getMetricsSummary(bucket: string, _options?: Configuration): Promise<void> {
        const result = this.api.getMetricsSummary(bucket, _options);
        return result.toPromise();
    }


}



import { ObservableObjectApi } from './ObservableAPI';

import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";
export class PromiseObjectApi {
    private api: ObservableObjectApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ObjectApiRequestFactory,
        responseProcessor?: ObjectApiResponseProcessor
    ) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an object from storage
     * Delete Object
     * @param bucket 
     * @param prefix 
     */
    public deleteObjectWithHttpInfo(bucket: string, prefix: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteObjectWithHttpInfo(bucket, prefix, _options);
        return result.toPromise();
    }

    /**
     * Delete an object from storage
     * Delete Object
     * @param bucket 
     * @param prefix 
     */
    public deleteObject(bucket: string, prefix: string, _options?: Configuration): Promise<void> {
        const result = this.api.deleteObject(bucket, prefix, _options);
        return result.toPromise();
    }

    /**
     * Return presigned url for download object
     * Download Object
     * @param bucket 
     * @param object specify object path
     * @param expiry example: 2 days 7 hours 45 minutes
     */
    public downloadObjectWithHttpInfo(bucket: string, object: string, expiry?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.downloadObjectWithHttpInfo(bucket, object, expiry, _options);
        return result.toPromise();
    }

    /**
     * Return presigned url for download object
     * Download Object
     * @param bucket 
     * @param object specify object path
     * @param expiry example: 2 days 7 hours 45 minutes
     */
    public downloadObject(bucket: string, object: string, expiry?: string, _options?: Configuration): Promise<void> {
        const result = this.api.downloadObject(bucket, object, expiry, _options);
        return result.toPromise();
    }

    /**
     * Return list of objects ( max:50, min:1 )
     * List Objects
     * @param bucket 
     * @param prefix 
     * @param number specify number of object ( max: 50, min: 1 )
     * @param page 
     */
    public getListObjectsWithHttpInfo(bucket: string, prefix: string, number?: string, page?: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getListObjectsWithHttpInfo(bucket, prefix, number, page, _options);
        return result.toPromise();
    }

    /**
     * Return list of objects ( max:50, min:1 )
     * List Objects
     * @param bucket 
     * @param prefix 
     * @param number specify number of object ( max: 50, min: 1 )
     * @param page 
     */
    public getListObjects(bucket: string, prefix: string, number?: string, page?: string, _options?: Configuration): Promise<void> {
        const result = this.api.getListObjects(bucket, prefix, number, page, _options);
        return result.toPromise();
    }

    /**
     * Get Stat Object
     * @param bucket 
     * @param object 
     */
    public getStatObjectWithHttpInfo(bucket: string, object: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.getStatObjectWithHttpInfo(bucket, object, _options);
        return result.toPromise();
    }

    /**
     * Get Stat Object
     * @param bucket 
     * @param object 
     */
    public getStatObject(bucket: string, object: string, _options?: Configuration): Promise<void> {
        const result = this.api.getStatObject(bucket, object, _options);
        return result.toPromise();
    }

    /**
     * Return presigned url for download object
     * Upload Object
     * @param bucket 
     * @param object specify object path
     */
    public uploadObjectWithHttpInfo(bucket: string, object: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.uploadObjectWithHttpInfo(bucket, object, _options);
        return result.toPromise();
    }

    /**
     * Return presigned url for download object
     * Upload Object
     * @param bucket 
     * @param object specify object path
     */
    public uploadObject(bucket: string, object: string, _options?: Configuration): Promise<void> {
        const result = this.api.uploadObject(bucket, object, _options);
        return result.toPromise();
    }


}



