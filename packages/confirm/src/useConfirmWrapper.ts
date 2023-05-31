import { reactive } from 'vue'
import { ConfirmOptions } from './types'

const ConfirmsStore: ConfirmOptions[] = reactive([])

export const useConfirmWrapper = function () {
  const addPopup = function (confirmData: ConfirmOptions) {
    ConfirmsStore.push(confirmData)
  }

  return {
    ConfirmsStore,
    addPopup
  }
}