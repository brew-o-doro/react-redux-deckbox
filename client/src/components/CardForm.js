import React, { Component } from 'react'

class CardForm extends Component {
    state = {
        name: '',
        quantity: '',
        card_type: '',
        image: ''
    }

    render() {
        return (
            <form>
                <label className="label">Name:</label>
                <input type="text" value={this.state.name} onChange={this.handleChange} name="name" />
                <br/>
                <label className="label">Quantity:</label>
                <input type="text" value={this.state.quantity} onChange={this.handleChange} name="quantity" />
                <br/>
                <label className="label">Card TypeError:</label>
                <input type="text" value={this.state.card_type} onChange={this.handleChange} name="card_type" />
                <br/>
                <label className="label">Image:</label>
                <input type="text" value={this.state.image} onChange={this.handleChange} name="image" />
                <br/>
                <input type="submit" value="Submit Card" />
            </form>
        )
    }
}
export default CardForm;

// t.string "name"
// t.integer "quantity"
// t.string "card_type"
// t.string "image"