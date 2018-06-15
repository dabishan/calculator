import React, { Component } from 'react';



export class Key extends Component {

    click() {
        this.props.onKeyClick({sign: this.props.sign, type: this.props.type})
    }

    render() {
        return (
            <div className="keypad" onClick={this.click.bind(this)}>
                {this.props.sign}
            </div>
        )
    }

}