import React from "react";
import styles from "./styles";
import {
  Box,
  Text,
  Button,
  Image,
  Card,
  CardBody,
  Stack,
  Heading,
  Divider,
  CardFooter,
  ButtonGroup
} from "@chakra-ui/react";

const DATA = [
  {
    id: 1,
    title: "Give One Get One",
    description:
      "When you upload a submission and give back to the cause, recieve one of our unique art pieces",
    link: "www.google.com",
    image: "./WomanPainting.png"
  },
  {
    id: 2,
    title: "Volounteer Artist Submissions",
    description:
      "We are currently accepting submissions for our upcoming art exhibit celebrating community and diversity. If you have a passion for art and want to contribute to a meaningful cause, we invite you to submit your work for consideration. ",
    link: "www.google.com",
    image: "./Volunteer.jpg"
  },
  {
    id: 3,
    title: "Requests From Organizations",
    description:
      "Get help with connection to organizations that can help bring all of these products to someone who knows",
    link: "www.jackrigan.com",
    image: "./requests.png"
  }
];

const Index = () => {
  return (
    <>
      <Box sx={styles.wrapper}>
        <Box sx={styles.container}>
          <Text
            as="h1"
            fontFamily="Poppins"
            padding={[null, "30px"]}
            mt="225px"
            mb={["30px"]}
          >
            Help Us Make A Difference!
          </Text>
          <Box
            display="flex"
            flexDirection={["column", "column", "column", "row"]}
            justifyContent="center"
          >
            {DATA.map((item, index) => (
              <Card
                key={index}
                maxW="sm"
                boxShadow="10px 10px 10px rgba(0,0,0,0.2)"
                margin="30px"
                data-aos='fade-in'
                data-aos-duration='1000'
                data-aos-delay='200'
              >
                <CardBody>
                  <Image
                    src={item.image}
                    alt={item.title}
                    borderRadius="lg"
                    height="50%"
                  />
                  <Stack mt="6" spacing="3">
                    <Heading
                      size="md"
                      bg="blue.100"
                      color="white"
                      padding="10px"
                    >
                      {item.title}
                    </Heading>
                    <Text>{item.description}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                  <ButtonGroup spacing="2">
                    <Button variant="ghost" colorScheme="blue">
                      Learn More
                    </Button>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Index;
