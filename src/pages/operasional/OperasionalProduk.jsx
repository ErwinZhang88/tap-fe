import React, { Component } from 'react'
import './Operasional.scss';
import {isMobile, isTablet} from 'react-device-detect';

class OperasionalProduk extends Component{

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/operasional/produk/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase ">Produk</h1>
                </div>

                {
                    (!isMobile || isTablet) && 
                    <div className="row">
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5">
                            <h2 className="txt-uppercase">MINYAK MENTAH KELAPA SAWIT (CRUDE PALM OIL/CPO)</h2>
                            <p className="p-small-med txt-clr-green-4">
                                Crude Palm Oil (CPO) atau dikenal dengan Minyak Mentah Kelapa Sawit adalah minyak makan nabati 
                                yang diperoleh dari hasil ekstraksi daging buah (Mesocarp) buah kelapa sawit (Elaeis guineensis). 
                                Saat ini CPO diproduksi melalui proses pengolahan di beberapa Pabrik Kelapa Sawit (PKS) milik Perusahaan.
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/operasional/img-3.png" />
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/operasional/img-4.png" />
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5">
                            <h2 className="txt-uppercase">INTI SAWIT (PALM KERNEL/PK)</h2>
                            <p className="p-small-med txt-clr-green-4">
                                Palm Kernel atau inti sawit adalah biji yang merupakan Endosperma (cangkang pelindung inti) dan Embrio (inti) 
                                dengan kandungan minyak inti berkualitas tinggi. Kernel ini dihasilkan dari pemisahan daging buah selama proses 
                                pengolahan di Pabrik Kelapa Sawit.
                            </p>
                        </div>
                    </div>
                }

                {
                    isMobile && !isTablet &&
                    <div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5">
                            <h2 className="txt-uppercase">MINYAK MENTAH KELAPA SAWIT (CRUDE PALM OIL/CPO)</h2>
                            <p className="p-small-med txt-clr-green-4">
                                Crude Palm Oil (CPO) atau dikenal dengan Minyak Mentah Kelapa Sawit adalah minyak makan nabati 
                                yang diperoleh dari hasil ekstraksi daging buah (Mesocarp) buah kelapa sawit (Elaeis guineensis). 
                                Saat ini CPO diproduksi melalui proses pengolahan di beberapa Pabrik Kelapa Sawit (PKS) milik Perusahaan.
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/operasional/img-3.png" />
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5">
                            <h2 className="txt-uppercase">INTI SAWIT (PALM KERNEL/PK)</h2>
                            <p className="p-small-med txt-clr-green-4">
                                Palm Kernel atau inti sawit adalah biji yang merupakan Endosperma (cangkang pelindung inti) dan Embrio (inti) 
                                dengan kandungan minyak inti berkualitas tinggi. Kernel ini dihasilkan dari pemisahan daging buah selama proses 
                                pengolahan di Pabrik Kelapa Sawit.
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc fixed-height bg-clr-gray-5 no-pad no-mar">
                            <img className="img-dsg-6" src="/assets/img/operasional/img-4.png" />
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default OperasionalProduk;