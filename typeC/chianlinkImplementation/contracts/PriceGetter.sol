// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
import "@chainlink/contracts/src/v0.6/interfaces/AggregatorV3Interface.sol";

// reference =  https://medium.com/coinmonks/how-to-get-the-latest-price-of-eth-in-jpy-using-chainlink-price-feed-1c19f017dc74
contract PriceGetter {
    AggregatorV3Interface internal eth_dai_price_feed;

    /**

     * Network: Rinkeby
     * Aggregator: DAI/ETH
     * Address: 0x74825DbC8BF76CC4e9494d0ecB210f676Efa001D
     */
    constructor () public  {
        eth_dai_price_feed = AggregatorV3Interface(0x74825DbC8BF76CC4e9494d0ecB210f676Efa001D);
    }

    /**
    * @notice contract can receive Ether.
    */
    receive() external payable {}

    function getBalance() public view returns (uint) {
        return address(this).balance;
    }

    /**
     * Returns the latest price
     */
    function getEthDai() public view returns (int) {
        (
            uint80 roundID, 
            int price,
            uint startedAt,
            uint timeStamp,
            uint80 answeredInRound
        ) = eth_dai_price_feed.latestRoundData();

        return price;
    }


}