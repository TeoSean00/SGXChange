# WAD2_project

Find us live at https://wad2-sgxchange.vercel.app/


# To navigate github,

Firstly, git pull
To add your code, 'cd ..' to the main directory first -> 'git add .' -> 'git commit -m "wtv msg"' -> 'git push'


# To utilise Firestore and its queries/fetches in your vue components,

```
<script>
import db from './Firebase/firebaseInit'
import { collection, getDocs, doc, getDoc } (THIS DEPENDS ON WHAT METHODS U NEED, refer to firestore query documentation)
from "firebase/firestore";
</script>
```

# To add any required packages to be installed into requirements.txt -> 'pip install requirements.txt'

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

