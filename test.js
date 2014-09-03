if (Meteor.isClient) {
    Session.setDefault("items2count", 0);
    Template.main.helpers({
        // Broken: gets called repeatedly!
        items2: function () {
            Session.set("items2count", Session.get("items2count") + 1);
            items2count = Session.get("items2count");
            console.log("called " + items2count + " time(s)");
            return [{name:'foo'}, {name:'bar'}];
        }
    });
}
