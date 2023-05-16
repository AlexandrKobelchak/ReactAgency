import {Component} from "react";
import "./client-tags.css"
import {ClientTagService, TagViewModel} from "../../data/TagViewModel";
import {TagSwitch} from "../switch-tag/switch-tag";



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

    public update = (clientTag: TagViewModel, index: number)=> {

        this.state.clientTags[index]=clientTag;
        debugger;
        this.setState(  this.state );
    }


    render() {
        return <div style={{textAlign:"left"}}>
            {this.state.clientTags.map((tag, index, array)=>{
                return <div className="col-md-6 float-left" key={"_"+tag.id}>
                <TagSwitch tags={array} index={index} parent={this}/>
                </div>
            })}
        </div>;
    }
}