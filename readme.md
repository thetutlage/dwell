# Ponder

Unfortunately Javascript does not have a reflection api to inspect methods to get list of method arguments.
Ponder will help you in inspecting a method or class contructor to get an array of parameters.

```javascript

var ponder = require('ponder')

class Greet {

  constructor (foo,bar) {

  }
}

ponder.inspect(Greet.toString())
// outputs ['foo','bar']
```

or for a javascript function 

```javascript
function HelloWorld(baz) {
  
}
ponder.inspect(HelloWorld.toString())
// outputs ['baz']
```
