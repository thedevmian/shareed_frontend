import {
  integer, relationship, text, virtual,
} from '@keystone-6/core/fields';
import { graphql, list } from '@keystone-6/core';
import formatMoney from '../lib/formatMoney';

const Cart = list({
  // TODO add access control
  // cart field add
});
export default Cart;
