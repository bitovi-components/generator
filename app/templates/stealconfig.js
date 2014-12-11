System.config({
  baseURL: "./",
  map: {
    "jquery/jquery": "jquery",
    "can/util/util.js": "can/util/jquery/jquery.js",
    util: "bower_components/component-utils"
  },
  paths: {
    jquery: "bower_components/jquery/dist/jquery.js",
    "can/*": "bower_components/canjs/*.js",
    can: "bower_components/canjs/can.js"
  },
    meta: {
        jquery: { exports: "jQuery" }
    },
  ext: {
    less: "bower_components/steal/less",
    stache: "can/view/stache/system"
  }
});
System.buildConfig = {
  map: {
    "can/util/util": "can/util/domless/domless"
  }
};
