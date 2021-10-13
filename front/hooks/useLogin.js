import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Box, useToast } from "native-base";
import { success, log } from "../utils/logs";
import { setProfile } from "../store/profileReducer";
import { useNavigation } from "@react-navigation/native";
import expoLocalHost from "../localHost";

const useLogin = () => {
  const toast = useToast();
  const [loginEmail, setLoginEmail] = useState(``);
  const [loginPassword, setLoginPassword] = useState(``);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // POST user credentials
    await axios
      .post(`http://${expoLocalHost}/api/auth/login`, {
        email: loginEmail,
        password: loginPassword,
      })
      .then((data) => {
        setLoading(false);
        dispatch(setProfile(data.data));
        success(`logged user ${data.data}`);
      })
      .catch((err) => {
        setLoading(false);
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="red.500" px="2" py="4" rounded="sm" mt={70}>
                You have entered an invalid username or password.
              </Box>
            );
          },
        });
        console.log(err);
      });
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
