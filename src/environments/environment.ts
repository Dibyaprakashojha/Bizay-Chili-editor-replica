// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { EnvConfig } from "src/app/config/envConfig";

export const environment: EnvConfig = {
  production: false,
  environment: "local",
  serviceProtocol: "http://",
  serviceHost: "localhost",
  serviceHostPort: "58769",
  serviceBaseURL: "/frontify",
  chiliBaseUrl: "http://localhost:8085/CHILI",
  
    documentId: "4865fe9b-6f02-4aa4-9039-4c8c325850ba"
   
    
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */