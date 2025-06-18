export interface CurrentUserData {
  name: string;
  middleName: string | null;
  surname: string;
  fullName: string;
  email: string;
  username: string;
}

export interface FuguJsonModel {
  id: string;
  name: string;
}

export interface DigistatDocsModules {
  chkUniteEntities: string;
  UniteEntitiesNodes: string;
  chkExportScheduler: string;
  ExportSchedulerNodes: string;
  chkFormsWeb: string;
  FormsWebNodes: string;
  chkDiaryWeb: string;
  DiaryWebNodes: string;
  chkHl7Dispatcher: string;
  Hl7DispatcherNodes: string;
  chkImageBank: string;
  ImageBankNodes: string;
  chkOnlineWeb: string;
  OnlineWebNodes: string;
}

export interface DigistatCareModules {
  chkMessageCenter: string;
  MessageCenterNodes: string;
  chkConfigurator: string;
  ConfiguratorNodes: string;
  chkDigistatWebApi: string;
  DigistatWebApiNodes: string;
  chkSmartSupervisor: string;
  SmartSupervisorNodes: string;
  chkMobileServer: string;
  MobileServerNodes: string;
  chkSmartMonitor: string;
  SmartMonitorNodes: string;
  chkTelligenceMDI: string;
  TelligenceMDINodes: string;
  chkTelligenceVitals: string;
  TelligenceVitalsNodes: string;
  chkConnect: string;
  ConnectLabel: string;
  ConnectNodes: string;
  chkFluidBalanceWeb: string;
  FluidBalanceWebNodes: string;
  chkMultiAssist: string;
  MultiAssistNodes: string;
  chkCdss: string;
  CdssNodes: string;
  chkAdtInbound: string;
  AdtInboundNodes: string;
  chkGateway: string;
  GatewayNodes: string;
  chkBcma: string;
  BcmaNodes: string;
  chkVitals: string;
  VitalsNodes: string;
  chkActiveDirectory: string;
  ActiveDirectoryNodes: string;
  chkClinicalLog: string;
  ClinicalLogNodes: string;
  chkSyncSyslog: string;
  chkSyncDatabase: string;
  chkTherapyWeb: string;
  TherapyWebNodes: string;
  chkSmartCentralMobileServer: string;
}

export interface DigistatHighAvailability {
  chkDigistatHa: string;
  DigistatHaNodes: string;
}

export interface ProductSelectionClient {
  chkUniteView: string;
  UniteViewClients: string;
  UniteViewUdi: string;
  UnitedViewVersion: string;
  chkSmartCentral: string;
  SmartCentralClients: string;
  SmartCentralUdi: string;
  SmartCentralVersion: string;
  chkInfusionDashboard: string;
  InfusionDashboardClients: string;
  InfusionDashboardUdi: string;
  InfusionDashboardVersion: string;
}

export interface ProductSelectionMobile {
  chkAscomLogin: string;
  AscomLoginQty: string;
  AscomLoginVersion: string;
  chkUniteAlarm: string;
  UniteAlarmQty: string;
  UniteAlarmVersion: string;
  chkAxessAlerts: string;
  AxessAlertsQty: string;
  AxessAlertsVersion: string;
  chkUniteAlertsMyco: string;
  UniteAlertsMycoQty: string;
  UniteAlertsMycoUdi: string;
  UniteAlertsMycoVersion: string;
  chkAxessSmartDevice: string;
  AxessSmartDeviceQty: string;
  AxessSmartDeviceUdi: string;
  AxessSmartDeviceVersion: string;
  chkCollaborate: string;
  CollaborateQty: string;
  CollaborateVersion: string;
  chkCollaborateByod: string;
  CollaborateByodQty: string;
  CollaborateByodVersion: string;
  chkUniteTask: string;
  UniteTaskQty: string;
  UniteTaskVersion: string;
  chkDigistatSmartCentral: string;
  DigistatSmartCentralQty: string;
  DigistatSmartCentralUdi: string;
  DigistatSmartCentralVersion: string;
  chkDigistatIdentity: string;
  DigistatIdentityQty: string;
  DigistatIdentityUdi: string;
  DigistatIdentityVersion: string;
  chkDigistatVitals: string;
  DigistatVitalsQty: string;
  DigistatVitalsUdi: string;
  DigistatVitalsVersion: string;
  chkDigistatCdss: string;
  DigistatCdssQty: string;
  DigistatCdssUdi: string;
  DigistatCdssVersion: string;
  chkDigistatGateway: string;
  DigistatGatewayQty: string;
  DigistatGatewayUdi: string;
  DigistatGatewayVersion: string;
}

export interface ProductSelectionServer {
  chkUps: string;
  UpsNodes: string;
  UpsUdi: string;
  UpsVersion: string;
  chkUpsAggregator: string;
  chkUpsAssigReport: string;
  chkUpsEhr: string;
  chkUpsWCTP: string;
  chkUpsUniteAssign: string;
  chkUax: string;
  UaxNodes: string;
  UaxVersion: string;
  chkC4cs: string;
  C4csUdi: string;
  C4csVersion: string;
  chkAnalyze: string;
  AnalyzeNodes: string;
  AnalyzeVersion: string;
  chkSupportCentralAac: string;
  chkAlertTrac: string;
  AlertTracNodes: string;
  AlertTrackVersion: string;
  chkCollaborate: string;
  CollaborateNodes: string;
  CollaborateVersion: string;
  chkUniteTask: string;
  UniteTaskNodes: string;
  UniteTaskVersion: string;
  chkTelligence: string;
  TelligenceNodes: string;
  TelligenceVersion: string;
  chkDigistat: string;
  DigistatNodes: string;
  DigistatUdi: string;
  DigistatVersion: string;
  DigistatCareModules: DigistatCareModules;
  DigistatDocsModules: DigistatDocsModules;
  DigistatHighAvailability: DigistatHighAvailability;
}

export interface ProductSelection {
  IsEdited: string;
  Server: ProductSelectionServer;
  Client: ProductSelectionClient;
  Mobile: ProductSelectionMobile;
  AscomNurseCall: ProductSelectionANCS;
  ["_3rdParty"]: ProductSelection3rdParty;
}

export interface APServer {
  Fqdn: string;
  Ip: string;
  Digistat: APDistributionDigistat;
  UnitePs: APDistributionUnitePS;
  UniteAxess: APDistributionUniteAxess;
  Analyze: APDistributionAnalyze;
  AlertTrac: APDistributionAlertTrac;
  CollaborateWeb: APDistributionCollaborateWeb;
  Task: APDistributionTask;
  Telligence: APDistributionTelligence;
}

export interface APDistributionUnitePS {
  chkUnitePsEnabled: string;
  chkC4csNumber: string;
}

export interface APDistributionUniteAxess {
  chkUniteAxessEnabled: string;
}

export interface APDistributionAnalyze {
  chkAnalyzeEnabled: string;
}

export interface APDistributionAlertTrac {
  chkAlertTracEnabled: string;
}

export interface APDistributionCollaborateWeb {
  chkCollaborateWebEnabled: string;
}

export interface APDistributionTask {
  chkTaskEnabled: string;
}

export interface APDistributionTelligence {
  chkTelligenceEnabled: string;
  IpAddress: string;
  SqlConnection: string;
  ApplicationUserName: string;
  ApplicationPassword: string;
  chkTelligenceApplications: string;
  chkTelligenceDatabase: string;
  chkTelligenceConfig: string;
  chkTelligenceService: string;
  SelectRegion: string;
  SelectLanguage: string;
  chkDhcpMode: string;
  DhcpServerProvided: string;
  chkTelligenceUniteIntegration: string;
  chkLegacyApplications: string;
  chkTapServerComp: string;
  chkAssignSameName: string;
  DtapServerName: string;
  chkTapBridge: string;
  ClientAppName: string;
}

export interface APDistributionDigistat {
  chkDigistatEnabled: string;
  chkDigistatHa: string;
  DatabaseOperation: string;
  DigistatCareModules: APDistributionDigistatCM;
  DigistatDocsModules: APDistributionDigistatDM;
  DigistatThirdParty: APDistributionDigistatThirdParty;
  Reliability: APDistributionDigistatReliability;
}

export interface APDistributionDigistatCM {
  chkMessageCenter: string;
  chkConfigurator: string;
  chkDigistatWebApi: string;
  SmartSupervisor: string;
  chkMobileServer: string;
  chkSmartMonitorWeb: string;
  chkTelligenceMdiWeb: string;
  chkTelligenceVitalsWeb: string;
  ConnectDataAcqMode: string;
  DataAcqNodeName: string;
  DanMasterAddress: string;
  chkAdtInbound: string;
  chkCDSS: string;
  chkClinicalLog: string;
  chkBcma: string;
  chkVitalsWeb: string;
  chkFluidBalanceWeb: string;
  chkMultiAssist: string;
  chkTherapyWeb: string;
  chkActiveDirectory: string;
  chkDigistatGateway: string;
}

export interface APDistributionDigistatDM {
  chkUniteEntitiesInteg: string;
  chkExportScheduler: string;
  chkFormsWeb: string;
  chkDiaryWeb: string;
  chkHl7Dispatcher: string;
  chkImageBank: string;
  chkOnlineWeb: string;
}

export interface APDistributionDigistatReliability {
  chkUniteC4cs: string;
  chkDataAcqNode: string;
  chkMobileServer: string;
}

export interface APDistributionDigistatThirdParty {
  DigistatThirdPartyMirth: DigistatThirdPartyMirth;
  DigistatThirdPartyHL7Senders: DigistatThirdPartyHL7Senders;
  DigistatThirdPartyHL7Receivers: DigistatThirdPartyHL7Receivers;
}

export interface DigistatThirdPartyMirth {
  chkMirthServer: string;
  chkMirthAdminLauncher: string;
}

export interface DigistatThirdPartyHL7Senders {
  HL7SenderLabel1: string;
  chkHl7Sender1: string;
  HL7SenderLabel2: string;
  chkHl7Sender2: string;
  HL7SenderLabel3: string;
  chkHl7Sender3: string;
  HL7SenderLabel4: string;
  chkHl7Sender4: string;
}

export interface DigistatThirdPartyHL7Receivers {
  HL7ReceiverLabel1: string;
  chkHl7Receiver1: string;
  HL7ReceiverLabel2: string;
  chkHl7Receiver2: string;
  HL7ReceiverLabel3: string;
  chkHl7Receiver3: string;
  HL7ReceiverLabel4: string;
  chkHl7Receiver4: string;
}

export interface LoadBalancerUnite {
  IsEdited: string;
  LbManufacturer: string;
  Mode: string;
  Deployment: string;
  Partition: string;
  VirtualServerIp: string;
  VirtualServerPort: string;
  VirtualServerNetmask: string;
  NsipNode1: string;
  NsipNode2: string;
  SnipIpAddress: string;
  UpsServers?: UpsServers[];
  AxessServers?: UpsServers[];
  DigistatServers?: UpsServers[];
  SnatStart: string;
  SnatEnd: string;
  SnatNetmask: string;
  Gateway: string;
  LoadBalancerUPSCluster?: string;
  LoadBalancerUAXCluster?: string;
  LoadBalancerDigistatCluster?: string;
}

export interface UpsServers {
  Fqdn: string;
  Port: string;
}

export interface AxessServers {
  Fqdn: string;
  Port: string;
}

export interface DigistatServers {
  Fqdn: string;
}

export interface APDistribution {
  IsEdited: string;
  ApServers: APServer[];
}

export interface ProjectDashboardButtons {
  btnCustomerInfo: CustomerInfo;
  btnNetwork: Network;
  btnApServer: ApServer;
  btnSqlServer: SqlServer;
  btnCustomer: unknown;
  btnAccountsAndRemote: AccountsAndRemote;
  btnDatabases: Databases;
  btnApDistribution: APDistribution;
  btnLoadBalancerForUnite: LoadBalancerUnite;
  btnLoadBalancerForAxess: LoadBalancerUnite;
  btnLoadBalancerForDigistat: LoadBalancerUnite;
  btnUnitePlatformServer: UnitePS;
  btnUniteAxessServer: UniteAxessServer;
  btnAnalyzeServer: AnalyzeServer;
  btnAlertTrac: AlertTrac_UniteApp;
  btnCollaborateWeb: CollaborateWeb_UniteApp;
  btnUniteTask: UniteTask;
  btnC4csInstallation: C4csInstallation;
  btnDigistatGeneral: DigistatGeneral;
  btnDigLicense: DigLicense;
  btnProductSelection: ProductSelection;
  btnAssignmentArea: AssignmentArea;
  btnCustomerRelatedServer: CustomerRelatedServer;
  btnAscomProjectInfo: AscomProjectInfo;
  btnDigistatComponentsSettings: DigistatComponentsSettings;
}

export interface Project {
  AppVersion: string;
  Author: string;
  Description: string;
  CreationDateTime: string;
  PublishingDateTime: string;
  ProjectDashboardButtons: ProjectDashboardButtons;
  Name: string;
  ProjectReports: ProjectReports;
}
export interface ProjectReports {
  APServerAndDistribution: string;
  APServerDetail: string;
  SQLServerDetail: string;
  DatabasesList: string;
  IPPorts: string;
  Licenses: string;
  Certificates: string;
}
export interface FileInput {
  Project: Project;
}

export interface ProductSelectionANCS {
  chkTeleCare: string;
  TeleCareNetwork: string;
  TeleCareVersion: string;
  chkTelligence: string;
  TelligenceNetwork: string;
  TelligenceVersion: string;
}

export interface ProductSelection3rdParty {
  chkRabbitMq: string;
  RabbitMqNotes: string;
  RabbitMqVersion: string;
  chkErlangOtp: string;
  ErlangOtpNotes: string;
  ErlangOtpVersion: string;
  chkMirthServer: string;
  MirthServerNotes: string;
  MirthServerVersion: string;
  chkMirthAdminLauncher: string;
  MirthAdminLauncherNotes: string;
  MirthAdminLauncherVersion: string;
  chkJava32bit: string;
  Java32bitNotes: string;
  Java32bitVersion: string;
  chkJava64bit: string;
  Java64bitNotes: string;
  Java64bitVersion: string;
  chkDigMirthServer: string;
  DigMirthServerNotes: string;
  DigMirthServerVersion: string;
  chkDigMirthAdminLauncher: string;
  DigMirthAdminLauncherNotes: string;
  DigMirthAdminLauncherVersion: string;
  chkDigMirthJava32bit: string;
  DigMirthJava32bitNotes: string;
  DigMirthJava32bitVersion: string;
  chkDigMirthJava64bit: string;
  DigMirthJava64bitNotes: string;
  DigMirthJava64bitVersion: string;
  chkDigHL7Sender1: string;
  DigHL7Sender1Name: string;
  DigHL7Sender1Version: string;
  chkDigHL7Sender2: string;
  DigHL7Sender2Name: string;
  DigHL7Sender2Version: string;
  chkDigHL7Sender3: string;
  DigHL7Sender3Name: string;
  DigHL7Sender3Version: string;
  chkDigHL7Sender4: string;
  DigHL7Sender4Name: string;
  DigHL7Sender4Version: string;
  chkDigHL7Receiver1: string;
  DigHL7Receiver1Name: string;
  DigHL7Receiver1Version: string;
  chkDigHL7Receiver2: string;
  DigHL7Receiver2Name: string;
  DigHL7Receiver2Version: string;
  chkDigHL7Receiver3: string;
  DigHL7Receiver3Name: string;
  DigHL7Receiver3Version: string;
  chkDigHL7Receiver4: string;
  DigHL7Receiver4Name: string;
  DigHL7Receiver4Version: string;
}
export interface SqlServer {
  IsEdited: string;
  SqlServers: SqlServers[];
  SqlInstances: SqlInstances[];
}

export interface SqlServers {
  Fqdn: string;
  Ip: string;
  Cpu: string;
  Ram: string;
  OperatingSystem: string;
  chkSqlAvailability: string;
  TypeAvailability: string;
}
export interface SqlInstances {
  Fqdn: string;
  Ip: string;
  Instance: string;
  IpPort: string;
  ServerVersion: string;
  ServerEdition: string;
}

//Ap Server
export interface ApServer {
  IsEdited: string;
  ApServers: ApServers[];
}
export interface ApServers {
  Order: string;
  Fqdn: string;
  Ip: string;
  Network: string;
  Cpu: string;
  Ram: string;
  CalculatedRam: string;
  HddLetter1: string;
  HddSize1: string;
  HddLetter2: string;
  HddSize2: string;
  OperatingSystem: string;
}

//Databases
export interface Databases {
  IsEdited: string;
  DigistatCore: DigistatCore[];
  DigistatClinicalLog: DigistatClinicalLog[];
  UniteCore: UniteCore[];
  UniteEhr: UniteEhr[];
  Wctp: Wctp[];
  UniteLog: UniteLog[];
  AuditTrail: AuditTrail[];
  ReportDb: ReportDb[];
  TechnicalLog: TechnicalLog[];
  AlertTrac: AlertTrac[];
  UniteTask: UniteTask[];
  IdentitiesForServices: IdentitiesForServices[];
  Axess: Axess[];
  AxessConversartion7: AxessConversation7[];
  C4csLoginMethod: C4csLoginMethod[];
  C4csDatabases: C4csDatabases[];
  TelligenceDukane: TelligenceDukane[];
}
export interface DigistatCore {
  SqlServer: string;
  Connection: string;
  Database: string;
  SqlUser: string;
  SqlUserPassword: string;
  Encrypt: string;
}
export interface DigistatClinicalLog {
  SqlServer: string;
  Connection: string;
  Database: string;
  SqlUser: string;
  SqlUserPassword: string;
  Encrypt: string;
}
export interface UniteCore {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  Domain: string;
  User: string;
  UserPassword: string;
  ServiceAccountDomain: string;
  ServiceAccountUser: string;
  ServiceAccountPassword: string;
  IisAppPoolDomain: string;
  IisAppPoolUser: string;
  IisAppPoolPassword: string;
}
export interface UniteEhr {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
  Password: string;
}
export interface Wctp {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
}
export interface UniteLog {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
}
export interface AuditTrail {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
}
export interface ReportDb {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
}
export interface TechnicalLog {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
}
export interface AlertTrac {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
}
export interface UniteTask {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  User: string;
}
export interface IdentitiesForServices {
  ServiceDomain: string;
  ServiceUser: string;
  IisDomain: string;
  IisUser: string;
}
export interface Axess {
  SqlServer: string;
  Connection: string;
  Database: string;
  DatabaseForConversation: string;
  LoginMethod: string;
  Domain: string;
  User: string;
  UserPassword: string;
  ServiceAccountDomain: string;
  ServiceAccountUser: string;
  ServiceAccountPassword: string;
  IisAppPoolDomain: string;
  IisAppPoolUser: string;
  IisAppPoolPassword: string;
}
export interface AxessConversation7 {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  Domain: string;
  User: string;
  //Password: string;
}
export interface C4csLoginMethod {
  LoginMethod: string;
  Domain: string;
  User: string;
  UserPassword: string;
  ServiceAccountDomain: string;
  ServiceAccountUser: string;
  ServiceAccountPassword: string;
  IisAppPoolDomain: string;
  IisAppPoolUser: string;
  IisAppPoolPassword: string;
}
export interface C4csDatabases {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  Domain: string;
  User: string;
  UserPassword: string;
  ServiceAccountDomain: string;
  ServiceAccountUser: string;
  ServiceAccountPassword: string;
  IisAppPoolDomain: string;
  IisAppPoolUser: string;
  IisAppPoolPassword: string;
}
export interface TelligenceDukane {
  SqlServer: string;
  Connection: string;
  Database: string;
  LoginMethod: string;
  Domain: string;
  User: string;
  UserPassword: string;
}

//Network
export interface Network {
  IsEdited: string;
  Networks: Networks[];
}
export interface Networks {
  UserFor: string;
  NetworkIp: string;
  Cdir: string;
  Netmask: string;
  StartIp: string;
  EndIp: string;
  BroadcastIp: string;
  Hosts: string;
  DefaultGw: string;
  Dns1: string;
  Dns2: string;
  DnsSuffix: string;
  TimeServer1: string;
  TimeServer2: string;
}
//Assignment Areas
export interface AssignmentArea {
  IsEdited: string;
  AssignmentAreas: AssignmentAreas[];

  TotalRooms: string;
  TotalBeds: string;
  TotalToilets: string;
  TotalAssign: string;
  TotalAlertTrac: string;
  TotalUnite: string;
  TotalSmartCentral: string;
  TotalInfusion: string;
  TotalSmartMobile: string;
  TotalIdentity: string;
  TotalVitals: string;
  TotalCDSS: string;
  TotalLantMD1Port: string;
  TotalLantMD2Port: string;
  TotalLantMD4Port: string;
  TotalLantMD8Port: string;
  TotalLantMD16Port: string;
  TotalLantAscomSAM: string;
  TotalDigiMD1Port: string;
  TotalDigiMD2Port: string;
  TotalDigiMD4Port: string;
  TotalDigiMD8Port: string;
  TotalTellig2Port: string;
  TotalTellig4Port: string;
  TotalTellig6Port: string;
  TotalTellig8Port: string;
  TotalTelligSmartCable: string;
  TotalTelligWallDisplay: string;
}
export interface AssignmentAreas {
  Name: string;
  Rooms: string;
  Beds: string;
  Toilets: string;
  chkAssign: string;
  chkAlertTrac: string;
  UniteViewClients: string;
  SmartCentral: string;
  Infusion: string;
  chkCDSS: string;
  SCM: string;
  Identity: string;
  Vitals: string;
  CDSS: string;
  chkLantronixInstalled: string; //
  LantMD1Port: string;
  LantMD2Port: string;
  LantMD4Port: string;
  LantMD8Port: string;
  LantMD16Port: string;
  LantAscomSAM: string;
  chkDigiInstalled: string;
  DigiMD1Port: string;
  DigiMD2Port: string;
  DigiMD4Port: string;
  DigiMD8Port: string;
  chkTelligenceInstalled: string;

  TelligManagedBy: string;
  Tellig2Port: string;
  Tellig4Port: string;
  Tellig6Port: string;
  Tellig8Port: string;
  TelligSmartCable: string;
  TelligWallDisplay: string;
}

//CustomerInfo
export interface CustomerInfo {
  IsEdited: string;
  CustName: string;
  Address: string;
  City: string;
  AscomProjectID: string;
  DocumentRevisionHistory: DocumentRevisionHistory[];
}
export interface DocumentRevisionHistory {
  Name: string;
  Description: string;
  Date: string;
}
//Customer related server
export interface CustomerRelatedServer {
  IsEdited: string;
  DomainControllers: DomainControllers[];
  SyslogServer: SyslogServer[];
  AdtSource: AdtSource[];
  ImageBank: ImageBank[];
  Pdms: Pdms[];
  VitalsHl7: VitalsHl7[];
}
export interface DomainControllers {
  Fqdn: string;
  Ip: string;
  Port: string;
  Protocol: string;
}
export interface SyslogServer {
  Fqdn: string;
  Ip: string;
  Port: string;
  Protocol: string;
  Format: string;
}
export interface AdtSource {
  Fqdn: string;
  Ip: string;
  Port: string;
  Protocol: string;
  Format: string;
}
export interface ImageBank {
  Fqdn: string;
  Ip: string;
  Port: string;
  Protocol: string;
  Format: string;
}
export interface Pdms {
  Fqdn: string;
  Ip: string;
  Port: string;
  Protocol: string;
  Format: string;
}
export interface VitalsHl7 {
  Fqdn: string;
  Ip: string;
  Port: string;
  Protocol: string;
  Format: string;
}

//AscomProjectInfo
export interface AscomProjectInfo {
  IsEdited: string;
  AscomProjectID: string;
  Sales: Details[];
  ProfessionalServiceTable1: Details[];
  ProfessionalServiceTable2: Services[];
  Consultants: Details[];
}
export interface Details {
  Title: string;
  Name: string;
  Email: string;
}
export interface Services extends Details {
  Product: string;
}

//Alert track
export interface AlertTrac_UniteApp {
  IsEdited: string;
  FQDN: string;
  ClusterNodes: ClusterNodes[];
  LoadBalancers: LoadBalancer[];
  CertificateType: string;
  IntendedPurposes: string;
  SignatureAlgorithm: string;
  SignatureHashAlgorithm: string;
  FileFormat: string;
  RequiredCn: string;
  ExpirationDate: string;
  Servers: Servers[];
  DbAlertTracConnection: string;
  DbAlertTracAuthentication: string;
  DbAlertTracUser: string;
  DbAlertTracPassword: string;
  DatabaseForAlertTrac: string;
  DestinationFolder: string;
  IISSiteName: string;
  IISPort: string;
  AppPoolIdentityDomainLabel: string;
  AppPoolIdentityDomain: string;
  AppPoolIdentityUsername: string;
  AppPoolIdentityPassword: string;
  UniteAdminService: string;
  UniteAdminPort: string;
  UniteAdminUsername: string;
  UniteAdminAccountPassword: string;
}
export interface ClusterNodes {
  Fqdn: string;
  IP: string;
}
export interface LoadBalancer {
  LoadBalancer: string;
  IP: string;
}

//Unite Task
export interface UniteTask {
  IsEdited: string;
  FQDN: string;
  ClusterNodes: ClusterNodes[];
  LoadBalancers: LoadBalancer[];
  CertificateType: string;
  IntendedPurposes: string;
  SignatureAlgorithm: string;
  SignatureHashAlgorithm: string;
  FileFormat: string;
  RequiredCn: string;
  ExpirationDate: string;
  Servers: Servers[];
  DbUniteTaskConnection: string;
  DbUniteTaskAuthentication: string;
  DbUniteTaskUser: string;
  DbUniteTaskPassword: string;
  DatabaseForUniteTask: string;
  DbUPSConnection: string;
  DbUPSAuthentication: string;
  DbUPSUser: string;
  DbUPSPassword: string;
  DatabaseForUPS: string;
  DestinationFolder: string;
  IISSiteName: string;
  IISPort: string;
  AppPoolIdentityDomainLabel: string;
  AppPoolIdentityDomain: string;
  AppPoolIdentityUsername: string;
  AppPoolIdentityPassword: string;
  UniteAdminService: string;
  UniteAdminPort: string;
  UniteAdminUsername: string;
  UniteAdminAccountPassword: string;
  chkDeactivateUAX: string;
  UAXServer: string;
  UAXPort: string;
  UAXPassword: string;
  chkDeactivateTellig: string;
  TelligIMTServer: string;
  TelligWebApp: string;
  TelligUsername: string;
  TelligPassword: string;
  RabbitMQHostname: string;
  RabbitMQPort: string;
  RabbitMQUsername: string;
  RabbitMQPassword: string;
  RabbitMQVirtualHost: string;
  RabbitMQEnableEncrypt: string;
}
export interface ClusterNodes {
  Fqdn: string;
  IP: string;
}
export interface LoadBalancers {
  LoadBalancer: string;
  IP: string;
}
export interface Servers {
  Certificate: string;
  Fqdn: string;
}
//Unite Task
export interface UnitePS {
  IsEdited: string;
  Fqdn: string;
  ClusterNodes: ClusterNodes[];
  LoadBalancers: LoadBalancers[];
  CertificateType: string;
  IntendedPurposes: string;
  SignatureAlgorithm: string;
  SignatureHashAlgorithm: string;
  FileFormat: string;
  RequiredCn: string;
  ExpirationDate: string;
  Servers: Servers[];

  StsPassword: string;
  SqlServConnection: string;
  SqlServAuthentication: string;
  SqlServUser: string;
  SqlServPassword: string;
  DatabaseForUnite: string;
  UniteAdministration: string;
  UniteHostRouter: string;
  UniteSupervisor: string;
  UniteLogCollector: string;
  chkUniteEventAggreg: string;
  chkUniteAssigReport: string;
  chkEhrInteface: string;
  chkWctpInterface: string;
  chkUniteAssign: string;
  AppSelectDestinationFolder: string;
  SqlForEhrConnection: string;
  SqlForEhrAuthentication: string;
  SqlForEhrUser: string;
  SqlForEhrPassword: string;
  DatabaseForUniteEhr: string;
  EhrDataHttpsPort: string;
  EhrDataAdtPort: string;
  EhrDataInternalCommunication: string;
  MirthConnectHttpPort: string;
  MirthConnectHttpsPort: string;
  SqlForWCTPConnection: string;
  SqlForWCTPAuthentication: string;
  SqlForWCTPUser: string;
  SqlForWCTPPassword: string;
  DatabaseForWCTP: string;
  WCTPSetHTTPSPort: string;
  WCTPSetProtocolVariant: string;
  WCTPSetProxyName: string;
  WCTPSetProxyPort: string;
  LogCollectorConnection: string;
  LogCollectorAuthentication: string;
  LogCollectorUser: string;
  LogCollectorPassword: string;
  DatabaseForLogCollector: string;
  StorageDays: string;
  StorageRows: string;
  AuditTrailConnection: string;
  AuditTrailAuthentication: string;
  AuditTrailUser: string;
  AuditTrailPassword: string;
  DatabaseForAuditTrail: string;
  UniteAdminAccountUsername: string;
  UniteAdminAccountFirstName: string;
  UniteAdminAccountLastName: string;
  UniteAdminAccountPassword: string;
  IISPort: string;
  IISSiteName: string;
  RabbitMQHostName: string;
  RabbitMQServerPort: string;
  RabbitMQManagementPort: string;
  RabbitMQUsername: string;
  RabbitMQPassword: string;
  RabbitMQVirtualHost: string;
  chkRabbitMQEncrypt: string;
  RabbitMQActivePassiveMode: string;
  RabbitMQClusterMode: string;
  RabbitMQClusterPartitionHandling: string;
  DomainIPAddress: string;
  ServiceAccountDomainLabel: string;
  ServiceAccountDomain: string;
  ServiceAccountUsername: string;
  ServiceAccountPassword: string;
  AppPoolIdentityDomainLabel: string;
  AppPoolIdentityDomain: string;
  AppPoolIdentityUsername: string;
  AppPoolIdentityPassword: string;
  UniteViewClients: string;
  FaultNotificationServ: string;
  PatientiInfoServ: string;
  UniteSupervisorPort: string;
  UniteSystemSupervisor: string;
  RoundingTimeService: string;
  RoundingTimerEvent: string;
  UniteConnectEventAPI: string;
  UniteConnectIndicationService: string;
  chkVoWiFi: string;
  chkVoWiFiWebSocket: string;
  chkVoWiFiNetwise: string;
  chkDECT: string;
  chkIPDECT: string;
  chkMyco: string;
  chkOAP: string;
  OAPv4Port: string;
  chkEnableRtls: string;
  OlpListeningPort: string;
  chkIgnoreUnknownUsers: string;
  chkGenerateAlerts: string;
  chkRequireEncrypt: string;
  EncryptionKeys: string;
  DefaultAuthorityLevel: string;
}
//Collaborate Web
export interface CollaborateWeb_UniteApp {
  IsEdited: string;
  FQDN: string;
  ClusterNodes: ClusterNodes[];
  LoadBalancers: LoadBalancer[];
  CertificateType: string;
  IntendedPurposes: string;
  SignatureAlgorithm: string;
  SignatureHashAlgorithm: string;
  FileFormat: string;
  RequiredCn: string;
  ExpirationDate: string;
  Servers: Servers[];
  DestinationFolder: string;
  IISSiteName: string;
  IISPort: string;
  AppPoolIdentityDomainLabel: string;
  AppPoolIdentityDomain: string;
  AppPoolIdentityUsername: string;
  AppPoolIdentityPassword: string;
  UniteAxessServer: string;
  UniteAxessPort: string;
}

export interface AccountsAndRemote {
  IsEdited: string;
  WindowsDomain: string;
  WindowsUser: string;
  WindowsPassword: string;
  RemoteAccess1: string;
  AdditionalInfo1: string;
  Credentials1: string;
  RemoteAccess2: string;
  AdditionalInfo2: string;
  Credentials2: string;
  RemoteAccess3: string;
  AdditionalInfo3: string;
  Credentials3: string;
}
//Digistat General
export interface DigistatGeneral {
  IsEdited: string;
  FQDN: string;
  ClusterNodes: ClusterNodes[];
  DigistatVersion: string;
  LoadBalancers: LoadBalancer[];
  chkInstallSSL: string;
  SSLPassword: string;
  CertificateType: string;
  IntendedPurposes: string;
  SignatureAlgorithm: string;
  SignatureHashAlgorithm: string;
  FileFormat: string;
  RequiredCn: string;
  ExpirationDate: string;
  Servers: Servers[];
  SQLServers: SqlServer_DigistatGeneral[];
  chkEnableEvaluationMode: string;
  Licenses: License[];
}
export interface SqlServer_DigistatGeneral {
  Connection: string;
  DatabaseName: string;
  SqlUser: string;
  chkEctyptConnection: string;
}
export interface License {
  Server: string;
  HardwareID: string;
  DBID: string;
}

//Dig License
export interface DigLicense {
  IsEdited: string;
  DHDLH: string;
  DCDLHDAS: string;
  DCDLHMDI: string;
  DGWBDI: string;
  DGWUI: string;
  DSCCB: string;
}
//Unite Axess server
export interface UniteAxessServer {
  IsEdited: string;
  FQDN: string;
  ClusterNodes: ClusterNodes[];
  LoadBalancers: LoadBalancers[];
  CertificateType: string;
  IntendedPurposes: string;
  SignatureAlgorithm: string;
  SignatureHashAlgorithm: string;
  FileFormat: string;
  RequiredCn: string;
  ExpirationDate: string;
  Servers: Servers[];
  //
  Ax6_SupervisorIp: string;
  Ax6_SupervisorPort: string;
  Ax6_SupervisorDestFolder: string;
  Ax6_HostRoutParentFolder: string;
  Ax6_HostRoutDestFolder: string;
  Ax6_HostRoutFolderUaf: string;
  Ax6_CustomDestFolder: string;
  Ax6_DbConnection: string;
  Ax6_DbAuthentication: string;
  Ax6_DbUser: string;
  Ax6_DbUserPwd: string;
  Ax6_DbAxess: string;
  Ax6_DbAxessConversation: string;
  Ax6_IisSiteName: string;
  Ax6_IisPort: string;
  Ax6_SiteName: string;
  Ax6_ExternalFqdn: string;
  Ax6_ExternalUrl: string;
  Ax6_ExternalPrefix: string;
  Ax6_UpsUnitePs: string;
  Ax6_UpsUsername: string;
  Ax6_UpsPwd: string;
  //
  Ax6_MessServConfAddress: string;
  Ax6_chkMessServConfReverseProxy: string;
  Ax6_MessServConfPort: string;
  Ax6_MessServConfEndpointPort: string;
  Ax6_MessServConfWSkUrl: string; //siteName.com:29912;
  Ax6_MessServConfWSPort: string;
  Ax6_MessServConfInnoWSPwd: string;
  Ax6_FirebaseProjId: string;
  Ax6_FirebaseAppId: string;
  Ax6_FirebaseCloudMessApiKey: string;
  Ax6_FirebaseSenderId: string;
  Ax6_FirebaseWebApiKey: string;
  Ax6_Airstrip: string;
  Ax6_chkSocketWlan: string;
  Ax6_chkFirebaseFCM: string;
  Ax6_chkApplePushAPNS: string;
  Ax6_UserNotificPwd: string;
  Ax6_ServiceAccDomainLabel: string;
  Ax6_ServiceAccDomain: string;
  Ax6_ServiceAccUsername: string;
  Ax6_ServiceAccPwd: string;
  Ax6_IisIdentDomainLabel: string;
  Ax6_IisIdentDomain: string;
  Ax6_IisIdentUsername: string;
  Ax6_IisIdentPwd: string;
  //
  UAXDeployment: string;
  DeploymentMethod: string;
  IISPort: string;
  DbUAXMainConnection: string;
  DbUAXMainAuthentication: string;
  DbUAXMainUser: string;
  DbUAXMainPassword: string;
  DatabaseForAxess: string;
  DbUAXConversationConnection: string;
  DbUAXConversationAuthentication: string;
  DbUAXConversationUser: string;
  DbUAXConversationPassword: string;
  DatabConversationorAxessConversation: string;
  UniteAxessServer: string;
  UniteHostRouter: string;
  UniteSupervisor: string;
  DestinationFolder: string;
  UAXServerWebApiUseHttps: string;
  IISForwardRequests: string;
  UAXServerWebApiSite: string;
  UAXServerAllowCertificates: string;
  UAXServerWebApiVirtualDir: string;
  RabbitMQHostname: string;
  RabbitMQPort: string;
  RabbitMQUsername: string;
  RabbitMQPassword: string;
  RabbitMQVirtualHost: string;
  RabbitMQEnableEncrypt: string;
  ServiceAccountDomainLabel: string;
  ServiceAccountDomain: string;
  ServiceAccountUsername: string;
  ServiceAccountPassword: string;
  AppSettOnePortReserv: string;
  AppSettSupervisionPort: string;
  GeneralSettSiteName: string;
  ExternalFQDN: string;
  ExternalURL: string;
  chkUseClientsRequest: string;
  UnitePSFQDN: string;
  UserNotifPassword: string;
  ClientParameters: string;
  chkEnableFCM: string;
  FCMProjectID: string;
  FCMCloudMessagingApiKey: string;
  FCMAppID: string;
  FCMAccountKey: string;
  chkNormalPriorityForFCM: string;
  chkFCMRepeatNotific: string;
  chkEnableAPNS: string;
  chkAPNSRepeatNotific: string;
  chkEnableWebsocket: string;
  WlanSSID: string;
  WlanConnLostTime: string;
  WlanCloseAfterInact: string;
  TimeHeartbeatChecks: string;
  TimeHeartbeatChecksSysStatus: string;
  TimeWebsocketStatusChecks: string;
  IntervalBatteryWarning: string;
  MaxDevicesInReport: string;
  URLOverride: string;
}

//Digistat Components Settings
export interface DigistatComponentsSettings {
  IsEdited: string;
  Language: string;
  DestinationFolder: string;
  HAServers: HAServer[];
  chkEnableClinicalLog: string;
  ClinicalLogInfo: string;
  ClinicalLogWarning: string;
  ClinicalLogError: string;
  chkEnablePatientHistoriz: string;
  MessageCenterHosts: MessageCenterHosts[];
  MessageCenterListening: string;
  MessageCenterMaintenance: string;
  //
  DASSlaveListening: string;
  DASLauncher: string;
  DASDriver: string;
  DASTelligDriver: string;
  DASNodes: DASNodes[];
  SQLDataExpiration: string;
  SQLEventExpiration: string;
  SQLCleanDBTime: string;
  ADTModality: string;
  ADTListening: string;
  HL7DispInputLocal: string;
  Destinations: Destinations[];
  MobileInputLocal: string;
  MobileVitalsDispIP: string;
  MobileVitalsDispPort: string;
  MobileLoginMode: string;
  MobileUniteProtocol: string;
  MobileUnitePsIP: string;
  MobileUnitePsAPI: string;
  MobileUsername: string;
  MobilePassword: string;
  MobileCSCMIP: string;
  chkAscomSSO: string;
  //
  chkRemoteLogin: string;
  RemoteLoginMode: string;
  ActiveDirectoryServer: string;
  ActiveDirectoryUsername: string;
  ActiveDirectoryPassword: string;
  //
  chkSyncSyslog: string;
  SyncSyslogChannel: string;
  SyncSyslogHostname: string;
  SyncSyslogPort: string;
  SyncSyslogFormat: string;
  chkSyncDB: string;
  SyncDBServer: string;
  SyncDBDatabase: string;
  SyncDBTable: string;
  SyncDBUser: string;
  SyncDBPassword: string;
  SyncDBEncryptConn: string;
  SyncInterval: string;
  WebsiteName: string;
  WebsiteBaseURLProtocol: string;
  WebsiteHTTP: string;
  WebsiteHTTPS: string;
  WebsiteSubfolder: string;
  WebsiteBaseURL: string;
  WebsiteCachePath: string;
  WebsiteDestinationFolder: string;
  //
  ImgBankPort: string;
  ImgBankMediaDirectory: string;
  chkImgBankActivateDNS: string;
  //
  CDSSPort: string;
  CDSSURL: string;
  UniteApiURL: string;
  UniteApiUsername: string;
  UniteApiPassword: string;
  UniteBedNameDepth: string;
  UniteSyncInterval: string;
  chkUniteUseUEI: string;
  GatewayAppPort: string;
  chkSaveConfiguration: string;
  MirthHttpPort: string;
  MirthHttpsPort: string;
  Hl7SenderLabel1: string;
  HL7SenderEndpoint1: string;
  Hl7SenderLabel2: string;
  HL7SenderEndpoint2: string;
  Hl7SenderLabel3: string;
  HL7SenderEndpoint3: string;
  Hl7SenderLabel4: string;
  HL7SenderEndpoint4: string;
  Hl7ReceiverLabel1: string;
  HL7ReceiverPort1: string;
  Hl7ReceiverLabel2: string;
  HL7ReceiverPort2: string;
  Hl7ReceiverLabel3: string;
  HL7ReceiverPort3: string;
  Hl7ReceiverLabel4: string;
  HL7ReceiverPort4: string;
}
export interface HAServer {
  FQDN: string;
  IP: string;
}
export interface MessageCenterHosts {
  FQDN: string;
  IP: string;
}
export interface DASNodes {
  FQDN: string;
  IP: string;
  Mode: string;
  Name: string;
  MasterAddress: string;
}
export interface Destinations {
  FQDN: string;
  IpPort: string;
  Protocol: string;
  Format: string;
}

//AnalyzeServer
export interface AnalyzeServer {
  IsEdited: string;
  FQDN: string;
  ClusterNodes: ClusterNodes[];
  LoadBalancers: LoadBalancers[];
  CertificateType: string;
  IntendedPurposes: string;
  SignatureAlgorithm: string;
  SignatureHashAlgorithm: string;
  FileFormat: string;
  RequiredCn: string;
  ExpirationDate: string;
  Servers: Servers[];
  DbLogCollectorConnection: string;
  DbLogCollectorAuthentication: string;
  DbLogCollectorUser: string;
  DbLogCollectorPassword: string;
  DatabaseForLogCollector: string;
  DbLogCollectorPatientUpdate: string;
  DbReportDBConnection: string;
  DbReportDBAuthentication: string;
  DbReportDBUser: string;
  DbReportDBPassword: string;
  DatabaseForReportDB: string;
  chkEncryptPatient: string;
  DbAuditTrailConnection: string;
  DbAuditTrailAuthentication: string;
  DbAuditTrailUser: string;
  DbAuditTrailPassword: string;
  DatabaseForAuditTrail: string;
  DbTechnicalLogSupport: string;
  DbTechnicalLogConnection: string;
  DbTechnicalLogAuthentication: string;
  DbTechnicalLogUser: string;
  DbTechnicalLogPassword: string;
  DatabaseForTechnicalLog: string;
  UniteAnalyze: string;
  UniteAnalyzeLanguage: string;
  UnicodeFontReplace: string;
  DestinationFolder: string;
  IISSiteName: string;
  IISPort: string;
  ServiceAccountDomainLabel: string;
  ServiceAccountDomain: string;
  ServiceAccountUsername: string;
  ServiceAccountPassword: string;
  AppPoolIdentityDomainLabel: string;
  AppPoolIdentityDomain: string;
  AppPoolIdentityUsername: string;
  AppPoolIdentityPassword: string;
  UniteAdminService: string;
  UniteAdminPort: string;
  UniteAdminUsername: string;
  UniteAdminPassword: string;
  ReportStorage: string;
  chkUseSMTP: string;
  EmailServerAddress: string;
  EmailServerPort: string;
  EmailServerUsername: string;
  EmailServerPassword: string;
  EmailSenderAddress: string;
  VerificationEmail: string;
}

//C4cs Installation
export interface C4csInstallation {
  IsEdited: string;
  C4csInstallations: C4csInstallations[];
}
export interface C4csInstallations {
  Installation: string;
  DestinationFolder: string;
  RabbitMQHostname: string;
  RabbitMQPort: string;
  RabbitMQUsername: string;
  RabbitMQPassword: string;
  RabbitMQVirtualHost: string;
  RabbitMQEnableEncrypt: string;
  InstallationName: string;
  chkMedical: string;
  chkIncludeName: string;
  chkAlarmServiceEngine: string;
  chkConnectAdmin: string;
  chkDriverHost: string;
  chkImagePresServer: string;
  chkSpacelabsXprezzNet: string;
  chkDragerVF7: string;
  chkDragerVF9: string;
  chkAscomDigistat: string;
  chkAscomGEUnity: string;
  chkTeleCareNurseCall: string;
  chkTelligNurseCall: string;
  ConnectDBConnection: string;
  ConnectDBAuthentication: string;
  ConnectDBUser: string;
  ConnectDBPassword: string;
  ConnectDBName: string;
  IPSSite: string;
  IPSVirtualDirectory: string;
  IPSAppPool: string;
  ServiceAccountDomain: string;
  ServiceAccountUsername: string;
  ServiceAccountPassword: string;
  IISAppPoolDomain: string;
  IISAppPoolUsername: string;
  IISAppPoolPassword: string;
  ConnectAlarmPort: string;
  ConnectDriverStatusPort: string;
  ConnectProxyPort: string;
  ConnectSupervisorPort: string;
  ConnectDriverWaveformPort: string;
  XprezzNetFQDN1: string;
  XprezzNetIP1: string;
  XprezzNetFQDN2: string;
  XprezzNetIP2: string;
  DragerFQDN1: string;
  DragerIP1: string;
  DragerFQDN2: string;
  DragerIP2: string;
  DASMasterFQDN1: string;
  DASMasterIP1: string;
  DASMasterTCPPort1: string;
  DASMasterFQDN2: string;
  DASMasterIP2: string;
  DASMasterTCPPort2: string;
  DASMasterFQDN3: string;
  DASMasterIP3: string;
  DASMasterTCPPort3: string;
  DASMasterFQDN4: string;
  DASMasterIP4: string;
  DASMasterTCPPort4: string;
  GERwhatUDP: string;
  GEUnityUDP: string;
  GETimeSyncUDP: string;
  GEControlPanelTCP: string;
  GEBinaryDataUDP: string;
  GEIPUnity1: string;
  GEIPUnity2: string;
  GEIPUnity3: string;
  GEIPUnity4: string;
  GEIPUnity5: string;
}
