import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

export default function Home() {
  const profile = useSelector((state) => state.profile);
  return (
    <View>
      {console.log(profile)}
      <Text>PERFILLLLLLL</Text>
    </View>
  );
}
