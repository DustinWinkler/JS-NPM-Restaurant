const buildContact = () => {
  const content = document.getElementById('content')
  content.style.display = 'static'

  const tab = document.getElementById("tab")

  let header = document.createElement('h2')
  header.innerHTML = "CONTACT"
  tab.appendChild(header)

  let paragraph = document.createElement('p')
  paragraph.innerHTML = "If you have any complaints, frick off. But if you have something lovely to say about our restaurant and nation, then leave those thoughts below."
  tab.appendChild(paragraph)

  let form = document.createElement('form')
  
  let nameLabel = document.createElement('label')
  nameLabel.innerHTML = "Your Name"
  form.appendChild(nameLabel)
  form.appendChild(document.createElement('input'))

  let locationLabel = document.createElement('label')
  locationLabel.innerHTML = "Your GPS Location"
  form.appendChild(locationLabel)
  form.appendChild(document.createElement('input'))
  
  let commentsLabel = document.createElement('label')
  commentsLabel.innerHTML = "Comments"
  form.appendChild(commentsLabel)
  let textarea = document.createElement('textarea')
  textarea.cols = "75"
  textarea.rows = "10"
  form.appendChild(textarea)

  let submit = document.createElement('input')
  submit.type = 'submit'
  form.appendChild(submit)

  tab.appendChild(form)
}

export { buildContact }