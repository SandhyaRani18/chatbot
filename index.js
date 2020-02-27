const lex = require('./LexResponses');
const Lex = new lex();
const AWS = require('aws-sdk');
const s3 = new AWS.S3();


exports.handler = async (event) => {
    if (event.currentIntent && event.currentIntent.confirmationStatus) {
        let confirmationStatus = event.currentIntent.confirmationStatus;
        if (confirmationStatus == "Denied") {
            console.log('got denied status');
            let message = `Hope you have a good day`
            return Lex.close({ message })
        }
        if (confirmationStatus == 'Confirmed') {
            console.log('got confirmed status');
        }
    }
    return handleProductFind(event);
}

const handleProductFind = event => {
    let { slots } = event.currentIntent;
    let { symptoms, dosage, medicines,age} = slots;

    if (itemNumber) return getItem(slots);

    if (!symptoms) {
        let message = 'what is your problem?';
        let intentName = 'medica';
        let slotToElicit = 'symptoms';
        return Lex.elicitSlot({ message, intentName, slotToElicit, slots })
    }
    if (!medicinetypes) {
        let message = `What type of medicine do you need?`;
        let intentName = 'medica';
        let slotToElicit = 'medicines';
        return Lex.elicitSlot({ message, intentName, slotToElicit, slots })
    }
    if (!age) {
        let message = 'what is your age?';
        let intentName = 'medica';
        let slotToElicit = 'dosage';
        return Lex.elicitSlot({ message, intentName, slotToElicit, slots })
    }
    if (!age === 'teen') {
        let message = 'I prefer a moderate dosage';
        let intentName = 'medica';
        let slotToElicit = 'age';
        return Lex.elicitSlot({ message, intentName, slotToElicit, slots })
    }
    if (!age === 'old') {
        let message = 'I prefer a heavy dosage daily';
        let intentName = 'medica';
        let slotToElicit = 'age';
        return Lex.elicitSlot({ message, intentName, slotToElicit, slots })
    }
    if (!age === 'child') {
        let message = 'I prefer a less dosage daily';
        let intentName = 'medica';
        let slotToElicit = 'age';
        return Lex.elicitSlot({ message, intentName, slotToElicit, slots })
    }

    return getItem(slots);
}

const getItem = async slots => {
    console.log('slots', slots);
    let { itemNumber, symptoms, medicinetypes, age} = slots;
    let stock = await getStock();
    let matching = stock.find(item =>
        itemNumber === item.itemNumber ||
        symptoms == item.symptoms &&
        medicinetypes  == item.medicinetypes &&
        age == item.age &&
        (item.symptoms == symptoms || item.medicinetype != 'medicinename'));
    if (!matching) {
        let message = `Unfortunately we couldn't find the item you were looking for`;
        return Lex.close({ message })
    }
    if (matching.stock = name) {
        let message = `I prefer you this medicine`;
        let intentName = 'medica';
        slots = { symptoms: null, medicinetypes: null, age: null, itemNumber: null };
        return Lex.confirmIntent({ intentName, slots, message })
    }
}

const getStock = () => {
    var params = {
        Bucket: 'mjmedical',
        Key: `stock.json`
    };

    return new Promise((resolve, reject) => {
        s3.getObject(params, function(err, data) {
            if (err) { // an error occurred
                reject(err)
            } else { // successful response
                resolve(JSON.parse(data.Body).stock)
            }
        });
    })
}