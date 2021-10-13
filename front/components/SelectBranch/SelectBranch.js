import React, { useEffect } from "react";
import { View } from "react-native";
import { FormControl, Select, CheckIcon } from "native-base";
import { useDispatch, useSelector } from "react-redux";
import useCreateUser from "../../hooks/useCreateUser";
import { allBranches } from "../../store/BranchReducer";

export const SelectBranch = () => {
  const params = useCreateUser();
  const {
    searchFloor,
    branch,
    floorsOk,
    floor,
    searchWorkspace,
    workspacesOk,
    setWorkspace,
  } = params;

  const dispatch = useDispatch();
  const branches = useSelector((state) => state.branches.allBranches);

  useEffect(() => {
    dispatch(allBranches());
  }, []);

  return (
    <View>
      <FormControl.Label alignSelf="center">Select Branch</FormControl.Label>
      <Select
        minWidth="200"
        placeholder="Choose Branch"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1"
        mb="2"
        onValueChange={(itemValue) => searchFloor(itemValue)}
      >
        {branches
          ? branches.map((branch) => {
              return (
                <Select.Item
                  key={branch.id}
                  label={branch.city}
                  value={branch.id}
                />
              );
            })
          : null}
      </Select>
      <FormControl.Label alignSelf="center">Select Floor</FormControl.Label>
      <Select
        minWidth="200"
        placeholder="Choose Branch"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1"
        mb="2"
        onValueChange={(itemValue) => searchWorkspace(itemValue)}
      >
        {floorsOk ? (
          branch.floors.map((floor) => {
            return (
              <Select.Item key={floor.id} label={floor.name} value={floor.id} />
            );
          })
        ) : (
          <Select.Item />
        )}
      </Select>
      <FormControl.Label alignSelf="center">Select Workspace</FormControl.Label>
      <Select
        minWidth="200"
        placeholder="Choose Branch"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size={5} />,
        }}
        mt="1"
        mb="4"
        onValueChange={(itemValue) => setWorkspace(itemValue)}
      >
        {workspacesOk ? (
          floor.workspaces.map((workspace) => {
            return (
              <Select.Item
                key={workspace.id}
                label={
                  workspace.user_profile
                    ? `${workspace.name} (Ocuppied)`
                    : `${workspace.name} (Free)`
                }
                value={workspace.id}
              />
            );
          })
        ) : (
          <Select.Item />
        )}
      </Select>
    </View>
  );
};
