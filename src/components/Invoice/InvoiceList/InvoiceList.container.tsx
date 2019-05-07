import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import InvoiceList from "./InvoiceList";
import {
  getInvoicesRequest as getInvoices,
  addInvoiceAction as addInvoice,
  searchIBANRequest as searchIBAN,
  editInvoiceAction as editInvoice,
  selectItemAction as selectItem,
  setModeAction as setModeInvoice,
  resetStateAction as resetState,
  setTabActiveAction as setTabActive,
  setRetrieveFromBankAccAction as setRetrieveFromBankAcc,
  selectPaymentItemAction as selectPaymentItem,
  deleteInvoiceAction as deleteInvoice
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

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
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
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(InvoiceList);
