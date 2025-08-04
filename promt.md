vite vanilla projcet
mpa (multi page app)를 만들건데
엔트리 포인트는 루트폴더에 있는 index.html main.css main.js야
그리고 각 페이지 별로 폴더를 만들었는데
whit폴더 black폴더 가 있어 그래서 엔트리 포인트에서 네비게이션바로 해당 white이나 balck하면 그 페이지로 이동하게 할거야
vite.config.js
를 작성하고 각 페이지마다 코드를 짜줘 환경설정과 파일 폴더는 내가 다 만들어 놨어

├── package.json
├── vite.config.js
├── index.html
├── main.js
└── nested
├── index.html
└── nested.js
개발 시, /nested/ 디렉터리 아래에 있는 페이지는 간단히 /nested/로 참조가 가능합니다. 일반적인 정적 파일 서버와 다르지 않습니다.

빌드 시에는, 사용자가 접근할 수 있는 모든 .html 파일에 대해 아래와 같이 빌드 진입점이라 명시해줘야만 합니다.
vite.config.js

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const \_\_dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
build: {
rollupOptions: {
input: {
main: resolve(**dirname, 'index.html'),
nested: resolve(**dirname, 'nested/index.html')
}
}
}
})
참고로 루트를 변경한다 해도 \_\_dirname은 여전히 vite.config.js 파일이 위치한 폴더를 가리키고 있다는 것을 유의하세요. 이를 방지하고자 한다면 resolve의 인자로 root 엔트리를 함께 전달해 줘야 합니다.

HTML 파일의 경우, Vite는 rollupOptions.input 객체에 명시된 엔트리의 이름을 무시하고, 대신 dist 폴더에 HTML 에셋을 생성할 때 확인할 수 있는 파일의 id를 사용합니다. 이는 개발 서버가 작동하는 방식과 일관성을 유지할 수 있도록 합니다.

참고해줘
