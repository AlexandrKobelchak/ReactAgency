import {Component} from "react";
import "./client-tags.css"
import {ClientTagService, TagViewModel} from "../../data/TagViewModel";
import {Switch} from "../switch/switch";


export interface ClientTagsProps {

    clientTags: ClientTagService;
}

export interface ClientTagsState{

    clientTags: TagViewModel[];
}

export class ClientTagsComponent extends Component<ClientTagsProps, ClientTagsState>{

    constructor(props:ClientTagsProps) {
        super(props);
        this.state={clientTags: props.clientTags.clientTags};
    }

    render() {
        return <div style={{textAlign:"left"}}>
            {this.state.clientTags.map((tag)=>{
                return <div className="col-md-6 float-left" key={"_"+tag.id}>
                <Switch isChecked={tag.isChecked} name={tag.id.toString()} label={tag.tagName} id={tag.id.toString()} />
                </div>
            })}
        </div>;
    }
}