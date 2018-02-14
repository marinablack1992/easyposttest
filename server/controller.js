const apiKey = process.env.API_TEST_KEY;
const EasyPost = require('node-easypost');
const api = new EasyPost(apiKey);

module.exports = {
    createAddress: (req, res, next) => {
        // const {street1, street2, city, state, zip, country, company, phone} = req.body
        // const verifiableAddress = new api.Address({
        //     verify: ['delivery'],
        //     street1: street1,
        //     street2: street2,
        //     city: city,
        //     state: state,
        //     zip: zip,
        //     country: country,
        //     company: company,
        //     phone: phone
        // })

        const verifiableAddress = new api.Address({
            verify: ['delivery'],
            street1: '417 montgomery street', // street1 will be cleaned up
            city: 'SAN FRANCISCO',
            state: 'CA',
            zip: '94104',
            country: 'US',
            company: 'EasyPost',
            phone: '415-123-4567',
        });

        verifiableAddress.save().then(address => {
            !address.verifications.delivery.success ? console.log('address failed to verify. error: ', address.verifications.delivery.errors) : console.log('success! verifications: ', address.verifications)
            res.status(200).send(address);
        })
    },
    retrieveAddress: (req, res, next) => {
        const { addressID } = req.params
        api.Address.retrieve(addressID).then(data => {
            console.log(data)
            res.status(200).send(data)
        })
    },
    createParcel: (req, res, next) => {
        const parcel = new api.Parcel({
            length: 20.2,
            width: 10.9,
            height: 5,
            weight: 65.9
        });

        parcel.save().then(data => {
            res.status(200).send(data)
        });
    },
    retrieveParcel: (req, res, next) => {
        const { parcelID } = req.params
        api.Parcel.retrieve(parcelID).then(data => {
            res.status(200).send(data)
        });
    },
}