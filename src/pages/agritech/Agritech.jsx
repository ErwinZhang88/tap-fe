import React, { Component } from 'react'
import './Agritech.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {isMobile, isTablet} from 'react-device-detect';

class Agritech extends Component{

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/agritech/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Agritech</h1>
                </div>

                {
                    (!isMobile || isTablet) && 
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-green-3">
                            <h2 className="txt-uppercase txt-clr-white-1">Agri Tech News 1</h2>
                            <p className="p-small-med txt-clr-white-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. Mauris mattis, 
                                lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. Ut et tempor augue. 
                                Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, a semper sem aliquam. 
                                Aenean et mollis turpis. Cras pellentesque tempus.
                            </p>
                            <p>
                                <button className="btn-2" onClick={() => this.handleChangePage("/agritech/detail")}>Selengkapnya <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/agritech/img-2.png" />
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/agritech/img-2.png" />
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-green-3">
                            <h2 className="txt-uppercase txt-clr-white-1">Agri Tech News 2</h2>
                            <p className="p-small-med txt-clr-white-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. Mauris mattis, 
                                lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. Ut et tempor augue. 
                                Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, a semper sem aliquam. 
                                Aenean et mollis turpis. Cras pellentesque tempus.
                            </p>
                            <p>
                                <button className="btn-2" onClick={() => this.handleChangePage("/agritech/detail")}>Selengkapnya <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </p>
                        </div>
                    </div>
                }

                {
                    isMobile && !isTablet &&
                    <div className="row bg-clr-green-">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-green-3">
                            <h2 className="txt-uppercase txt-clr-white-1">Agri Tech News 1</h2>
                            <p className="p-small-med txt-clr-white-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. Mauris mattis, 
                                lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. Ut et tempor augue. 
                                Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, a semper sem aliquam. 
                                Aenean et mollis turpis. Cras pellentesque tempus.
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-green-3 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/agritech/img-2.png" />
                            <p className="p-15 p-b-30 p-t-0 no-mar">
                                <button className="btn-2" onClick={() => this.handleChangePage("/agritech/detail")}>Selengkapnya <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-green-3">
                            <h2 className="txt-uppercase txt-clr-white-1">Agri Tech News 2</h2>
                            <p className="p-small-med txt-clr-white-1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. Mauris mattis, 
                                lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. Ut et tempor augue. 
                                Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, a semper sem aliquam. 
                                Aenean et mollis turpis. Cras pellentesque tempus.
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-green-3 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/agritech/img-2.png" />
                            <p className="p-15 p-b-30 p-t-0 no-mar">
                                <button className="btn-2" onClick={() => this.handleChangePage("/agritech/detail")}>Selengkapnya <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </p>
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Agritech;