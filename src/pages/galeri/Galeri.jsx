import React, { Component } from 'react'
import './Galeri.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Galeri extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
        }
    }

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
        this.setState({
            curNicename: this.props.nicename
        })
    }

    render(){
        const { curNicename } = this.state;
        const { subMenuRight } = this.props;

        return(
            <div className="row box-content">

                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/galeri/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Galeri</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12 no-pad">
                            <h2 className="txt-uppercase">Berita</h2>
                            <div className="row list-berita">
                                <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                    <label className="label-small-regular">2020 April</label>
                                </div>
                                <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                    <label className="label-small-regular txt-clr-green-2">13 April 2020</label><br/>
                                    <label className="label-medium-bold csr-pointer" onClick={() => this.handleChangePage("/press-release")}>Industri Sawit Ikut Perangi Corona</label>
                                </div>
                            </div>
                            <div className="row list-berita">
                                <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                    <label className="label-small-regular">2020 April</label>
                                </div>
                                <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                    <label className="label-small-regular txt-clr-green-2">13 April 2020</label><br/>
                                    <label className="label-medium-bold csr-pointer" onClick={() => this.handleChangePage("/press-release")}>Industri Sawit Ikut Perangi Corona</label>
                                </div>
                            </div>
                            <div className="row list-berita">
                                <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                    <label className="label-small-regular">2020 April</label>
                                </div>
                                <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                    <label className="label-small-regular txt-clr-green-2">13 April 2020</label><br/>
                                    <label className="label-medium-bold csr-pointer" onClick={() => this.handleChangePage("/press-release")}>Industri Sawit Ikut Perangi Corona</label>
                                </div>
                            </div>
                            <div className="row list-berita">
                                <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                    <label className="label-small-regular">2020 April</label>
                                </div>
                                <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                    <label className="label-small-regular txt-clr-green-2">13 April 2020</label><br/>
                                    <label className="label-medium-bold csr-pointer" onClick={() => this.handleChangePage("/press-release")}>Industri Sawit Ikut Perangi Corona</label>
                                </div>
                            </div>
                            <div className="row list-berita">
                                <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                    <label className="label-small-regular">2020 April</label>
                                </div>
                                <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                    <label className="label-small-regular txt-clr-green-2">13 April 2020</label><br/>
                                    <label className="label-medium-bold csr-pointer" onClick={() => this.handleChangePage("/press-release")}>Industri Sawit Ikut Perangi Corona</label>
                                </div>
                            </div>
                            <div className="row list-berita">
                                <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                    <label className="label-small-regular">2020 April</label>
                                </div>
                                <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                    <label className="label-small-regular txt-clr-green-2">13 April 2020</label><br/>
                                    <label className="label-medium-bold csr-pointer" onClick={() => this.handleChangePage("/press-release")}>Industri Sawit Ikut Perangi Corona</label>
                                </div>
                            </div>
                            <div className="row list-berita">
                                <div className="col col-lg-2 col-md-2 col-sm-2 col-xs-2 no-pad">
                                    <label className="label-small-regular">2020 April</label>
                                </div>
                                <div className="col col-lg-8 col-md-8 col-sm-8 col-xs-8 no-pad">
                                    <label className="label-small-regular txt-clr-green-2">13 April 2020</label><br/>
                                    <label className="label-medium-bold csr-pointer" onClick={() => this.handleChangePage("/press-release")}>Industri Sawit Ikut Perangi Corona</label>
                                </div>
                            </div>
                            <br/>
                            <p className="txt-center">
                                <button className="btn-1 bg-clr-green-1 txt-clr-white-1">Load More <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                            </p>
                        </div>

                        {
                            subMenuRight.length > 0 &&

                            <div className="col col-lg-3 col-md-3 col-sm-12 col-xs-12 no-pad no-pad">
                                <div className="sub-menu-right">

                                    {subMenuRight.map((menu, idxMenu) => {
                                        return  <div key={idxMenu}>
                                                
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

export default Galeri;