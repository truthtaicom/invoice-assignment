import { createSelector } from 'reselect'

const invoiceListSelector = state => state.invoicesReducer.data

export const omitDateFieldSelector = createSelector(
  invoiceListSelector,
  (items) => items.map(({ date, ...item }) => ({ ...item }))
)