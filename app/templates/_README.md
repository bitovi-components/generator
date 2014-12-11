# <<%= repoName %>>

This is a simple example component. This is the documentation.

## Installation

`bower install --save bitovi/<%= repoName %>`

## Usage

In your javascript:

```js
import "bower_components/<%= repoName %>/<%= repoName %>";
```

In your template:

```html
<<%= repoName %> greeting="Hi"></<%= repoName %>>
```

## API

### Attributes

* `{String} greeting="Hello"` - The greeting
* `{String} target="World"` - The target being greeted.
* `{Boolean} excited=false` - Whether to be really excited

### Methods

* `logGreeting()` - Prints the greeting message into the console.

### Events

* `greeted` - Fired whenever a greeting is complete.

### Content

* `select=""` - Inserted under the greeting. Background color and styles
  changed.

## Developing

* `npm install`
* `grunt serve [--port PORT=8125]`
* Go to [demo page](http://localhost:8125)

## Testing

* `npm install`
* `grunt test`

You can run the test server and visit `/test.html` to run the tests in the
browser, as well. Tests currently use mocha.
