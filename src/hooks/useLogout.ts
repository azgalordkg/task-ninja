import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useDispatch, useSelector } from "react-redux";

import { TOKEN } from "@/constants";
import { resetUserInfo, selectCurrentUser } from "@/store/apis/auth";
import { Storage } from "@/utils";

export const useLogout = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectCurrentUser);

  const googleSignOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
    } catch (error) {
      console.log(5, error);
      console.error(error);
    }
  };

  const logout = async () => {
    await Storage.removeData(TOKEN);
    dispatch(resetUserInfo());

    if (userInfo?.isGoogle) {
      await googleSignOut();
    }
  };

  return { logout };
};
