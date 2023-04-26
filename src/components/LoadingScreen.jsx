import { Spinner, Center } from "@chakra-ui/react";

const LoadingScreen = () => {
  return (
    <>
      <Center h={"100vh"}>
        <Spinner color="#EC4D37" size={"lg"} />
      </Center>
    </>
  );
};

export default LoadingScreen;
