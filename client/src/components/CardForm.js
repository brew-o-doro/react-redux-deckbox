import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addCard } from '../actions/cardsActions';

import { Button, Divider, Form } from 'semantic-ui-react';

class CardForm extends Component {
    state = {
        name: '',
        quantity: 0,
        card_type: '',
        image: ''
    }

    handleChange = (event) =>{
        const { name, value } = event.target
        this.setState({[name]: value})
    }

    handleSubmit = (event) =>{
        event.preventDefault();
        this.props.addCard(this.state);
        this.setState({
            name: '',
            quantity: 0,
            card_type: '',
            image: ''
        })
    }

    render() {
        return (
            <div>
                <Divider />
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label className="label">Name:</label>
                        <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                        <br/>
                    </Form.Field>
                    <Form.Field>
                        <label className="label">Quantity:</label>
                        <input type="number" value={this.state.quantity} onChange={this.handleChange} name="quantity" min="1" max="4"/>
                    <br/>
                    </Form.Field>
                    <Form.Field>
                        <label className="label">Card Type:</label>
                        <input type="text" value={this.state.card_type} onChange={this.handleChange} name="card_type" />
                        <br/>
                    </Form.Field>
                    <Form.Field>
                        <label className="label">Image:</label>
                        <input type="text" value={this.state.image} onChange={this.handleChange} name="image" />
                        <br/>
                    </Form.Field>
                    <Button type="submit" value="Submit Card">Submit Card</Button>
                </Form>
            </div>
        )
    }
}
export default connect(null, { addCard })(CardForm);

// t.string "name"
// t.integer "quantity"
// t.string "card_type"
// t.string "image"