import { list } from '@keystone-6/core';
import {
  integer, relationship, select, text, timestamp,
} from '@keystone-6/core/fields';

const Product = list({
  fields: {
    name: text({ validation: { isRequired: true } }),
    description: text({ validation: { isRequired: true }, ui: { displayMode: 'textarea' } }),
    price: integer({ validation: { isRequired: true, min: 0 } }),
    photo: relationship({ ref: 'ProductImage.product' }),
    select: select({
      options: [
        { label: 'Published', value: 'published' },
        { label: 'Draft', value: 'draft' },
      ],
      defaultValue: 'published',
      ui: {
        displayMode: 'segmented-control',
      },
    }),
    publishDate: timestamp(),
    author: relationship({
      ref: 'User.products',
    }),
  },
});

export default Product;
