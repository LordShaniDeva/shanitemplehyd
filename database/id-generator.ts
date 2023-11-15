import moment from 'moment';
import { customAlphabet } from 'nanoid';

/**
 * Generate a random string of length
 */
const numbers = Array.from({ length: 9 })
  .map((_, i) => i + 1)
  .join('');

const nanoid = customAlphabet(numbers, 4);
export const generateOrderID = () => {
  const prefix = 'MOMENTOURN';
  const date = moment(Date.now()).format('YYYYMMDDHH');
  const random = nanoid(4);
  const orderID = `${prefix}${date}${random}`;
  return orderID;
};

// export const generateCartID = () => {
//   const prefix = 'ck';
//   const id = randomBytes(8).toString('hex');
//   const cartID = `${prefix}${id}`;
//   return cartID;
// };

// export const generateCheckout = () => {
//   const prefix = 'ck';
//   const id = randomBytes(8).toString('hex');
//   const checkoutID = `${prefix}${id}`;
//   return checkoutID;
// };
