Project with yarn workspaces.  
Package "confirm" is plugin, named "@pkg/confirm".  
Package "web" is App.  
Used node v19.2.0.  

The aim is to create as many popups as you want, provide them with callback from App.  

<img src="https://github.com/HtwwtH/confirm-plugin-project/raw/main/Screenshot.png" width="600">

Local setup:  

## Project Setup

```sh
yarn
```

### Build plugin

```sh
yarn workspace @pkg/confirm build
```

### Compile and Hot-Reload for Development

```sh
yarn workspace web dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
yarn lint
```

## Usage

```javascript
import './assets/main.css'
import '@pkg/confirm/dist/style.css'

import { createApp } from 'vue'
import { confirmPlugin } from '@pkg/confirm'
import App from './App.vue'

createApp(App)
  .use(confirmPlugin)
  .mount('#app')
```

Need to declare a component which will consist all of popups somewhere in App. For example in App.vue:

```html
<template>
  <button class="btn" @click="onConfirm">Confirm</button>
  <ConfirmComponent />
</template>
```

Then use useConfirm hook in your component and provide callbacks:  

```html
<script setup lang="ts">
import { useConfirm } from '@pkg/confirm'
const { confirm } = useConfirm()
const onConfirm = () => {
  confirm({
    message: 'Вы уверены?',
    onDone() {
      console.log('ok!')
    },
    onClose() {
      console.log('closed!')
    },
  })
}
</script>
```