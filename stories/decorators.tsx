import React from "react";
import { View } from "react-native";

export const BufferView = (storyFn: any) => {
  return (
      <View style={{flex: 1, marginHorizontal: 20, marginVertical: 40}}>
          {storyFn()}
      </View>
  )
};
