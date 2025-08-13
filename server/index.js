const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();
connectDB()

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/document', require('./routes/documentRoutes'));

app.listen(process.env.PORT,()=>{console.log(`Server running on port ${process.env.PORT}`)});