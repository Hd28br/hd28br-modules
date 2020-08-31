# My Javascript Modules

My Modules, You can use this anywhere if you want :thumbsup:

## [:floppy_disk: Internet.js](Internet.js "Internet")

:warning: This only supports get and post requests!

### Importing

```html
<script src="https://hd28br.github.io/hd28br-modules/Internet-min.js"></script>
```

or

```html
<script src="https://hd28br.github.io/hd28br-modules/Internet.js"></script>
```

### How many pepole are in space?

```javascript
var Web = Internet.Requests;
Web.UseProxy = true;
Web.Proxy = Internet.Proxies.CORSAnywhere;

Web.GET("http://api.open-notify.org/astros.json").then(function (a) {
	let J = JSON.parse(a.responseText);
	alert("There are " + J["number"] + " pepole in space.");
});
```

### A proxy inside a proxy!

```javascript
var Web = Internet.Requests;
Web.UseProxy = true;
Web.Proxy = Internet.Proxies.JoinProxies;

Web.Proxy.ProxyA = Internet.Proxies.CORSAnywhere;
Web.Proxy.ProxyB = Internet.Proxies.allOrigins;

Web.GET("https://example.com").then(function (a) {
	alert("A proxy inside a proxy!");
});
```

### Can't import a module because of CORB? Use Internet.js.

```javascript
var Web = Internet.Requests;
Web.UseProxy = true;
Web.Proxy = Internet.Proxies.CORSAnywhere;

Web.GET("https://modulewebsite.com/module.js").then(function (a) {
	exec(a.responseText);
});
```
