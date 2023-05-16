import {Component} from "react";
import "./client-tags.css"
import {ClientTagService, TagViewModel} from "../../data/TagViewModel";
import {TagSwitch} from "../switch-tag/switch-tag";



export interface ClientTagsProps {

    parent?:Component;
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

    public update = ()=> {

        this.setState(  this.state );

        // @ts-ignore
        if(this.props.parent && this.props.parent.update) {
            // @ts-ignore
            this.props.parent.update();
        }
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