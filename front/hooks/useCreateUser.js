import { useState, useEffect } from "react";
import axios from "axios";
import expoLocalHost from "../localHost";
import { log, success, error } from "../utils/logs";

const useCreateUser = () => {
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
    setWorkspaceId(workspaceId);
  };

  const createUser = () => {
    const user = {
      workspaceId: workspaceId,
      access: access,
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      country: country,
      city: city,
      job: job,
    };
    axios
      .post(`http://${expoLocalHost}/api/users/create`, user)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
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
    error,
    nameValidation,
    searchFloor,
    branch,
    floorsOk,
    floor,
    searchWorkspace,
    workspacesOk,
    setWorkspaceId,
    createUser,
  };
};

export default useCreateUser;
