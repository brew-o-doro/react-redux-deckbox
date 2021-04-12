import React from 'react';
import { connect } from 'react-redux';



const ScratchpadList = ({ scratchpads }) => {
    return (
        <div>
            {scratchpads.map((scratchpad) => 
            <ul>
               <li key={scratchpad.id}>{scratchpad.text}</li>
            </ul>)}
        </div>
    )
}

const mapStateToProps = state => {
    return { scratchpads: state.scratchpads }
}

export default connect(mapStateToProps)(ScratchpadList);