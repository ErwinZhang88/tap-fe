import React, { Component } from 'react'
import './KontakKami.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import parse from 'html-react-parser';
import {isMobile} from 'react-device-detect';

const apiRequest = new ApiRequest();

class KontakKami extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
           pageData: {
               category : []
           }
        }
    }

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    handleGetContent = (nicename, pathName) => {
        let data = {
            nicename : this.props.nicename
        };

        axios.post(apiRequest.getBaseApiUrl() + '/content', data)
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    pageData: response.data.data,
                    curNicename: nicename
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
    }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
        this.handleGetContent(this.props.nicename);
    }

    render(){
        const { pageData } = this.state;
        const { subMenuCenter } = this.props;
        debugger;
        if(pageData.category.length === 0)
            return(<div></div>);

        return(
            <div className="row box-content">
                <div className="col col-12 box-header-menu">
                    <img src={isMobile ? pageData.banner_mobile : pageData.banner}  alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{pageData.title}</h1>
                </div>
                <div className="col col-12 box-desc bg-clr-gray-5">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <h2 className="txt-clr-green-1 txt-uppercase">{pageData.category[0].content[0].title}</h2>
                            {parse(pageData.category[0].content[0].desc)}
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 txt-center">
                            <img className="img-dsg-3" src="/assets/img/kontak-kami/img-2.png"  alt="" />
                        </div>
                    </div>
                </div>
                <div className="col col-12 box-desc">
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <div className="box-menu-thumb" onClick={() => this.handleChangePage(subMenuCenter[0].path)}>
                                <img src={pageData.category[1].content[0].image}  alt="" />
                                <button className="txt-clr-white-1 bg-clr-green-2 txt-uppercase">{pageData.category[1].content[0].title} <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </div>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 txt-center">
                            <div className="box-menu-thumb" onClick={() => this.handleChangePage("/sustainability/form-keluhan")}>
                                <img src={pageData.category[2].content[0].image}  alt="" />
                                <button className="txt-clr-white-1 bg-clr-green-3 txt-uppercase">{pageData.category[2].content[0].title}  <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default KontakKami;