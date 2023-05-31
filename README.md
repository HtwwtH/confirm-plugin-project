Project with yarn workspaces.  
Package "confirm" is plugin, named "@pkg/confirm".  
Package "web" is App.  
Used node v19.2.0.  

The aim is to create as many popups as you want, provide them with callback from App.  

![Example](https://github.com/HtwwtH/confirm-plugin-project/raw/main/Screenshot.png)

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