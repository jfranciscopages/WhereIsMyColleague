import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Box, useToast } from "native-base";
import { success, log } from "../utils/logs";
import { setProfile, loggedIn } from "../store/profileReducer";
import { useNavigation } from "@react-navigation/native";
import expoLocalHost from "../localHost";

const useLogin = () => {
  const toast = useToast();
  const [loginEmail, setLoginEmail] = useState(``);
  const [loginPassword, setLoginPassword] = useState(``);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const user = useSelector((state) => state.profile);

  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post(`http://${expoLocalHost}/api/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((r) => {
        dispatch(setProfile(r.data));
        navigation.navigate(`DrawerNavigator`);
      })
      .catch((err) => console.log(err));
  };

  return {
    handleSubmit,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
    loading,
  };
};

export default useLogin;
