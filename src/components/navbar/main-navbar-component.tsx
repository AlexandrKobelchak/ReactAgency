import {Component} from "react";

export class MainNavbar extends Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
                <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                    <div className="container">
                        <a className="navbar-brand" ><img style={{width:"70px", height:"70px"}} src="./assets/images/logo.png" alt="MyAgency"/></a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target=".navbar-collapse"
                            aria-label="Toggle navigation"
                        >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-end">
                    <ul className="navbar-nav flex-grow">
                        <li className="nav-item">
                            <a className="nav-link text-dark" >
                                <span className='glyphicon glyphicon-home'></span> Дела
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link text-dark" >
                                <span className='glyphicon glyphicon-home'></span> Клиенты
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link text-dark">
                                <span className='glyphicon glyphicon-education'></span> Платежи
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link text-dark" >
                                <span className='glyphicon glyphicon-th-list'></span> Статистика
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link text-dark">
                                <span className='glyphicon glyphicon-envelope'></span> Рассылки
                            </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link text-dark" >
                                <span className='glyphicon glyphicon-cod'></span> Настройка
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    </nav>
        )
    }
}