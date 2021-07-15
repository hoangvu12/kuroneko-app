/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { AVPlaybackStatus, Video } from "expo-av";
import { TextStyle } from "react-native";

export type VideoButtonProps = {
  icon: JSX.Element;
  onPress: () => void;
  disabled?: boolean;
};

export type VideoPlayerButtonPress = (
  status: AVPlaybackStatus,
  video: Video
) => void;

export type VideoPlayerProps = {
  source: string;
  topTitleText?: string;
  topTitleStyle?: TextStyle;
  topDescriptionText?: string;
  topDescriptionStyle?: TextStyle;
  isTopTitleDisabled?: boolean;
  onSkipBackPress?: VideoPlayerButtonPress;
  onPlayBackPress?: VideoPlayerButtonPress;
  onPlayPress?: VideoPlayerButtonPress;
  onPlayForwardPress?: VideoPlayerButtonPress;
  onSkipForwardPress?: VideoPlayerButtonPress;
};

// "data": {
//   "title": "Yubisaki kara Honki no Netsujou 2 Ep.1",
//   "views": "466.046 lượt xem",
//   "likes": "107",
//   "dislikes": "4",
//   "studios": [
//     "Suiseisha"
//   ],
//   "playlists": [
//     {
//       "name": "Yubisaki kara Honki no Netsujou",
//       "slug": "yubisaki-kara-honki-no-netsujou"
//     },
//     {
//       "name": "指 先 か ら 本 気 の 熱情 2- 恋人 は 消防 士",
//       "slug": "%e6%8c%87-%e5%85%88-%e3%81%8b-%e3%82%89-%e6%9c%ac-%e6%b0%97-%e3%81%ae-%e7%86%b1%e6%83%85-2-%e6%81%8b%e4%ba%ba-%e3%81%af-%e6%b6%88%e9%98%b2-%e5%a3%ab"
//     }
//   ],
//   "censorship": [
//     "Có che"
//   ],
//   "releasedDate": "2021",
//   "altTitle": "Fire From My Fingertips 2 My Lover is a Firefighter, 指先から本気の熱情 2-恋人は消防士-",
//   "categories": [
//     {
//       "name": "Big Boobs",
//       "slug": "big-boobs"
//     },
//     {
//       "name": "Josei",
//       "slug": "josei"
//     },
//     {
//       "name": "Plot",
//       "slug": "plot"
//     },
//     {
//       "name": "Romance",
//       "slug": "romance"
//     },
//     {
//       "name": "Vanilla",
//       "slug": "vanilla"
//     }
//   ],
//   "description": "Sau phần đầu tiên, Ryou và Souma - họ đã thổ lộ tình cảm của mình dành cho nhau và chính thức hẹn hò. Khi Souma nghĩ rằng trái tim và cơ thể của anh đã gắn kết với Souma và không gì có thể phá vỡ, thì Rei người yêu cũ của Ryou xuất hiện...",
//   "related": [
//     {
//       "image": "https://hentaiz.cc/images/thumb/Yubisaki-kara-Honki-no-Netsujou-2.jpg",
//       "slug": "yubisaki-kara-honki-no-netsujou-2-ep-2",
//       "title": "Yubisaki kara Honki no Netsujou 2 Ep.2",
//       "studios": [
//         "Suiseisha"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/Souryo-to-Majiwaru-Shikiyoku-no-Yoru-ni.jpg",
//       "slug": "souryo-to-majiwaru-shikiyoku-no-yoru-ni-1",
//       "title": "Souryo to Majiwaru Shikiyoku no Yoru ni… 1",
//       "studios": [
//         "Seven, Suiseisha"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/Ookami-san-wa-Taberaretai.jpg",
//       "slug": "ookami-san-wa-taberaretai-1",
//       "title": "Ookami-san wa Taberaretai 1",
//       "studios": [
//         "Suiseisha"
//       ]
//     },
//     {
//       "image": "https://1.bp.blogspot.com/-qUzhNwXo0DY/WwODOUSceWI/AAAAAAAACFM/JRqTw3rX6gQDDuDf5TJ3QdZfYghawe6aQCLcBGAs/w200/Untitled-1.jpg",
//       "slug": "skirt-no-naka-wa-kedamono-deshita-9",
//       "title": "Skirt no Naka wa Kedamono Deshita. 9",
//       "studios": [
//         "Magic Bus, Suiseisha"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/Kyojinzoku-no-Hanayome.jpg",
//       "slug": "kyojinzoku-no-hanayome-6",
//       "title": "Kyojinzoku no Hanayome 6",
//       "studios": [
//         "Suiseisha"
//       ]
//     },
//     {
//       "image": "https://1.bp.blogspot.com/-qUzhNwXo0DY/WwODOUSceWI/AAAAAAAACFM/JRqTw3rX6gQDDuDf5TJ3QdZfYghawe6aQCLcBGAs/w200/Untitled-1.jpg",
//       "slug": "skirt-no-naka-wa-kedamono-deshita-6",
//       "title": "Skirt no Naka wa Kedamono Deshita. 6",
//       "studios": [
//         "Magic Bus, Suiseisha"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/jimihen-Jimiko-wo-Kaechau-Jun-Isei-Kouyuu.jpg",
//       "slug": "jimihen-jimiko-wo-kaechau-jun-isei-kouyuu-2",
//       "title": "Jimihen Jimiko wo Kaechau Jun Isei Kouyuu!! 2",
//       "studios": [
//         "Suiseisha"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/Fuuzoku-Gakuensai-02.jpg",
//       "slug": "jk-fuuzoku-gakuensai-2",
//       "title": "JK Fuuzoku Gakuensai 2",
//       "studios": [
//         "Bunny Walker"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/Jitaku-Keibiin-2-07.jpg",
//       "slug": "jitaku-keibiin-2-ep-7",
//       "title": "Jitaku Keibiin 2 Ep.7",
//       "studios": [
//         "Suzuki Mirano"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/Ero-Konbini-Tenchou-4.jpg",
//       "slug": "ero-konbini-tenchou-4",
//       "title": "Ero Konbini Tenchou 4",
//       "studios": [
//         "PoRO"
//       ]
//     },
//     {
//       "image": "https://hentaiz.cc/images/thumb/Kaifuku-Jutsushi-no-Yarinaoshi.jpg",
//       "slug": "kaifuku-jutsushi-no-yarinaoshi-11",
//       "title": "Kaifuku Jutsushi no Yarinaoshi 11",
//       "studios": [
//         "Glovision, Lantis"
//       ]
//     }
//   ],
//   "source": "https://cdn.discordapp.com/attachments/765887050850369547/862209602174058516/239716-1080-muxed.mp4"
// }

export interface VideoInfo {
  title: string;
  views: string;
  likes: string;
  dislikes: string;
  studios: string[];
  playlists: Playlist[];
  censorship: string[];
  releasedDate: string;
  altTitle: string;
  categories: CategoryType[];
  description: string;
  related: VideoCardProperties[];
  source: string;
}

export interface CategoryType {
  name: string;
  slug: string;
}
export interface Playlist {
  name: string;
  slug: string;
}

export interface Category {
  name: string;
  description: string;
  total: number;
  videos: VideoCardProperties[];
  pages: number;
  nextPage: number;
  page: number;
}

export interface Section {
  title: string;
  updatedAt: string;
  videos: VideoCardProperties[];
}

export interface SectionProps extends Section {
  videos: VideoCardProps[];
}

export type VideoCardProps = {
  containerStyle?: StyleSheet;
  onPress?: (params: VideoCardProperties) => void;
} & VideoCardProperties;

export type VideoCardProperties = {
  image: string;
  slug: string;
  title: string;
  studios: string[];
};

export type RootStackParamList = {
  Root: undefined;
  WatchScreen: { slug: VideoCardProperties["slug"] };
  SearchScreen: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Category: undefined;
};

export type HomeParamList = {
  HomeScreen: undefined;
};

export type CategoryParamList = {
  CategoryScreen: undefined;
};
