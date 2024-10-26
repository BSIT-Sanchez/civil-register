import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import databaseConnection from './config/databaseConnection.js';
import authRoutes from './routes/authRoute.js';
import announcementRoutes from './routes/announcementRoutes.js';

dotenv.config();
databaseConnection().then(() => console.log('Database connected')).catch(err => {
  console.error('Database connection failed', err);
  process.exit(1);
});

const app = express();

app.use(cors(
  {
        origin: ["https://human-resources4-backend.vercel.app"],
        methods: ['POST', 'GET'],
        credentials: true
    }
));
app.use(express.json()); // Use express.json() instead of bodyParser
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api', announcementRoutes);


// Start the server
const PORT = process.env.PORT || 2000;

app.use('/' , (req,res) => {
  res.send(`server running on localhost ${PORT}`)
})
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
