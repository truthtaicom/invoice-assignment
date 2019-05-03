import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import InvoiceItem from './InvoiceItem'
import { SimpleList, Text, Button, Modal, Tabs, TabItem, Loading } from '../../../ui-kit'
import InvoiceInformation from '../InvoiceInformation/InvoiceInformation'
import InvoicePayment from '../InvoicePayment/InvoicePayment'
import { IInvoiceItem } from './InvoiceItem'

const StyledInvoiceList = styled.div`
  display: grid;
  grid-template-rows: 5rem auto;
`

const StyledInvoiceListHead = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  padding: 1rem;
`

const StyledInvoiceListTitle = styled.div``

const StyledInvoiceListAddBtn = styled.div`
  text-align: right;
`

const StyledInvoiceListBody = styled.div`
  padding: 1rem;
`

const StyledModalConfirm = styled.div`
  display: grid;
  grid-template-columns: 10rem 10rem;
  padding: 1rem;
  justify-content: center;
  grid-column-gap: 1rem;
  align-items: center;
  height: 100%;
`

export interface IInvoiceList {
  data: IInvoiceItem[]
  getInvoices: () => void,
  addInvoice: (v: IInvoiceItem) => void,
  editInvoice: (v1: IInvoiceItem, v2: IInvoiceItem) => void,
  deleteInvoice: (v: IInvoiceItem) => void,
  searchIBAN?: (iban: string) => void,
  selectItem: (v: IInvoiceItem) => void,
  setModeInvoice: (e: string, p?: IInvoiceItem) => void,
  resetState: () => void,
  setTabActive: (tabName: string) => void,
  setRetrieveFromBankAcc: (v: boolean) =>  void,
  selectPaymentItem: (v: IInvoiceItem) => void,
  isRetrieveFromBankAcc?: boolean,
  paymentsFromBankAccount: IInvoiceItem[],
  loading?: boolean,
  selectedItem: IInvoiceItem,
  modeInvoiceModal?: string,
  isDeleteMode? : boolean,
  activedTab?: string,
  selectedPaymentItem?: IInvoiceItem
}

const InvoiceList: React.FC<IInvoiceList> = (props) => {
  const {
    data,
    loading,
    selectItem,
    selectedItem,
    searchIBAN,
    getInvoices,
    addInvoice,
    editInvoice,
    deleteInvoice,
    paymentsFromBankAccount,
    modeInvoiceModal,
    isDeleteMode,
    setModeInvoice,
    resetState,
    setTabActive,
    activedTab,
    isRetrieveFromBankAcc,
    setRetrieveFromBankAcc,
    selectedPaymentItem,
    selectPaymentItem
  } = props;
  const [actionMode, setActionMode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState(0);
  
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isOpenModalAddAndEdit = isOpenModal && !isDeleteMode;
  const isOpenModalDelete = isOpenModal && !!isDeleteMode;

  useEffect(() => {
    getInvoices()
  }, [getInvoices])
  
  useEffect(() => {
    if (modeInvoiceModal) {
      setIsOpenModal(true)
    } else {
      setIsOpenModal(false)
    }
  }, [modeInvoiceModal])


  const onDelete = (value: IInvoiceItem) => setModeInvoice("DELETE", value)
  const onEdit = (value: IInvoiceItem) => setModeInvoice("EDIT", value)
  const onAdd = () => setModeInvoice("ADD")
  
  const onSubmit = (values) => {
    if (modeInvoiceModal === 'EDIT') {
      editInvoice(selectedItem, values)
    }

    if (modeInvoiceModal === 'DELETE') {
      deleteInvoice(selectedItem)
    }

    if (modeInvoiceModal === 'ADD') {
      addInvoice({ ...values, ...selectedItem })
    }
  }

  const onNext = (values) => {
    const valuesNew = { ...selectedItem, ...values }
    selectItem(valuesNew)
    setTabActive("pm")
  }

  const renderItem = (itemProps: IInvoiceItem, idx: number) => (
    <InvoiceItem
      {...itemProps}
      key={idx}
      onDelete={onDelete}
      onEdit={onEdit}
    />)

  return (
    <>
      <StyledInvoiceList>
        <StyledInvoiceListHead>
          <StyledInvoiceListTitle>
              <Text>Invoices List</Text>
            </StyledInvoiceListTitle>
          <StyledInvoiceListAddBtn>
            <Button color="primary" onClick={onAdd}> Add new invoice </Button>
          </StyledInvoiceListAddBtn>
        </StyledInvoiceListHead>
        <StyledInvoiceListBody>
          {
            loading
            ? <Loading />
            : <SimpleList data={data} renderItem={renderItem} />
          }
        </StyledInvoiceListBody>
      </StyledInvoiceList>
      <Modal title="Invoice Dialog" isOpen={isOpenModalAddAndEdit} onClose={resetState}>
        <Tabs defaultActivedTab={activedTab}>
            <TabItem title="Invoice Information" name="ii">
              <InvoiceInformation
                onSubmit={onSubmit}
                item={selectedItem}
                onRetriveFromBankAcc={setRetrieveFromBankAcc}
                onNext={onNext}
              />
            </TabItem>
            {
              isRetrieveFromBankAcc && 
              <TabItem title="Payments" name="pm">
                <InvoicePayment
                  data={paymentsFromBankAccount}
                  onSubmit={onSubmit}
                  onChangeIBANNum={searchIBAN}
                  onSelect={selectPaymentItem}
                  selected={selectedPaymentItem}
                />
              </TabItem>
            }
        </Tabs>
      </Modal>
      <Modal title="Do you want to delete this item ?" isOpen={isOpenModalDelete} onClose={resetState}>
        <StyledModalConfirm>
          <Button color="primary" onClick={onSubmit}>Yes</Button>
          <Button color="danger" onClick={resetState}>No</Button>
        </StyledModalConfirm>
      </Modal>
    </>
  )
}

export default InvoiceList
