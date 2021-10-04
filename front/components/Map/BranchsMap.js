import React, { useEffect } from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import { useDispatch, useSelector } from "react-redux";
import { allBranches } from "../../store/BranchReducer";

export default function BranchsMap() {
  const branches = useSelector((state) => state.branches.allBranches);
  const dispatch = useDispatch();
  const { id, latitude, longitude } = branches;

  useEffect(() => {
    dispatch(allBranches());
  }, []);

  console.log('BRANCHESS MAP', branches)

  return (
  <View style={styles.container}>
      
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
