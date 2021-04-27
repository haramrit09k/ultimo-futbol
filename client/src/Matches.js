import React from 'react';
import { Typography } from "@material-ui/core";

import Match from "./Match";

function Matches({matches}) {
    return (
        <div className="matches">
            <Typography variant="h2">
                Ultimo Futbol
            </Typography>

            {
                matches.map(
                    match => <Match match={match}/>
                )
            }
        </div>
    );
}

export default Matches;