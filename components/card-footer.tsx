import React from "react";
import { StyleSheet, View } from "react-native";
import { mergeWith } from "lodash";

type CardFooterProps = {
  children: React.ReactNode;
  border?: boolean;
};

export const CardFooter = (props: CardFooterProps) => {
  const { children, border, ...rest } = props;

  let footerStyle: any = styles.container;

  if (border) {
    footerStyle = mergeWith({}, footerStyle, styles.border);
  }

  return (
    <View style={footerStyle} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
  border: {
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
});
