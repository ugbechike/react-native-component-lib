import React, { ReactNode, useState } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  GestureResponderEvent,
  View,
} from "react-native";
import colors from "../config/colors";
import { mergeWith } from "lodash";

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
  danger?: boolean;
  rounded?: boolean;
  _pressed?: any;
  _disabled?: any;
  rightIcon?: any;
}

export type FunctionArguments<T extends Function> = T extends (
  ...args: infer R
) => any
  ? R
  : never;

export type AnyFunction<T = any> = (...args: T[]) => any;

export function callAll<T extends AnyFunction>(...fns: (T | undefined)[]) {
  return function mergedFn(arg: FunctionArguments<T>[0]) {
    fns.forEach((fn) => {
      fn?.(arg);
    });
  };
}

// todo think of a better way to handle the if statements
export const Button = (props: ButtonPropsType) => {
  const {
    onPressOut,
    onPressIn,
    children,
    outline = false,
    leftIcon,
    rightIcon,
    isFullWidth,
    bgColor,
    primary,
    success,
    _pressed,
    _disabled,
    rounded,
    danger,
    ...rest
  } = props;

  let customBgColorStyle = {
    backgroundColor: bgColor,
    borderColor: bgColor,
  };

  let buttonStyle: any = styles.buttonContainer;
  let textStyle: any = styles.text;

  if (outline) {
    buttonStyle = mergeWith({}, buttonStyle, styles.buttonOutline);
    textStyle = mergeWith({}, textStyle, styles.textOutline);
    // textStyle.push(styles.textOutline);
  }

  if (leftIcon) {
    buttonStyle = mergeWith({}, buttonStyle, styles.buttonLeftIcon);
  }

  if (rightIcon) {
    buttonStyle = mergeWith({}, buttonStyle, styles.buttonLeftIcon);
  }

  if (rounded) {
    buttonStyle = mergeWith({}, buttonStyle, styles.roundedButton);
  }

  if (isFullWidth) {
    buttonStyle = mergeWith({}, buttonStyle, styles.buttonFullWidth);
  }

  if (bgColor) {
    buttonStyle = mergeWith(buttonStyle, customBgColorStyle);
  }

  if (primary) {
    customBgColorStyle.backgroundColor = "blue";
    customBgColorStyle.borderColor = "blue";
    textStyle = mergeWith({}, textStyle, styles.primaryBtnText);
    buttonStyle = mergeWith({}, buttonStyle, customBgColorStyle);
  }

  if (danger) {
    customBgColorStyle.backgroundColor = "red"; //todo work on themes
    customBgColorStyle.borderColor = "red";
    textStyle = mergeWith({}, textStyle, styles.primaryBtnText);
    buttonStyle = mergeWith({}, buttonStyle, customBgColorStyle);
  }

  if (success) {
    customBgColorStyle.backgroundColor = "green"; // todo find color codes
    customBgColorStyle.borderColor = "green";
    buttonStyle = mergeWith({}, buttonStyle, customBgColorStyle);
  }

  const [pressed, setPressed] = useState<boolean>(false);

  let merge = mergeWith({}, buttonStyle, pressed ? _pressed : {});
  // console.warn("......", merge);

  if (_disabled) {
    merge = mergeWith({}, buttonStyle, _disabled);
  }

  return (
    <Pressable
      onPressIn={callAll(onPressIn, () => setPressed(true))}
      onPressOut={callAll(onPressOut, () => setPressed(false))}
      {...rest}
      style={merge}
    >
      {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
      <Text style={textStyle}>{children}</Text>
      {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    width: "30%",
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
    marginEnd: 10,
    color: "white",
  },

  rightIcon: {
    marginStart: 10,
    color: "white",
  },

  buttonFullWidth: {
    width: "100%",
  },

  roundedButton: {
    borderRadius: 15,
  },

  primaryBtnText: {
    color: "white",
  },
});
