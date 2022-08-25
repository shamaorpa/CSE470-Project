import mongoose from 'mongoose';
import properties from './properties.js';

const connectDB = async () => {
  try {
    mongoose.connect(properties.MONGO_URI, {
      useNewUrlParser: true,
    });
    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }
};

export default connectDB;
