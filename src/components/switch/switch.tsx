import {Component} from "react";
import "./switch.css"

export interface SwitchProps{
    isChecked : boolean;
    name: string;
    label?:string
    id: string;
}
export interface SwitchState{
    isChecked : boolean
}

export class Switch extends Component<SwitchProps, SwitchState>{

    constructor(props:SwitchProps) {
        super(props);
        this.state = {isChecked : this.props.isChecked};
    }
    handleChange= ()=>{


    }

    render() {
        return <span className="Switch">
            <input  type="checkbox" id={this.props.id} className="checkbox" name={this.props.name} defaultChecked={this.state.isChecked}  onChange={this.handleChange}/>
            <label htmlFor={this.props.id}>{this.props.label ? this.props.label : this.props.name}</label>
        </span>
    }
}