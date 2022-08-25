import express from 'express';
import connectDB from './src/config/db.js';
import cors from 'cors';
import bodyparser from 'body-parser';
import properties from './src/config/properties.js';
import offlineRoute from './src/api/routes/offlineRoute.js';
import userRoute from './src/api/routes/userRoute.js';
import onlineRoute from './src/api/routes/onlineRoute.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: true }));
// Routes
app.get('/', (req, res) => {
  res.status(200).json({ status: 'online' });
});
app.use('/api/user', userRoute);
app.use('/api/offline', offlineRoute);
app.use('/api/online', onlineRoute);


//server
const PORT = properties.PORT;
app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
    connectDB();
  } catch (err) {
    console.log(err);
  }
});
