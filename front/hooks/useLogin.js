import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { success, log } from "../utils/logs";
import { setProfile } from "../store/profileReducer";
import { useNavigation } from "@react-navigation/native";
import expoLocalHost from "../localHost";

const useLogin = () => {
  const [loginEmail, setLoginEmail] = useState(``);
  const [loginPassword, setLoginPassword] = useState(``);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // POST user credentials
    await axios
      .post(`http://${expoLocalHost}/api/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((data) => {
        dispatch(setProfile(data.data));
        success(`logged user ${data.data}`);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return {
    handleSubmit,
    loginEmail,
    loginPassword,
    setLoginEmail,
    setLoginPassword,
  };
};

export default useLogin;
