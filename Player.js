class Player {
    constructor () {

    }
    getPlayerCount () {
        //refer to gameState location in DB
        var playerCountRef = database.ref ('/playerCount');
        // listen to gameState changes in DB
        playerCountRef.on ("value", 
                        function(data){
                            playerCount = data.val ();
                            console.log ("START1 :"+ playerCount);
                        }
        );        
    }
    updatePlayerCount (count) {
         
    var playerCountRef = database.ref ();
        playerCountRef.update ({"playerCount" : count}) ;
    }
    
    updatePlayerName (name) {
        console.log (playerCount);
        var playerIndex = "/player"+playerCount;
        console.log (playerIndex);
        database.ref (playerIndex).set ({name : name});
    }
}