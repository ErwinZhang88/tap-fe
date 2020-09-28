import axios from 'axios';

export default class ApiRequest{
    changeLanguage = (lang) =>{
        this.setLangHeader(lang);
        //window.location.href = window.location.href;  
        window.location.reload();  
    }

    setLangHeader = (lang) => {
        let currLang = window.localStorage.getItem('lang');
        if(currLang === null){
            window.localStorage.setItem('lang', 'en');
            currLang = "en";
        }
        else{
            if(currLang !== lang && lang !== undefined){
                window.localStorage.setItem('lang', lang);
                currLang = lang;
            }
        }
    }

    setAxiosHeader = () => {
        this.setLangHeader();
        axios.defaults.headers.common['lang'] = window.localStorage.getItem('lang');
    }

    getBaseUrl = () =>{
        return process.env.REACT_APP_BASE_URL;
    }

    getBaseApiUrl = () =>{
        return process.env.REACT_APP_BASE_API_URL;
    }

    getLocalHost = () =>{
        return "http://localhost:3000/dummy";
    }
}
