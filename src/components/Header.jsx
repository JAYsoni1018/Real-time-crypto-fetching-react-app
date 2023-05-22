import { Button, HStack } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <HStack p={"3"} pl={5}   shadow={"base"} bgColor={'blackAlpha.900'}>
        <Button pl={8} variant={"unstyled"} color={"white"}>
          <Link to="/">Home</Link>
        </Button>
        <Button pl={8} variant={"unstyled"} color={"white"}>
          <Link to="/coin">Coin</Link>
        </Button>
        <Button pl={8} variant={"unstyled"} color={"white"}>
          <Link to="/exchange">Exchange</Link>
        </Button>
         
      </HStack>
    </>
  )
}

export default Header;