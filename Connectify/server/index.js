import express from 'express'; // the library to build server
import bodyParser from 'body-parser'; // the library to parse the body of the request
import bcrypt from 'bcrypt'; // the library to hash the password
import cors from 'cors'; // the library to allow cross-origin requests 
import multer from 'multer'; // the library to upload files locally
import helmet from 'helmet'; // the library to secure the 
import path from 'path';
import { fileURLToPath } from 'url';
import morgan from 'morgan';
import dotenv from 'dotenv';
import Connection from './database/db.js';

import authRoutes from './routes/auth.js';
import {register} from './controllers/auth.js';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(helmet());
app.use(morgan('common'));
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.use("/assets",express.static(path.join(__dirname, "public/assets")));



// FILE STORAGE

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets");
    },
    filename : (req, file, cb) => {
        cb(null, file.originalname);
    }
});



const upload = multer({storage: storage});
// File upload route used here becuz of multer upload function
app.post("/auth/register", upload.single("picture"),register); 

// Routes
app.use("auth/",authRoutes);

Connection();
const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));


