import { defineField, defineType } from 'sanity'

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
  ],
})