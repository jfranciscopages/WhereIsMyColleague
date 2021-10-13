import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    backgroundColor: "#dddddd",
  },
  welcomeMessage: {
    marginTop: 40,
  },
  image: {
    width: 500,
    height: 300,
  },
  heading: {
    fontSize: 30,
    color: "#222222",
    fontWeight: "bold",
    textAlign: "center",
  },
  subheading: {
    fontSize: 20,
    color: "#222222",
    marginTop: 10,
    fontWeight: "normal",
    textAlign: "center",
  },
  description: {
    color: "#222222",
    marginTop: 14,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 15,
  },
});

export default styles;
