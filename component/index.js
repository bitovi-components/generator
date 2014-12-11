'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
  initializing: function () {
    this.pkg = require('../package.json');
  },

  prompting: function () {
    // var done = this.async();

    // Have Yeoman greet the user.
    this.log(yosay(
      'Creating your ' + chalk.red(this.name) + ' component'
    ));

    this.tagName = this.name;
    this.createNewFolder = typeof this.options.newFolder !== 'undefined' ? this.options.newFolder : true;
    this.destination = '';
  },

  _getDestination: function(userPath) {
    return this.destinationPath(this.destination + userPath);
  },

  writing: {
    app: function () {
      if(this.createNewFolder) {
        this.mkdir(this.tagName);
        this.destination = this.tagName + '/';
      }
      this.template(
        this.templatePath('_src.js'),
        this._getDestination(this.name + '.js')
      );
      this.template(
        this.templatePath('_styles.less'),
        this._getDestination('styles.less')
      );
      this.template(
        this.templatePath('_template.stache'),
        this._getDestination('template.stache')
      );
    }
  }
});
