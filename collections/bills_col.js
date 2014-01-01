BillDetailSchema = new SimpleSchema({
    itemName: {
        type: String,
    },
    itemPrice: {
        type: Number,
        decimal: true
    }
});

BillNotifySchema = new SimpleSchema({
    payerId: {
        type: String,
    },
    hasPaid: {
        type: Boolean,
    }
});

Bills = new Meteor.Collection2("bills", {
    schema: {
        author: {
            type: String,
            label: "name of the author"
        },
        title: {
            type: String,
            label: "title of the bill"
        },
        details: {
            type: [BillDetailSchema],
            label: "detail items of the bill"
        },
        dueDate: {
            type: String,
            label: "due date of the bill",
            optional: true
        },
        notify: {
            type: [BillNotifySchema],
            label: "people to notify and their status"
        },
        addedAt: {
            type: Date,
            label: "date the bill is issued"
        }
    }
});

Bills.allow({
    insert: function(userId) {
        return !! userId;
    },
    update: function(userId) {
        return !! userId;
    },
    remove: function(userId) {
        return !! userId;
    }
});