import './style.css'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Where Rob?</h1>
    <img src="/where-rob.png" alt="Rob" />
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
