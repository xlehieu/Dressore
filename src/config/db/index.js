import mongoose from 'mongoose';

export async function connect() {
    const urlConnect =
        'mongodb+srv://xlehieu:VSF4FIqBFomRTwZr@cluster0.hp85a.mongodb.net/dressore?retryWrites=true&w=majority&appName=Cluster0';
    try {
        await mongoose.connect(urlConnect);
        console.log('Connect successful');
    } catch (err) {
        console.log(err);
    }
}
//1zcgSQEATiygQmPD
