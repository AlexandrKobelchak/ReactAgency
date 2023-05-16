import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Clock} from "./components/clock/clock";
import {Switch} from "./components/switch/switch";
import {ClientTagsComponent} from "./components/client-tags/client-tags-component";
import {ClientTagService, TagViewModel} from "./data/TagViewModel";
import {Guid} from "guid-typescript";
import {Simulate} from "react-dom/test-utils";
import click = Simulate.click;


export interface AppProps{

    clientTagService: ClientTagService;
}
export interface AppState{

    clientTagService: ClientTagService;
}


export default class App extends Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state={clientTagService : new ClientTagService()}
    }

    clickAdd=()=>{

        this.state.clientTagService.clientTags.push( new TagViewModel( Guid.create(), "TEST", false));
        this.setState(this.state);
    }
    clickTest=()=>{

        this.state.clientTagService.clientTags[0].isChecked=!this.state.clientTagService.clientTags[0].isChecked;
        this.setState(this.state);
    }

    update=()=>{
        this.setState(this.state);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Clock locale="en-us"/>
                    <br/>
                    <button type="button" onClick={this.clickAdd} >PRESS ME</button>
                    <br/>
                    <button type="button" onClick={this.clickTest} >PRESS TEST</button>
                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            {this.state.clientTagService.clientTags.map((tag:TagViewModel)=>{

                                return <div key={"__"+tag.id}><span style={tag.isChecked ? {color:"red"} : {color: "white"}}>{tag.tagName}</span></div>
                            })}
                        </div>
                        <div className="col-md-6">
                            <ClientTagsComponent clientTags = {this.state.clientTagService} parent={this}/>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}
