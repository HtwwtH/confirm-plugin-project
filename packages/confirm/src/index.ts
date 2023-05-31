import type { App } from "vue"
import { defineAsyncComponent } from "vue"
import { ConfirmOptions } from './types'

import { useConfirmWrapper } from './useConfirmWrapper'

const { addPopup } = useConfirmWrapper()

// const createDialog = (options: ConfirmOptions) => {
//   options.onDone()
// }

export const useConfirm = () => {
  const confirm = (options: ConfirmOptions): void => {
    // createDialog({
    //   message: options.message,
    //   onDone: options.onDone,
    //   onClose: options.onClose,
    // })

    addPopup(options)
  };

  return { confirm };
}

export const confirmPlugin = (app: App)=>{
  app.component("ConfirmComponent", 
    defineAsyncComponent(() => import("./ConfirmComponent.vue"))
  )
}