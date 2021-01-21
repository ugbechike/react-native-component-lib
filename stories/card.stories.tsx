import React from "react";
import { storiesOf } from "@storybook/react-native";
// import { action } from "@storybook/addon-actions";
import { BufferView } from "./decorators";
import { Card } from "../components/card";
import { Text } from "react-native";
import { CardBody } from "../components/card-body";
import { CardHeader } from "../components/card-header";
import { CardFooter } from "../components/card-footer";

storiesOf("Card", module)
  .addDecorator(BufferView)
  .add("default-card", () => {
    return (
      <Card>
        <CardBody>
          <Text>
            This is a default card component here, you like it? we have more!!!
          </Text>
        </CardBody>
      </Card>
    );
  })
  .add("card-with-header-and-footer", () => {
    return (
      <Card>
        <CardHeader>
          <Text>Heading title</Text>
        </CardHeader>
        <CardBody>
          <Text>
            This is a default card component here, you like it? we have more!!!
          </Text>
            <Text>
            This is a default card component here, you like it? we have more!!!
          </Text>
        </CardBody>
        <CardFooter>
          <Text>Footer here</Text>
        </CardFooter>
      </Card>
    );
  }) .add("card-with-border", () => {
    return (
      <Card>
        <CardHeader border style={{borderColor: 'red'}}>
          <Text>Heading title</Text>
        </CardHeader>
        <CardBody>
          <Text>
            This is a default card component here, you like it? we have more!!!
          </Text>
            <Text>
            This is a default card component here, you like it? we have more!!!
          </Text>
        </CardBody>
        <CardFooter border>
          <Text>Footer here</Text>
        </CardFooter>
      </Card>
    );
  });
