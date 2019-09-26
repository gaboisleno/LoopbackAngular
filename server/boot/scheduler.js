'use strict';
const Agendash = require('agendash');
const Agenda = require('agenda');
const logger = require('logger');

module.exports = function(app) {

    if (app.noScheduler) {
        logger.info('No scheduler');
        return;
    }

    console.log('Loading scheduler');

    app.scheduler = new Agenda({
        db: {
            address: 'mongodb://mongodb/agenda',
        }
    });

    app.use('/agendash', Agendash(app.scheduler));
};
