import { Dimensions } from "react-native";
import { ICustomViewStyle } from "react-native-skeleton-content/lib/Constants";
import { moderateScale } from "../utils/scale";
import { randomKey } from "./Loader";
import LabelLoader from "./LabelLoader";

const { width: windowWidth, height: windowHeight } = Dimensions.get("window");

const layout = (): ICustomViewStyle => ({
  key: randomKey("watch-container"),
  flex: 1,
  children: [
    {
      key: "video-container",
      width: windowWidth,
      height: windowHeight / 3.5,
    },
    {
      key: "column-container",
      padding: 10,
      width: windowWidth * 0.9,
      children: [
        {
          key: randomKey("title"),
          width: "90%",
          height: moderateScale(18),
          marginBottom: 15,
        },
        {
          key: randomKey("statistics-container"),
          width: "100%",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          children: [
            {
              key: randomKey("views"),
              width: "50%",
              height: moderateScale(16),
            },
            {
              key: randomKey("love-container"),
              width: "30%",
              height: moderateScale(16),
            },
          ],
          marginBottom: 20,
        },
        {
          ...LabelLoader(true, [
            {
              key: randomKey("container"),
              marginBottom: 20,
              flex: 2,
              children: [
                {
                  key: randomKey("label"),
                  height: moderateScale(16),
                  width: "40%",
                  marginBottom: 15,
                },
                {
                  key: randomKey("label"),
                  height: moderateScale(16),
                  width: "60%",
                },
              ],
            },
            {
              key: randomKey("container"),
              marginBottom: 15,
              flex: 1,
              children: [
                {
                  key: randomKey("label"),
                  height: moderateScale(16),
                  width: "60%",
                },
              ],
            },
          ]),
        },
        {
          ...LabelLoader(false, [
            {
              key: randomKey("container"),
              marginBottom: 10,
              flex: 1,
              children: [
                {
                  key: randomKey("label"),
                  height: moderateScale(16),
                  width: "40%",
                  marginBottom: 5,
                },
                {
                  key: randomKey("label"),
                  height: moderateScale(16) * 3,
                  width: "100%",
                },
              ],
            },
          ]),
        },
        {
          ...LabelLoader(false, [
            {
              key: randomKey("container"),
              marginBottom: 10,
              flex: 1,
              children: [
                {
                  key: randomKey("label"),
                  height: moderateScale(16),
                  width: "60%",
                  marginBottom: 5,
                },
                {
                  key: randomKey("label"),
                  height: moderateScale(16) * 2,
                  width: "80%",
                },
              ],
            },
          ]),
        },
      ],
    },
  ],
});

export default layout;
