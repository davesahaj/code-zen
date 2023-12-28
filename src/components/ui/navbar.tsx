'use client';
import { Flex } from '@radix-ui/themes';
import NavLinks from './navlinks';

const NavBar = () => {
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      right="0"
      gap="3"
      align="center"
      justify="center"
      className="h-14 border border-gray-200"
    >
      <NavLinks />
    </Flex>
  );
};

export default NavBar;
