import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlassMartiniAlt} from '@fortawesome/free-solid-svg-icons'

import './Richman.css'


const Richman = (props) => {

    const { name, age, role, residence, asset, img, company } = props.rich

    const element = <FontAwesomeIcon icon={faGlassMartiniAlt} />
    return (
        <div className="col-md-4">
            
            <div className="card" >
                <img className="card-img-top" src={img} alt={name} />
                <div className="card-body">
                    <h5 className="card-text">Name: {name}</h5>
                    <p className="card-text"> <b> Age: </b> {age}</p>
                    <p className="card-text">Residence: {residence}</p>
                    <p className="card-text">Company: {company}</p>
                    <p className="card-text">Role: {role}</p>
                    <p className="card-text">Net Worth: {asset}</p>
                    <button className = "casino-btn" onClick = {()=>props.handleRichman(props.rich)}>
                        {element}Go to Casino</button>

                </div>
            </div>
        </div>
    );
};

export default Richman;