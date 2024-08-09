import './style.css'
import { doRender } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container">
  </div>
`

doRender()
