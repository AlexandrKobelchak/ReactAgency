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

        this.props.tags[this.props.index].isChecked=!this.props.tags[this.props.index].isChecked;
        this.setState( {tag: this.props.tags[this.props.index]});
        this.props.parent.update();
    }

    render() {
        let tag=this.props.tags[this.props.index];
        return <div className="Switch">
            <input  type="checkbox" id={tag.id.toString()} className="checkbox" name={tag.tagName}
                    checked={this.state.tag.isChecked}  onChange={this.handleChange}/>
            <label htmlFor={tag.id.toString()}>{tag.tagName}</label>
        </div>
    }
}