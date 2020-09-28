import React, { Component } from 'react'
import './Agritech.css';

class AgritechDetail extends Component{

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/agritech/img-4.png" alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Agritech</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 no-pad">
                            <h2 className="txt-uppercase txt-clr-green-1">Agri Tech News</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. 
                                Ut et tempor augue. Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, 
                                a semper sem aliquam. Aenean et mollis turpis. Cras pellentesque tempus lorem, ultrices aliquet velit. 
                                Proin porttitor mi sed nibh euismod eleifend. In vel lorem urna. Sed viverra urna eleifend lacinia congue. 
                                Morbi laoreet risus vitae sem rhoncus condimentum.
                            </p>
                            <br/>
                            <p>
                                <img className="img-dsg-4" src="/assets/img/agritech/img-2.png" alt=""/>
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. 
                                Ut et tempor augue. Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, 
                                a semper sem aliquam. Aenean et mollis turpis. Cras pellentesque tempus lorem, ultrices aliquet velit. 
                                Proin porttitor mi sed nibh euismod eleifend. In vel lorem urna. Sed viverra urna eleifend lacinia congue. 
                                Morbi laoreet risus vitae sem rhoncus condimentum.
                            </p>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris quis metus eget ipsum dapibus scelerisque. 
                                Mauris mattis, lorem quis vulputate varius, eros justo porta turpis, sit amet bibendum nunc massa eu neque. 
                                Ut et tempor augue. Etiam dictum augue a tortor mollis accumsan. Mauris posuere tortor ac sapien fringilla, 
                                a semper sem aliquam. Aenean et mollis turpis. Cras pellentesque tempus lorem, ultrices aliquet velit. 
                                Proin porttitor mi sed nibh euismod eleifend. In vel lorem urna. Sed viverra urna eleifend lacinia congue. 
                                Morbi laoreet risus vitae sem rhoncus condimentum.
                            </p>
                            <p>
                                <img className="img-dsg-4" src="/assets/img/agritech/img-3.png" alt="" />
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AgritechDetail;