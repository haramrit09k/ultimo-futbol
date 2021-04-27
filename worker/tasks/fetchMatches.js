var fetch = require('node-fetch');

const baseUrl = 'https://www.scorebat.com/video-api/v1'

async function fetchMatches(){
    const res = await fetch(baseUrl);
    const matches = await res.json();
    console.log(matches.length+" matches fetched");
    // console.log(matches[0]);
}

fetchMatches();

module.exports = fetchMatches;