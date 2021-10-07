import React, { useEffect } from "react";
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
    dispatch(byCountry(country));
  };

  return (
    <View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 40.45206561667841,
          longitude: -3.6915253170713465,
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
                  >
                    {/* <Callout>
                      <Text style={styles.calloutText}>{country}</Text>
                      <Text>{city}</Text>
                    </Callout> */}
                  </Marker>
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
        {/* <SearchIcon size="4" /> */}
      </View>
      {/* <ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.topScrollView}
        height={50}
        contentContainerStyle={{ paddingRight: 20 }}
      >
        {uniqueSet.map((country, i) => (
          <TouchableOpacity key={i} style={styles.countryScrollView}>
            <Text>{country}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView> */}
      <Animated.ScrollView
        horizontal
        scrollEventThrottle={1}
        showsHorizontalScrollIndicator={false}
        style={styles.bottomScrollView}
        contentContainerStyle={{paddingRight: 30}}
      >
        {countrySelected
          ? countrySelected.map(({ id, city, address, image, CP }) => (
              <View style={styles.card} key={id}>
                <Image
                  style={styles.cardImage}
                  source={{ uri: image }}
                  resizeMode="cover"
                />
                <TouchableOpacity
                  style={styles.countryData}
                  onPress={() => touchableHandler(id)}
                >
                  <Text style={{ fontWeight: "bold" }}>{city}</Text>
                  <Text>{`${address}, ${CP}`}</Text>
                </TouchableOpacity>
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
    // flex: 1,
  },
  // topScrollView: {
  //   position: "absolute",
  //   paddingHorizontal: 10,
  //   marginTop: 65,
  // },
  // countryScrollView: {
  //   flexDirection: "row",
  //   backgroundColor: "#fff",
  //   borderRadius: 20,
  //   padding: 8,
  //   paddingHorizontal: 20,
  //   marginHorizontal: 10,
  //   height: 35,
  // },
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
    marginTop: 5,
    marginBottom: 40,
    marginLeft: 10,
  },
});
