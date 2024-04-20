import { Button, Flex, Text } from "@chakra-ui/react";
import { FC } from "react";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      py={2}
      bgColor="red.100"
    >
      <Text>LOGO</Text>
      <Flex>
        <Link to="sign-in">
          <Button>SIGN IN</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
