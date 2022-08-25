import Online from '../models/onlineModel.js';


// /api/online/createOnlineEvent [POST]

export const createOnlineEvent = async (req, res) => {
    const { reminder, invitation, packages,transactionid, transaction } = req.body;
    const {_id} = req.user;
    const online = new Online({
      reminder,
      invitation,
      packages,
     userId: _id,
        transactionid,
    transaction
    });
    try {
        await online.save();
        res.status(201).send(online);
    } catch (error) {
        res.send(error);
    }
}


