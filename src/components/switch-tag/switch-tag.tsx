import {Component} from "react";
import "./switch-tag.css"
import {TagViewModel} from "../../data/TagViewModel";
import {ClientTagsComponent} from "../client-tags/client-tags-component";

export interface TagSwitchProps{
    tags:TagViewModel[];
    index:number;
    parent: ClientTagsComponent;
}
export interface TagSwitchState{
    tag: TagViewModel;
}

export class TagSwitch extends Component<TagSwitchProps, TagSwitchState> {

    constructor(props:TagSwitchProps) {
        super(props);
        this.state={ tag: this.props.tags[this.props.index]}
    }

    handleChange= ()=>{

        this.state.tag.isChecked =  !this.state.tag.isChecked;
        //debugger;
        this.props.parent.update(this.state.tag, this.props.index);
    }

    render() {
        return <span className="Switch">
            <input  type="checkbox" id={this.state.tag.id.toString()} className="checkbox" name={this.state.tag.tagName}
                    checked={this.state.tag.isChecked}  onChange={this.handleChange}/>
            <label htmlFor={this.state.tag.id.toString()}>{this.state.tag.tagName}</label>
        </span>
    }
}