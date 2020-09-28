import React, { Component } from 'react'
import Format1 from '../../components/format/format_1';
import Format2 from '../../components/format/format_2';
import Format3 from '../../components/format/format_3';
import Format4 from '../../components/format/format_4';
import Format5 from '../../components/format/format_5';
import Format6 from '../../components/format/format_6';
import Format7 from '../../components/format/format_7';
import Format8 from '../../components/format/format_8';
import Format9 from '../../components/format/format_9';
import Format10 from '../../components/format/format_10';

const dataDumm = {
    "banner": "",
    "title": "Tentang TAP",
    "category": [
        {
            "id": 1,
            "name": "Tentang TAP",
            "nicename": "tentang-tap-1",
            "type": 1,
            "content": [
                {
                    "id": 1,
                    "format": 7,
                    "title": "Format 7",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": "/assets/img/tentang-kami/dna/icon-3.png",
                    "background_color": "#C8D4B8",
                    "desc": `<p><q><i>Menempatkan kemanusiaan dan tujuan yang lebih<br/>mulia di atas kepentingan pribadi.</i></q></p>
                    <ul>
                        <li>Kepedulian kepada sesama dan lingkungan dengan tindakan nyata.</li>
                        <li>Membangun generasi penerus yang lebih hebat.</li>
                    </ul></p>`
                },
                {
                    "id": 1,
                    "format": 7,
                    "title": "Format 7",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": "/assets/img/tentang-kami/dna/icon-4.png",
                    "background_color": "#D9DED2",
                    "desc": `<p><q><i>Menempatkan kemanusiaan dan tujuan yang lebih<br/>mulia di atas kepentingan pribadi.</i></q></p>
                    <ul>
                        <li>Kepedulian kepada sesama dan lingkungan dengan tindakan nyata.</li>
                        <li>Membangun generasi penerus yang lebih hebat.</li>
                    </ul></p>`
                },
                {
                    "id": 1,
                    "format": 8,
                    "title": "Format 8",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": "/assets/img/tentang-kami/dna/icon-4.png",
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                },
                {
                    "id": 1,
                    "format": 9,
                    "title": "Format 9",
                    "image": "/assets/img/operasional/img-3.png",
                    "icon": null,
                    "button": true,
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>
                    <p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>
                    <p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>
                    <p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>
                    <p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                },
                {
                    "id": 1,
                    "format": 10,
                    "title": "Format 10",
                    "image": "/assets/img/operasional/img-3.png",
                    "icon": null,
                    "button": null,
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                },
                {
                    "id": 1,
                    "format": 10,
                    "title": "Format 10",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": null,
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                },
                {
                    "id": 1,
                    "format": 1,
                    "title": "Format 1",
                    "image": null,
                    "icon": null,
                    "background_color": null,
                    "desc": "<p dir=\"ltr\" style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 10pt; text-align: justify;\"><span style=\"font-size: 11pt; font-family: Tahoma,sans-serif; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">PT. Triputra Agro Persada is a palm oil and rubber company located in Sumatera and Kalimantan. Together with its subsidiaries, we are committed to always producing high-quality Crude Palm Oil and Palm Kernel products to meet domestic and foreign market needs.</span></p>\r\n<p class=\"p-small-med txt-clr-green-4\" style=\"box-sizing: border-box; margin-top: 0px; margin-bottom: 1rem; text-align: justify; font-family: Roboto-Regular; font-size: 16px; background-color: #f0eddc; color: #00301e !important;\">&nbsp;</p>\r\n<p dir=\"ltr\" style=\"line-height: 1.38; margin-top: 0pt; margin-bottom: 10pt; text-align: justify;\"><span style=\"font-size: 11pt; font-family: Tahoma,sans-serif; color: #000000; background-color: transparent; font-weight: 400; font-style: normal; font-variant: normal; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;\">We believe that we can contribute positively to the world economy and social environment. This is in accordance with our vision to become an &ldquo;Excellent Plantation for the World&rdquo; by developing its mission to be &ldquo;Green Plantation for Better Quality of Life&rdquo;.</span></p>"
                },
                {
                    "id": 1,
                    "format": 2,
                    "title": "Format 2",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": null,
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                },
                {
                    "id": 1,
                    "format": 3,
                    "title": "Format 3",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": null,
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                },
                {
                    "id": 1,
                    "format": 4,
                    "title": "Format 4",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": null,
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                },
                {
                    "id": 1,
                    "format": 5,
                    "title": "Motto Kami",
                    "image": "/assets/img/tentang-kami/img-4.png",
                    "icon": null,
                    "background_color": null,
                    "desc": `<q><i>Kami Semangat Bekerja</i></q>`
                },
                {
                    "id": 1,
                    "format": 6,
                    "title": "Format 6",
                    "image": "/assets/img/tentang-kami/img-5.png",
                    "icon": null,
                    "background_color": null,
                    "desc": `<p className="p-small-med txt-clr-green-4">
                        Warga negara Indonesia, memperoleh gelar Sarjana Teknik Mesin pada tahun 1968 dari Institut Teknologi Bandung (ITB). 
                        Kemudian di tahun 2019, beliau memperoleh Gelar Kehormatan Doktor Honoris Causa dari ITB atas prestasi dan 
                        kepeduliannya akan kesejahteraan, kemakmuran, pendidikan dan masa depan bangsa Indonesia.
                    </p>`
                }
            ]
        }
    ]
}


class PreviewFormatContent extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
        }
    }

    render(){
        return(
            <div className="row box-content">

                {/* Banner Header */}
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-header-menu">
                    <img src="/assets/img/galeri/img-1.png"  alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">Galeri</h1>
                </div>

                {/* Content | Cek Format Component */}
                {dataDumm.category[0].content.map((content, index) => {
                    switch(content.format){
                        case 1:
                            return  <Format1 key={index} content={content} />
                        case 2:
                            return  <Format2 key={index} content={content} />
                        case 3:
                            return  <Format3 key={index} content={content} />
                        case 4:
                            return  <Format4 key={index} content={content} />
                        case 5:
                            return  <Format5 key={index} content={content} />
                        case 6:
                            return  <Format6 key={index} content={content} />
                        case 7:
                            return  <Format7 key={index} content={content} />
                        case 8:
                            return  <Format8 key={index} content={content} />
                        case 9:
                            return  <Format9 key={index} content={content} />
                        case 10:
                            return  <Format10 key={index} content={content} />
                        
                        default:
                            return "";
                    }
                })}

                {/* Without Right Sub Menu */}

                {/* With Right Sub Menu */}

                {/* Footer */}
            </div>
        )
    }
}

export default PreviewFormatContent;