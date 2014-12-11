'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    var done = this.async();

    this.repoName = this.name;

    // Have Yeoman greet the user.
    this.log(yosay(
      'Creating your ' + chalk.red(this.repoName) + ' component repo!'
    ));


    var prompts = [{
      type: 'input',
      name: 'repoDescription',
      message: 'Describe the component repo',
      default: ''
    }];

    this.prompt(prompts, function (props) {
      this.repoDescription = props.repoDescription;
      this.repoName = this.name;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {

      this.template(
        this.templatePath('_package.json'),
        this.destinationPath('package.json')
      );

      this.template(
        this.templatePath('_bower.json'),
        this.destinationPath('bower.json')
      );
      this.template(
        this.templatePath('_Gruntfile.js'),
        this.destinationPath('Gruntfile.js')
      );
      this.template(
        this.templatePath('_README.md'),
        this.destinationPath('README.md')
      );
    },

    demo: function () {
      this.mkdir('demo');
      this.template(
        this.templatePath('_demo.html'),
        this.destinationPath('demo.html')
      );
      this.template(
        this.templatePath('demo/_demo.js'),
        this.destinationPath('demo/demo.js')
      );
    },

    test: function () {
      this.mkdir('test');
      this.template(
        this.templatePath('test/_test.js'),
        this.destinationPath('test/test.js')
      );
      this.template(
        this.templatePath('test/_test.stache'),
        this.destinationPath('test/test.stache')
      );
      this.template(
        this.templatePath('_test.html'),
        this.destinationPath('test.html')
      );
    },

    projectfiles: function () {
      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );
      this.fs.copy(
        this.templatePath('jshintrc'),
        this.destinationPath('.jshintrc')
      );
      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );
      this.fs.copy(
        this.templatePath('stealconfig.js'),
        this.destinationPath('stealconfig.js')
      );
    }
  },

  component: function () {
    this.composeWith('bitovi-component:component', {
      args: [this.repoName],
      options: {
        newFolder: false
      }
    });
  },

  install: function () {
    this.installDependencies({
      skipInstall: this.options['skip-install']
    });
  }
});
