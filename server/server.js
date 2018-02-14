require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const ctrl = require('./controller.js')
const EasyPost = require('node-easypost');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const apiKey = process.env.API_TEST_KEY;

const api = new EasyPost(apiKey);

app.get(`/api/get-address/:addressID`, ctrl.retrieveAddress);
app.get(`/api/get-parcel/:parcelID`, ctrl.retrieveParcel);
app.get('/api/label-example/:shipmentID', ctrl.labelExample)

app.post('/api/create-shipment', ctrl.createAddress);
app.post('/api/create-parcel', ctrl.createParcel);
app.post('/api/create-shipment', ctrl.createShipment);
app.post('/api/buy-shipment/:shipmentID', ctrl.buyShipment);


const PORT = 3001;
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));