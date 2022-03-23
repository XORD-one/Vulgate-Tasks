// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;
import "./interface.sol";
// import "hardhat/console.sol";
contract MITUniswap {
    uint lineancy = 6*60*60;
    // UniswapV2Router02 uniswap;

    address  uniswaprouteraddress = 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D;
    address uniswapFactoryAddress = 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f;
    IUniswap uniswap = IUniswap(uniswaprouteraddress);
    IUniswapV2Factory factory = IUniswapV2Factory(uniswapFactoryAddress);


    modifier ensure(uint _leniency) {
        require(block.timestamp + _leniency >= block.timestamp, "MITUniswap: EXPIRED");
        _;
    }

    constructor(address _uniswap) { uniswap = IUniswap(_uniswap); }

    function swapExTokForTok( 
        address _tokenAddress1,
        address _tokenAddress2,
        uint _amountIn,
        uint _amountOutMin) 
        external ensure(lineancy) returns (uint[] memory amounts)  {
            IERC20(_tokenAddress1).transferFrom(msg.sender, address(this), _amountIn);
            address [] memory path  = new address [](2);
            path[0] = _tokenAddress1;
            path[1] = _tokenAddress2;
            IERC20(_tokenAddress1).approve(address(uniswaprouteraddress), _amountIn);
            //6 hours lineancy for tx execution
            uint[] memory amountOfDifferentTokens = uniswap.swapExactTokensForTokens(_amountIn, _amountOutMin, path, msg.sender, block.timestamp + lineancy);    
            return amountOfDifferentTokens;
            
    }
    
    function swapTokForExToks(
        address _tokenAddress1,
        address _tokenAddress2,
        uint _amountInMax,
        uint _amountOut) external ensure(lineancy) returns (uint[] memory amounts) {
            IERC20(_tokenAddress1).transferFrom(msg.sender, address(this), _amountInMax);
            address [] memory path  = new address [](2);
            path[0] = _tokenAddress1;
            path[1] = _tokenAddress2;
            IERC20(_tokenAddress1).approve(address(uniswaprouteraddress), _amountInMax);
            uint[] memory amountOfDifferentTokens = uniswap.swapTokensForExactTokens(_amountInMax, _amountOut, path, msg.sender, block.timestamp + lineancy);    
            return amountOfDifferentTokens;
    }

    function swapExEthForTok(uint _amountOutMin, address _tokenAddress) external returns(uint [] memory){
            address [] memory path  = new address [](2);
            path[0] = uniswap.WETH();
            path[1] = _tokenAddress;
            uint[] memory amountOfDifferentTokens = uniswap.swapExactETHForTokens(_amountOutMin, path, msg.sender, block.timestamp + lineancy);
            return amountOfDifferentTokens;
    }

    function swapTokForExEth(uint _amountOut, uint _amountInMax, address _tokenAddress) 
        external ensure(lineancy) 
        returns (uint[] memory amounts) 
            {
            IERC20(_tokenAddress).transferFrom(msg.sender, address(this), _amountInMax);
            address [] memory path  = new address [](2);
            path[0] = _tokenAddress;
            path[1] = uniswap.WETH();
            IERC20(_tokenAddress).approve(address(uniswaprouteraddress), _amountInMax);
            uint[] memory amountOfDifferentTokens = uniswap.swapTokensForExactETH(_amountOut, _amountInMax, path,  msg.sender, block.timestamp + lineancy);
            return amountOfDifferentTokens;

    }
        function swapETHForExToks(uint _amountOut, address _tokenAddress) 
        external
        returns (uint[] memory amounts) 
            {
            address [] memory path  = new address [](2);
            path[0] = uniswap.WETH();
            path[1] = _tokenAddress;
            // IERC20(_tokenAddress).transferFrom(msg.sender, address(this), _amountInMax);
            uint[] memory amountOfDifferentTokens = uniswap.swapETHForExactTokens(_amountOut, path, msg.sender, block.timestamp + lineancy);
            return amountOfDifferentTokens;
    }

    /*
    function swapExTokForTokWithSupportingFee( 
        address _tokenAddress1,
        address _tokenAddress2,
        uint _amountIn,
        uint _amountOutMin) 
        external ensure(lineancy)
            {
            IERC20(_tokenAddress1).transferFrom(msg.sender, address(this), _amountIn);
            address [] memory path  = new address [](2);
            path[0] = _tokenAddress1;
            path[1] = _tokenAddress2;
            IERC20(_tokenAddress1).approve(address(uniswaprouteraddress), _amountIn);
            uniswap.swapExactTokensForTokensSupportingFeeOnTransferTokens(_amountIn, _amountOutMin, path, msg.sender, block.timestamp + lineancy);    
        
    }
    */

        
    function addLiq(address _tokenA, address _tokenB, uint _amountADesired, uint _amountBDesired, uint _amountAMin, uint _amountBMin) 
        external returns (uint amountA, uint amountB, uint liquidity) {
            IERC20(_tokenA).transferFrom(msg.sender, address(this), _amountADesired);
            IERC20(_tokenB).transferFrom(msg.sender, address(this), _amountBDesired);
            IERC20(_tokenA).approve(address(uniswap), _amountADesired);
            IERC20(_tokenB).approve(address(uniswap), _amountBDesired);
            (amountA, amountB, liquidity) = uniswap.addLiquidity(_tokenA, _tokenB, _amountADesired, _amountBDesired, _amountAMin, _amountBMin, msg.sender, block.timestamp + lineancy);
    }

    function addLiqByEth(address _tokenAddress, uint _amountTokenDesired, uint _amountTokenMin, uint _amountETHMin, uint _amountETHDesired) 
        external  returns (uint amountToken, uint amountETH, uint liquidity) {
            IERC20(_tokenAddress).transferFrom(msg.sender, address(this), _amountTokenDesired);
            IERC20(_tokenAddress).approve(address(uniswap), _amountTokenDesired);
            (amountToken, amountETH, liquidity) = uniswap.addLiquidityETH{value:_amountETHDesired}( _tokenAddress, _amountTokenDesired, _amountTokenMin, _amountETHMin, msg.sender, block.timestamp + lineancy);
    }

    function removeLiq (address _tokenA, address _tokenB, uint _liquidity, uint _amountAMin, uint _amountBMin, address _user) 
        external returns (uint _amountA, uint _amountB) {
            address caller = msg.sender;
            
            address pair = factory.getPair(_tokenA, _tokenB);
            require(pair != address(0), "MITUniswap: no pool address found");
            
            uint LPTokensAmount = IUniswapV2Pair(pair).balanceOf(caller);
            require(LPTokensAmount >= _liquidity, "MITUniswap: given LP Tokens are higher than present tokens");
            
            // uint tokensAbleToSpend = IUniswapV2Pair(pair).allowance(caller, address(this));
            // require(tokensAbleToSpend > _liquidity, "MITUniswap: insufficient tokens to spend");

            bool transferSuccess = IUniswapV2Pair(pair).transferFrom(_user, address(this), _liquidity);

            if(transferSuccess) {
                bool isApproved = IUniswapV2Pair(pair).approve(_user, _liquidity);
                require(isApproved == true, "MITUniswap: Not Approved");
            }
            (_amountA, _amountB) = uniswap.removeLiquidity(_tokenA, _tokenB, _liquidity, _amountAMin, _amountBMin, _user, block.timestamp + lineancy);
    }
}   