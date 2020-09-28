import React, { Component } from 'react'
import './Operasional.scss';

class Operasional extends Component{

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/operasional/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase ">Operasional</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <h2 className="txt-clr-green-1 txt-uppercase">Peta</h2>
                            <p>
                                <img className="img-dsg-4" src="/assets/img/operasional/img-2.png" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Operasional;