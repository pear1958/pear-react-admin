import { createContext, useState, useContext, ReactElement } from 'react'
import { Modal, ModalProps } from 'antd'

interface ModalContextValue {
  showModal: (content: ReactElement<Recordable>, modalProps?: ModalProps) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextValue | null>(null)

export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    open: false,
    content: null,
    modalProps: {}
  })

  const showModal = (component: ReactElement, modalProps = {}) => {
    modalProps = { footer: null, ...modalProps }
    setModal({
      open: true,
      content: component,
      modalProps
    })
  }

  const closeModal = () => {
    setModal(prev => ({ ...prev, open: false }))
  }

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <Modal {...modal.modalProps} open={modal.open} onCancel={closeModal} destroyOnHidden>
        {modal.content}
      </Modal>
    </ModalContext.Provider>
  )
}

export const useModal = () => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
