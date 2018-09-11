pragma solidity ^0.4.20;

import "./Game.sol";

contract SharkShift {

    struct Player {
        uint id;
        string name;
        address[] games;
    }

    // mapping(address => Score) scoreOf;
    // Player[] public players;
    mapping(address => Player) public players;
    uint public totalPlayers;

    constructor() public {

    }

    function addPlayer(address player, string name) public {
        Player memory p;
        p.id = totalPlayers++;
        p.name = name;
        players[player] = p;
    }

    function addGame(address game, address player) public {
        players[player].games.push(game);
    }

    function getGames(address player) public returns(address[]) {
        return players[player].games;
    }

    function getScore(address player) public view returns(uint score) {
        Player storage p = players[player];
        
        for(uint i = 0; i < p.games.length; i++) {
            Game g = Game(p.games[i]);
            score += g.getScore(player);
        }
    }

}
