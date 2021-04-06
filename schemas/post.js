import supportedLanguages from "./supportedLanguages";
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  initialValue: {
    publishedAt: new Date().toISOString(),
  },
  fields: [
    {
      title: "Language",
      type: "string",
      name: "language",
      options: {
        list: [
          { value: 'en', title: 'English' },
          { value: 'ar', title: 'Arabic' },
          { value: 'fr', title: 'French' }
        ]
      }
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: "Titles should be catchy, descriptive, and not too long",
      validation: Rule => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
          "Some frontends will require a slug to be set to be able to show the post",
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: "mainImage",
      type: "mainImage",
      title: "Main image",
    },
    {
      name: "excerpt",
      type: "string",
      title: "Excerpt",
      description:
          "This ends up on summary pages, on Google, when people share your post in social media.",
      validation: Rule => Rule.required(),
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'reference', to: {type: 'category'}}],
      validation: Rule => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      description: "This can be used to schedule post for publishing",
      validation: Rule => Rule.required(),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: Rule => Rule.required(),
    },
  ],
  orderings: [
    {
      name: "publishingDateAsc",
      title: "Publishing date new–>old",
      by: [
        {
          field: "publishedAt",
          direction: "asc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
    {
      name: "publishingDateDesc",
      title: "Publishing date old->new",
      by: [
        {
          field: "publishedAt",
          direction: "desc",
        },
        {
          field: "title",
          direction: "asc",
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      publishedAt: "publishedAt",
      slug: "slug",
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
