import { Center, Heading } from "@chakra-ui/react";

const MainTitle = ({ text }) => {
  return (
    <Center>
      <Heading
        as={"h1"}
        size={"3xl"}
        bgGradient={"linear(to-r, #EC4D37 20%, #7928CA)"}
        bgClip={"text"}
        textTransform={"uppercase"}
        p={10}
        mt={[1, 10]}
      >
        {text}
      </Heading>
    </Center>
  );
};

export default MainTitle;
