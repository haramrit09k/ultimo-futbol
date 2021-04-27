import React from 'react';

function Match({match}) {
    return (
        <div className="match">
            <div>{match.team1}</div>
            <div>{match.team2}</div>
            <div>{match.team1Goals}-
            {match.team2Goals}</div>
        </div>
    );
}

export default Match;