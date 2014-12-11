module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  grunt.loadNpmTasks("testee");
  grunt.loadNpmTasks("steal-tools");
  grunt.config.init({
    pkg: grunt.file.readJSON("package.json"),
    stealBuild: {
      demo: {
        options: {
          system: {
            config: __dirname + "/stealconfig.js",
            main: "demo/demo",
            bundlesPath: "./dist/"
          },
          buildOptions: {
            minify: true,
            bundleSteal: !grunt.option("standalone")
          }
        }
      },
      component: {
        options: {
          system: {
            config: __dirname + "/stealconfig.js",
            main: "<%= repoName %>",
            bundlesPath: "./dist/"
          },
          buildOptions: {
            minify: true,
            bundleSteal: false
          }
        }
      }
    },
    copy: {
      demoLoader: {
        src: "./bower_components/component-utils/demo-loader.js",
        dest: "./dist/demo-loader.js"
      }
    },
    connect: {
      server: {
        options: {
          hostname: "localhost",
          port: grunt.option("port") || 8125,
          debug: true
        }
      },
      test: {
        options: {
          hostname: "localhost",
          port: 3996,
          debug: false
        }
      }
    },
    testee: {
      phantom: ["test.html"]
    }
  });
  grunt.registerTask("build", [
    "copy:demoLoader",
    "stealBuild:demo",
    "stealBuild:component"
  ]);
  grunt.registerTask("test", ["connect:test", "testee:phantom"]);
  grunt.registerTask("serve", ["connect:server:keepalive"]);
};
