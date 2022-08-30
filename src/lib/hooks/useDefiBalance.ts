/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import axios from 'axios';
import { useAddress } from './useAddress';
import { useQuery } from '@tanstack/react-query';
import { ImmunaDefiSdkResponse } from 'lib/types';

export function useDefiBalance() {
  const { address } = useAddress();

  const {
    isLoading: loading,
    data: balance = [],
    isFetching,
  } = useQuery<ImmunaDefiSdkResponse[]>(
    ['defi', address],
    () => transporters.local()
    // axios
    //   .get(`${consts.backendUrl}/investments/${address}`)
    //   .then((res) => res.data)
    //   .catch((err) => console.log(err))
    // { cacheTime: 10 }
  );

  // 0x87347aDD558F582978097F3fb3FF2346c5623452
  // 0x1A5197C04510F24D2B39E89702575c3825da3F27
  return { balance, loading, isFetching };
}

const transporters = {
  local: (): Promise<ImmunaDefiSdkResponse[]> => {
    return new Promise((res) =>
      setTimeout(
        () =>
          res([
            {
              name: 'Aave V2 • Variable Debt',
              description: 'Decentralized lending & borrowing protocol',
              websiteUrl: 'aave.com',
              iconUrl: 'protocol-icons.s3.amazonaws.com/aave.png',
              version: { type: 'BigNumber', hex: '0x04' },
              pool_address: '0x7bF1015F8779102FB918792396c2947aCDB5d9F7',
              type: 'Debt',
              amount: '2.005637300355077203',
              token: '0x956F47F50A910163D8BF957Cf5846D573E7f87CA',
              token_name: 'Fei USD',
              symbol: 'FEI',
              decimals: 18,
              underlying: [],
            },
            {
              name: 'Aave V2',
              description: 'Decentralized lending & borrowing protocol',
              websiteUrl: 'aave.com',
              iconUrl: 'protocol-icons.s3.amazonaws.com/aave.png',
              version: { type: 'BigNumber', hex: '0x03' },
              pool_address: '0xb20E50Af4Ae9D4052E18aCFA4De6F28179f97182',
              type: 'Asset',
              amount: '0.010002052164305688',
              token: '0x030bA81f1c18d280636F32af80b9AAd02Cf0854e',
              token_name: 'Aave interest bearing WETH',
              symbol: 'aWETH',
              decimals: 18,
              underlying: [
                {
                  amount: '0.010002052164305688',
                  token: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
                  name: 'Wrapped Ether',
                  iconUrl:
                    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
                  symbol: 'WETH',
                  decimals: 18,
                },
              ],
            },
            {
              name: 'Curve',
              description: 'Exchange liquidity pool for stablecoin trading',
              websiteUrl: 'curve.fi',
              iconUrl: 'protocol-icons.s3.amazonaws.com/curve.fi.png',
              version: { type: 'BigNumber', hex: '0x0e' },
              pool_address: '0xEd8885a1e77b5D679544b06196fE8ECC69367Ebd',
              type: 'Asset',
              amount: '0.013656089394124466',
              token: '0x06325440D014e39736583c165C2963BA99fAf14E',
              token_name: 'stETH Pool',
              symbol: 'steCRV',
              decimals: 18,
              underlying: [
                {
                  amount: '0.0039138581642162',
                  token: '0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE',
                  name: 'Ether',
                  iconUrl:
                    'https://github.com/trustwallet/assets/raw/master/blockchains/ethereum/info/logo.png',
                  symbol: 'ETH',
                  decimals: 18,
                },
                {
                  amount: '0.010451801767461473',
                  token: '0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84',
                  name: 'Liquid staked Ether 2.0',
                  iconUrl:
                    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84/logo.png',
                  symbol: 'stETH',
                  decimals: 18,
                },
              ],
            },
            {
              name: 'Compound',
              description: 'Decentralized lending & borrowing protocol',
              websiteUrl: 'compound.finance',
              iconUrl: 'protocol-icons.s3.amazonaws.com/compound.png',
              version: { type: 'BigNumber', hex: '0x0b' },
              pool_address: '0xaA74B0f33cab1B291980532BC5E0057E10adb2a3',
              type: 'Asset',
              amount: '0.88201549',
              token: '0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c',
              token_name: 'Compound Aave Token',
              symbol: 'cAAVE',
              decimals: 8,
              underlying: [
                {
                  amount: '0.017868410643145865',
                  token: '0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9',
                  name: 'Aave Token',
                  iconUrl:
                    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9/logo.png',
                  symbol: 'AAVE',
                  decimals: 18,
                },
              ],
            },
            {
              name: 'Compound',
              description: 'Decentralized lending & borrowing protocol',
              websiteUrl: 'compound.finance',
              iconUrl: 'protocol-icons.s3.amazonaws.com/compound.png',
              version: { type: 'BigNumber', hex: '0x0b' },
              pool_address: '0xaA74B0f33cab1B291980532BC5E0057E10adb2a3',
              type: 'Asset',
              amount: '174.79344366',
              token: '0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7',
              token_name: 'Compound Sushi Token',
              symbol: 'cSUSHI',
              decimals: 8,
              underlying: [
                {
                  amount: '3.572521199332350312',
                  token: '0x6B3595068778DD592e39A122f4f5a5cF09C90fE2',
                  name: 'SushiToken',
                  iconUrl:
                    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B3595068778DD592e39A122f4f5a5cF09C90fE2/logo.png',
                  symbol: 'SUSHI',
                  decimals: 18,
                },
              ],
            },
          ] as any),
        1000
      )
    );
  },
};
