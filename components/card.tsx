import React from "react";
import {StyleSheet, View, ViewProps} from "react-native";

interface CardPropsType extends ViewProps {
  children: React.ReactNode;
}

export const Card = (props: CardPropsType) => {
  const { children, ...rest } = props;
  return <View style={styles.cardContainer}>{children}</View>;
};


const styles = StyleSheet.create({
   cardContainer: {
       borderWidth: 1,
       borderRadius: 2,
       borderColor: '#ccc',
       paddingVertical: 14,
       paddingHorizontal: 14,
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.1,
       shadowRadius: 1.5,
       elevation: 3
   }
});
