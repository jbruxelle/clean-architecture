import { Given, Then, When } from "@cucumber/cucumber";
import { strict as assert } from "assert";

Given(/^something$/, function () {
  this.something = "something";
});
When(/^something else happens$/, function () {
  this.somethingElse = "somethingElse";
});
Then(/^something should happen$/, function () {
  assert.notEqual(this.something, this.somethingElse);
});
