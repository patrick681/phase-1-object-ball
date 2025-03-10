function objectBall() {
    let obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"],
            players: {
                "Allen Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    };
    return obj;
}

console.log(objectBall());

function numPointsScored(playerName) {
    let game = objectBall();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].points;
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].points;
    } else {
        return "Player not found";
    }
}

function shoeSize(playerName) {
    let game = objectBall();
    if (game.home.players[playerName]) {
        return game.home.players[playerName].shoe;
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName].shoe;
    } else {
        return "Player not found";
    }
}

function teamColors(teamName) {
    let game = objectBall();
    if (game.home.teamName === teamName) {
        return game.home.colors;
    } else if (game.away.teamName === teamName) {
        return game.away.colors;
    } else {
        return "Team not found";
    }
}

function teamNames() {
    let game = objectBall();
    return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
    let game = objectBall();
    if (game.home.teamName === teamName) {
        return Object.values(game.home.players).map(player => player.number);
    } else if (game.away.teamName === teamName) {
        return Object.values(game.away.players).map(player => player.number);
    } else {
        return "Team not found";
    }
}

function playerStats(playerName) {
    let game = objectBall();
    if (game.home.players[playerName]) {
        return game.home.players[playerName];
    } else if (game.away.players[playerName]) {
        return game.away.players[playerName];
    } else {
        return "Player not found";
    }
}

function bigShoeRebounds() {
    let game = objectBall();
    let largestShoeSize = 0;
    let rebounds = 0;

    let allPlayers = { ...game.home.players, ...game.away.players };

    for (let player in allPlayers) {
        if (allPlayers[player].shoe > largestShoeSize) {
            largestShoeSize = allPlayers[player].shoe;
            rebounds = allPlayers[player].rebounds;
        }
    }
    return rebounds;
}