const apiKey = process.env.API_TEST_KEY;
const EasyPost = require('node-easypost');
const api = new EasyPost(apiKey);

module.exports = {
    testLabel: (req, res, next) => {
        const toAddress = new api.Address({
            street1: '417 MONTGOMERY ST',
            street2: 'FLOOR 5',
            city: 'SAN FRANCISCO',
            state: 'CA',
            zip: '94104',
            country: 'US',
            company: 'EasyPost',
            phone: '415-123-4567',
        });

        const fromAddress = new api.Address({
            street1: '417 MONTGOMERY ST',
            street2: 'FLOOR 5',
            city: 'SAN FRANCISCO',
            state: 'CA',
            zip: '94104',
            country: 'US',
            company: 'EasyPost',
            phone: '415-123-4567',
        });

        const parcel = new api.Parcel({
            length: 20.2,
            width: 10.9,
            height: 5,
            weight: 65.9
        });

        const shipment = new api.Shipment({
            to_address: toAddress,
            from_address: fromAddress,
            parcel: parcel
        });

        shipment.save().then(shipment => {
            let fedExID = shipment.rates.filter(rate => {
                if (rate.carrier === 'FedEx'){
                    return rate.carrier
                }
            });
            shipment.buy(fedExID[0].id).then(purchased => {
                res.status(200).send(purchased.postage_label.label_url)
            });
        });
    },
}