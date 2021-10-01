import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 15,
    backgroundColor: "#dddddd",
  },
  welcomeMessage: {
    marginTop: 20,
  },
  heading: {
    fontSize: 30,
    color: "#222222",
    fontWeight: "bold",
    textAlign: "center",
  },
  subheading: {
    fontSize: 22,
    color: "#222222",
    marginTop: 10,
    fontWeight: "normal",
    textAlign: "center",
  },
  description: {
    color: "#222222",
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
    textAlign: "center",
    fontSize: 16,
    lineHeight: 15,
  },
});

export default styles;
