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

agenda.define('hello', function(job) {
    console.log("Hello every 10 seconds!");
});

agenda.on('ready', () => {
    console.log('Agenda is ready. Starting');
    agenda.start();
});
