import {Component} from "react";
import "./clock.css"

export interface ClockProps {
    locale: string
}

export interface ClockState{
    timeString: string
}
export class Clock extends Component<ClockProps, ClockState>{

    locale:string;
    constructor(props : ClockProps) {
        super(props);
        this.locale=this.props.locale;
        this.state = {timeString: new Date().toLocaleTimeString(this.locale)};
        let self=this;
        setInterval(function (){

            self.setState({
                timeString: new Date().toLocaleTimeString(self.locale)
            });
        }, 1000)
    }

    render() {
        return <span className="Clock">{this.state.timeString}</span>;
    }
}
