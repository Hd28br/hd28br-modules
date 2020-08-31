# My Javascript Modules

My Modules, You can use this anywhere if you want :fa-thumbs-o-up:

## [:floppy_disk: Internet.js](Internet.js "Internet")

:warning: This only suppors get and post requests!

### Imporing

```html
<script src="https://hd28br.github.io/hd28br-modules/Internet-min.js"></script>
```

or

```html
<script src="https://hd28br.github.io/hd28br-modules/Internet.js"></script>
```

### How many pepole are in space?

```javascript
var R = Internet.Requests;
R.UseProxy = true;
R.Proxy = Internet.Proxies.CORSAnywhere;

R.GET("http://api.open-notify.org/astros.json").then(function (a) {
	let J = JSON.parse(a.responseText);
	alert("There are " + J["number"] + " pepole in space.");
});
```

### A proxy inside a proxy!

```javascript
var R = Internet.Requests;
R.UseProxy = true;
R.Proxy = Internet.Proxies.JoinProxies;

R.Proxy.ProxyA = Internet.Proxies.CORSAnywhere;
R.Proxy.ProxyB = Internet.Proxies.allOrigins;

R.GET("https://example.com").then(function (a) {
	alert("A proxy inside a proxy!");
});
```
