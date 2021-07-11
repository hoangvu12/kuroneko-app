import { moderateScale } from "../utils/scale";

import { Dimensions } from "react-native";
import VideoCardLoader from "./VideoCardLoader";
import { randomKey } from "./Loader";

const { width: windowWidth } = Dimensions.get("window");

const emptyArr = new Array(2).fill(null);

const layout = () => ({
  key: randomKey("category-container"),
  children: [
    {
      key: randomKey("info-container"),
      children: [
        {
          key: randomKey("category-title"),
          height: moderateScale(20),
          width: windowWidth * 0.7,
        },
        {
          key: randomKey("category-updated-at"),
          height: moderateScale(16),
          width: windowWidth * 0.4,
        },
      ],
      marginBottom: 5,
    },
    {
      key: randomKey("card-container"),
      flexDirection: "row",
      alignItems: "center",
      children: emptyArr.map(() => VideoCardLoader()),
    },
  ],
});

export default layout;
