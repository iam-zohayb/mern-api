require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const formRoutes = require('./Routes/FormRoutes');
const driverRoutes = require('./Routes/DriverRoutes');
const authRoutes = require('./Routes/authRoutes');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use(cors());
app.use(express.json());

app.use('/api/forms', formRoutes);
app.use('/api/drivers', driverRoutes); 
app.use('/api', authRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
