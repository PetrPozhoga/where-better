export const toggleModal = (type, isOpen) => {
  return { type, isOpen: isOpen !== undefined ? isOpen : false }
}
