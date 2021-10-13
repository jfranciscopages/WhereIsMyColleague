import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { success, log } from "../utils/logs";
import { setProfile, loggedIn } from "../store/profileReducer";
import { useNavigation } from "@react-navigation/native";
import expoLocalHost from "../localHost";

const useLogin = () => {
  const [loginEmail, setLoginEmail] = useState(``);
  const [loginPassword, setLoginPassword] = useState(``);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const user = useSelector(state=> state.profile.user)

  const handleSubmit = async () => {
    dispatch(loggedIn({ loginEmail, loginPassword }));
    // success(`logged user ${data.data}`);
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
