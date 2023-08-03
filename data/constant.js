const PANCAKE_ROUTER_ADDRESS = "0x10ED43C718714eb63d5aA57B78B54704E256024E";
const PANCAKE_FACTORY_ADDRESS = "0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73";

const PANCAKE_FACTORY_ABI = require("../abi/factory.js");
const PANCAKE_POOL_ABI = require("../abi/pool.js");
const PANCAKE_ROUTER_ABI = require("../abi/router.js");

const NETWORK = "bsc";
const CHAIN_SYMBOL = "BNB";


const HTTP_PROVIDER_LINK = `https://serene-proud-emerald.bsc.discover.quiknode.pro/20b41596ad7f5a5244340b99e696345520428a05/`;
const WEBSOCKET_PROVIDER_LINK = `wss://serene-proud-emerald.bsc.discover.quiknode.pro/20b41596ad7f5a5244340b99e696345520428a05/`;


const ETHERSCAN_API = "";

const TRIGGERED_METHOD = ["swapTokensForExactTokens", "swapETHForExactTokens","swapExactTokensForTokens", "swapExactETHForTokens"];
const GAS_LIMIT = 300000;

module.exports = {
  NETWORK,
  CHAIN_SYMBOL,
  PANCAKE_ROUTER_ADDRESS,
  PANCAKE_FACTORY_ADDRESS,

  PANCAKE_ROUTER_ABI,
  PANCAKE_FACTORY_ABI,
  PANCAKE_POOL_ABI,

  HTTP_PROVIDER_LINK,
  WEBSOCKET_PROVIDER_LINK,
  ETHERSCAN_API,

  TRIGGERED_METHOD,
  GAS_LIMIT
};
