import { ICustomViewStyle } from "react-native-skeleton-content/lib/Constants";
import { mergeClass, randomKey } from "./Loader";

const layout = (
  inline = false,
  children: ICustomViewStyle[]
): ICustomViewStyle => ({
  key: randomKey("labels-container"),
  width: "100%",
  ...mergeClass(
    {
      marginBottom: 30,
    },
    inline && inlineStyle
  ),
  children,
});

export default layout;

const inlineStyle = {
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginVertical: 10,
  flexWrap: "nowrap",
};
