/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-waffle");
const metamask_private_key =
  "0x" + "c10fa5e93ebb57e70d47e22ce20004e0179c581389ff5fc28018c7b7fe55552a";

module.exports = {
  solidity: "0.8.9",

  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/a2759f045625469184f3c67d7da684d2",
      accounts: [metamask_private_key],
    },
  }
};
