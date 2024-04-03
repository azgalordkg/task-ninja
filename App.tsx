import "@/i18n.config";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React, { FC } from "react";

import { ProvidersLayout } from "@/components/layouts";
import { MainNavigation } from "@/components/navigation";

GoogleSignin.configure({
  webClientId:
    "243640251408-mpcfflrps42deg5sdpcig4grpl4vs3p0.apps.googleusercontent.com",
  offlineAccess: true,
});

const App: FC = () => {
  return (
    <ProvidersLayout>
      <MainNavigation />
    </ProvidersLayout>
  );
};

export default App;
