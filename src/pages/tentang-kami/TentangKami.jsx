import React, { Component } from 'react'
import './TentangKami.css';

class TentangKami extends Component{

    componentDidMount(){
        this.props.handleActivePage(this.props.nicename);
    }

    render(){
        return(
            <div className="row box-content">
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/tentang-kami/about/img-1.png" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Tentang Kami</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-gray-5">
                    <div className="row">
                        <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12">
                            <p className="p-small-med txt-clr-green-4">
                                PT. Triputra Agro Persada merupakan perusahaan yang bergerak di bidang perkebunan sawit dan karet. 
                                Bersama dengan anak-anak perusahaan yang terletak di berbagai kota di Sumatera dan Kalimantan, 
                                PT. Triputra Agro Persada berkomitmen untuk selalu menghasilkan produk minyak kelapa sawit (Crude Palm Oil) 
                                dan inti kelapa sawit (Palm Kernel) yang berkualitas tinggi untuk memenuhi kebutuhan pasar di dalam negeri maupun di luar negeri.
                            </p>
                            <p className="p-small-med txt-clr-green-4">
                                PT. Triputra Agro Persada percaya dapat berkontribusi positif bagi perekonomian dunia dan lingkungan sosial. 
                                Hal ini sesuai dengan visi perusahaan untuk menjadi “Excellent Plantation for the World” dengan mengembang 
                                misi menjadi “Green Plantation for Better Quality of Life”.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="txt-uppercase">Sejarah</h2>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <p className="p-small-med txt-clr-green-4">
                                PT. Triputra Agro Persada pertama kali didirikan dengan nama PT. Alam Permata Indah pada tahun 2005, 
                                kemudian melakukan perubahan nama menjadi PT. Triputra Agro Persada di tahun yang sama. 
                                Sejak didirikan sampai dengan saat ini, Perusahaan telah mampu mengembangkan usahanya di beberapa provinsi di Indonesia, 
                                yaitu Jambi, Kalimantan Tengah dan Kalimantan Timur.    
                            </p>
                            <p className="p-small-med txt-clr-green-4">
                                Dalam upaya untuk meningkatkan kegiatan usahanya, Perusahaan melakukan perluasan areal perkebunan dengan berinvestasi
                                ke perusahaan-perusahaan perkebunan lainnya baik melalui Perusahaan Patungan (Joint Venture),
                                maupun dengan melakukan Akuisisi Perusahaan (Company Acquisition).
                            </p>
                            <p className="p-small-med txt-clr-green-4">
                                Dalam mengembangkan bisnisnya, PT. Triputra Agro Persada memiliki komitmen untuk mematuhi peraturan pemerintah
                                yang berlaku dan mengikuti standar dan sertifikasi yang diakui oleh nasional maupun internasional,
                                yaitu dengan memiliki sertifikat Indonesian Sustainable Palm Oil (ISPO), Roundtable on Sustainable Palm Oil (RSPO),
                                dan Program Penilaian Peringkat Kinerja Perusahaan Dalam Pengelolaan Lingkungan (PROPER).
                            </p>
                        </div>
                        <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                            <img className="img-dsg-1" src="/assets/img/tentang-kami/img-2.png" />
                        </div>
                    </div>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc bg-clr-gray-4">
                    <h2 className="txt-uppercase">Visi</h2>
                    <p><q><i>Membangun Perkebunan Terbaik<br/>Bagi Dunia</i></q></p>
                    <p className="p-small-med txt-clr-green-4">
                        Membangun perkebunan secara berkelanjutan yang memberikan hasil perkebunan yang maksimal, 
                        produktifitas kerja yang tinggi, beban yang efisien, kemampuan tanam yang agresif dengan kualitas terbaik, 
                        yang tentunya disertai reputasi yang baik dan dukungan pendanaan dari pemegang saham yang dimiliki dan perbankan.
                    </p>
                </div>
                <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 box-desc bg-clr-gray-3">
                    <h2 className="txt-uppercase">Misi</h2>
                    <p><q><i>Mengembangkan Perkebunan Ramah Lingkungan<br/>yang Mampu Memperbaiki Taraf Hidup Orang Banyak</i></q></p>
                    <p className="p-small-med txt-clr-green-4">
                        Menjadi perusahaan yang bertaraf internasional yang dominan dan diperhitungkan baik oleh perusahaan perkebunan 
                        lainnya maupun pasar. Dapat memberikan kontribusi positif bagi perekonomian dunia dan lingkungan sosial dengan konsep 
                        perkebunan yang ramah ingkungan yang dapat meningkatkan taraf hidup orang banyak.
                    </p>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="txt-uppercase">Struktur perusahaan</h2>
                        </div>
                        <div className="col col-lg-10 col-md-10 col-sm-12 col-xs-12">
                            <img className="img-dsg-2" src="/assets/img/tentang-kami/img-3.png" />
                        </div>
                    </div>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-gray-5">
                    <div className="box-img-quote">
                        <img src="/assets/img/tentang-kami/img-4.png" />
                        <div className="bx-quote">
                            <div className="title bg-clr-green-1 txt-clr-white-1">
                                Motto Kami
                            </div>
                            <div className="quote bg-clr-white-1 txt-clr-green-4">
                                <q><i>Semangat untuk<br/>Mencapai yang Terbaik</i></q>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TentangKami;