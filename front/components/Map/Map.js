import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Callout, Circle, Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import SearchBar from "../SearchBar/searchBar";

export default function Map() {
  const user = useSelector((state) => state.users.userById);
  const { latitude, longitude, id } = user;

  return (
    <View style={styles.container}>
      {id ? (
        <MapView
          key={id}
          style={styles.map}
          initialRegion={{
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: latitude,
              longitude: longitude,
            }}
            pinColor={"black"}
          >
            <Callout>
              <Text>Globant Office</Text>
            </Callout>
          </Marker>
          <Circle
            center={{
              latitude: latitude,
              longitude: longitude,
            }}
            radius={1000}
          ></Circle>
        </MapView>
      ) : null}
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
