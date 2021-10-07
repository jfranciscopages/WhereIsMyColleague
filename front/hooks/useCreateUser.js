import React, { useState, useEffect } from "react";
import axios from "axios";
import expoLocalHost from "../localHost";
import { useToast } from "native-base";
import { Box } from "native-base";
import { useNavigation } from "@react-navigation/core";

const useCreateUser = () => {
  const toast = useToast();
  const navigation = useNavigation();
  const [access, setAccess] = useState("");
  const [firstName, setFistName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [job, setJob] = useState("");

  const [branch, setBranch] = useState({});
  const [floor, setFloor] = useState({});
  const [workspaceId, setWorkspaceId] = useState("");

  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [floorsOk, setFloorsOk] = useState(false);
  const [workspacesOk, setWorkspacesOk] = useState(false);

  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const nameValidation = (e) => {
    console.log(e);
    if (format.test(e)) " incorrectsChars();";
    else {
      return true;
    }
  };

  const searchFloor = (branchId) => {
    axios
      .get(
        `http://${expoLocalHost}/api/search/searchOneBranchFloors/${branchId}`
      )
      .then((data) => {
        setBranch(data.data);
        setFloorsOk(true);
      })
      .catch((err) => console.log(err));
  };

  const searchWorkspace = (floorId) => {
    axios
      .get(
        `http://${expoLocalHost}/api/search/searchFloorWorkspaces/${floorId}`
      )
      .then((data) => {
        setFloor(data.data);
        setWorkspacesOk(true);
      })
      .catch((err) => console.log(err));
  };

  const setWorkspace = (workspaceId) => {
    axios
      .get(
        `http://${expoLocalHost}/api/users/findUserInWorkspace/${workspaceId}`
      )
      .then((data) => {
        setWorkspaceId(workspaceId);
      })
      .catch((err) => {
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="red.500" px="2" py="4" rounded="sm" mt={70}>
                This Workspace its Ocuppied! Select another!
              </Box>
            );
          },
        });
        setWorkspaceId("");
        setWorkspacesOk(false);
      });
  };

  const createUser = () => {
    setLoading(true);
    const user = {
      workspaceId: workspaceId,
      access: access,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      country: country,
      city: city,
      job: job,
    };
    axios
      .post(`http://${expoLocalHost}/api/users/create`, user)
      .then((data) => {
        setLoading(false);
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="4" rounded="sm" mt={70}>
                User created successfuly!
              </Box>
            );
          },
        });
        navigation.navigate("userinfo");
      })
      .catch((err) => {
        setLoading(false);
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="red.500" px="2" py="4" rounded="sm" mt={70}>
                Error user can't create!
              </Box>
            );
          },
        });
        console.log(err);
      });
  };

  const submitEditUser = (id) => {
    setLoading(true);
    const user = {
      id: id,
      workspaceId: workspaceId,
      access: access,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      phone: phone,
      country: country,
      city: city,
      job: job,
    };
    axios
      .put(`http://${expoLocalHost}/api/users/editUser`, user)
      .then((data) => {
        setLoading(false);
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="emerald.500" px="2" py="4" rounded="sm" mt={70}>
                User updated successfuly!
              </Box>
            );
          },
        });
        navigation.navigate("userinfo");
      })
      .catch((err) => {
        setLoading(false);
        toast.show({
          placement: "top",
          render: () => {
            return (
              <Box bg="red.500" px="2" py="4" rounded="sm" mt={70}>
                Error user can't update!
              </Box>
            );
          },
        });
        console.log(err);
      });
  };

  return {
    access,
    setAccess,
    firstName,
    setFistName,
    lastName,
    setLastName,
    email,
    setEmail,
    password,
    setPassword,
    phone,
    setPhone,
    city,
    setCity,
    country,
    setCountry,
    job,
    setJob,
    nameValidation,
    searchFloor,
    branch,
    floorsOk,
    floor,
    searchWorkspace,
    workspacesOk,
    setWorkspace,
    createUser,
    loading,
    submitEditUser,
  };
};

export default useCreateUser;
