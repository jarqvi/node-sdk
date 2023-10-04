## @liara/sdk

The liara sdk, with TypeScript/JavaScript languages for client that utilizes fetch-api.

### Development

#### Note: You must have Node and NPM, Docker, Docker Compose installed on the system.

#### First, clone the project with the following command:
```
git clone https://github.com/liara-cloud/node-sdk.git
```

#### Second, run one of the following commands depending on your operating system:

_windows:_

```
npm run config:cmd
```
_Linux/Mac:_

```
npm run config:bash
```

#### Third, run one of the following commands for installing packages:
```
npm install
```

#### Fourth, run one of the following commands for build project:
```
npm run prepare
```
### Publish new version

#### To publish the package, first increase the version of the package in the package.json file, then publish the package with the following command:
```
npm publish
```

### Usage

#### Note: The type argument in the package.json file must be equal to commonjs.

```
npm install @liara/sdk
```

#### TypeScript example:

```
import liaraSDK from '@liara/sdk';

const { paas, dbaas, dns, mail, objectStorage } = liaraSDK('your-api-token');

paas.AppsApi.getApps()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

```

#### JavaScript example:

```
const { default: liaraSDK } = require('@liara/sdk');

const { paas, dbaas, dns, mail, objectStorage } = liaraSDK('your-api-token');

paas.AppsApi.getApps()
    .then((res) => console.log(res))
    .catch((err) => console.log(err));

```

### Documentation of all methods:

#### DNS:
[CheckNameServersApi](./doc/dns/CheckNameServersApi.md)

[DnsRecordApi](./doc/dns/DnsRecordApi.md)

[ZoneApi](./doc/dns/ZoneApi.md)
#### Mail:
[AccountsApi](./doc/mail/AccountsApi.md)

[AttachmentsApi](./doc/mail/AttachmentsApi.md)

[EventApi](./doc/mail/EventApi.md)

[ForwardApi](./doc/mail/ForwardApi.md)

[MailsApi](./doc/mail/MailsApi.md)

[MessagesApi](./doc/mail/MessagesApi.md)

[SmtpApi](./doc/mail/SmtpApi.md)
#### PaaS:
[AppsApi](./doc/paas/AppsApi.md)

[DeployApi](./doc/paas/DeployApi.md)

[DisksApi](./doc/paas/DisksApi.md)

[DomainsApi](./doc/paas/DomainsApi.md)

[ReportsApi](./doc/paas/ReportsApi.md)

[SettingsApi](./doc/paas/SettingsApi.md)
#### DBaaS:
[BackupsApi](./doc/dbaas/BackupsApi.md)

[DatabasesApi](./doc/dbaas/DatabasesApi.md)

[DatabasesApi](./doc/dbaas/DatabasesApi.md)
#### Object Storage:
[BucketApi](./doc/object-storage/BucketApi.md)

[FolderApi](./doc/object-storage/FolderApi.md)

[KeyApi](./doc/object-storage/KeyApi.md)

[MetricsApi](./doc/object-storage/MetricsApi.md)

[ObjectApi](./doc/object-storage/ObjectApi.md)