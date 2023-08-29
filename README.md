## GMC Backend Checkpoint
ExpressJS, Mongoose, MongoDB

### To get this project running:
- Clone
- Run `npm install`
- Create an enviroment file: `.env`
    - add the port you want to start the server on: `SERVER_PORT = portNumber`
    - add a link to your MongoDB Atlas URI: `MONGO_URI = mongodb://[username:password@]host1[:port1][,...hostN[:portN]][/[defaultauthdb][?options]]`
- Run `npm start` to start the server
- You can use [Postman](https://www.postman.com) to test the API calls to the server.
    - Import the backup file `User Collection GMC Checkpoint.postman_collection.json` to find a ready-to-use CRUD API collection
