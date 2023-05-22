import React, { useEffect, useState } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import Loader from "./Loader";
import ErrorComponent from "./ErrorComponent";

const Coin = () => {
  const [exchanges, setExchanges] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [page, setpage] = useState(1);
  const [currency, setcurrency] = useState("inr");

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        console.log(data);
        setExchanges(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchCoins();
  }, []);

  if (error)
    return <ErrorComponent msg={"Error While Fetching Exchanges"} />;

  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <HStack wrap={"wrap"} justifyContent={"space-evenly"}>
            {exchanges.map((i) => (
              <ExchangeCard
                key={i.id}
                name={i.name}
                img={i.image}
                price={i.current_price}
              />
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};

  const ExchangeCard = ({ name, img, price }) => (
    <VStack
     w={"52"} shadow={"lg"} borderRadius={"lg"} transition={"all 0.3s"} p={8} m={3}
     css={{
      "&:hover":{
        transform:"scale(1.1)",
      },
    }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Text noOfLines={1}>{name}</Text>
      <Heading size={"md"} noOfLines={1}>
        {price}
      </Heading>

    </VStack>
  );

export default Coin;
