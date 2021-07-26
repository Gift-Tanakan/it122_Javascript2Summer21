import mongoose from 'mongoose';
const { Schema } = mongoose;
import {connectionString} from "../credentials.mjs";


mongoose.connect(connectionString, {
    dbName: 'sccprojects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const plantBasedMilkSchema = new Schema({
 name: { type: String, required: true },
 producer: String,
 type: String,
 price: String
 
});

export const PlantBasedMilk = mongoose.model('PlantBasedMilk', plantBasedMilkSchema);
