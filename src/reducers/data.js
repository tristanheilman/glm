// Constants containing temporary data
export const semesterData = [{
    semester: "Spring 2020",
    courses:[{
        name: "Software Development",
        hours: 4,
        grade: 90.27
    },
    {
        name: "Database Management",
        hours: 3,
        grade: 88.98
    }]},
    {
    semester: "Fall 2019",
    courses:[{
        name: "English",
        hours: 4,
        grade: 95.40
    },
    {
        name: "Math II",
        hours: 3,
        grade: 90.40
    }]},
    {
    semester: "Summer 2019",
    courses:[{
        name: "Public Speaking",
        hours: 3,
        grade: 85.46
    }]},
    {
        semester: "Spring 2019",
        courses:[{
            name: "Software Development",
            hours: 4,
            grade: 90.27
        },
        {
            name: "Database Management",
            hours: 3,
            grade: 88.98
        }]},
        {
        semester: "Fall 2018",
        courses:[{
            name: "English",
            hours: 4,
            grade: 95.40
        },
        {
            name: "Math II",
            hours: 3,
            grade: 90.40
        }]},
        {
        semester: "Summer 2018",
        courses:[{
            name: "Public Speaking",
            hours: 3,
            grade: 85.46
        }]}
];


export const eventData = [{
        name: "Brotherhood Event",
        location: "Fraternity House",
        date: new Date(),
        description: "Let's grill out and enjoy some brews outside by the pool!"
    },
    {
        name: "Chapter",
        location: "Fraternity House Basement",
        date: new Date(),
        description: "Mandatory! Please arrive 10 minutes early."
    },
    {
        name: "Alpha Sigma Fry",
        location: "Fraternity House Backyard",
        date: new Date(),
        description: "Come help setup, sell meals, and cleanup!"
    },
    {
        name: "Chapter",
        location: "Fraternity House Basement",
        date: new Date(),
        description: "Mandatory! Please arrive 10 minutes early."
    },
    {
        name: "Movie Night Football",
        location: "Fraternity House Basement",
        date: new Date(),
        description: "Come watch some football with the brothers at the house!"
    },
    {
        name: "Chapter",
        location: "Fraternity House Basement",
        date: new Date(),
        description: "Mandatory! Please arrive 10 minutes early."
    }
];

export const messageData = [{
        name: "Bobby Hughes",
        text: "Do we need to get some work done today?",
        isThread: true,
        replies: [{
            name: "Jimmy Chang",
            text: "Nope bobby... Stop trying so hard.",
        },
        {
            name: "Tanner Woodrow",
            text: "Yeah go get some sun man.",
        }]
    },
    {
        name: "Jimmy Chang",
        text: "Whats the status of our event on tuesday?",
        isThread: false,
        replies: [{}]
    },
    {
        name: "Jason Bourne",
        text: "Just checkin in. Hows it hanging guys?",
        isThread: false,
        replies: [{
            name: "Jimmy Chang",
            text: "Oh its hanging jason.",
            isThread: false,
            replies: []
        },
        {
            name: "Tanner Woodrow",
            text: "Yeah come over to the house Jason.",
            isThread: false,
            replies: []
        }]
    },
    {
        name: "Danny Jackson",
        text: "Everybody get to the house now please! Time to clean up.",
        isThread: false,
        replies: [{}]
    }

]
