import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { CreateBucket } from '../models/CreateBucket';
import { CreateFolder } from '../models/CreateFolder';
import { CreateKey } from '../models/CreateKey';
import { MigrateBucket } from '../models/MigrateBucket';

import { ObservableBucketApi } from "./ObservableAPI";
import { BucketApiRequestFactory, BucketApiResponseProcessor} from "../apis/BucketApi";

export interface BucketApiChangeBucketAccessRequest {
    /**
     * 
     * @type string
     * @memberof BucketApichangeBucketAccess
     */
    bucket: string
    /**
     * 
     * @type string
     * @memberof BucketApichangeBucketAccess
     */
    permission: string
}

export interface BucketApiCheckBucketRequest {
    /**
     * 
     * @type string
     * @memberof BucketApicheckBucket
     */
    bucket: string
}

export interface BucketApiCreateBucketRequest {
    /**
     * create bucket. Acceptable values for permission: ( private / public ) and for plan: ( 20g, 40g, 80g, 160g )
     * @type CreateBucket
     * @memberof BucketApicreateBucket
     */
    body: CreateBucket
}

export interface BucketApiDestroyBucketRequest {
    /**
     * 
     * @type string
     * @memberof BucketApidestroyBucket
     */
    bucket: string
}

export interface BucketApiGetBucketsRequest {
}

export interface BucketApiGetListPreviousBucketsRequest {
}

export interface BucketApiGetMigrationsRequest {
}

export interface BucketApiGetSingleBucketsRequest {
    /**
     * 
     * @type string
     * @memberof BucketApigetSingleBuckets
     */
    bucket: string
}

export interface BucketApiMigratingBucketsRequest {
    /**
     * Migrate buckets
     * @type MigrateBucket
     * @memberof BucketApimigratingBuckets
     */
    body: MigrateBucket
}

export interface BucketApiUpgradeBucketRequest {
    /**
     * 
     * @type string
     * @memberof BucketApiupgradeBucket
     */
    bucket: string
    /**
     * 
     * @type string
     * @memberof BucketApiupgradeBucket
     */
    plan: string
}

export class ObjectBucketApi {
    private api: ObservableBucketApi

    public constructor(configuration: Configuration, requestFactory?: BucketApiRequestFactory, responseProcessor?: BucketApiResponseProcessor) {
        this.api = new ObservableBucketApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Change Bucket Access policy on an object storage ( public / private )
     * change Bucket Access Policy
     * @param param the request object
     */
    public changeBucketAccessWithHttpInfo(param: BucketApiChangeBucketAccessRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.changeBucketAccessWithHttpInfo(param.bucket, param.permission,  options).toPromise();
    }

    /**
     * Change Bucket Access policy on an object storage ( public / private )
     * change Bucket Access Policy
     * @param param the request object
     */
    public changeBucketAccess(param: BucketApiChangeBucketAccessRequest, options?: Configuration): Promise<void> {
        return this.api.changeBucketAccess(param.bucket, param.permission,  options).toPromise();
    }

    /**
     * Check if you can create Bucket with specified Name.
     * Check Bucket availability
     * @param param the request object
     */
    public checkBucketWithHttpInfo(param: BucketApiCheckBucketRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.checkBucketWithHttpInfo(param.bucket,  options).toPromise();
    }

    /**
     * Check if you can create Bucket with specified Name.
     * Check Bucket availability
     * @param param the request object
     */
    public checkBucket(param: BucketApiCheckBucketRequest, options?: Configuration): Promise<void> {
        return this.api.checkBucket(param.bucket,  options).toPromise();
    }

    /**
     * creates a new bucket on an object storage
     * Create Bucket
     * @param param the request object
     */
    public createBucketWithHttpInfo(param: BucketApiCreateBucketRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createBucketWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * creates a new bucket on an object storage
     * Create Bucket
     * @param param the request object
     */
    public createBucket(param: BucketApiCreateBucketRequest, options?: Configuration): Promise<void> {
        return this.api.createBucket(param.body,  options).toPromise();
    }

    /**
     * Delete Bucket on an object storage
     * Destroy Bucket
     * @param param the request object
     */
    public destroyBucketWithHttpInfo(param: BucketApiDestroyBucketRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.destroyBucketWithHttpInfo(param.bucket,  options).toPromise();
    }

    /**
     * Delete Bucket on an object storage
     * Destroy Bucket
     * @param param the request object
     */
    public destroyBucket(param: BucketApiDestroyBucketRequest, options?: Configuration): Promise<void> {
        return this.api.destroyBucket(param.bucket,  options).toPromise();
    }

    /**
     * List all Bucket
     * List all Buckets
     * @param param the request object
     */
    public getBucketsWithHttpInfo(param: BucketApiGetBucketsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getBucketsWithHttpInfo( options).toPromise();
    }

    /**
     * List all Bucket
     * List all Buckets
     * @param param the request object
     */
    public getBuckets(param: BucketApiGetBucketsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getBuckets( options).toPromise();
    }

    /**
     * List previous buckets of storage service in liara.
     * List storage service buckets
     * @param param the request object
     */
    public getListPreviousBucketsWithHttpInfo(param: BucketApiGetListPreviousBucketsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getListPreviousBucketsWithHttpInfo( options).toPromise();
    }

    /**
     * List previous buckets of storage service in liara.
     * List storage service buckets
     * @param param the request object
     */
    public getListPreviousBuckets(param: BucketApiGetListPreviousBucketsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getListPreviousBuckets( options).toPromise();
    }

    /**
     * list migration operation
     * list migration operation
     * @param param the request object
     */
    public getMigrationsWithHttpInfo(param: BucketApiGetMigrationsRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getMigrationsWithHttpInfo( options).toPromise();
    }

    /**
     * list migration operation
     * list migration operation
     * @param param the request object
     */
    public getMigrations(param: BucketApiGetMigrationsRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getMigrations( options).toPromise();
    }

    /**
     * Get Single Buckets
     * @param param the request object
     */
    public getSingleBucketsWithHttpInfo(param: BucketApiGetSingleBucketsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getSingleBucketsWithHttpInfo(param.bucket,  options).toPromise();
    }

    /**
     * Get Single Buckets
     * @param param the request object
     */
    public getSingleBuckets(param: BucketApiGetSingleBucketsRequest, options?: Configuration): Promise<void> {
        return this.api.getSingleBuckets(param.bucket,  options).toPromise();
    }

    /**
     * Move data from one bucket to another
     * Migrating buckets
     * @param param the request object
     */
    public migratingBucketsWithHttpInfo(param: BucketApiMigratingBucketsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.migratingBucketsWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Move data from one bucket to another
     * Migrating buckets
     * @param param the request object
     */
    public migratingBuckets(param: BucketApiMigratingBucketsRequest, options?: Configuration): Promise<void> {
        return this.api.migratingBuckets(param.body,  options).toPromise();
    }

    /**
     * Upgrade Bucket plan ( just make space bigger )
     * Upgrade Bucket
     * @param param the request object
     */
    public upgradeBucketWithHttpInfo(param: BucketApiUpgradeBucketRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.upgradeBucketWithHttpInfo(param.bucket, param.plan,  options).toPromise();
    }

    /**
     * Upgrade Bucket plan ( just make space bigger )
     * Upgrade Bucket
     * @param param the request object
     */
    public upgradeBucket(param: BucketApiUpgradeBucketRequest, options?: Configuration): Promise<void> {
        return this.api.upgradeBucket(param.bucket, param.plan,  options).toPromise();
    }

}

import { ObservableFolderApi } from "./ObservableAPI";
import { FolderApiRequestFactory, FolderApiResponseProcessor} from "../apis/FolderApi";

export interface FolderApiCreateFolderRequest {
    /**
     * 
     * @type string
     * @memberof FolderApicreateFolder
     */
    bucket: string
    /**
     * 
     * @type CreateFolder
     * @memberof FolderApicreateFolder
     */
    body: CreateFolder
}

export interface FolderApiDeleteFolderRequest {
    /**
     * 
     * @type string
     * @memberof FolderApideleteFolder
     */
    bucket: string
    /**
     * 
     * @type string
     * @memberof FolderApideleteFolder
     */
    path: string
}

export class ObjectFolderApi {
    private api: ObservableFolderApi

    public constructor(configuration: Configuration, requestFactory?: FolderApiRequestFactory, responseProcessor?: FolderApiResponseProcessor) {
        this.api = new ObservableFolderApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create Folder in Bucket
     * Create Folder
     * @param param the request object
     */
    public createFolderWithHttpInfo(param: FolderApiCreateFolderRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createFolderWithHttpInfo(param.bucket, param.body,  options).toPromise();
    }

    /**
     * Create Folder in Bucket
     * Create Folder
     * @param param the request object
     */
    public createFolder(param: FolderApiCreateFolderRequest, options?: Configuration): Promise<void> {
        return this.api.createFolder(param.bucket, param.body,  options).toPromise();
    }

    /**
     * Delete Folder in Bucket
     * Delete Folder
     * @param param the request object
     */
    public deleteFolderWithHttpInfo(param: FolderApiDeleteFolderRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteFolderWithHttpInfo(param.bucket, param.path,  options).toPromise();
    }

    /**
     * Delete Folder in Bucket
     * Delete Folder
     * @param param the request object
     */
    public deleteFolder(param: FolderApiDeleteFolderRequest, options?: Configuration): Promise<void> {
        return this.api.deleteFolder(param.bucket, param.path,  options).toPromise();
    }

}

import { ObservableKeyApi } from "./ObservableAPI";
import { KeyApiRequestFactory, KeyApiResponseProcessor} from "../apis/KeyApi";

export interface KeyApiCreateKeyRequest {
    /**
     * Declare Buckets for access key
     * @type CreateKey
     * @memberof KeyApicreateKey
     */
    body: CreateKey
}

export interface KeyApiDeleteKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeyApideleteKey
     */
    key: string
}

export interface KeyApiGetKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeyApigetKey
     */
    key: string
}

export interface KeyApiGetListKeysRequest {
}

export interface KeyApiRevokeSecretKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeyApirevokeSecretKey
     */
    key: string
}

export interface KeyApiUpdateKeyRequest {
    /**
     * 
     * @type string
     * @memberof KeyApiupdateKey
     */
    key: string
    /**
     * Declare Buckets for access key
     * @type CreateKey
     * @memberof KeyApiupdateKey
     */
    body: CreateKey
}

export class ObjectKeyApi {
    private api: ObservableKeyApi

    public constructor(configuration: Configuration, requestFactory?: KeyApiRequestFactory, responseProcessor?: KeyApiResponseProcessor) {
        this.api = new ObservableKeyApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Create access and secret key
     * Create Keys
     * @param param the request object
     */
    public createKeyWithHttpInfo(param: KeyApiCreateKeyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createKeyWithHttpInfo(param.body,  options).toPromise();
    }

    /**
     * Create access and secret key
     * Create Keys
     * @param param the request object
     */
    public createKey(param: KeyApiCreateKeyRequest, options?: Configuration): Promise<void> {
        return this.api.createKey(param.body,  options).toPromise();
    }

    /**
     * Delete access key
     * Delete Key
     * @param param the request object
     */
    public deleteKeyWithHttpInfo(param: KeyApiDeleteKeyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteKeyWithHttpInfo(param.key,  options).toPromise();
    }

    /**
     * Delete access key
     * Delete Key
     * @param param the request object
     */
    public deleteKey(param: KeyApiDeleteKeyRequest, options?: Configuration): Promise<void> {
        return this.api.deleteKey(param.key,  options).toPromise();
    }

    /**
     * Get a key
     * Get Key
     * @param param the request object
     */
    public getKeyWithHttpInfo(param: KeyApiGetKeyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getKeyWithHttpInfo(param.key,  options).toPromise();
    }

    /**
     * Get a key
     * Get Key
     * @param param the request object
     */
    public getKey(param: KeyApiGetKeyRequest, options?: Configuration): Promise<void> {
        return this.api.getKey(param.key,  options).toPromise();
    }

    /**
     * Get List of Keys
     * @param param the request object
     */
    public getListKeysWithHttpInfo(param: KeyApiGetListKeysRequest = {}, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getListKeysWithHttpInfo( options).toPromise();
    }

    /**
     * Get List of Keys
     * @param param the request object
     */
    public getListKeys(param: KeyApiGetListKeysRequest = {}, options?: Configuration): Promise<void> {
        return this.api.getListKeys( options).toPromise();
    }

    /**
     * Revoke secret key
     * Revoke secret key
     * @param param the request object
     */
    public revokeSecretKeyWithHttpInfo(param: KeyApiRevokeSecretKeyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.revokeSecretKeyWithHttpInfo(param.key,  options).toPromise();
    }

    /**
     * Revoke secret key
     * Revoke secret key
     * @param param the request object
     */
    public revokeSecretKey(param: KeyApiRevokeSecretKeyRequest, options?: Configuration): Promise<void> {
        return this.api.revokeSecretKey(param.key,  options).toPromise();
    }

    /**
     * Update buckets of key ( redefine )
     * Update key
     * @param param the request object
     */
    public updateKeyWithHttpInfo(param: KeyApiUpdateKeyRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateKeyWithHttpInfo(param.key, param.body,  options).toPromise();
    }

    /**
     * Update buckets of key ( redefine )
     * Update key
     * @param param the request object
     */
    public updateKey(param: KeyApiUpdateKeyRequest, options?: Configuration): Promise<void> {
        return this.api.updateKey(param.key, param.body,  options).toPromise();
    }

}

import { ObservableMetricsApi } from "./ObservableAPI";
import { MetricsApiRequestFactory, MetricsApiResponseProcessor} from "../apis/MetricsApi";

export interface MetricsApiGetHisotricalMetricsRequest {
    /**
     * 
     * @type string
     * @memberof MetricsApigetHisotricalMetrics
     */
    bucket: string
    /**
     * unix time
     * @type string
     * @memberof MetricsApigetHisotricalMetrics
     */
    since: string
}

export interface MetricsApiGetMetricsSummaryRequest {
    /**
     * 
     * @type string
     * @memberof MetricsApigetMetricsSummary
     */
    bucket: string
}

export class ObjectMetricsApi {
    private api: ObservableMetricsApi

    public constructor(configuration: Configuration, requestFactory?: MetricsApiRequestFactory, responseProcessor?: MetricsApiResponseProcessor) {
        this.api = new ObservableMetricsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * hisotrical metrics
     * @param param the request object
     */
    public getHisotricalMetricsWithHttpInfo(param: MetricsApiGetHisotricalMetricsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getHisotricalMetricsWithHttpInfo(param.bucket, param.since,  options).toPromise();
    }

    /**
     * hisotrical metrics
     * @param param the request object
     */
    public getHisotricalMetrics(param: MetricsApiGetHisotricalMetricsRequest, options?: Configuration): Promise<void> {
        return this.api.getHisotricalMetrics(param.bucket, param.since,  options).toPromise();
    }

    /**
     * metrics summary
     * @param param the request object
     */
    public getMetricsSummaryWithHttpInfo(param: MetricsApiGetMetricsSummaryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getMetricsSummaryWithHttpInfo(param.bucket,  options).toPromise();
    }

    /**
     * metrics summary
     * @param param the request object
     */
    public getMetricsSummary(param: MetricsApiGetMetricsSummaryRequest, options?: Configuration): Promise<void> {
        return this.api.getMetricsSummary(param.bucket,  options).toPromise();
    }

}

import { ObservableObjectApi } from "./ObservableAPI";
import { ObjectApiRequestFactory, ObjectApiResponseProcessor} from "../apis/ObjectApi";

export interface ObjectApiDeleteObjectRequest {
    /**
     * 
     * @type string
     * @memberof ObjectApideleteObject
     */
    bucket: string
    /**
     * 
     * @type string
     * @memberof ObjectApideleteObject
     */
    prefix: string
}

export interface ObjectApiDownloadObjectRequest {
    /**
     * 
     * @type string
     * @memberof ObjectApidownloadObject
     */
    bucket: string
    /**
     * specify object path
     * @type string
     * @memberof ObjectApidownloadObject
     */
    object: string
    /**
     * example: 2 days 7 hours 45 minutes
     * @type string
     * @memberof ObjectApidownloadObject
     */
    expiry?: string
}

export interface ObjectApiGetListObjectsRequest {
    /**
     * 
     * @type string
     * @memberof ObjectApigetListObjects
     */
    bucket: string
    /**
     * 
     * @type string
     * @memberof ObjectApigetListObjects
     */
    prefix: string
    /**
     * specify number of object ( max: 50, min: 1 )
     * @type string
     * @memberof ObjectApigetListObjects
     */
    number?: string
    /**
     * 
     * @type string
     * @memberof ObjectApigetListObjects
     */
    page?: string
}

export interface ObjectApiGetStatObjectRequest {
    /**
     * 
     * @type string
     * @memberof ObjectApigetStatObject
     */
    bucket: string
    /**
     * 
     * @type string
     * @memberof ObjectApigetStatObject
     */
    object: string
}

export interface ObjectApiUploadObjectRequest {
    /**
     * 
     * @type string
     * @memberof ObjectApiuploadObject
     */
    bucket: string
    /**
     * specify object path
     * @type string
     * @memberof ObjectApiuploadObject
     */
    object: string
}

export class ObjectObjectApi {
    private api: ObservableObjectApi

    public constructor(configuration: Configuration, requestFactory?: ObjectApiRequestFactory, responseProcessor?: ObjectApiResponseProcessor) {
        this.api = new ObservableObjectApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Delete an object from storage
     * Delete Object
     * @param param the request object
     */
    public deleteObjectWithHttpInfo(param: ObjectApiDeleteObjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteObjectWithHttpInfo(param.bucket, param.prefix,  options).toPromise();
    }

    /**
     * Delete an object from storage
     * Delete Object
     * @param param the request object
     */
    public deleteObject(param: ObjectApiDeleteObjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteObject(param.bucket, param.prefix,  options).toPromise();
    }

    /**
     * Return presigned url for download object
     * Download Object
     * @param param the request object
     */
    public downloadObjectWithHttpInfo(param: ObjectApiDownloadObjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.downloadObjectWithHttpInfo(param.bucket, param.object, param.expiry,  options).toPromise();
    }

    /**
     * Return presigned url for download object
     * Download Object
     * @param param the request object
     */
    public downloadObject(param: ObjectApiDownloadObjectRequest, options?: Configuration): Promise<void> {
        return this.api.downloadObject(param.bucket, param.object, param.expiry,  options).toPromise();
    }

    /**
     * Return list of objects ( max:50, min:1 )
     * List Objects
     * @param param the request object
     */
    public getListObjectsWithHttpInfo(param: ObjectApiGetListObjectsRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getListObjectsWithHttpInfo(param.bucket, param.prefix, param.number, param.page,  options).toPromise();
    }

    /**
     * Return list of objects ( max:50, min:1 )
     * List Objects
     * @param param the request object
     */
    public getListObjects(param: ObjectApiGetListObjectsRequest, options?: Configuration): Promise<void> {
        return this.api.getListObjects(param.bucket, param.prefix, param.number, param.page,  options).toPromise();
    }

    /**
     * Get Stat Object
     * @param param the request object
     */
    public getStatObjectWithHttpInfo(param: ObjectApiGetStatObjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.getStatObjectWithHttpInfo(param.bucket, param.object,  options).toPromise();
    }

    /**
     * Get Stat Object
     * @param param the request object
     */
    public getStatObject(param: ObjectApiGetStatObjectRequest, options?: Configuration): Promise<void> {
        return this.api.getStatObject(param.bucket, param.object,  options).toPromise();
    }

    /**
     * Return presigned url for download object
     * Upload Object
     * @param param the request object
     */
    public uploadObjectWithHttpInfo(param: ObjectApiUploadObjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.uploadObjectWithHttpInfo(param.bucket, param.object,  options).toPromise();
    }

    /**
     * Return presigned url for download object
     * Upload Object
     * @param param the request object
     */
    public uploadObject(param: ObjectApiUploadObjectRequest, options?: Configuration): Promise<void> {
        return this.api.uploadObject(param.bucket, param.object,  options).toPromise();
    }

}
