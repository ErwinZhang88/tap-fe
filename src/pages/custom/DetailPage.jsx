import React, { Component } from 'react'
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import parse from 'html-react-parser';

const apiRequest = new ApiRequest();

class DetailPage extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
           pageData: {
               desc: ""
           }
        }
    }

    handleGetContent = (id) => {
        let data = {
            "id" : id
        };

        axios.post(apiRequest.getBaseApiUrl() + '/content/detail', data)
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

    componentDidMount(){
        let fullUrl = window.location.href;
        let id = fullUrl.substring(fullUrl.lastIndexOf('/') + 1)
        this.handleGetContent(id);
    }

    render(){
        
        const { pageData } = this.state;

        return(
            <div className="row box-content">

                {/* Banner Header */}
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src={pageData.image !== null ? pageData.image : pageData.menu.banner}  alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{pageData.title}</h1>
                </div>

                {/* Content | Cek Format Component */}
                
                <div className="row box-desc">
                    {/* {
                        pageData.title !== null && pageData.title !== "" && pageData.show_title == 1 &&
                        <div className="col-12">
                            <h2 className="txt-uppercase txt-clr-green-1">{pageData.title}</h2>
                        </div>
                    } */}

                    {
                        pageData.desc !== null && pageData.desc !== "" &&
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 p-small-med txt-clr-green-4">
                            {parse(pageData.desc)}
                        </div>
                    }

                </div>
            </div>
        )
    }
}

export default DetailPage;