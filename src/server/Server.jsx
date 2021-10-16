import bodyParser from 'body-parser';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from '../Routes/Router'

/*const express = require('express');*/
const router = express.Router();
const app = express();

//TO LISTEN THE PORT
app.listen(3000)