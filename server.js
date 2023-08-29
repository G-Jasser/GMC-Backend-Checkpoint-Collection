require("dotenv")
const express = require("express");
const AtlasConnectDB = require("./configs/atlas_dbconnect")

const app = express();
app.use(express.json());

require('./routes/userRoutes')(app);

app.listen(process.env.SERVER_PORT, () => console.log("Server started on port:",process.env.SERVER_PORT))
AtlasConnectDB()
