My Javascript Modules

### Internet.js
  
        Internet.Requests.UseProxy = true
        Internet.Requests.Proxy = Internet.Proxies.CORSAnywhere

        Internet.Requests.GET("www.google.com").then(function (a) {
            alert(a.responseText)
        });
