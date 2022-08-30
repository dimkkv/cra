export const utils = {
  icon_slug: (address) =>
    `https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/${address}/logo.png`,
  randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  shortenAddress(address) {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  },
};
