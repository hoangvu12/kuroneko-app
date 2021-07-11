import {
  CardPaddingBottom,
  CardPaddingRight,
  CardWidth,
  ImageHeight,
  ImageRatio,
  StudiosFontSize,
  TitleFontSize,
} from "../components/VideoCard";
import { randomKey } from "./Loader";

const layout = () => ({
  key: randomKey("video-card-container"),
  width: CardWidth - CardPaddingRight,
  marginRight: CardPaddingRight,
  marginBottom: CardPaddingBottom,
  children: [
    {
      key: randomKey("thumbnail"),
      width: CardWidth,
      height: ImageHeight * ImageRatio,
      marginBottom: 5,
    },
    {
      key: randomKey("title"),
      height: TitleFontSize,
      width: CardWidth * 0.7,
      marginBottom: 5,
    },
    {
      key: randomKey("studios"),
      height: StudiosFontSize,
      width: CardWidth * 0.4,
    },
  ],
});

export default layout;
