import express from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import router from './routes/route.js';

const app = express();
const PORT = 8000;

app.use(cors());

app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));

app.use('/', router);



Connection();
app.listen(PORT, ()=> console.log(`Server is running on port successfully :${PORT}`));
