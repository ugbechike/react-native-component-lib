import React from "react";
import {StyleSheet, View, ViewProps} from "react-native";

interface FlexProps extends ViewProps {
  children: React.ReactNode;
};

export const Flex = (props: FlexProps) => {
  const { children, ...rest } = props;

  const flexStyle = styles.container;
  return (
    <View style={flexStyle} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
