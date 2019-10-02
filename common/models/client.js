'use strict';

module.exports = function(Client) {

    Client.sendMail = function(email){
        Client.app.scheduler.now('email/send', {
            rcpts: `email.to`,
            reply: `email.reply`,
            subject: `email.subject`,
            body: `email.body`
        });
    };
};
