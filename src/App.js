import React, { Component } from 'react'
import './App.scss';
import { Switch, Route, withRouter  } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Home from './pages/home/Home';

import KontakKami from './pages/kontak-kami/KontakKami';
import Karir from './pages/kontak-kami/Karir';
import Keluhan from './pages/kontak-kami/Keluhan';

import {isMobile} from 'react-device-detect';
import Page404 from './pages/page_404/Page404';
import ApiRequest from './utils/ApiRequest';
import axios from 'axios';
import AgritechDetail from './pages/agritech/AgritechDetail';
import PressRelease from './pages/home/PressRelease';

import Footer from './components/footer/Footer';
import CustomPage from './pages/custom/CustomPage';
import PreviewFormatContent from './pages/custom/PreviewFormatContent';
import BoxVideo from './components/BoxVideo';
import BoxPDF from './components/BoxPDF';
import DetailPage from './pages/custom/DetailPage';
import DaftarKeluhan from './pages/kontak-kami/DaftarKeluhan';

const apiRequest = new ApiRequest();
const CancelToken = axios.CancelToken;
const sourceRequest = CancelToken.source();

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      loading : true,
      curNicename: "",
      leftOpen: true,

      listMenu : [],
      listComponent : [],
      showVideoPopup : false,
      videoPlay: false,
      videoUrl: "",
      showPdfPopup : false,
      pdfUrl : "",
      pdfIsDownload: 0
    }
  }
  

  handleGetComp = (compName) => {
    switch(compName){
      case "CustomPage":
        return CustomPage;
      case "KontakKami":
        return KontakKami;
      case "Karir":
        return Karir;
      case "Keluhan":
        return Keluhan;
      case "Home":
        return Home;
      case "DaftarKeluhan":
        return DaftarKeluhan;
      default:
        return CustomPage;
    }
  }

  handleAddComponent = (arrComp, menu) => {
    if(menu.comp_name === null || menu.path === null)
      return false;

    let i = 0;
    let stat = true;
    while(i<arrComp.length){
      if(arrComp.path === menu.path){
        stat = false;
        break;
      }

      i++;
    }

    return stat;
  }

  createComp = (comp, menu, parent = null) => {
    return {
      comp : comp,
      path : menu.path,
      nicename : menu.nicename,
      sub_menu_right : menu.sub_menu_right.length === 0 && parent !== null ? parent.sub_menu_right : menu.sub_menu_right,
      sub_menu_left: menu.sub_menu_left.length === 0 && parent !== null ? parent.sub_menu_left : menu.sub_menu_left,
      sub_menu_center: menu.sub_menu_center.length === 0 && parent !== null ? parent.sub_menu_center : menu.sub_menu_center,
    }
  }

  handleChangePage = (pathName) => {
    this.toggleSidebar(false);

    this.props.history.push({
        pathname: pathName
    })
  }

  handleActivePage = (nicename) => {
    this.setState({
      curNicename : nicename
    })
  }

  toggleSidebar = (stat = null) => {
    if(!isMobile)
      return;

    this.setState({ 
      leftOpen : stat === null ? !this.state.leftOpen : stat
     });
  }

  toggleMenuMobile = () => {
    if(!isMobile)
      return;
  }

  changeLanguage = (lang) => {
    let langCode = "en";
    if(lang.toUpperCase() === "INDONESIA" )
      langCode = "id";

    apiRequest.changeLanguage(langCode);
  }

  getMenuLanguage = () => {
    let currLang = localStorage.getItem('lang');
      if(currLang === undefined){
        return "ENGLISH";
      }
      else{
        if(currLang === "en")
          return "INDONESIA";
        else
          return "ENGLISH";
      }
  }

  handleShowVideoPopUp = (url) => {
    this.setState({
      showVideoPopup : true,
      videoPlay: true,
      videoUrl: url
    })
  }

  handleHideVideoPopUp = () => {
    this.setState({
      showVideoPopup : false,
      videoPlay: false,
      videoUrl:"",
    })
  }

  handleShowPDFPopUp = (url, pdfIsDwonload) => {
    this.setState({
      showPdfPopup : true,
      pdfUrl: url,
      pdfIsDownload: pdfIsDwonload
    })
  }

  handleHidePDFPopUp = () => {
    this.setState({
      showPdfPopup : false,
      pdfUrl: "",
      pdfIsDownload: 0
    })
  }

  componentDidMount(){
    
    if(isMobile){
      this.setState({
        leftOpen : false
      })
    }


    //get menu
    apiRequest.setAxiosHeader();
    axios.get(apiRequest.getBaseApiUrl() + '/menu',
          {cancelToken: sourceRequest.token}
      )
      .then(function (response) {
          if(response.data.success){

              let listMenuNew = response.data.data;
              let i=0;
              let tempArrComp = [];
              while(i < listMenuNew.length){

                if(this.handleAddComponent(tempArrComp, listMenuNew[i])){
                  tempArrComp.push(this.createComp(this.handleGetComp(listMenuNew[i].comp_name), listMenuNew[i]))
                }

                if(listMenuNew[i].sub_menu_left.length > 0){
                  let j = 0;
                  while(j < listMenuNew[i].sub_menu_left.length){
                    if(this.handleAddComponent(tempArrComp, listMenuNew[i].sub_menu_left[j])){
                      tempArrComp.push(this.createComp(this.handleGetComp(listMenuNew[i].sub_menu_left[j].comp_name), listMenuNew[i].sub_menu_left[j], listMenuNew[i]))
                    }
                    j++;
                  }
                }

                if(listMenuNew[i].sub_menu_right.length > 0){
                  let j = 0;
                  while(j < listMenuNew[i].sub_menu_right.length){
                    if(listMenuNew[i].sub_menu_right[j].item.length > 0){
                      let k = 0;
                      while(k < listMenuNew[i].sub_menu_right[j].item.length){
                        if(this.handleAddComponent(tempArrComp, listMenuNew[i].sub_menu_right[j].item[k])){
                          tempArrComp.push(this.createComp(this.handleGetComp(listMenuNew[i].sub_menu_right[j].item[k].comp_name), listMenuNew[i].sub_menu_right[j].item[k], listMenuNew[i]))
                        }
                        k++;
                      }
                    }
                    j++;
                  }
                }

                i++;
              }

              this.setState({
                listMenu: listMenuNew,
                listComponent: tempArrComp,
                loading: false
              })
          }
          else{
          }
      }.bind(this))
      .catch(function (error) {
          
      });
  }

  componentWillUnmount(){
    sourceRequest.cancel();
  }

  render() {
    const {leftOpen, listMenu, listComponent, curNicename, loading, 
      showVideoPopup, videoPlay, videoUrl,
      showPdfPopup, pdfUrl, pdfIsDownload
    } = this.state;
    let clsLeftOpen = leftOpen ? 'open' : 'closed';

    if(loading)
    {
      return(<div></div>);
    }

    return (
      <div id='layout'>

          <div className={showPdfPopup ? "popup-black flex hide" : "popup-black hide"}>
            <BoxPDF handleHidePDFPopUp={this.handleHidePDFPopUp} url={pdfUrl} pdfIsDownload={pdfIsDownload} />
          </div>

          <div className={showVideoPopup ? "popup-black flex hide" : "popup-black hide"}>
            <BoxVideo handleHideVideoPopUp={this.handleHideVideoPopUp} videoPlay={videoPlay} url={videoUrl} />
          </div>
          

          <div className="mobile-nav">
            <FontAwesomeIcon icon="bars" className="icon txt-clr-green-1" onClick={() => this.toggleSidebar()}/>
            <img src="/assets/img/logo-img.png" onClick={() => this.handleChangePage("/")}  alt="" />
          </div>

          <div id='left' className={clsLeftOpen}>
              <div className={`sidebar ${clsLeftOpen}`} >
                  <div className='header csr-pointer' onClick={() => this.handleChangePage("/")}>
                    <img src="/assets/img/logo.png"  alt="" />
                  </div>

                  <div className='content'>

                      {listMenu.map((item, index) => {
                        if(item.path !== "/"){
                          return <div key={index}>
                                  <div key={index} className={curNicename.includes(item.nicename) ? 'menu-item active' : 'menu-item'} onClick={item.sub_menu_left.length > 0 ? ()=>{} : () => this.handleChangePage(item.path)}>
                                      <div className="menu-active"></div>
                                      <label className="label-xs-small-medium csr-pointer txt-uppercase">{item.name}</label>
                                  </div>
                                  
                                  {item.sub_menu_left.length > 0 &&
                                    <div className="sub-menu" style={{"top": ((index-1) * 50) + "px"}}>

                                    {item.sub_menu_left.map((itemSub, indexSub) => {
                                      
                                      return  <div key={indexSub} className={curNicename.includes(itemSub.nicename) ? 'sub-menu-item active csr-pointer' : 'sub-menu-item csr-pointer'} onClick={() => this.handleChangePage(itemSub.path) }>
                                                <div className="sub-menu-active"></div>
                                                <label className="label-xs-small-medium csr-pointer txt-uppercase">{itemSub.name}</label>
                                              </div>
                                              
                                    })}

                                    </div>
                                  } 
                                  
                          </div>
                        }
                        else{
                          return ""
                        }
                          
                      })}

                      <div className='menu-item' onClick={() => this.changeLanguage(this.getMenuLanguage())}>
                        <div className="menu-active"></div>
                        <label className="label-xs-small-medium csr-pointer txt-uppercase">{this.getMenuLanguage()}</label>
                        <img src={this.getMenuLanguage() === "INDONESIA" ?  "/assets/img/icon-id.png" :  "/assets/img/icon-en.png"}  className="icon-lang"  alt=""  />
                      </div>

                      
                  </div>
              </div>
          </div>

          <div id='main'>
              <div className='content'>
                    <Switch>
                        
                        {listComponent.map((item, idx) => {
                            if(item.comp !== undefined || item.comp !== null){
                              return <Route key={idx} path={item.path} exact 
                              render={() => <item.comp 
                                handleActivePage={this.handleActivePage} 
                                handleChangePage={this.handleChangePage} 
                                handleShowVideoPopUp={this.handleShowVideoPopUp}
                                handleHideVideoPopUp={this.handleHideVideoPopUp}
                                handleShowPDFPopUp={this.handleShowPDFPopUp}
                                handleHideDFPPopUp={this.handleHidePDFPopUp}
                                subMenuRight={item.sub_menu_right}
                                subMenuCenter={item.sub_menu_center}
                                nicename={item.nicename}
                                />}/>
                            }
                            else{
                              return ""
                            }
                            
                        })}

                        <Route path={'/detail/:id'} exact 
                        render={() => <DetailPage/>}/>

                        <Route path={'/preview-format-content'} exact 
                        render={() => <PreviewFormatContent/>}/>


                        <Route path={'/agritech/detail'} exact 
                          render={() => <AgritechDetail
                            handleActivePage={this.handleActivePage} 
                            handleChangePage={this.handleChangePage} 
                            nicename={'agritech-detail'}
                            />}/>

                        <Route path={'/press-release'} exact 
                          render={() => <PressRelease
                            handleActivePage={this.handleActivePage} 
                            handleChangePage={this.handleChangePage} 
                            nicename={'press-release'}
                            />}/>

                        <Route component={Page404} />

                    </Switch>
              </div>
              <Footer />
          </div>
      </div>
    );
  }
}

export default withRouter(App);
