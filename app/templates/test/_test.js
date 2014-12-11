import can from "can";

// Install and import your preferred assertion library here.
// import "assert";

import "../<%= repoName %>";

import template from "./test.stache!";

describe("<%= repoName %>", function() {
  afterEach(function() {
    can.$("#test-area").empty();
  });
  it("works", function() {
    can.$("#test-area").html(template());
    if (!can.$("<%= repoName %>").text() === "Hello World!") {
      throw new Error("fail");
    }
  });
});
