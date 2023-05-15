export const addItemLS = (storageName, item) => {
  localStorage.setItem(storageName, JSON.stringify(item))
}
export const downloadFromLS = (storageName) => {
  return JSON.parse(localStorage.getItem(storageName))
}