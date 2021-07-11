import React from "react";
import { TouchableOpacity } from "react-native";
import { VideoButtonProps } from "../../types";

export default function VideoButton(props: VideoButtonProps) {
  const { disabled = false, icon, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={{ zIndex: 10 }}
    >
      {icon}
    </TouchableOpacity>
  );
}
