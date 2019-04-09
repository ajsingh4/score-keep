import {Meteor} from "meteor/meteor";
import {Players} from "./../imports/api/players";

Meteor.startup(() => {
  let obj = {
    name: "Aj",
    printName() {
      console.log(`Name: ${this.name}`);
    }
  };

  obj.printName();
});
