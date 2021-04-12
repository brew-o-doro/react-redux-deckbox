import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchScratchpads } from '../actions/scratchpadsActions';
import ScratchpadForm from '../components/ScratchpadForm';
import ScratchpadList from '../components/ScratchpadList';


class ScratchpadsContainer extends Component {
    componentDidMount() {
        this.props.fetchScratchpads()
    }
    render() {        
        return (
            <div>
                <h1>Welcome to Your Scratchpad!</h1>
                
                <ScratchpadForm />
                <br />
                <ScratchpadList />
            </div>
        )
    }
}

export default connect(null, { fetchScratchpads })(ScratchpadsContainer);