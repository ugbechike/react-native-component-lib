import React from "react";
import { StyleSheet, View, ViewProps } from "react-native";

interface CardBodyProps extends ViewProps {
  children: React.ReactNode;
  header?: boolean;
  body?: boolean;
  headerContent?: string;
}

export const CardBody = (props: CardBodyProps) => {
  const { children, body, headerContent, header, ...rest } = props;
  return (
    <View style={styles.container} {...rest}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 14,
    paddingHorizontal: 14,
  },
});
