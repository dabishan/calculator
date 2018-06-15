import React, { Component } from 'react';
import {Key} from "./Num";


export default class Calculator extends Component {
    constructor() {
        super();
        this.default = {display: "0", modifier: "", ans: "0"};

        this.state = this.default;
        this.renderHeader = this.renderHeader.bind(this);
        this.onKeyClick = this.onKeyClick.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    
    onKeyClick(key) {
        switch(key.type){
            case "num":
                if (!(this.state.display === "0" && key.sign === "0")){
                    if(this.state.ans === this.state.display || this.state.display === "0" ) {
                        this.setState({display: key.sign});
                    } else {
                        this.setState({display: this.state.display + key.sign});
                    }
                }
                break;

            case "equal":
                if (this.state.modifier !== "") this.calculate();
                break;

            case "on":
                this.setState(this.default);
                break;

            case "clr":
                this.setState({display: "0"}); break;

            case "back":
                this.setState({display: this.state.display.slice(0, -1)}); break;

            case "modifier":
                if (this.state.display !== "0") {
                    this.setState({modifier: key.sign, ans: this.state.display, display: "0"});
                }
                break;
        }
    }

    calculate() {
        const current = parseFloat(this.state.display);

        let answer = parseFloat(this.state.ans);

        switch(this.state.modifier) {
            case "+":
                answer += answer; break;
            case "-":
                answer -= current; break;
            case "X":
                answer *= current; break;
            case "/":
                answer /= current; break;
        }

        this.setState({modifier: "", ans: answer.toString(), display: answer.toString()});
    }
    

    renderHeader() {
        return (
            <div className="header">
                <div className="display">
                    <div className="history">{this.state.ans.slice(0,20) + " " + this.state.modifier}</div>
                    <div className="answer">{this.state.display.slice(0,20)}</div>
                </div>
            </div>
        )
    }



    render() {
        return (
            <div className="calculator">
                {this.renderHeader()}
                <div className="box">
                    <div className="row">
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="on" sign={"ON"}/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="clr" sign={"CLR"}/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="back" sign={"BK"}/>
                        </div>
                        <div className="key one dark">
                            <Key onKeyClick={this.onKeyClick} type="modifier" sign={"/"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="7"/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="8"/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="9"/>
                        </div>
                        <div className="key one dark">
                            <Key onKeyClick={this.onKeyClick} type="modifier" sign={"X"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="4"/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="5"/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="6"/>
                        </div>
                        <div className="key one dark">
                            <Key onKeyClick={this.onKeyClick} type="modifier" sign={"-"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="1"/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="2"/>
                        </div>
                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="3"/>
                        </div>
                        <div className="key one dark">
                            <Key onKeyClick={this.onKeyClick} type="modifier" sign={"+"}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="key two">
                            <Key onKeyClick={this.onKeyClick} type="num" sign="0"/>
                        </div>

                        <div className="key one">
                            <Key onKeyClick={this.onKeyClick} type="num" sign={"."}/>
                        </div>
                        <div className="key one red">
                            <Key onKeyClick={this.onKeyClick} type="equal" sign={"="}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

