const express = require("express");
const morgan  = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const connectDb = require("./config/connectDb");


dotenv.config();

connectDb();

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());


app.use("/api/v1/users", require("./routes/userRoute"));


app.use("/api/v1/transactions", require("./routes/transectionRoutes"));


const PORT = 8081 || process.env.PORT

app.listen(PORT, ()=>{
    console.log(`server is running of port ${PORT}`);
})