import React from "react";
import { Dimensions, StyleSheet, View, ViewProps } from "react-native";

interface ColPropsType extends ViewProps {
  children: React.ReactNode;
  numOfCol?: number;
  spacing?: number;
}

const width = Dimensions.get("window").width;

export const Col = (props: ColPropsType) => {
  const { children, numOfCol = 2, spacing = 5, ...rest } = props;

  const colStyle = {
    margin: 5,
      backgroundColor: 'red',
      height: 50,
    width: width / numOfCol - 55,
  };

  return (
    <View style={colStyle} {...rest}>
      {children}
    </View>
  );
};

interface GridPropsType extends ViewProps {
  children:any;
}


type RenderChildrenProps = {
    children: any;
}

const renderChildren = (props: RenderChildrenProps) => {
    const {children} = props;
    const colStyle = {
        margin: 5,
        backgroundColor: 'red',
        height: 50,
        width: width / 2 - 55,
    };

    console.warn('--->>', children);


    return children?.map((children: any) => {
        // console.warn(children);

        return React.cloneElement(children, {style: colStyle});
    })
};

export const Grid = (props: GridPropsType) => {
  const { children } = props;

  // const gridStyle = {
  //
  // }
  //   console.warn('--->>', {children});


    return (
    <View style={styles.container}>
      {children}
      {/*  {renderChildren(children)}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 1,
    alignItems: "center",
      // flex: 1
  },
});
