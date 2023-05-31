import type { App } from "vue"
import { defineAsyncComponent } from "vue"
import { ConfirmOptions } from './types'

import { useConfirmWrapper } from './useConfirmWrapper'

const { addPopup } = useConfirmWrapper()

export const useConfirm = () => {
  const confirm = (options: ConfirmOptions): void => {
    addPopup(options)
  };

  return { confirm };
}

export const confirmPlugin = (app: App)=>{
  app.component("ConfirmComponent", 
    defineAsyncComponent(() => import("./ConfirmComponent.vue"))
  )
}