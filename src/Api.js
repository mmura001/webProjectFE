import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
export function isLocalhost() {
    return (window.location.host.includes("127.0.0.1") || window.location.host.includes("localhost"));
}

export function getUrl(url) {
    if (isLocalhost()) {
        return 'http://localhost:8080' + url;
    } else {
        return "http://localhost:8080"+url;
    }
}

export function getOutboundUrl(url) {
    if (isLocalhost()) {
        return "http://localhost:8080/"+url
    } else {
        return "http://localhost:8080/"+url
    }
}

export function configurationVariables(category){
    if(isLocalhost()){
        switch(category){
            case "email":
                return 'support@legalintake.com'
            case 'telephone':
                return '+16156958044'
            case 'reportLink':
                return 'https://d-lipnetreports.mapcom.local/'
            case 'legalIntakeWebsite':
                return 'www.legalintake.com'
            case 'legalIntakeUrl':
                return 'https://legalintake.com/'
            case 'returnTo':
                return 'http://localhost:8080/'
            case 'clientLimit':
                return 3
            default:
                break
        }
    }
    else{
        switch(category){
            case "email":
                return 'support@legalintake.com'
            case 'telephone':
                return '+16156958044'
            case 'reportLink':
                return 'https://d-lipnetreports.mapcom.local/'
            case 'legalIntakeWebsite':
                return 'www.legalintake.com'
            case 'legalIntakeUrl':
                return 'https://legalintake.com/'
            case 'returnTo':
                return 'http://localhost:8080/'
            case 'clientLimit':
                return 3
            default:
                break
        }
    }
}

export function call(url, parameters, successHandler, errorHandler, requestType) {
    const token = localStorage.getItem("token");
    if (!parameters.headers) {
        parameters.headers = {};
    }

    if (!parameters.headers['Authorization']) {
        parameters.headers['Authorization'] = 'Bearer ' + token;
    }

    if (!parameters.headers['Content-Type'] && parameters.body && !requestType) {
        parameters.headers['Content-Type'] = 'application/json';
        parameters.body = JSON.stringify(parameters.body);
    }

    if(!url.includes("qav2")){
     url = getUrl(url);
    }
        fetch(url, parameters)
        .then(function(response) {
            getContent(response).then((content) => {
                if (response.ok) {
                    if (typeof(successHandler) === 'function') {
                        successHandler(content, response.status);
                    }
                } else if (response.status === 401) {
                    // 
                    if(localStorage.getItem('user') == 'true'){
                        localStorage.removeItem('token')
                        localStorage.removeItem('user')
                        window.location.href = configurationVariables('returnTo')
                    }
                    // window.location.reload()
                    // window.location.href = "http://" + window.location.hostname;
                } else {
                    Swal.fire(JSON.parse(content)["error"]['message'], '', 'error').then((result) => {
                    })
                    errorHandler(response.statusText, content, response.status)
                }
            })
        });


}

function getContent(response) {
    let contentType = response.headers.get("Content-Type");
    if (contentType === 'application/json') {
        return (response.json());
    }
    return response.text();
}


