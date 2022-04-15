function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black, White"],
            players: {
                "Alan Anderson": {
                    Number: "0",
                    Shoe: "16",
                    Points: "22",
                    Rebounds: "12",
                    Assists: "12",
                    Steals: "3",
                    Blocks: "1",
                    slamDunks: "1",
                },
                "Reggie Evans": {
                    Number: "30",
                    Shoe: "14",
                    Points: "12",
                    Rebounds: "12",
                    Assists: "12",
                    Steals: "12",
                    Blocks: "12",
                    slamDunks: "7",
                },
                "Brooks Lopez": {
                    Number: "11",
                    Shoe: "17",
                    Points: "17",
                    Rebounds: "19",
                    Assists: "10",
                    Steals: "3",
                    Blocks: "1",
                    slamDunks: "15",
                },
                "Mason Plumlee": {
                    Number: "1",
                    Shoe: "19",
                    Points: "26",
                    Rebounds: "12",
                    Assists: "6",
                    Steals: "3",
                    Blocks: "8",
                    slamDunks: "5",
                },
                "Jason Terry": {
                    Number: "31",
                    Shoe: "15",
                    Points: "19",
                    Rebounds: "2",
                    Assists: "2",
                    Steals: "4",
                    Blocks: "11",
                    slamDunks: "1",
                },
            }   
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise, Purple"],
            players: {
                "Jeff Adrien": {
                    Number: "4",
                    Shoe: "18",
                    Points: "10",
                    Rebounds: "1",
                    Assists: "1",
                    Steals: "2",
                    Blocks: "7",
                    slamDunks: "2",
                },
                "Bismack Biyombo": {
                    Number: "0",
                    Shoe: "16",
                    Points: "12",
                    Rebounds: "4",
                    Assists: "7",
                    Steals: "7",
                    Blocks: "15",
                    slamDunks: "10",
                },
                "DeSagna Diop": {
                    Number: "2",
                    Shoe: "14",
                    Points: "24",
                    Rebounds: "12",
                    Assists: "12",
                    Steals: "4",
                    Blocks: "5",
                    slamDunks: "5",
                },
                "Ben Gordon": {
                    Number: "8",
                    Shoe: "15",
                    Points: "33",
                    Rebounds: "3",
                    Assists: "2",
                    Steals: "1",
                    Blocks: "1",
                    slamDunks: "0",
                },
                "Brendan Haywood": {
                    Number: "33",
                    Shoe: "15",
                    Points: "6",
                    Rebounds: "12",
                    Assists: "12",
                    Steals: "22",
                    Blocks: "5",
                    slamDunks: "12",
                },
            }   
        },
        }
    }
    function homeTeam() {
        return gameObject().home
    }
    function awayTeam() {
        return gameObject().away
    }
        function players(){
            return Object.assign({}, homeTeam().players, awayTeam().players)
            //return {...homepLayers, ...awayPlayers} => can also do this 
        }
        function colors(){
            return Object.assign({}, homeTeam().players, awayTeam().players)
            //return {...homepLayers, ...awayPlayers} => can also do this 
        }
        function names(){
            return Object.assign({}, homeTeam().players, awayTeam().players)
            //return {...homepLayers, ...awayPlayers} => can also do this 
        }
        
        function numPointsScored (playerInput){
            return players() [playerInput].Points
        }
        function shoeSize (playerInput){
            return players() [playerInput].Shoe
        }
        function teamColors (playerInput){
            return colors() [playerInput]
        }

        function playersNumbers (playerInput){
            return players() [playerInput].Number
        }
        function teamNames (playerInput){
            return names() [playerInput]
        }

        function playersStats (playerInput){
            return players() [playerInput]
        }


        
        /* const playerArrays = Object.entries(players()) 
        const player = playerArrays.find(playerArray[0] => playerArray[0] === playerInput) 
        return player[1].points
    } // find() method gets rid of if statement above 
    // playerName at 0 index
    // playerInfo is at the 1 index 
    */


            //for (const playerName in players()) {
               // if (playerName === playerStats){
                    // return players[playerName].points;
        //}
    //}

