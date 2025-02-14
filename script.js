const menuToggle = document.getElementById('menuToggle')
const nav = document.querySelector('.nav')
const navLinks = document.querySelectorAll('.nav a')

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active')
  menuToggle.classList.toggle('active')
})

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.toggle('active')
    menuToggle.classList.toggle('active')
  })
})

//  form Validation

document
  .getElementById('mbbsForm')
  .addEventListener('submit', function (event) {
    event.preventDefault()

    let name = document.getElementById('name').value.trim()
    let email = document.getElementById('email').value.trim()
    let phone = document.getElementById('phone').value.trim()
    let country = document.getElementById('country').value

    if (!name || !email || !phone || !country) {
      alert('Please fill in all required fields.')
      return
    }

    // Show the loader
    document.getElementById('loader').style.display = 'flex'

    setTimeout(() => {
      document.getElementById('loader').style.display = 'none'
      alert('Form submitted successfully')
      // Reset form after submission
      document.getElementById('mbbsForm').reset()
    }, 3000)
   
  })
