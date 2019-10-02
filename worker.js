'use strict';

const Agenda = require('agenda');
//require('loopback-init');
//const logger = require('logger');

const agenda = new Agenda({
    db: {
        address: 'mongodb://mongodb/agenda',
    },
    defaultLockLifetime: 120 * 60 * 1000 // 120 minutes
});


agenda.define('email/send', function(job) {
    //console.log(job);
    console.log("Hello every 10 seconds!");
});

/*

'use strict';
const nodemailer = require('nodemailer');

// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: process.env.SMTP_USER, // sender address
        to: 'gisleno@codexia.io', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    });

    console.log('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

main().catch(console.error);


*/

agenda.on('ready', () => {
    console.log('Agenda is ready. Starting');
    agenda.start();
});