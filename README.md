# amd-define
define() for node.js. Load dependencies in AMD-style on node.js

## Usage

In yourindex.js:
```
global.define = require('amd-define')({
    ignoreErrors: false
});
```
In yourmodule.js:
```
define('myModule', [
    'backbone', 
    'underscore'
], function(
    Backbone,
    _
) {
    return Backbone.Model.extend({});
});
```
or 
```
define([
    'backbone', 
    'underscore'
], function(
    Backbone,
    _
) {
    return Backbone.Model.extend({});
});
```
