# Gameportal-ubi

Summary: Backend portal, contains info for game info, player info, events info, and rewards. Uses a MongoDB database, provides API routes for calling the server and doing CRUD operations.

- Recommended browser: Chrome
- Recommended browser extenstion, for reading JSON: https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc/related?hl=en

- Deployed on Heroku: https://gameportal-ubi.herokuapp.com/
- Stored on Github: https://github.com/khoi148/gameportal-ubi
- Database in MongoDB

## API Usage Instructions:

**STEP 1** First go to the heroku link, to ping the server, might take a few seconds to start it.
**STEP 2** Use the routes described below to get responses in your browser. Output is in JSON, so a JSON formatter browser extension is recommended.

\_i.e. Example of a route `/gameinfo/5f23a62f2840bd54b08019d7`
It starts after the URL: `https://gameportal-ubi.herokuapp.com/gameinfo/5f23a62f2840bd54b08019d7`

Recommended: Use [Postman](https://www.postman.com/)
A tool to ping specific routes, with GET/PUT/POST request options.
Note: The `/insert...` routes, and the update player `PUT` routes in requirement two, require POST and PUT requests to use. Using the browser input bar only uses GET requests.

# Requirement 1: "Provide an API to know all the game information and upcoming events."

**STEP 1**
Start with route

- POST `/insertgames`, then
- POST `/insertevents`,
  to reset the game and event databases, and insert some generic default entries.

**STEP 2**
-Use GET `/gameinfo/listgames` to see a list of games in the Databases.
-Use GET `/listevents` to see a list of events for each game, in the Database
-When listing games, pick one game, and use it's ID for the next step.

**STEP 3**
-Use GET `/gameinfo/:gameId`,
i.e `/gameinfo/5f23a62f2840bd54b08019d7`
To see info about one specific game, and it's upcoming events. All of its events will be listed with it.

# Requirement 2: "Provide an API to get/update a player’s information in a specific game"

**STEP 1**
Start with route

- POST `/insertplayers`
  to reset the player database, and insert some generic default players

**STEP2**
-Use GET `/playerinfo/listplayers` to see a list of players in the Database. Choose one player, use their playerId and gameId values, for the next step
-Use GET `/gameinfo/:gameId/playerinfo/:playerId`
i.e. `/gameinfo/5f27162dab76f761fa931160/playerinfo/1001-1`
To lookup one player's info

**STEP3**
-Use PUT `/gameinfo/:gameId/playerinfo/:playerId/stars/:newStars/coins/:newCoins`
i.e. `/gameinfo/5f27162dab76f761fa931160/playerinfo/1001-1/stars/599/coins/300`
To change the star and coin values for one player
-Use PUT `/gameinfo/:gameId/playerinfo/:playerId/fullname/:newName`
i.e. `/gameinfo/5f27162dab76f761fa931160/playerinfo/1001-1/fullname/MegamanX`
To change the name of one player

# Requirement 3: "Provide an API to get rewards from players when the event completes"

IN Progress
