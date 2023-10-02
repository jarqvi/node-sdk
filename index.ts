// import * as objectStorageSDK from './object-storage/index';
// import * as dbaasSDK from './dbaas/index';
// import * as paasSDK from './paas/index';
// import * as mailSDK from './mail/index';
// import * as dnsSDK from './dns/index';

// interface LiaraSDK {
//     paas: {
//         AppsApi: paasSDK.AppsApi;
//         DeployApi: paasSDK.DeployApi;
//         SettingsApi: paasSDK.SettingsApi;
//         DisksApi: paasSDK.DisksApi;
//         PReportsApi: paasSDK.ReportsApi;
//     };
//     dbaas: {
//         DatabasesApi: dbaasSDK.DatabasesApi;
//         BackupsApi: dbaasSDK.BackupsApi;
//         DBReportsApi: dbaasSDK.ReportsApi;
//     };
//     mail: {
//         MailsApi: mailSDK.MailsApi;
//         SmtpApi: mailSDK.SmtpApi;
//         AccountsApi: mailSDK.AccountsApi;
//         MessagesApi: mailSDK.MessagesApi;
//         ForwardApi: mailSDK.ForwardApi;
//         AttachmentsApi: mailSDK.AttachmentsApi;
//         EventApi: mailSDK.EventApi;
//     };
//     dns: {
//         ZoneApi: dnsSDK.ZoneApi;
//         CheckNameServersApi: dnsSDK.CheckNameServersApi;
//         DnsRecordApi: dnsSDK.DnsRecordApi;
//     };
//     objectStorage: {
//         BucketApi: objectStorageSDK.BucketApi;
//         KeyApi: objectStorageSDK.KeyApi;
//         FolderApi: objectStorageSDK.FolderApi;
//         ObjectApi: objectStorageSDK.ObjectApi;
//         MetricsApi: objectStorageSDK.MetricsApi;
//     };
// }

// class Liara {
//     public auth(token: string): LiaraSDK {
//         const authConfig = {
//         jwt: `Bearer ${token}`,
//         };
//         const configuration = {
//         authMethods: authConfig,
//         };

//         const paasConfig = paasSDK.createConfiguration(configuration);
//         const dbaasConfig = dbaasSDK.createConfiguration(configuration);
//         const mailConfig = mailSDK.createConfiguration(configuration);
//         const dnsConfig = dnsSDK.createConfiguration(configuration);
//         const objectStorageConfig = objectStorageSDK.createConfiguration(configuration);

//         const liaraSDK: LiaraSDK = {
//             paas: {
//                 AppsApi: new paasSDK.AppsApi(paasConfig),
//                 DeployApi: new paasSDK.DeployApi(paasConfig),
//                 SettingsApi: new paasSDK.SettingsApi(paasConfig),
//                 DisksApi: new paasSDK.DisksApi(paasConfig),
//                 PReportsApi: new paasSDK.ReportsApi(paasConfig),
//             },
//             dbaas: {
//                 DatabasesApi: new dbaasSDK.DatabasesApi(dbaasConfig),
//                 BackupsApi: new dbaasSDK.BackupsApi(dbaasConfig),
//                 DBReportsApi: new dbaasSDK.ReportsApi(dbaasConfig),
//             },
//             mail: {
//                 MailsApi: new mailSDK.MailsApi(mailConfig),
//                 SmtpApi: new mailSDK.SmtpApi(mailConfig),
//                 AccountsApi: new mailSDK.AccountsApi(mailConfig),
//                 MessagesApi: new mailSDK.MessagesApi(mailConfig),
//                 ForwardApi: new mailSDK.ForwardApi(mailConfig),
//                 AttachmentsApi: new mailSDK.AttachmentsApi(mailConfig),
//                 EventApi: new mailSDK.EventApi(mailConfig),
//             },
//             dns: {
//                 ZoneApi: new dnsSDK.ZoneApi(dnsConfig),
//                 CheckNameServersApi: new dnsSDK.CheckNameServersApi(dnsConfig),
//                 DnsRecordApi: new dnsSDK.DnsRecordApi(dnsConfig),
//             },
//             objectStorage: {
//                 BucketApi: new objectStorageSDK.BucketApi(objectStorageConfig),
//                 KeyApi: new objectStorageSDK.KeyApi(objectStorageConfig),
//                 FolderApi: new objectStorageSDK.FolderApi(objectStorageConfig),
//                 ObjectApi: new objectStorageSDK.ObjectApi(objectStorageConfig),
//                 MetricsApi: new objectStorageSDK.MetricsApi(objectStorageConfig),
//             },
//         };

//         return liaraSDK;
//     }
// }

// export default new Liara();



import * as objectStorageSDK from './object-storage/index';
import * as dbaasSDK from './dbaas/index';
import * as paasSDK from './paas/index';
import * as mailSDK from './mail/index';
import * as dnsSDK from './dns/index';

interface LiaraSDK {
    paas: {
        AppsApi: paasSDK.AppsApi;
        DeployApi: paasSDK.DeployApi;
        SettingsApi: paasSDK.SettingsApi;
        DisksApi: paasSDK.DisksApi;
        PReportsApi: paasSDK.ReportsApi;
    };
    dbaas: {
        DatabasesApi: dbaasSDK.DatabasesApi;
        BackupsApi: dbaasSDK.BackupsApi;
        DBReportsApi: dbaasSDK.ReportsApi;
    };
    mail: {
        MailsApi: mailSDK.MailsApi;
        SmtpApi: mailSDK.SmtpApi;
        AccountsApi: mailSDK.AccountsApi;
        MessagesApi: mailSDK.MessagesApi;
        ForwardApi: mailSDK.ForwardApi;
        AttachmentsApi: mailSDK.AttachmentsApi;
        EventApi: mailSDK.EventApi;
    };
    dns: {
        ZoneApi: dnsSDK.ZoneApi;
        CheckNameServersApi: dnsSDK.CheckNameServersApi;
        DnsRecordApi: dnsSDK.DnsRecordApi;
    };
    objectStorage: {
        BucketApi: objectStorageSDK.BucketApi;
        KeyApi: objectStorageSDK.KeyApi;
        FolderApi: objectStorageSDK.FolderApi;
        ObjectApi: objectStorageSDK.ObjectApi;
        MetricsApi: objectStorageSDK.MetricsApi;
    };
}

interface LiaraAuthConfig {
    jwt: string;
}

interface LiaraConfiguration {
    authMethods: LiaraAuthConfig;
}

function createLiaraSDK(token: string): LiaraSDK {
    const authConfig: LiaraAuthConfig = {
        jwt: `Bearer ${token}`,
    };

    const configuration: LiaraConfiguration = {
        authMethods: authConfig,
    };

    const paasConfig = paasSDK.createConfiguration(configuration);
    const dbaasConfig = dbaasSDK.createConfiguration(configuration);
    const mailConfig = mailSDK.createConfiguration(configuration);
    const dnsConfig = dnsSDK.createConfiguration(configuration);
    const objectStorageConfig = objectStorageSDK.createConfiguration(configuration);

    const liaraSDK: LiaraSDK = {
        paas: {
            AppsApi: new paasSDK.AppsApi(paasConfig),
            DeployApi: new paasSDK.DeployApi(paasConfig),
            SettingsApi: new paasSDK.SettingsApi(paasConfig),
            DisksApi: new paasSDK.DisksApi(paasConfig),
            PReportsApi: new paasSDK.ReportsApi(paasConfig),
        },
        dbaas: {
            DatabasesApi: new dbaasSDK.DatabasesApi(dbaasConfig),
            BackupsApi: new dbaasSDK.BackupsApi(dbaasConfig),
            DBReportsApi: new dbaasSDK.ReportsApi(dbaasConfig),
        },
        mail: {
            MailsApi: new mailSDK.MailsApi(mailConfig),
            SmtpApi: new mailSDK.SmtpApi(mailConfig),
            AccountsApi: new mailSDK.AccountsApi(mailConfig),
            MessagesApi: new mailSDK.MessagesApi(mailConfig),
            ForwardApi: new mailSDK.ForwardApi(mailConfig),
            AttachmentsApi: new mailSDK.AttachmentsApi(mailConfig),
            EventApi: new mailSDK.EventApi(mailConfig),
        },
        dns: {
            ZoneApi: new dnsSDK.ZoneApi(dnsConfig),
            CheckNameServersApi: new dnsSDK.CheckNameServersApi(dnsConfig),
            DnsRecordApi: new dnsSDK.DnsRecordApi(dnsConfig),
        },
        objectStorage: {
            BucketApi: new objectStorageSDK.BucketApi(objectStorageConfig),
            KeyApi: new objectStorageSDK.KeyApi(objectStorageConfig),
            FolderApi: new objectStorageSDK.FolderApi(objectStorageConfig),
            ObjectApi: new objectStorageSDK.ObjectApi(objectStorageConfig),
            MetricsApi: new objectStorageSDK.MetricsApi(objectStorageConfig),
        },
    };

    return liaraSDK;
}

export default createLiaraSDK;