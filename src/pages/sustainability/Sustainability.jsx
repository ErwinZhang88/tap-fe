import React, { Component } from 'react'
import './Sustainability.css';
import ApiRequest from '../../utils/ApiRequest';
import axios from 'axios';


const apiRequest = new ApiRequest();
const CancelToken = axios.CancelToken;
const sourceRequest = CancelToken.source();

class Sustainability extends Component{
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

    
    handleGetContent = (nicename) => {
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
        //this.handleGetContent(this.props.nicename);
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
                            {/* <div dangerouslySetInnerHTML={{__html: pageContent}} /> */}
                            
                            <h2>Sustainability Framework</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. 
                                Ut et tempor augue. Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, 
                                a semper sem aliquam. Aenean et mollis turpis. Cras pellentesque tempus lorem, ultrices aliquet velit. 
                                Proin porttitor mi sed nibh euismod eleifend. In vel lorem urna. Sed viverra urna eleifend lacinia congue. 
                                Morbi laoreet risus vitae sem rhoncus condimentum.
                            </p>
                            <p><br /></p>
                            <p>
                                <img src="/assets/img/sustainability/img-4.png" />
                            </p>
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
                {/* <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <h2>Sustainability Policy</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque.
                            </p>
                            <ul>
                                <li>PT Triputra Agro Persada</li>
                                <li>PT. Kirana Megatara, Tbk.</li>
                                <li>PT. Pakoakuina</li>
                                <li>PT. Dharma Polimetal</li>
                                <li>PT. Bina Busana Internusa</li>
                                <li>PT. Lemindo Abadi Jaya</li>
                                <li>Padang Karunia</li>
                                <li>PT. Daya Adicipta Mustika</li>
                                <li>PT. Adi Sarana Armada, Tbk.</li>
                                <li>PT. Puninar Logistic</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-gray-5">
                    <div className="row">
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <div className="col-12">
                                <h2 className="txt-uppercase txt-clr-green-4">Sustainability Statement</h2>
                            </div>
                            <div className="row">
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <p className="p-small-med txt-clr-green-4">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                        Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. 
                                        Ut et tempor augue. Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, 
                                        a semper sem aliquam. Aenean et mollis turpis. Cras pellentesque tempus lorem, ultrices aliquet velit. 
                                        Proin porttitor mi sed nibh euismod eleifend. In vel lorem urna. Sed viverra urna eleifend lacinia congue. 
                                        Morbi laoreet risus vitae sem rhoncus condimentum.
                                    </p>
                                    <p className="p-small-med txt-clr-green-4">
                                        DLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                        Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. 
                                        Ut et tempor augue. Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, 
                                        a semper sem aliquam. Aenean et mollis turpis. Cras pellentesque tempus lorem, ultrices aliquet velit. 
                                        Proin porttitor mi sed nibh euismod eleifend. In vel lorem urna. Sed viverra urna eleifend lacinia congue. 
                                        Morbi laoreet risus vitae sem rhoncus condimentum.
                                    </p>
                                </div>
                                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <img className="img-dsg-1 no-border" src="/assets/img/sustainability/img-3.png" />
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            <h2 className="txt-uppercase">Sustainability Framework</h2>
                            <p className="p-small-med txt-clr-green-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. 
                                Ut et tempor augue. Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, 
                                a semper sem aliquam. Aenean et mollis turpis. Cras pellentesque tempus lorem, ultrices aliquet velit. 
                                Proin porttitor mi sed nibh euismod eleifend. In vel lorem urna. Sed viverra urna eleifend lacinia congue. 
                                Morbi laoreet risus vitae sem rhoncus condimentum.
                            </p>
                            <p>
                                <img className="img-dsg-3" src="/assets/img/sustainability/img-4.png" />
                            </p>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Sustainability;