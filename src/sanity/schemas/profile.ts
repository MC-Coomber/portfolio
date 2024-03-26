import { defineArrayMember, defineField, defineType } from 'sanity'

export const profileType = defineType({
  name: 'profile',
  title: 'Profile',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'jobTitle',
      type: 'string',
    }),
    defineField({
      name: 'bio',
      type: 'text',
    }),
    defineField(({
      name: 'socials',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'social',
          fields: [defineField({
            name: 'name',
            type: 'string',
          }),
          defineField({
            name: 'link',
            type: 'url',
          }),
          defineField({
            name: 'image',
            type: 'image',
          })]
        })
      ]
    }))
  ],
})