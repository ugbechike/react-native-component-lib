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
       // borderWidth: 1,
       borderRadius: 5,
       borderColor: '#ccc',
       backgroundColor: '#fff',
       shadowColor: '#000',
       shadowOffset: { width: 0, height: 0.5 },
       shadowOpacity: 0.3,
       shadowRadius: 1.5,
       elevation: 30
   }
});
