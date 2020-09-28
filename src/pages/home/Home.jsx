import React, { Component } from 'react'
import './Home.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import parse from 'html-react-parser';

const apiRequest = new ApiRequest();

class Home extends Component{

    constructor(props) {
        super(props);
        this.state = {
           pageData: {},
           idxPress: 0
        }
    }

    nextPress(){
        if(this.state.idxPress < this.state.pageData.press.length-1){
            this.setState({
                idxPress : this.state.idxPress + 1
            });
        }
    }

    prevPress(){
        if(this.state.idxPress > 0){
            this.setState({
                idxPress : this.state.idxPress - 1
            });
        }
    }

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    handleChangeURL = (url) => {
        if(url === null && url === "")
            return;

        window.location.href = url;
    }

    handleGetContent = () => {  
        axios.get(apiRequest.getBaseApiUrl() + '/home')
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    pageData: response.data.data
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
    }

    getMenuLanguage = () => {
        return localStorage.getItem('lang');
    }

    componentDidMount(){
        this.handleGetContent();
    }

    render(){
        const { pageData, idxPress } = this.state;

        return(
            <div>
                <div className="row box-content">
                    <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12 box-header-menu-home">
                        {
                            pageData.banner !== undefined && 
                       
                            <Carousel className="box-carousel no-pad-top no-pad-right no-pad-left"
                            autoPlay={true}
                            showThumbs={false}
                            infiniteLoop={true}>

                                {
                                     pageData.banner.map((item, n) => {
                                        return(
                                            <div key={n} className="box-content-carousel csr-pointer"  onClick={() => this.handleChangeURL(item.link)}>
                                                <img src={item.banner} alt="" />
                                                <div className="title-menu bg-clr-green-1-opc-85">
                                                    <h1 className="txt-clr-white-1 title-banner-home">{item.name}</h1>
                                                </div> 
                                            </div>
                                        )
                                    })
                                }
                    
                            </Carousel>
                        }
                    </div>

                        
                    {
                        pageData.press != null && pageData.press.length > 1 &&
                        <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12 box-press-release-home">

                            <div className="cont-press-release-home bg-clr-gray-5">
                                <label className="label-small txt-uppercase txt-clr-green-1">{pageData.press[idxPress].createdAt} <span className="span-text-small txt-uppercase txt-clr-gray-1">|  Press release</span></label>
                                <div className="p-small txt-clr-gray-7">
                                    {pageData.press[idxPress].short_desc !== null ? parse(pageData.press[idxPress].short_desc) : ""}
                                </div>
                                <button className="btn-1 bg-clr-green-1 txt-clr-white-1" style={{"width": "160px"}} onClick={() => this.handleChangePage("/detail/"+pageData.press[idxPress].id)}> { pageData.detailpress.button } <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </div>
                            <div className="nav-press-release-home bg-clr-gray-4">
                                <div className="nav-prev-next-type-1">
                                    <div className="prev border-clr-gray-1" onClick={() => this.prevPress()}>
                                        <img src="/assets/img/icon/arrow2_prev_icon.png" alt="" ></img>
                                    </div>
                                    <div className="next border-clr-gray-1" onClick={() => this.nextPress()}>
                                        <img src="/assets/img/icon/arrow2_next_icon.png" alt="" ></img>
                                    </div>
                                </div>
                                <div className="bx-info">
                                    <label className="label-xs-small txt-uppercase txt-clr-gray-7 csr-pointer"  onClick={() => this.handleChangePage("/galeri/siaran-pers")}  >+ { pageData.detailpress.text } </label>
                                </div>
                            </div>

                        </div>
                    }

                    {
                        pageData.menu !== undefined && pageData.menu[0] !== undefined &&
                        <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12 box-thumbnail csr-pointer" onClick={() => this.handleChangePage(pageData.menu[0].path)}>
                            <img src={pageData.menu[0].icon} className="no-pad-left" alt="" />
                            <div className="title-thumb">
                                <div className="icon-thumb bg-tranparent"></div>
                                <label className="label-medium text-uppercase txt-clr-white-1">{pageData.menu[0].name}</label>
                            </div>
                        </div>
                    }

                    {
                        pageData.menu !== undefined && pageData.menu[1] !== undefined &&
                        <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12 box-thumbnail csr-pointer" onClick={() => this.handleChangePage(pageData.menu[1].path)}>
                            <img src={pageData.menu[1].icon} alt=""  />
                            <div className="title-thumb no-pad-left">
                                <div className="icon-thumb bg-tranparent"></div>
                                <label className="label-medium text-uppercase txt-clr-white-1">{pageData.menu[1].name}</label>
                            </div>
                        </div>
                    }

                    {
                        pageData.menu !== undefined && pageData.menu[2] !== undefined &&
                        <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12 box-thumbnail csr-pointer" onClick={() => this.handleChangePage(pageData.menu[2].path)}>
                            <img src={pageData.menu[2].icon} className="no-pad-right" alt=""  />
                            <div className="title-thumb no-pad-right">
                                <div className="icon-thumb bg-transparent"></div>
                                <label className="label-medium text-uppercase txt-clr-white-1">{pageData.menu[2].name}</label>
                            </div>
                        </div>
                   
                    }

                    {
                        pageData.menu !== undefined && pageData.menu[3] !== undefined &&
                        <div className="col col-lg-4 col-md-4 col-sm-12 col-xs-12 box-thumbnail csr-pointer" onClick={() => this.handleChangePage(pageData.menu[3].path)}>
                            <img src={pageData.menu[3].icon} className="no-pad-left"  alt="" />
                            <div className="title-thumb no-pad-left">
                                <div className="icon-thumb bg-transparent"></div>
                                <label className="label-medium text-uppercase txt-clr-white-1">{pageData.menu[3].name}</label>
                            </div>
                        </div>
                    }
                    
                    {
                        pageData.video !== undefined && 
                        <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12 box-thumbnail csr-pointer" onClick={() => this.props.handleShowVideoPopUp(pageData.video.value)}>
                            <img src={pageData.video.image} className="no-pad-right"  alt="" />
                            <span className="video-play-button">
                            <span></span>
                            </span>
                        </div>
                    }
                   
                    {
                            pageData.kontak_kami !== undefined && 
                            <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-thumbnail csr-pointer">
                                <img src={pageData.kontak_kami.image} className="no-pad-left no-pad-right"  alt="" />
                                <div className="title-thumb no-pad-left">
                                    <label className="label-small txt-clr-white-1 txt-center m-b-15">{pageData.kontak_kami.text}</label>
                                    <button className="btn-1 bg-clr-green-1 txt-clr-white-1" onClick={() => this.handleChangePage("/kontak-kami/kantor")}>{pageData.kontak_kami.button} <FontAwesomeIcon icon="envelope" className="icon" /></button>
                                </div>
                                
                            </div>
                    }
                    
                </div>
            </div>
        )
    }
}

export default Home;