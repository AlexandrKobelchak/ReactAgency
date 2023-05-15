import {Component} from "react";
import "./client-tags.css"
import {TagViewModel} from "../../data/TagViewModel";
import {Switch} from "../switch/switch";


export interface ClientTagsProps {

    clientTags: TagViewModel[];
}

export interface ClientTagsState{

    clientTags: TagViewModel[];
}

export class ClientTagsComponent extends Component<ClientTagsProps, ClientTagsState>{

    constructor(props:ClientTagsProps) {
        super(props);
        let tags : TagViewModel[] = [];
        this.props.clientTags.map((tag)=>{
            tags.push(tag);
        });
        this.state={clientTags: tags};
    }

    render() {
        return <div style={{textAlign:"left"}}>
            {this.state.clientTags.map((tag)=>{
                return <div className="col-md-6 float-left">
                <Switch isChecked={tag.isChecked} name={tag.id.toString()} label={tag.tagName} id={tag.id.toString()} />
                </div>
            })}
        </div>;
    }
}