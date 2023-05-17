import {Component} from "react";

export class ClientNavbar extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-dark" >
                                <span className='glyphicon glyphicon-home'></span> Найти
                             </a>
                         </li>
                        <li className="nav-item">
                             <a className="nav-link text-dark">
                                 <span className='glyphicon glyphicon-home'></span> Новый
                            </a>
                    </li>
        <li className="nav-item">
            <a className="nav-link text-dark">
            <span className='glyphicon glyphicon-home'></span> Редактировать
    </a>
    </li>
        <li className="nav-item">
            <a className="nav-link text-dark" >
            <span className='glyphicon glyphicon-home'></span> Удалить
    </a>
    </li>
    </ul>
    </nav>
        );
    }
}