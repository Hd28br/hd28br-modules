var Internet = {
    "Requests": {},
    "Proxies": {}
}

Internet.Requests = {}

// Requests

Internet.Requests.Proxy = {}
Internet.Requests.UseProxy = {}

Internet.Requests.GET = function (URL) {
    return new Promise (function (resolve,reject) {
        let XMLHttp = new XMLHttpRequest();
        XMLHttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                resolve(this);
            }
        }

        if (this.UseProxy) {
            XMLHttp.open("GET",this.Proxy.GET(URL),true);
        } else {
            XMLHttp.open("GET",URL,true);
        }

        XMLHttp.send();
    });
};

Internet.Requests.POST = function (URL,data) {
    return new Promise (function (resolve,reject) {
        let XMLHttp = new XMLHttpRequest();
        XMLHttp.onreadystatechange = function () {
            if (this.readyState == 4) {
                resolve(this);
            }
        }
        
        if (this.UseProxy) {
            XMLHttp.open("POST",this.Proxy.POST(URL,data),true);
        } else {
            XMLHttp.open("POST",URL,true);
        }

        XMLHttp.send(data);
    });
};

Internet.Requests.Request = function (r) {
    let Cut = r.split(" ");
    let UseProxy = Cut.pop();

    if (Cut[0] == "GET") {
        return this.GET(Cut[1]);
    }
 
    if (Cut[0] == "POST") {
        return this.POST(Cut[1],Cut[2]);
    }
}

// Proxies


// CORSAnywhere

Internet.Proxies.CORSAnywhere = {}

Internet.Proxies.CORSAnywhere.GET = function (URL) {
    return "https://cors-anywhere.herokuapp.com" + encodeURI(URL);
}

Internet.Proxies.CORSAnywhere.POST = function (URL,data) {
    return "https://cors-anywhere.herokuapp.com" + encodeURI(URL);
}

// JoinProxies

Internet.Proxies.JoinProxies = {}

Internet.Proxies.JoinProxies.ProxyA = {}
Internet.Proxies.JoinProxies.ProxyB = {}

Internet.Proxies.JoinProxies.POST = function (URL,data) {
    return ProxyA.POST(ProxyB.POST(URL,data),data)
}

Internet.Proxies.JoinProxies.GET = function (URL) {
    return ProxyA.GET(ProxyB.GET(URL));
}

// CORSProxyHTMLDRIVEN

Internet.Proxies.CORSProxyHTMLDRIVEN = {}

Internet.Proxies.CORSProxyHTMLDRIVEN.GET = function (URL) {
    return "https://cors-proxy.htmldriven.com/?url=" + encodeURI(URL);
}

Internet.Proxies.CORSProxyHTMLDRIVEN.POST = function (URL,data) {
    return "https://cors-proxy.htmldriven.com/?url=" + encodeURI(URL);
}
