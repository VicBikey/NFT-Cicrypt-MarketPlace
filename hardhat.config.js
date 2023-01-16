require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    polygon_mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/-pkCc02cpz1aao9gDo2PsSt-aHF9OvkP",
      accounts: [`0x${"0d63dcff36eb80a6aec5c17571e19b4564ad812dc327c289459dfb0fafd59f69"}`],
    },
  },
};