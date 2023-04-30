import { Spinner, Center } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <>
      <Center h={"100vh"} position={"absolute"} inset={0} bgColor={"#121212"}>
        <Spinner color="#EC4D37" size={"lg"} />
      </Center>
    </>
  );
};

export default LoadingScreen;
