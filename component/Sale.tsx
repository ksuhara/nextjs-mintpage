import { Box, Button, Image } from "@chakra-ui/react";
import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import { ethers } from "ethers";
import React from "react";
import { injected } from "../lib/web3/injected";

export const Sale: React.FC = () => {
  const { activate, library, account } = useWeb3React<Web3Provider>();
  const connect = async () => {
    activate(injected);
  };
  return (
    <Box textAlign="center">
      <Image
        src="./internet_nft_art.png"
        alt="sample"
        width="50%"
        marginX={"auto"}
        marginY="8"
      ></Image>
      {!account ? (
        <Button width="100%" onClick={connect} fontSize={"sm"} rounded="2xl">
          Connect Wallet
        </Button>
      ) : (
        <Button width="100%" fontSize={"sm"} rounded="2xl">
          mint
        </Button>
      )}
    </Box>
  );
};
