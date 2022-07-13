const form = document.querySelector('.form')
const input = document.querySelector('.form__input')
const errorMessage = document.querySelector('.error-message')

form.addEventListener('submit', event => {
 const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)
 //in case the input had invalid email before doing this particular submit
 input.classList.remove('invalid')
 if(!input.value.trim()) {
  input.classList.add('invalid')
  errorMessage.textContent = "Whoops! It looks like you forgot to add your email"
 } else if(!isValidEmail){
  input.classList.add('invalid')
  errorMessage.textContent = "Please provide a valid email address"
 } else {
  // do more stuff
  console.log('Email is valid')
 }

 event.preventDefault()
})