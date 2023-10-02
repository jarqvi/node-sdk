/**
 * PaaS
 * Manage your apps using our API  [wss://api.iran.liara.ir?token=<api-token>&cmd=/bin/bash&project_id=<project-id>]( wss://api.iran.liara.ir?token=<api-token>&cmd=/bin/bash&project_id=<project-id>)  Parameters: - `token`: Your api token in liara - `cmd`: By default /bin/bash - `project_id`: The id of your project in liara  This `WebSocket` endpoint allows `real-time` communication with the projects service hosted at `Liara` You can use `WebSocket protocols` to send and receive data, enabling efficient and low-latency interactions with the projects
 *
 * OpenAPI spec version: 1.0.0
 * Contact: info@liara.ir
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

export class ProjectsProjectsInner {
    /**
    * The id of project
    */
    'id'?: string;
    /**
    * The name of project
    */
    'projectId'?: string;
    /**
    * The platform of project
    */
    'type'?: string;
    /**
    * The status of project
    */
    'status'?: string;
    /**
    * The being on of project
    */
    'scale'?: string;
    /**
    * The plan of project
    */
    'planID'?: string;
    /**
    * The time to create the project
    */
    'createdAt'?: string;
    /**
    * The project deployment status
    */
    'isDeployed'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "id",
            "baseName": "_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "projectId",
            "baseName": "project_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "scale",
            "baseName": "scale",
            "type": "string",
            "format": ""
        },
        {
            "name": "planID",
            "baseName": "planID",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "string",
            "format": ""
        },
        {
            "name": "isDeployed",
            "baseName": "isDeployed",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ProjectsProjectsInner.attributeTypeMap;
    }

    public constructor() {
    }
}

