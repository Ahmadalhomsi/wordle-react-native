import { StyleSheet, Dimensions } from "react-native";
import { colors, keys } from "../../constants";

const screenWidth = Dimensions.get("window").width;
export const keyWidth = (screenWidth - 900) / keys[0].length; // Adjusted width to make buttons smaller
const keyHeight = keyWidth * 1.1; // Adjusted height to make buttons smaller

export default StyleSheet.create({
  keyboard: {
    alignSelf: "stretch",
    marginTop: "auto",
  },
  row: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "center",
  },
  key: {
    width: keyWidth - 20, // Adjusted width to make buttons smaller
    height: keyHeight - 20, // Adjusted height to make buttons smaller
    margin: 5, // Adjusted margin for spacing
    borderRadius: 5,
    backgroundColor: colors.grey,
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: colors.lightgrey,
    fontWeight: "bold",
    fontSize: 14, // Adjusted font size to fit smaller buttons
  },
});
