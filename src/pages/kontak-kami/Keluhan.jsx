import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './KontakKami.css';
import axios from 'axios';
import ApiRequest from '../../utils/ApiRequest';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {isMobile} from 'react-device-detect';

const apiRequest = new ApiRequest();

class Keluhan extends Component{

    constructor(props) {
        super(props);
        this.state = {
           curNicename : "",
           pageData: {
            category : []
            },
            listForm: [],
            nameForm: "",
            labelBtnSubmit: "",
            labelFile: "",
            msgRequired: "",
            msgEmail: ""
        }

        this.handleSubmitForm = this.handleSubmitForm.bind(this);
    }

    handleInputValueChange = (e) => {
        let newListForm = [...this.state.listForm];
        let found = newListForm.find(item => item.nicename === e.target.name);
        found["value"] = e.target.value;

        this.setState({
            listForm : newListForm
        })
    }

    showToast(type, msg){
        if(type === "success"){
            toast.success(msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
        else{
            toast.error(msg, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }
    }

    handleSubmitForm(){
 
        let formValid = true;
        let i = 0;
        while(i<this.state.listForm.length){
            if(this.state.listForm[i].is_required && this.state.listForm[i].value === ""){
                formValid = false;
            }

            if(this.state.listForm[i].type === 2){
                 if(this.state.listForm[i].value !== ""){
                    if(!this.validateEmail(this.state.listForm[i].value)){
                        formValid = false;  
                        this.showToast("error", this.state.msgEmail);
                    }
                }
            }
            i++;
        }

        if(formValid){
            let formSubmit = {};
            let j=0;
            while(j<this.state.listForm.length){
                formSubmit[this.state.listForm[j].nicename] = this.state.listForm[j].value;
                j++;
            }

            console.log(formSubmit);

            axios.post(apiRequest.getBaseApiUrl() + '/keluhankami', formSubmit)
            .then(function (response) {
                if(response.data.success){
                    this.showToast("success", response.data.message);
                    this.handleResetForm();
                }
                else{
                    this.showToast("error", response.data.message);
                }
            }.bind(this))
            .catch(function (error) {
                this.showToast("error", error.message);
            }.bind(this));
        }
        else{
            this.showToast("error", this.state.msgRequired);
        }

        return;
    }

    handleResetForm(){
        let formReset = [...this.state.listForm];

        let i=0;
        while(i<formReset.length){
            if(formReset[i].type === 5){
                formReset[i].value = "0";
            }
            else{
                formReset[i].value = "";
            }
            
            i++;
        }

        this.setState({
            listForm: formReset
        })
    }

    validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleChangePage = (pathName) => {
        this.props.handleChangePage(pathName);
    }

    handleGetContent = (nicename, pathName) => {
        let data = {
            nicename : this.props.nicename
        };

        axios.post(apiRequest.getBaseApiUrl() + '/content', data)
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    pageData: response.data.data,
                    curNicename: nicename
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
    }

    handleGetForm = () =>{
        axios.get(apiRequest.getBaseApiUrl() + '/formkeluhan')
        .then(function (response) {
            if(response.data.success){
                this.setState({
                    listForm : response.data.data.body,
                    nameForm: response.data.data.title,
                    labelBtnSubmit: response.data.data.button,
                    labelFile: response.data.data.file,
                    msgRequired: response.data.data.msg_required,
                    msgEmail: response.data.data.msg_email
                })
            }
            else{
            }
        }.bind(this))
        .catch(function (error) {
        });
        
    }

    componentDidMount(){
        this.handleGetContent(this.props.nicename);
        this.props.handleActivePage(this.props.nicename);
        this.setState({
            curNicename: this.props.nicename
        })
        this.handleGetForm();
    }

    getFile() {
        document.getElementById("upfile").click();
      }
      
    sub(e) {
        let fieldNicename = e.target.name;

        var formData = new FormData();
        formData.append(e.target.name, e.target.files[0]);

        axios.post(apiRequest.getBaseApiUrl() + '/uploadbukti', formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        .then(function (response) {
            if(response.data.success){

                let newListForm = [...this.state.listForm];
                let found = newListForm.find(item => item.nicename === fieldNicename);
                found["value"] = response.data.data.link;

                this.setState({
                    listForm : newListForm
                })

            }
            else{
                this.showToast("error", response.data.message);
            }
        }.bind(this))
        .catch(function (error) {
            this.showToast("error", error.message);
        }.bind({this: this, fieldNicename: fieldNicename}));
    }

    render(){
        const { subMenuRight } = this.props;
        const { curNicename, pageData, nameForm, listForm, labelBtnSubmit, labelFile} = this.state;

        return(
            <div className="row box-content">

                <ToastContainer
                    position="top-right"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                />

                <div className="col col-12 box-header-menu">
                     <img src={isMobile ? pageData.banner_mobile : pageData.banner}  alt="" />
                    <h1 className="txt-clr-white-1 txt-uppercase">{pageData.title}</h1>
                </div>
                <div className="col col-lg-12 col-md-12 col-sm-12 col-xs-12 box-desc bg-clr-white-1">
                    <div className="row">
                        <div className="col col-lg-9 col-md-9 col-sm-12 col-xs-12">


                            {/* <option value="0">Text</option>
                            <option value="1">Number</option>
                            <option value="2">Email</option>
                            <option value="3">TextArea</option>
                            <option value="4">File</option>
                            <option value="5">Radio Button</option>*/}


                            <h2 className="txt-uppercase txt-clr-green-1">{nameForm}</h2>

                            <div className="p-l-15">

                                {listForm.length !== 0 && listForm.map((field, idx) => {
                                    switch(field.type){
                                        case 0:
                                            return  <div key={idx} className="form-group row">
                                                <label className="txt-clr-green-2 label-small-bold col-form-label col col-lg-4 col-md-4 col-sm-12 col-xs-12" htmlFor={field.nicename}>
                                                    {field.name} <span className="txt-clr-red-1">{field.is_required ? "*" : ""}</span>
                                                </label>
                                                <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                    <input value={field.value} type="text" className="form-control" style={{borderColor: field.is_required && field.value === "" ? "#ff0000" : "#707070"}} id={field.nicename} name={field.nicename} placeholder="" onChange={(e) => this.handleInputValueChange(e)} />
                                                    
                                                    {
                                                        field.is_placeholder === 1 &&  <label className="label-xs-small-regular txt-clr-gray-2">{field.placeholder}</label>
                                                    }
                                                    
                                                </div>
                                            </div>
                                        case 1:
                                            return <div key={idx} className="form-group row">
                                                <label className="txt-clr-green-2 label-small-bold col-form-label col col-lg-4 col-md-4 col-sm-12 col-xs-12" 
                                                    htmlFor={field.nicename}>
                                                    {field.name} <span className="txt-clr-red-1">{field.is_required ? "*" : ""}</span>
                                                </label>
                                                <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                    <input value={field.value} type="number" className="form-control" style={{borderColor: field.is_required && field.value === "" ? "#ff0000" : "#707070"}} id={field.nicename} name={field.nicename} placeholder="" onChange={(e) => this.handleInputValueChange(e)} />
                                                    {
                                                        field.is_placeholder === 1 &&  <label className="label-xs-small-regular txt-clr-gray-2">{field.placeholder}</label>
                                                    }
                                                </div>
                                            </div>
                                        case 2:
                                            return <div key={idx} className="form-group row">
                                                <label className="txt-clr-green-2 label-small-bold col-form-label col col-lg-4 col-md-4 col-sm-12 col-xs-12" 
                                                    htmlFor={field.nicename}>
                                                    {field.name}  <span className="txt-clr-red-1">{field.is_required ? "*" : ""}</span>
                                                </label>
                                                <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                    <input value={field.value} type="text" className="form-control" style={{borderColor: field.is_required && field.value === "" ? "#ff0000" : "#707070"}}  id={field.nicename} name={field.nicename} placeholder="" onChange={(e) => this.handleInputValueChange(e)} />
                                                    {
                                                        field.is_placeholder === 1 &&  <label className="label-xs-small-regular txt-clr-gray-2">{field.placeholder}</label>
                                                    }
                                                </div>
                                            </div>
                                        case 3:
                                            return <div key={idx} className="form-group row">
                                                <label className="txt-clr-green-2 label-small-bold col-form-label col col-lg-4 col-md-4 col-sm-12 col-xs-12" 
                                                    htmlFor={field.nicename}>
                                                    {field.name}  <span className="txt-clr-red-1">{field.is_required ? "*" : ""}</span>
                                                </label>
                                                <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                    <textarea value={field.value} className="form-control"  style={{borderColor: field.is_required && field.value === "" ? "#ff0000" : "#707070"}} id={field.nicename} name={field.nicename} placeholder=""  onChange={(e) => this.handleInputValueChange(e)} />
                                                    {
                                                        field.is_placeholder === 1 &&  <label className="label-xs-small-regular txt-clr-gray-2">{field.placeholder}</label>
                                                    }
                                                </div>
                                            </div>
                                        case 4:
                                            return <div key={idx} className="form-group row">
                                                <label className="txt-clr-green-2 label-small-bold col-form-label col col-lg-4 col-md-4 col-sm-12 col-xs-12" 
                                                    htmlFor={field.nicename}>
                                                    {field.name}  <span className="txt-clr-red-1">{field.is_required ? "*" : ""}</span>
                                                </label>
                                                <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12">
                                                    {
                                                        field.value !== "" &&
                                                        <React.Fragment>
                                                            <img src={field.value} style={{marginBottom: "15px"}}  alt="" />
                                                        </React.Fragment> 
                                                    }
                                                    
                                                    <input id="upfile" type="file" name={field.nicename} onChange={(e) => this.sub(e)} hidden/>
                                                    <button className="btn-1 txt-clr-white-1"  style={{backgroundColor: field.is_required && field.value === "" ? "#ff0000" : "#707070"}}  onClick={() => this.getFile()}>{labelFile} <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                                                    {
                                                        field.is_placeholder === 1 &&  <label className="label-xs-small-regular txt-clr-gray-2">{field.placeholder}</label>
                                                    }
                                                </div>
                                            </div>
                                        case 5:
                                            return <div key={idx} className="form-group row">
                                                <label className="txt-clr-green-2 label-small-bold col-form-label col col-lg-4 col-md-4 col-sm-12 col-xs-12" 
                                                    htmlFor={field.nicename}>
                                                    {field.name}  <span className="txt-clr-red-1">{field.is_required ? "*" : ""}</span>
                                                </label>
                                                <div className="col col-lg-8 col-md-8 col-sm-12 col-xs-12" style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
                                                    <div className="form-check">
                                                        <label className="form-check-label">
                                                            <input type="radio" className="form-check-input csr-pointer" value="0" checked={field.value === "0" ? true : false} name="tindakan" onChange={(e) => this.handleInputValueChange(e)} />{field.additional[0]}
                                                        </label>
                                                    </div>
                                                    <div className="form-check m-l-10">
                                                        <label className="form-check-label">
                                                            <input type="radio" className="form-check-input csr-pointer" value="1" checked={field.value === "1" ? true : false} name="tindakan" onChange={(e) => this.handleInputValueChange(e)} />{field.additional[1]}
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        default:
                                            return "";
                                    }

                                    
                                })}

                                <hr />

                                {
                                    labelBtnSubmit !== "" &&
                                    <button className="btn-1 bg-clr-green-2 txt-clr-white-1" style={{"float": "right"}} onClick={this.handleSubmitForm} >{labelBtnSubmit} <FontAwesomeIcon icon="arrow-right" className="icon" /></button>
                                }
                            </div>

                        </div>

                        {
                            subMenuRight.length > 0 &&

                            <div className="col col-lg-3 col-md-3 col-sm-12 col-xs-12 no-pad">
                                <div className="sub-menu-right no-pad">

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

export default Keluhan;