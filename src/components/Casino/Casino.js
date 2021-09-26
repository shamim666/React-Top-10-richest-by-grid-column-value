import React from 'react';


const Casino = (props) => {
    const {casino} = props 
    
    const reducer = (previous , current) =>  previous + current.asset 
    const netWealth = casino.reduce(reducer,0)

    return (
        <div>
            <div style={{textAlign:'center'}}>
            <h2>Casino</h2>
            </div>
            <p>Total Perticipant: {casino.length}</p>
            <p>Net Wealth: {netWealth}</p>
             <div>
                 <h2>Members</h2>

                  {casino.map(member => <li>{member.name}</li>   )}
            </div> 
        </div>
    );
};

export default Casino;