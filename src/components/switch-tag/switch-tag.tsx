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
    isChecked: boolean;
}

export class TagSwitch extends Component<TagSwitchProps, TagSwitchState> {

    constructor(props:TagSwitchProps) {
        super(props);
        this.state={ isChecked: this.props.tags[this.props.index].isChecked}
    }

    handleChange= ()=>{

        this.props.tags[this.props.index].isChecked=!this.props.tags[this.props.index].isChecked;
        this.setState( {isChecked: !this.state.isChecked});
        this.props.parent.update();
    }

    render() {
        let tag=this.props.tags[this.props.index];
        return <span className="Switch">
            <input  type="checkbox" id={tag.id.toString()} className="checkbox" name={tag.tagName}
                    checked={this.state.isChecked}  onChange={this.handleChange}/>
            <label htmlFor={tag.id.toString()}>{tag.tagName}</label>
        </span>
    }
}