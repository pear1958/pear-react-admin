import React, { useState } from 'react'
import { Modal } from 'antd'

// 创建一个全局 modal 控制上下文
const ModalContext = React.createContext(null)

/**
 * Modal 提供器组件，需要在应用顶层包裹
 */
export const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({
    visible: false,
    content: null,
    modalProps: {}
  })

  // 显示模态框方法
  const showModal = (component, modalProps = {}) => {
    setModal({
      visible: true,
      content: component,
      modalProps
    })
  }

  // 关闭模态框
  const closeModal = () => {
    setModal(prev => ({ ...prev, visible: false }))
  }

  return (
    <ModalContext.Provider value={{ showModal, closeModal }}>
      {children}
      <Modal {...modal.modalProps} visible={modal.visible} onCancel={closeModal} destroyOnClose>
        {modal.content && React.cloneElement(modal.content, { closeModal })}
      </Modal>
    </ModalContext.Provider>
  )
}

/**
 * 自定义 hook 用于获取 modal 控制方法
 */
export const useModal = () => {
  const context = React.useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}

/**
 * 使用示例：
 *
 * 1. 在应用顶层包裹 ModalProvider
 *
 * function App() {
 *   return (
 *     <ModalProvider>
 *       <YourAppContent />
 *     </ModalProvider>
 *   );
 * }
 *
 * 2. 在子组件中使用
 *
 * function DemoComponent() {
 *   const { showModal } = useModal();
 *
 *   const openUserModal = () => {
 *     showModal(<UserForm />, {
 *       title: '用户信息',
 *       width: 800
 *     });
 *   };
 *
 *   return <button onClick={openUserModal}>打开弹窗</button>;
 * }
 *
 * 3. 在自定义组件中关闭弹窗
 *
 * function UserForm({ closeModal }) {
 *   const handleSubmit = () => {
 *     // 提交逻辑...
 *     closeModal(); // 关闭弹窗
 *   };
 *
 *   return (
 *     <form onSubmit={handleSubmit}>
 *       {/* 表单内容 * /}
 *       <button type="submit">提交</button>
 *     </form>
 *   );
 * }
 */
