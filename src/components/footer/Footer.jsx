import React, { Component } from 'react'
import './Footer.scss';
import {isMobile, isTablet} from 'react-device-detect';
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import parse from 'html-react-parser';

const apiRequest = new ApiRequest();

class Footer extends Component{

    constructor(props) {
        super(props);
        this.state = {
            curNicename : "",
            contact: {
               site_name : null,
               name : null,
               image : null,
               address : null,
               phone : null,
               fax : null,
               email : null
            },
            sosmed : []

        }
    }

    handleGetContent = () => {
        /*
        contact
        key : site.site_name
        key : site.name
        key : site.image
        key : site.address
        key : site.phone
        key : site.fax
        key : site.email

        sosmed
        key : sosmed.facebook
        key : sosmed.instagram
        key : sosmend.youtube
        key : sosmed.twitter*/

        axios.get(apiRequest.getBaseApiUrl() + '/footer')
        .then(function (response) {
            if(response.data.success){
                let contact = {...this.state.contact};

                let i = 0;
                while(i<response.data.data.contact.length){
                    switch(response.data.data.contact[i]["key"]){
                        case "site.site_name":
                            contact.site_name = response.data.data.contact[i]["value"];
                            break;
                        case "site.name":
                            contact.name = response.data.data.contact[i]["value"];
                            break;
                        case "site.image":
                            contact.image = response.data.data.contact[i]["value"];
                            break;
                        case "site.address":
                            contact.address = response.data.data.contact[i]["value"];
                            break;
                        case "site.phone":
                            contact.phone = response.data.data.contact[i]["value"];
                            break;
                        case "site.fax":
                            contact.fax = response.data.data.contact[i]["value"];
                            break;
                        case "site.email":
                            contact.email = response.data.data.contact[i]["value"];
                            break;

                        default:
                            break;
                    }
                    i++;
                }

                this.setState({
                    contact: contact,
                    sosmed: response.data.data.sosmed
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
    }

    componentDidMount(){
        this.handleGetContent();
    }

    render(){
        const { contact, sosmed } = this.state;

        return(
            <div className="footer" id="footer">
                <div className="row cont-contact">
                    <div className="col col-lg-7 col-md-7 col-sm-12 col-xs-12 box-cont">
                        <div>
                            <img src="/assets/img/logo-img.png"  alt="" />
                            <div className="address">
                                <h5 className="txt-clr-green-1">{contact.name}</h5>
                                <label className="label-small">{contact.address !== null ? parse(contact.address) : ""}</label>
                            </div>
                        </div>
                    </div>

                    { (!isMobile || isTablet) &&
                        <div className="col col-lg-5 col-md-5 col-sm-12 col-xs-12 box-cont">
                            <div className="number-foot-socmed">
                                <div className="number-foot">
                                    <h5>&nbsp;</h5>
                                    {
                                        (sosmed.phone !== "" || sosmed.phone !== null) && 
                                        <label className="label-small">Tel : {contact.phone}</label>
                                    }

                                    {
                                        (sosmed.fax !== "" || sosmed.fax !== null) && 
                                        <label className="label-small">Fax : {contact.fax}</label>
                                    }

                                    {
                                        (sosmed.email !== "" || sosmed.email !== null) && 
                                        <label className="label-small">e-mail : {contact.email}</label>
                                    }
                                </div>
                                <div className="socmed">
                                    {
                                        sosmed.map((item, idxContent) => {
                                            return <a key={idxContent} href={item.link}>
                                                <img src={item.value}  alt="" />
                                            </a>
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                     }
                </div>

                { isMobile && !isTablet &&
                <div className="row cont-contact">
                <div className="col-12">
                    <ol className="ol-foot">
                        {
                            (sosmed.phone !== "" || sosmed.phone !== null) && 
                            <label className="label-small">Tel : {contact.phone}</label>
                        }

                        {
                            (sosmed.fax !== "" || sosmed.fax !== null) && 
                            <label className="label-small">Fax : {contact.fax}</label>
                        }

                        {
                            (sosmed.email !== "" || sosmed.email !== null) && 
                            <label className="label-small">e-mail : {contact.email}</label>
                        }
                    </ol>
                </div>
                <div className="col-12">
                    <div className="socmed socmed-mobile">
                        {
                            sosmed.map((item, idxContent) => {
                                return <a key={idxContent} href={item.link}>
                                    <img src={item.value}  alt="" />
                                </a>
                            })
                        }
                    </div>
                </div>
                </div>
                }

                <div className="row copyright">
                    <span>{contact.site_name}</span>
                </div>
            </div>
        )
    }
}

export default Footer;