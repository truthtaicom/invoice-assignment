import invoicedata from './invoices.json';

export async function searchIBAN(iban) {
  return invoicedata.filter(elm => elm.ibanNum === iban)
}