const buildMenu = () => {
  const tab = document.getElementById("tab")
  
  let header = document.createElement('h2')
  header.innerHTML = "MENU"
  tab.appendChild(header)

  
  
  const menuItems = [["1) Super Ultimate Grilled Cheese Deluxe", 'This super yummy-rific griddled sandwich with 12.5 different cheeses will you make you say "holy moly thats a lot of cheese"'], ["2) Cheese Town Super Special Soup","It's truly just a Béchamel sauce with an unbelievable amount of cheese melted up in there, crackers available upon request"], ["3) Mac and Cheese for the Whole Extended Family","It's 2 heaping gallons of our delicious cheese soup poured over 10 pounds of Spongebob Squarepants&reg; whole-wheat pasta"], ["4) Cheese Milkshake...","ahem... The perfect desert befitting a restaurant of this stature. Our Ice cream is churned with our yummy cheese soup, and then blended together with milk and more cheese to get a creamy, cheesy milkshake."] ]
  


  let menuItemsDiv = document.createElement("div")
  menuItemsDiv.id = 'menu-items'
  

  for (let i = 0; i < menuItems.length; i++) {
    let item = menuItems[i]

    let newItemDiv = document.createElement('div')
    newItemDiv.classList.add('menu-item')

    let newH3 = document.createElement('h3')
    let newP = document.createElement('p')

    newH3.innerHTML = item[0]
    newP.innerHTML = item[1]

    newItemDiv.appendChild(newH3)
    newItemDiv.appendChild(newP)

    menuItemsDiv.appendChild(newItemDiv)

  }

  tab.appendChild(menuItemsDiv)
  
  let more = document.createElement('div')
  more.id = 'more'
  more.innerHTML = "🧀 MORE COMING SOON 🧀"
  
  tab.appendChild(more)
}

export { buildMenu }