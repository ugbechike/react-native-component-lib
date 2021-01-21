import React from "react";
import {
  StyleProp,
  StyleSheet,
  View,
  ViewProps,
  ViewStyle,
} from "react-native";
import { mergeWith } from "lodash";

interface CardHeaderProps extends ViewProps {
  children: React.ReactNode;
  border?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const CardHeader = (props: CardHeaderProps) => {
  const { children, style, border, ...rest } = props;

  let headerStyle: any = styles.container;

  if (border) {
    headerStyle = mergeWith({}, headerStyle, styles.border);
  }

  return (
    <View style={[headerStyle, style]} {...rest}>
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
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
});
