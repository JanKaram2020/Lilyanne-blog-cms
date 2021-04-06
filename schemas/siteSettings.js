export default {
    name: "siteSettings",
    type: "document",
    title: "Site Settings",
    __experimental_actions: ["update",/*'create', 'delete',*/"publish"],
    fields: [
        {
            name: "title",
            type: "localeString",
            title: "Title",
        },
        {
            name: "description",
            type: "localeString",
            title: "Description",
            description: "Describe your blog for search engines and social media.",
        },
        {
            name: "keywords",
            type: "array",
            title: "Keywords",
            description: "Add keywords that describes your blog.",
            of: [{ type: "localeString" }],
            options: {
                layout: "tags",
            },
        },
        {
            name: "author",
            type: "reference",
            description: "Publish an author and set a reference to them here.",
            title: "Author",
            to: [{ type: "author" }],
        },
    ],
    preview: {
        select: {
            title: "title.en",
        },
    },
};
