import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";

import { Button } from "../components/buttons";
import { BufferView } from "./decorators";
import { Ionicons } from "@expo/vector-icons";

// story for our default button
storiesOf("Button", module)
  .addDecorator(BufferView)
  .add("default", () => {
    return <Button onPress={action("tap-default")}>Default</Button>;
  })
  .add("outline", () => {
    return (
      <Button isFullWidth onPress={action("tap-outline")} outline>
        Outline
      </Button>
    );
  })
  .add("leftIconButton", () => {
    return (
      <Button
        bgColor={"teal"}
        _pressed={{ backgroundColor: "black", opacity: 0.8 }}
        isFullWidth
        leftIcon={<Ionicons name="rocket" size={30} color={"white"} />}
      >
        Rocket!
      </Button>
    );
  })
  .add("rightIconButton", () => {
    return (
      <Button
        bgColor={"teal"}
        _pressed={{ backgroundColor: "black", opacity: 0.8 }}
        isFullWidth
        rightIcon={<Ionicons name="rocket" size={30} color={"white"} />}
      >
        Right Rocket!
      </Button>
    );
  })
  .add("primary-button", () => {
    return (
      <Button
        primary
        _pressed={{ backgroundColor: "black", opacity: 0.8 }}
        isFullWidth
      >
        Primary
      </Button>
    );
  })
  .add("success-button", () => {
    return (
      <Button
        success
        _pressed={{ backgroundColor: "black", opacity: 0.8 }}
        isFullWidth
      >
        Primary
      </Button>
    );
  })
  .add("danger-button", () => {
    return (
      <Button
        danger
        _pressed={{ backgroundColor: "black", opacity: 0.8 }}
        isFullWidth
      >
        Danger
      </Button>
    );
  });
