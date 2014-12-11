// Libraries and plugins
import can from "can";
import "can/map/define/define";
import types from "util/types";

// Models
// import "components/greeting-model";

// Template
import template from "./template.stache!";

// Styles
import "./styles.less!";

export default can.Component.extend({
  tag: "<%= tagName %>",
  template: template,
  scope: {
    // Definitions with special behavior or objects
    define: {
      excited: { type: types.boolean },
      _el: { type: "*" }
    },
    // Other properties
    greeting: "Hello",
    target: "World",
    // Internal properties
    _eventsFired: 0,

    // ViewModel Methods
    logGreeting: function() {
      console.log(this.attr("greeting") + " " +
            this.attr("target") +
            (this.attr("excited") ? "!!!" : "!"));
    },
    greet: function() {
      var ev = this.trigger("greeting");
      if (!ev.isDefaultPrevented) {
        this.logGreeting();
        this.attr("_eventsFired", this.attr("_eventsFired")+1);
      }
      return ev;
    },
    // NOTE - We should eventually be able to trigger events directly from
    //        the scope.
    trigger: function(evName, ...extra) {
      return this.attr("_el").trigger(evName, ...extra);
    }
  },
  events: {
    // Use can-EVENT when possible, keep methods in the scope above and
    // call them here if you need templated binding.
    inserted: function() {
      this.scope.attr("_el", this.element);
      this.scope.greet();
    }
  }
});
