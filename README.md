# XR-WEB-ENGINE
XR-WEB-MULTI-PLAYER-ENGINE

In the first version of the WebGL build for the multiplayer XR engine, we have have separated the client and server monolith that will be generated through a Unity build into separate client and server nodes. Beyond that, we have elected to use Docker to virtualize both into containers that will communicate with each other and can live on cloud services separately.

Please refer to documentation for the intial process of achieving this.

Next steps:
Utilize Colyseus to implement group functionality and persistence with MongoDB database for user information/login authorization, etc.

10/25/2022 -- MongoDB added as dependencies in the main tree so database functions and calls through Mongoose may be used anywhere during testing going forward. After cloning this repository to your local machine -- "git clone *pathway from git page*", run 'npm install' to grab the dependencies located in the DATABASE folder. MongoDB must be installed on your system (see online docs) prior to utilizing the associated node modules!

In testing the colyseus server only, independent of the containerized CLIENT and SERVER (although the process is the same), go into that folder from the cloned repo, and run *npm install* to install the necessary node modules. Then run *npm start* to start the server. (see multiplayer notes pdf for running a containerized docker build of a split client/server UNITY build game)

NOTE: NPM, Node.js, MongoDB, and Docker MUST be installed on your system prior to installing the dependencies in the repo. (Docker optional for testing purposes).

USEFUL: running NPM RUN will display a list of all "npm run ____ " commands, also located in the relevant JSON files of the folders.
        running node *file_name* will run the relevant files if the JSON has not been configured yet.
        
TLDR; Install NPM, Node.js, Docker, and MongoDB. Clone the full repo into any folder you wish. Run 'npm install'. Go to the colyseus server folder, and run 'npm install' one more time. Go to the DATABASE folder and run 'node seed.js' to populate your database! (Remember INSTALL MONGODB ON YOUR SYSTEM FIRST, NOT ONLY THROUGH THE DEPENDENCY INSTALL). Now you're ready to run the colyseus test server. Go to the folder and run 'npm run start'. Open the port displayed in your prefered browser. This is our first server call to the database, substituting the default message for a random user from our seeded database, displaying the team name!

Next steps: updating schema to the real one (including in repo), and implementing real functionaity, particularly chat room, search, etc. Let's gooooo!
