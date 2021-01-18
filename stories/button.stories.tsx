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
    return <Button onPress={action("tap-default")}>Press Me</Button>;
  })
  .add("outline", () => {
    return (
      <Button isFullWidth onPress={action("tap-outline")} outline>
        Click me!
      </Button>
    );
  })
  .add("leftIconButton", () => {
    return (
      <Button
        primary
        bgColor={"teal"}
        _pressed={{ backgroundColor: "black", opacity: 0.8 }}
        isFullWidth
        leftIcon={<Ionicons name="rocket" size={30} color={'white'} />}
      >
        {" "}
        Press me!{" "}
      </Button>
    );
  });
