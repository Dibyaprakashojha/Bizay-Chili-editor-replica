import { EnvConfig } from "./envConfig";

export class GlobalConfig {
  public static _instance: GlobalConfig = new GlobalConfig();
  public static config: EnvConfig | any = {};
  public static serviceURI: string = "";

  constructor() {
    if (GlobalConfig._instance) {
      throw new Error(
        "Error: Instantiation failed: Use SessionInfo.getInstance() instead of new."
      );
    }
    GlobalConfig._instance = this;
  }

  public static getInstance(): GlobalConfig {
    return GlobalConfig._instance;
  }

  public static setConfig(config: EnvConfig) {
    GlobalConfig.config = config;
    GlobalConfig.serviceURI =
      GlobalConfig.config.serviceProtocol +
      GlobalConfig.config.serviceHost +
      (GlobalConfig.config.serviceHostPort != "" ? (":" + GlobalConfig.config.serviceHostPort) : "") +
      GlobalConfig.config.serviceBaseURL;
  }

  public static getServiceBaseURI(): string {
    return GlobalConfig.serviceURI;
  }


  public static ChiliBaseUrl(): string {
    return GlobalConfig.config.chiliBaseUrl;
  }
 
  public static documentId():string{
    return GlobalConfig.config.documentId;
  }

 
}
