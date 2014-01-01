// group schema
Groups = new Meteor.Collection2("groups", {
    schema: {
        groupName: {
            type: String,
            label: "name of the group",
            max: 200,
            unique: true
        },
        creator: {
            type: String,
            label: "creator of the group"
        },
        members: {
            type: [String],
            label: "members of the group"
        },
        createdAt: {
            type: Date,
            label: "date of the group being created"
        },
        description: {
            type: String,
            label: "Brief description",
            optional: true,
            max: 1000
        }
    }
});

Groups.allow({
	insert: function(userId) {
		return !! userId;
	},
    update: function(userId) {
        return !! userId;
    }
});