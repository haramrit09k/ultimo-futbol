var CronJob = require('cron').CronJob;

const fetchMatches = require('./tasks/fetchMatches')

var job = new CronJob('* * * * * *', fetchMatches, null, true, 'America/New_York');
job.start();