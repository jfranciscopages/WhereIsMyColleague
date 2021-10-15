import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated,
  Image,
} from "react-native";

import MapView, { Callout, Circle, Marker } from "react-native-maps";
import {
  allBranches,
  singleBranch,
  byCountry,
} from "../../store/BranchReducer";
import { Input, SearchIcon } from "native-base";

const { width, height } = Dimensions.get("window");

export default function BranchsMap() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const branches = useSelector((state) => state.branches.allBranches);
  const countrySelected = useSelector((state) => state.branches.byCountry);
  const [blur, setBlur] = useState(false);

  let uniqueMap = branches.map(({ country }) => country);
  let uniqueSet = [...new Set(uniqueMap)];

  useEffect(() => {
    dispatch(allBranches());
  }, []);

  const touchableHandler = (id) => {
    dispatch(singleBranch(id));
    navigation.navigate("Branch");
  };

  const markerHandler = (country) => {
    setBlur(true);
    dispatch(byCountry(country));
  };

  return (
    <View>
      <MapView
        onPress={() => setBlur(false)}
        style={styles.map}
        initialRegion={{
          latitude: -34.61083857975935,
          longitude: -58.366013518182754,
          latitudeDelta: 0.01,
          longitudeDelta: 140.01999999999,
        }}
      >
        {branches
          ? branches.map(
              ({ id, latitude, longitude, country, city, image }) => (
                <View key={id}>
                  <Marker
                    coordinate={{
                      latitude,
                      longitude,
                    }}
                    image={require("../../assets/Gmarker.png")}
                    onPress={() => markerHandler(country)}
                  ></Marker>
                  <Circle
                    center={{
                      latitude,
                      longitude,
                    }}
                    radius={500}
                  ></Circle>
                </View>
              )
            )
          : null}
      </MapView>

      <View style={styles.searchBox}>
        <Input
          style={styles.searchInput}
          mx="3"
          placeholder="Search"
          w={{
            base: "70%",
            md: "25%",
          }}
        />
      </View>

      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.bottomScrollView}
        contentContainerStyle={{ paddingRight: 30 }}
      >
        {countrySelected
          ? countrySelected.map(({ id, city, address, image, CP }) => (
              <View key={id}>
                {blur ? (
                  <View
                    style={{
                      height: 220,
                      width: width * 0.8,
                      backgroundColor: "transparent",
                      borderRadius: 50,
                      marginBottom: 80,
                      marginLeft: 40,
                      position: "relative",
                    }}
                  >
                    <View style={styles.countryData}>
                      <View style={styles.box}>
                        <Text style={{ fontWeight: "bold" }}>{city}</Text>
                        <Text>{`${address}, ${CP}`}</Text>
                      </View>
                    </View>
                    <Image
                      style={styles.cardImage}
                      source={{ uri: image }}
                      resizeMode="cover"
                    />

                    <TouchableOpacity
                      style={styles.branchBtn}
                      onPress={() => touchableHandler(id)}
                    >
                      <Text>Visit Branch</Text>
                    </TouchableOpacity>
                  </View>
                ) : null}
              </View>
            ))
          : null}
      </Animated.ScrollView>
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
    width,
    height,
  },
  calloutText: {
    fontWeight: "bold",
  },
  searchBox: {
    width: "100%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    flexDirection: "row",
    borderRadius: 5,
  },
  searchInput: {
    backgroundColor: "#fff",
  },
  bottomScrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    height: 220,
    width: width * 0.8,
    backgroundColor: "#fff",
    marginBottom: 80,
    marginLeft: 40,
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "30%",
    alignSelf: "center",
  },
  countryData: {
    paddingTop: 5,
    marginLeft: 10,
    position: "absolute",
    zIndex: 1,
  },
  box: {
    padding: 5,
    backgroundColor: "#A6CE39",
    opacity: 0.6,
    borderRadius: 10,
  },
  branchBtn: {
    borderRadius: 10,
    alignItems: "center",
    backgroundColor: "#A6CE39",
  },
});
