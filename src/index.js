import { clear } from "./clear"
import { buildMenu } from "./menu"
import { buildAbout } from "./about"
import { buildContact} from "./contact"

const content = document.getElementById('content')

document.getElementById('about').addEventListener('click', () => {

  content.classList.add('shown')

  clear()
  buildAbout()
  console.log('built about page')
})

document.getElementById('menu').addEventListener('click', () => {
  
  content.classList.add('shown')
  
  clear()
  buildMenu()
  console.log('built menu page')
})

document.getElementById('contact').addEventListener('click', () => {

  content.classList.add('shown')

  clear()
  buildContact()
  console.log('built contact page')
})