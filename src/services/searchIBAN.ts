import { delay } from '../utils/delay';
import invoicedata from './invoices.json';

export async function searchIBAN(iban) {
  console.log(iban)
  return invoicedata.filter(elm => elm.ibanNum === iban)
}