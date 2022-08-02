import express from 'express';
import { readdirSync } from 'fs';
import cors from 'cors'
import mongoose from 'mongoose';
const morgon = require('morgan');
require('dotenv').config();

const app = express();

//db connection
mongoose.connect(process.env.DATABASE)
    .then(() => console.log("DB conncected successfully"))
    .catch((err) => console.log("DB connection error", err))

//middleware 
app.use(cors())
app.use(morgon("dev"));
app.use(express.json());

//apply middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));
// app.use('/api', router);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on ${port}`))