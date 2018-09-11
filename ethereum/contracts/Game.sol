// pragma solidity ^0.4.20;
pragma experimental ABIEncoderV2;

import "./ERC721.sol";

contract Game {

  string public gameName;
  mapping(address => uint) public playerScore;
  mapping(address => bool) public registered;
  mapping(address => string[]) public achievements;

  string[] public gameAchievements;

  constructor(string name, string[] achievements) public {
    gameName = name;
    gameAchievements = achievements;
  }

  function isRegistered(address player) public view returns (bool){
    return registered[player];
  }

  function register(address player) public {
    require(isRegistered(player) == false);
    registered[player] = true;
  }

  function finalisePlayerStatus(address player, uint score, string achievement) public {
    require(isRegistered(player) == true);
    achievements[player].push(achievement);
    playerScore[player] = score;
  }

  function updatePlayerScore(address player, uint score) public {
    require(isRegistered(player) == true);
    playerScore[player] = score;
  }

  function updatePlayerAchievements(address player, string achievement) public {
    require(isRegistered(player) == true);
    achievements[player].push(achievement);
  }

  function getScore(address player) public view returns (uint) {
      return playerScore[player];
  }

  function getAchievements(address player) public view returns (string[]) {
      return achievements[player];
  }
}