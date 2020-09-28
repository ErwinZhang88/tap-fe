import React, { Component } from 'react'
import './KontakKami.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import parse from 'html-react-parser';
import {isMobile} from 'react-device-detect';

const apiRequest = new ApiRequest();

class Karir extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
           pageData: {
               category : []
           },
           urlIframe : ""
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

    handleGetIframe = () => {
        axios.get(apiRequest.getBaseApiUrl() + '/karir')
        .then(function (response) {
            if(response.data.success){
                this.setState({
                   urlIframe: response.data.data.iframe.value
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
        this.handleGetIframe();
    }

    render(){
        const { subMenuRight } = this.props;
        const { pageData, curNicename, urlIframe } = this.state;

        if(pageData.category.length === 0)
            return(<div></div>);

        return(
            <div className="row box-content">

                <div className="col col-12 box-header-menu">
                    <img src={isMobile ? pageData.banner_mobile : pageData.banner}  alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{pageData.title}</h1>
                </div>

                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">

                        {
                            pageData.category[0].content.length > 0 && 
                            <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                                {parse(pageData.category[0].content[0].desc)}
                                <p><img src={pageData.category[0].content[0].image}  alt="" /></p>

                                <div className="row m-b-30">
                                    <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                        <iframe src={urlIframe} title="karir" style={{width: "100%", height: "100vh", border: "none"}} />
                                    </div>
                                </div>

                                {
                                    pageData.category[1].content.length > 0 && 
                                    <div className="row m-b-30">
                                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                            <div className="box-warning">
                                                <div className="title">
                                                    <label className="no-mar">{pageData.category[1].content[0].title}</label>
                                                    <FontAwesomeIcon icon="exclamation-triangle" className="icon" />
                                                </div>
                                                <div className="desc">
                                                    {parse(pageData.category[1].content[0].desc)}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }


                            </div>
                        }

                        {
                            subMenuRight.length > 0 &&

                            <div className="col col-lg-3 col-md-3 col-sm-12 col-xs-12 no-pad">
                                <div className="sub-menu-right no-pad">

                                    {subMenuRight.map((menu, idxMenu) => {
                                        return  <div key={idxMenu}>
                                                <h3 className="txt-uppercase m-b-10 p-l-15">{menu.name}</h3>
                                                <ul>
                                                    {menu.item.map((item, idxItem) => {
                                                        return  <li key={idxItem}>
                                                                    <label className={curNicename === item.nicename ? "label-xs-small-bold txt-clr-green-3 csr-pointer" : "label-xs-small-bold txt-clr-gray-2 csr-pointer"} 
                                                                        onClick={() => this.handleChangePage(item.path)}>
                                                                        {item.name}
                                                                    </label>
                                                                </li>
                                                    })}
                                                </ul>
                                                </div>
                                    })}
                                </div>
                            </div>  
                        }

                    </div>

                   
                    
                    
                    
                    
                </div>
            </div>
        )
    }
}

export default Karir;