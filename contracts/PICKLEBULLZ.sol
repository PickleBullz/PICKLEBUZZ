// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract PICKLEBULLZ is ERC20 {
    constructor(
        address receiver_,
        string memory name_,
        string memory symbol_,
        uint256 totalSupply_
    ) ERC20(name_, symbol_) {
        require(receiver_ != address(0), "Receiver address can't be zero");
        _mint(receiver_, totalSupply_);
    }
}
