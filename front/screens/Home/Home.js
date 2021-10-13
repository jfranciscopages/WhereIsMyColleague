import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { useSelector } from "react-redux";
import styles from "./homeStyles";
import { Button, Center } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { style } from "styled-system";

export default function Home() {
  const profile = useSelector((state) => state.profile);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Center alignItems="center">
        <Image
          style={styles.image}
          source={require("../../assets/work_4.png")}
          alt="ella"
        />
      </Center>
      <View style={styles.welcomeMessage}>
        <Text style={styles.heading}>{`Hi ${profile.firstName}, Welcome`}</Text>
        <Text style={styles.subheading}>{"to WhereIsMyColleague"}</Text>
        <Text style={styles.description}>
          {
            "Explore the app, find a colleague, their location and more information. "
          }
        </Text>
      </View>
      <View alignItems="center">
        <Button
          backgroundColor="#A6CE39"
          colorScheme="muted"
          mt="50"
          w="150"
          borderRadius="10"
          variant="subtle"
          onPress={() => {
            navigation.navigate("SearchColleague");
          }} // onPress={() => console.log('hello world')}
        >
          Search Colleague
        </Button>
      </View>
    </View>
  );
}
