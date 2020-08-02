Gameportal-ubi
================

Summary: Backend portal, contains info for game info, player info, events info, and rewards. Uses a MongoDB database, provides API routes for calling the server and doing CRUD operations.

* Recommended browser: Chrome
* Recommended browser extenstion, for reading JSON: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc/related?hl=en

* Deployed on Heroku: https://gameportal-ubi.herokuapp.com/
* Stored on Github: https://github.com/khoi148/gameportal-ubi

API Usage Instructions:
-----------------------
**STEP 1** First go to the heroku link, to ping the server, might take a few seconds to start it.
**STEP 2** Use the routes described below to get responses in your browser. Output is in JSON, so a JSON formatter browser extension is recommended.
   
_i.e. Example of a route "/gameinfo/5f23a62f2840bd54b08019d7"
It starts after the URL: "https://gameportal-ubi.herokuapp.com/gameinfo/5f23a62f2840bd54b08019d7"_

# Requirement 1: "Provide an API to know all the game information and upcoming events."

**STEP 1** 
Start with route  
- "/insertgames", then
- "/insertevents",
to reset the game and event databases, and insert some generic default entries.

**STEP 2** 
-Use "/gameinfo/listgames" to see a list of games in the Databases.
-Use "/listevents" to see a list of events for each game, in the Database
-When listing games, pick one game, and use it's ID for the next step.

**STEP 3** 
-Use "/gameinfo/:gameId",
i.e "/gameinfo/5f23a62f2840bd54b08019d7"
To see info about one specific game, and it's upcoming events. All of its events will be listed with it.

# Requirement 2: "Provide an API to get/update a player’s information in a specific game"
IN Progress

# Requirement 3: "Provide an API to get rewards from players when the event completes"
IN Progress
