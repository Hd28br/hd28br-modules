var Internet={Requests:({},{}),Proxies:{}};Internet.Requests.Proxy={},Internet.Requests.UseProxy={},Internet.Requests.GET=function(e){let t=this;return new Promise(function(n,r){let o=new XMLHttpRequest;o.onreadystatechange=function(){4==this.readyState&&n(this)},t.UseProxy?o.open("GET",t.Proxy.GET(e),!0):o.open("GET",e,!0),o.send()})},Internet.Requests.POST=function(e,t){let n=this;return new Promise(function(r,o){let s=new XMLHttpRequest;s.onreadystatechange=function(){4==this.readyState&&r(this)},n.UseProxy?s.open("POST",n.Proxy.POST(e,t),!0):s.open("POST",e,!0),s.send(t)})},Internet.Requests.Request=function(e){let t=e.split(" ");return"GET"==t[0]?this.GET(t[1]):"POST"==t[0]?this.POST(t[1],t[2]):void 0},Internet.Proxies.CORSAnywhere={},Internet.Proxies.CORSAnywhere.GET=function(e){return"https://cors-anywhere.herokuapp.com/"+encodeURI(e)},Internet.Proxies.CORSAnywhere.POST=function(e,t){return"https://cors-anywhere.herokuapp.com/"+encodeURI(e)},Internet.Proxies.JoinProxies={},Internet.Proxies.JoinProxies.ProxyA={},Internet.Proxies.JoinProxies.ProxyB={},Internet.Proxies.JoinProxies.POST=function(e,t){return ProxyA.POST(ProxyB.POST(e,t),t)},Internet.Proxies.JoinProxies.GET=function(e){return ProxyA.GET(ProxyB.GET(e))},Internet.Proxies.CORSProxyHTMLDRIVEN={},Internet.Proxies.CORSProxyHTMLDRIVEN.GET=function(e){return"https://cors-proxy.htmldriven.com/?url="+encodeURI(e)},Internet.Proxies.CORSProxyHTMLDRIVEN.POST=function(e,t){return"https://cors-proxy.htmldriven.com/?url="+encodeURI(e)};
