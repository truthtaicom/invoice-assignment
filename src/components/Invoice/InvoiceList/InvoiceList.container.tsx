import { connect } from "react-redux";
import InvoiceList from "./InvoiceList";
import {
  getInvoices,
  addInvoice,
  searchIBAN,
  editInvoice,
  deleteInvoice,
  selectItem,
  setModeInvoice,
  resetState,
  setTabActive,
  setRetrieveFromBankAcc,
  selectPaymentItem
} from "../Invoice.actions";

const mapStateToProps = state => ({
  loading: state.invoiceReducer.request,
  data: state.invoiceReducer.data,
  error: state.invoiceReducer.error,
  paymentsFromBankAccount: state.invoiceReducer.paymentsFromBankAccount,
  selectedItem: state.invoiceReducer.selectedItem || {},
  modeInvoiceModal: state.invoiceReducer.modeInvoiceModal,
  isDeleteMode: state.invoiceReducer.isDeleteMode,
  activedTab: state.invoiceReducer.activedTab,
  isRetrieveFromBankAcc: state.invoiceReducer.isRetrieveFromBankAcc,
  selectedPaymentItem: state.invoiceReducer.selectedPaymentItem
});

const mapDispatchToProps = {
  getInvoices,
  addInvoice,
  editInvoice,
  deleteInvoice,
  selectItem,
  searchIBAN,
  setModeInvoice,
  resetState,
  setTabActive,
  setRetrieveFromBankAcc,
  selectPaymentItem
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceList);
