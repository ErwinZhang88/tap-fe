import React, { Component } from 'react'
import './Sustainability.css';
import ApiRequest from '../../utils/ApiRequest';
import axios from 'axios';


const apiRequest = new ApiRequest();
const CancelToken = axios.CancelToken;
const sourceRequest = CancelToken.source();

class SustainabilityStatement extends Component{
    constructor(props) {
        super(props);
        this.state = {
           stickyRightMenu : "",
           pageTitle : "",
           pageContent : "",
           curNicename : "",
        }
    }
    

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }
    
    handleGetContent = (nicename, pathName) => {
        //axios.get(apiRequest.getBaseApiUrl() + `/${nicename}.json`,
        axios.get(apiRequest.getLocalHost() + `/${nicename}.json`,
            {cancelToken: sourceRequest.token}
        )
        .then(function (response) {
            if(response.data.status){
                let data = response.data.data;
                this.setState({
                    pageTitle: data.title,
                    pageContent: data.content,
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

    componentWillUnmount(){
        //sourceRequest.cancel('');
    }

    render(){
        const { pageTitle, pageContent, curNicename } = this.state;
        const { subMenuRight } = this.props;

        return(
            <div className="row box-content" id="box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu" id="box-header-menu">
                    <img src="/assets/img/sustainability/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{pageTitle}</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12 no-pad">
                            <div dangerouslySetInnerHTML={{__html: pageContent}} />
                        </div>

                        {
                            subMenuRight.length > 0 &&

                            <div className="col col-lg-3 col-md-3 col-sm-12 col-xs-12 no-pad">
                                <div className="sub-menu-right">

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

export default SustainabilityStatement;