import React, { Component } from 'react';

export class Creator extends Component {
    constructor(props) {
        super(props);
        this.state = { name: '' };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ name: event.target.value });
    }

    render() {
        return (
            <form onSubmit="return false;">
                <div className="form-group">
                    <label>Nome:</label>
                    <input type="text" id="name" className="form-control" aria-describedby="nameHelp"
                        value={this.state.name} onChange={this.handleChange} />
                    <small id="nameHelp" className="form-text text-muted">Nome do personagem: {this.state.name}.</small>
                </div>
            </form>
        );
    }
}