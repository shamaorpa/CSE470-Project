import mongoose from 'mongoose';
const OnlineSchema = new mongoose.Schema({
    reminder: {
      type: String,
      required: true,
    },
    invitation: {
      type: String,
      required: true,
    },
    packages: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    transactionid:{
      type: String,
      required: true,
    },
    transaction:{
      type: String,
      required: true,
    }
  });


const Online = mongoose.model('Online', OnlineSchema);
export default Online;
