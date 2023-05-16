import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Clock} from "./components/clock/clock";
import {Switch} from "./components/switch/switch";
import {ClientTagsComponent} from "./components/client-tags/client-tags-component";
import {ClientTagService, TagViewModel} from "./data/TagViewModel";
import {Guid} from "guid-typescript";

export interface AppState{

    clientTagService: ClientTagService;
}


export default class App extends Component<any, any>{

    constructor(props: any) {
        super(props);
        this.state={clientTagService : new ClientTagService()}
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Clock locale="en-us"/>
                    <br/>
                    <div className="row">
                        <div className="col-md-6">
                            {this.state.clientTagService.clientTags.map((tag:TagViewModel)=>{

                                return <div key={"__"+tag.id}><span style={tag.isChecked ? {color:"red"} : {color: "white"}}>{tag.tagName}</span></div>
                            })}
                        </div>
                        <div className="col-md-6">
                            <ClientTagsComponent clientTags = {this.state.clientTagService}/>
                        </div>
                    </div>
                    <br/>
                </header>
            </div>
        );
    }
}
