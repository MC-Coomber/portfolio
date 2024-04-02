import { defineType, defineField, defineArrayMember } from "sanity";

export const projectType = defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'id',
      type: 'slug',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'role',
      type: 'string',
    }),
    defineField({
      name: 'description',
      type: 'text',
    }),
    defineField({
      name: 'pages',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'page',
          fields: [defineField({
            name: 'title',
            type: 'string',
          }),
          defineField({
            name: 'text',
            type: 'text',
          }),
          defineField({
            name: 'image',
            type: 'image',
          })]
        })
      ]
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'logo',
      type: 'image',
    }),
    defineField({
      name: "tools",
      type: "array",
      of: [
        defineArrayMember({
          type: 'reference',
          name: 'tool',
          to: [{ type: 'tool' }]
        })
      ]
    }),
  ],
})