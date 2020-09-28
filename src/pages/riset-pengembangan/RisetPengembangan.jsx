import React, { Component } from 'react'
import './RisetPengembangan.css';

class RisetPengembangan extends Component{

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="./assets/img/riset-pengembangan/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Riset & Pengembangan</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 no-pad">
                            <p className="p-small-med txt-clr-green-4">
                                Untuk mewujudkan visi perusahaan untuk menjadi “Excellent Plantation for the World”
                                maka melalui Divisi Riset dan Pengembangan, Perusahaan mengelola dan
                                mengoptimalisasikan bibit-bibit kelapa sawit berkualitas yang dapat menunjang bisnis
                                berkelanjutan.
                            </p>
                            <p className="p-small-med txt-clr-green-4">
                                Divisi ini didukung oleh lima departemen dengan lingkup kerja sebagai berikut:
                            </p>
                            <ul>
                                <li>
                                    Agronomi Trial, meliputi percobaan-percobaan lapangan dan laboratorium untuk
                                    perbaikan tanaman dan biaya, melalui percobaan pemupukan, percobaan pestisida,
                                    pemanfaatan produk limbah kelapa sawit serta melakukan penelitian pada ilmu dan
                                    teknologi kelapa sawit.
                                </li>
                                <li>
                                    Advisory Services: memberikan bimbingan dan rekomendasi spesifik untuk kebun
                                    kelapa sawit dalam usaha untuk mengelola praktek agronomi yang efektif dan efisien
                                    dan juga aplikasi pupuk yang seimbang untuk mendapatkan produksi yang maksimal.
                                </li>
                                <li>
                                    Crop Protection: melakukan mengendalian hama dan penyakit sebelum serangan
                                    meluas (early warning system) dengan melakukan deteksi sensus, monitoring
                                    berkelanjutan, hingga melakukan pengendalian secara biologi, pemanfaatan agen
                                    hayati serta melakukan pengujian terhadap gejala serangan penyakit Ganoderma
                                    sejak dini dengan menggunakan microscope digital.
                                </li>
                                <li>
                                    Land Management dan Techno Economic: melakukan dan memberikan bimbingan
                                    konservasi tanah/lahan, pengelolaan tanah, survey kelayakan tanah, tata kelola
                                    limbah dan pengelolaan air.
                                </li>
                                <li>Analitic Lab Chemical: menganalisa tanah, daun, pupuk, mutu CPO hingga herbisida</li>
                            </ul>
                            <p className="p-small-med txt-clr-green-4">
                                Perusahaan akan terus mengembangkan inovasi baru dalam usaha untuk meningkatkan
                                produksi tanaman secara individu yang dapat meningkatkan Yield, Cost dan juga
                                berkelanjutan.
                            </p>
                            <p className="p-small-med txt-clr-green-4">
                                Divisi Riset dan Pengembangan berencana membentuk departemen baru, yaitu Seed
                                Garden dan Tissue Culture (Palm Breeding Department) yang akan berfokus untuk
                                menciptakan dan meningkatkan bahan tanam melalui Biotechnology. Selain itu, bekerja
                                sama dengan departemen lainnya akan mengembangkan tanaman di lapangan agar dapat
                                ditinjau dari segi tanaman, lahan dan resistansi terhadap hama dan penyakit.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 no-pad">
                            <h2 className="txt-clr-green-1">Laboratorium</h2>
                            <p className="p-small-med txt-clr-green-4">
                                PT Triputra Agro Persada memiliki laboratorium Kimia Analitik yang memberikan pelayanan
                                dalam pengujian sampel daun, tanah, pupuk, tandan dan kualitas CPO dan Chlorine agar
                                dapat menghasilkan minyak sawit berkelanjutan. Selain itu, Laboratorium ini juga
                                memberikan layanan Agronomis kepada perusahaan kelapa sawit lain seperti pembuatan
                                rekomendasi pupuk, survey tanah, foto udara dan pelatihan Agronomi tanaman Kelapa
                                Sawit.
                            </p>
                            <p>
                                <img className="img-dsg-7" src="./assets/img/riset-pengembangan/img-4.png" />
                            </p>
                            <p>
                                Dalam pelaksanaannya, layanan agronomis secara detil akan melakukan pengecekan dan
                                analisa agronomi secara komprehensif dan mendalam, sehingga didapatkan solusi yang
                                tepat untuk perkembangan tanaman kelapa sawit dalam menghasilkan pertumbuhan dan
                                produksi yang optimal.
                            </p>
                            <p>
                                Laboratorium ini telah memiliki sertifikasi SNI ISO/IEC 17025:2018 yang dikeluarkan oleh
                                Badan Komite Akreditasi Nasional (KAN). Selain digunakan oleh Perusahaan dan anak-anak
                                perusahaan, layanan laboratorium ini dapat digunakan oleh perusahaan perkebunan
                                lainnya.
                            </p>
                            <ul>
                                <li>Leaf/ Rachis Analysis</li>
                                <li>Soil Analysis</li>
                                <li>Fertilizer Analysis</li>
                                <li>Fruit Fresh Bunches Analysis</li>
                                <li>Quality (CPO) Analysis, termasuk Chlorine Content</li>
                            </ul>
                            <p>
                            Untuk informasi lebih lanjut, silahkan menghubungi: <br/>
                            Admin.laboratorium@tap-agri.com

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RisetPengembangan;