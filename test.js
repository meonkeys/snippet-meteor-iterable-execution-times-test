if (Meteor.isClient) {
    var items1count = 0;
    Template.main.helpers({
        // Helper that returns an array literal. Called once per #each.
        items1: function () {
            items1count++;
            console.log("called " + items1count + " time(s)");
            return [{name:'foo'}, {name:'bar'}];
        }
    });
}
