var items = [{name:'foo'}, {name:'bar'}];
if (Meteor.isClient) {
    var items2count = 0;
    Template.main.helpers({
        items2: function () {
            items2count++;
            console.log("called " + items2count + " time(s)");
            return _.map(items, function(item, index) {
                var newItem = _.clone(item);
                newItem.index = index;
                return newItem;
            });
        }
    });
}
