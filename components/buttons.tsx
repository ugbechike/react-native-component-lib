import React, { ReactNode, useState } from "react";
import {
  TouchableOpacity,
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  GestureResponderEvent,
  View,
} from "react-native";
// import { color } from "@storybook/addon-knobs";
import colors from "../config/colors";
// import { action } from "@storybook/addon-actions";
// import { mergeWith } from "@chakra-ui/utils";
import { mergeWith } from "lodash"

interface ButtonPropsType extends TouchableOpacityProps {
  children: React.ReactNode;
  onPressOut?: (event: GestureResponderEvent) => void;
  onPressIn?: (event: GestureResponderEvent) => void;
  outline?: boolean;
  leftIcon?: ReactNode;
  isFullWidth?: boolean;
  bgColor?: string;
  primary?: boolean;
  success?: boolean;
  _pressed?: any;
}

export type FunctionArguments<T extends Function> = T extends (
    ...args: infer R
    ) => any
    ? R
    : never

export type AnyFunction<T = any> = (...args: T[]) => any

export function callAll<T extends AnyFunction>(...fns: (T | undefined)[]) {
  return function mergedFn(arg: FunctionArguments<T>[0]) {
    fns.forEach((fn) => {
      fn?.(arg)
    })
  }
}

// todo think of a better way to handle the if statements
export const Button = (props: ButtonPropsType) => {
  const {
    onPressOut,
    onPressIn,
    children,
    outline = false,
    leftIcon,
    isFullWidth,
    bgColor,
    primary,
    success,
    _pressed,
    ...rest
  } = props;

  let customBgColorStyle = {
    backgroundColor: bgColor,
    borderColor: bgColor,
  };

  let buttonStyle: any = styles.buttonContainer;
  const textStyle: any = [styles.text];

  if (outline) {
    buttonStyle = mergeWith({}, buttonStyle, styles.buttonOutline);
    textStyle.push(styles.textOutline);
  }

  if (leftIcon) {
    buttonStyle = mergeWith({}, buttonStyle, styles.buttonLeftIcon);

    // buttonStyle.push(styles.buttonLeftIcon);
  }

  if (isFullWidth) {
    mergeWith(buttonStyle, styles.buttonFullWidth);
    // buttonStyle.push(styles.buttonFullWidth);
  }

  if (bgColor) {
    mergeWith(buttonStyle, customBgColorStyle);
    // buttonStyle.push(customBgColorStyle);
  }

  if (primary) {
    customBgColorStyle.backgroundColor = "blue";
    customBgColorStyle.borderColor = "blue";
    mergeWith(buttonStyle, customBgColorStyle);

    // buttonStyle.push(customBgColorStyle);
  }

  if (success) {
    customBgColorStyle.backgroundColor = "green"; // todo find color codes
    customBgColorStyle.borderColor = "green";
    mergeWith(buttonStyle, customBgColorStyle);

    // buttonStyle.push(customBgColorStyle);
  }

  const [pressed, setPressed] = useState<boolean>(false);

  const _handlePressAll = (arg1: any, arg2: any) => {
    // alert('hello');
    setPressed(true);
  };

  let merge = mergeWith({}, buttonStyle, pressed ? _pressed : {});
  // console.warn("......", merge);

  return (
    <Pressable
      onPressIn={callAll(onPressIn, () => setPressed(true))}
      onPressOut={callAll(onPressOut, () => setPressed(false))}
      {...rest}
      style={merge}
    >
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <Text style={textStyle}>{children}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    width: "50%",
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderColor: colors.border,
  },
  buttonLeftIcon: {
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 18,
    fontWeight: "500",
  },
  textOutline: {
    color: colors.primary,
  },
  leftIcon: {
    marginRight: 10,
    color: 'white'
  },
  buttonFullWidth: {
    width: "100%",
  },
});
