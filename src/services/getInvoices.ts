import { delay } from '../utils/delay';
import invoicedata from './invoices.json';

export async function getInvoices() {
  await delay(2000)
  return invoicedata
}