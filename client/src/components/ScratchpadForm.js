import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addScratchpad } from '../actions/scratchpadsActions';

class ScratchpadForm extends Component {
    state = {
        text: ''
    }

    handleChange = (event) =>{
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addScratchpad(this.state);
        this.setState({
          text: ''
        })
    }

    render() {
        return (
            
            <form onSubmit={this.handleSubmit}>
                <label className="label">Your Note:</label>
                <input type="text" value={this.state.text} onChange={this.handleChange} name="text" />
                <br/>
                <input type="submit" value="Submit Note" />
            </form>
        )
    }
}
export default connect(null, { addScratchpad })(ScratchpadForm);
