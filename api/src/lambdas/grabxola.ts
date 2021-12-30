import * as AWS from 'aws-sdk';

const SNS = new AWS.SNS();
const SES = new AWS.SES();


export const handler = async (event:any) => {

    // const body = await JSON.parse(event.body);
    // const phoneNumber = body.phoneTo;
    // const message = body.message;


    // const params = {
    //     PhoneNumber: phoneNumber,
    //     Message: message,
    // }
    // console.log('params : ', params)
    // return new Promise((res, rej) => {
    //     SNS.publish(params, (err, data) => {
    //         if (err) {
    //             console.log('Error with SNS : ', err) 
    //             rej(err)
    //         }
    //         console.log('Success! : ', data) 
    //         res(data);
    //     })
    // })

    // Forward entire event to SES to push out email
    const params = {
        Destination: {
            ToAddresses: [
                'stall84@gmail.com'
            ]
        },
        Source: 'stall84@gmail.com',
        Message: {
            Body: {
                Html: {
                    Charset: 'UTF-8',
                    Data: `${JSON.stringify(event)}`
                },
                Text: {
                    Charset: 'UTF-8',
                    Data: 'Testing an email dispatch'
                } 
            },
            Subject: {
                Charset: 'UTF-8',
                Data: 'Testing Lambda dispatched Email'
            }
        },
        Tags: [
            {
                Name: 'testing',
                Value: 'testing'
            }
            
        ]
    }

    return new Promise((res, rej) => {
        SES.sendEmail(params, (err, data) => {
            if (err) {
                console.warn('Error : ', err)
                rej(err);
            }
            console.log('Success! : ', data);
            res(data);
        })
    })
    

}