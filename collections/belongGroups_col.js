// group(s) a user belongs to
BelongGroups = new Meteor.Collection2("belongGroups", {
    schema: {
        groupId: {
            type: String,
            label: "group id"
        },
        userId: {
            type: String,
            label: "user id",
            unique: true
        },
        dateJoined: {
            type: Date,
            label: "date the user joined this group"
        }
    }
});

BelongGroups.allow({
    insert: function(userId) {
        return !! userId;
    },
    update: function(userId) {
        return !! userId;
    }
});