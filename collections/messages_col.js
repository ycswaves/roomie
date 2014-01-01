Messages = new Meteor.Collection2("messages", {
    schema: {
        fromId: {
            type: String,
            label: "from user id"
        },
        toId: {
            type: String,
            label: "to user id"
        },
        message: {
            type: String,
            label: "message content"
        },
        link: {
            type: String,
            label: "link",
            optional: true
        },
        isRead: {
            type: Boolean,
            label: "if the message is read or not"
        },
        date: {
            type: Date,
            label: "date the message is sent"
        }
    }
});

Messages.allow({
    insert: function(userId) {
        return !! userId;
    }
});