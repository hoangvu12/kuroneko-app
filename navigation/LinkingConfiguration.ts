/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";

export default {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      WatchScreen: "watch",
      SearchScreen: "search",
      Root: {
        screens: {
          Home: {
            screens: {
              HomeScreen: "home",
            },
          },
          Category: {
            screens: {
              CategoryScreen: "category",
            },
          },
        },
      },
      NotFound: "*",
    },
  },
};
