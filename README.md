# My Javascript Modules

My Modules, You can use this anywhere if you want :fa-thumbs-o-up:

## [:floppy_disk: Internet.js](Internet.js "Internet")

:warning: This only suppors get and post requests!

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
