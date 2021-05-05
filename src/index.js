import { clear } from "./clear"
import { buildMenu } from "./menu"
import { buildAbout } from "./about"
import { buildContact} from "./contact"


document.getElementById('about').addEventListener('click', () => {
  clear()
  buildAbout()
  console.log('built about page')
})

document.getElementById('menu').addEventListener('click', () => {
  clear()
  buildMenu()
  console.log('built menu page')
})

document.getElementById('contact').addEventListener('click', () => {
  clear()
  buildContact()
  console.log('built about page')
})