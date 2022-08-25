import mongoose from 'mongoose';
const OfflineSchema = new mongoose.Schema({
    location: {
      type: String,
      required: true,
    },
    description: {
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


const Offline = mongoose.model('Offline', OfflineSchema);
export default Offline;
