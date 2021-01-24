import React from "react";
import { storiesOf } from "@storybook/react-native";
// import { action } from "@storybook/addon-actions";
import { BufferView } from "./decorators";
import { Card } from "../components/card";
import { Image, Text, View } from "react-native";
import { CardBody } from "../components/card-body";
import { CardHeader } from "../components/card-header";
import { CardFooter } from "../components/card-footer";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { Flex } from "../layouts/flex";

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
  })
  .add("card-with-border", () => {
    return (
      <Card>
        <CardHeader border>
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
  })
  .add("image-card", () => {
    return (
      <Card>
        <CardBody>
          <Image
            source={{
              uri:
                "https://res.cloudinary.com/code-freak/image/upload/v1607436466/wengang-zhai-_fOL6ebfECQ-unsplash_roctgh.jpg",
            }}
            style={{ height: 200 }}
          />
          <Text style={{ paddingTop: 10 }}>
            This is a default card component here, you like it? we have more!!!
          </Text>
        </CardBody>
        <CardFooter border>
          <Flex>
            <Text>$ 300</Text>
            <Flex>
              <AntDesign name="star" size={20} color="orange" />
              <AntDesign name="star" size={20} color="orange" />
              <AntDesign name="star" size={20} color="orange" />
            </Flex>

            <FontAwesome name="thumbs-up" size={20} color="green" />
          </Flex>
        </CardFooter>
      </Card>
    );
  });
