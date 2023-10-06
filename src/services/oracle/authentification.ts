import common from "oci-common";

import { CONFIGURATION_FILE_PATH, CONFIG_PROFILE } from "../../../contants";

export async function authentification() {
  console.log("File Profil: " + CONFIG_PROFILE);
  console.log("File Path: " + CONFIGURATION_FILE_PATH);

  const authProvider: common.ConfigFileAuthenticationDetailsProvider =
    new common.ConfigFileAuthenticationDetailsProvider();
  //   CONFIGURATION_FILE_PATH,
  //   CONFIG_PROFILE

  console.log("Auth Provider: " + authProvider);
  //   const objectStorageClient: os.ObjectStorageClient =
  //     new os.ObjectStorageClient({
  //       authenticationDetailsProvider: authProvider,
  //     });

  //   objectStorageClient.region = common.Region.US_ASHBURN_1;

  //   const req: os.requests.GetNamespaceRequest = {};
  //   const ns: os.responses.GetNamespaceResponse =
  //     await objectStorageClient.getNamespace(req);

  //   console.log("El ns: " + ns);
}
