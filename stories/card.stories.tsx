import React from "react";
import { storiesOf } from "@storybook/react-native";
import { action } from "@storybook/addon-actions";
import { BufferView } from "./decorators";
import { Card } from "../components/card";
import { Text } from "react-native";

storiesOf("Card", module)
  .addDecorator(BufferView)
  .add("default-card", () => {
    return (
      <Card>
        <Text>This is a default card component here, you like it? we have more!!!</Text>
      </Card>
    );
  });
