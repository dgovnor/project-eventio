import React from 'react'
import { Modal } from './index'

export default {
  title: 'Modal',
  component: Modal,
}

export const Opened = () => (
  <Modal onClose={() => {}}>Some modal window content</Modal>
)
