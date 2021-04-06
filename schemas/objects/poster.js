export default {
    title: 'Poster',
    name: 'poster',
    type: 'image',
    options: {
      hotspot: true // <-- Defaults to false
    },
    fields: [
        {
            name: "alt",
            type: 'string',
            title: "Alternative text",
            description: "Important for SEO and accessiblity.",
            validation: (Rule) =>
                Rule.error("You have to fill out the alternative text.").required(),
            options: {
                isHighlighted: true,
            },
        },
    ]
  }
