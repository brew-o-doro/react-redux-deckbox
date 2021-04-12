import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addScratchpad } from '../actions/scratchpadsActions';

import { Button, Divider, Form } from 'semantic-ui-react';

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
            <div>
            <Divider />
            <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                    <label className="label">Your Note:</label>
                    <input type="text" value={this.state.text} onChange={this.handleChange} name="text" />
                    <br/>
                </Form.Field>
                    <Button type="submit" value="Submit Note">Submit Note</Button>
            </Form>
            </div>
        )
    }
}
export default connect(null, { addScratchpad })(ScratchpadForm);
