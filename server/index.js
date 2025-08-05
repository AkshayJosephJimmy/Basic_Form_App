import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { getFormRoutes } from './Routes/FormRoutes.js';

const app = express();
const PORT = 5700;




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
mongoose.connect('mongodb+srv://akshayjosephjimmy05:jVchPtlRFpEKvWZF@cluster0.czicazm.mongodb.net/')
.then(()=> console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());
getFormRoutes(app);

//akshayjosephjimmy05
//jVchPtlRFpEKvWZF
//mongodb+srv://akshayjosephjimmy05:jVchPtlRFpEKvWZF@cluster0.czicazm.mongodb.net/