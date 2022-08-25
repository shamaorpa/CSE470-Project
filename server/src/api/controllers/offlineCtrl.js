import Offline from '../models/offlineModel.js';


// /api/offline/createOfflineEvent [POST]

export const createOfflineEvent = async (req, res) => {
    const { location, description,packages,transactionid, transaction } = req.body;
    const { _id } = req.user;
    const offline = new Offline({
        location,
        description,
        packages,
        userId: _id,
        transactionid,
        transaction
    });
    try {
        await offline.save();
        res.status(201).send(offline);
    } catch (error) {
        console.log(error);
    }
}

