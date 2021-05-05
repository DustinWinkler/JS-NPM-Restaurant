const buildAbout = () => {
  const content = document.getElementById('content')
  content.style.display = 'block'

  const tab = document.getElementById("tab")
  
  let header = document.createElement('h2')
  header.innerHTML = "ABOUT"
  tab.appendChild(header)

  let firstParagraph = document.createElement('p')
  firstParagraph.innerHTML = "We here at Cheese Town love cheese so freaking much. So much, in fact, that we created our own nation for cheese. That's right, this isn't just a restaurant, you're on soveriegn, hallowed, cheesy ground here. "
  tab.appendChild(firstParagraph)

  let secondParagraph = document.createElement('p')
  secondParagraph.innerHTML = "Here's a list of Cheeses: (All used in our Grilled Cheese)"
  tab.appendChild(secondParagraph)

  let list = document.createElement('ul')

  const cheeses = ['12 month Aged White Cheddar',
    'Gorgonzola',
    'Gouda',
    'Muenster',
    'Paneer',
    'Remoudou',
    'Food 4 Less&reg; Medium Cheddar',
    'Bosnian Smoked Cheese',
    'Havarti',
    'Feta',
    'Goat Cheese',
    '11 month Aged Cheddar',
    'Sharp Ched',]

  for (let i = 0; i < cheeses.length; i++) {
    const element = cheeses[i];

    let cheeseItem = document.createElement('li')
    cheeseItem.innerHTML = element
    list.appendChild(cheeseItem)
    
  }

  tab.appendChild(list)
}

export { buildAbout }