'use strict'

const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const rightErrorLabel = document.querySelectorAll('.right__error__label')

const rightBtn = document.querySelector('.right__btn')

class Person{
    constructor(firstName, lastName, email, password){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
    }

    get validation(){
        if(this.firstName === '' ){
             rightErrorLabel.forEach((el, i ) =>  i === 0 ? el.classList.remove('hidden') : console.log(`yes`))
            delete Accounts[`person--${x.length}`] 
        } 
        if(this.lastName === ''){
            rightErrorLabel.forEach((el, i ) =>  i === 1 ? el.classList.remove('hidden') : console.log(`yes`))
            delete Accounts[`person--${x.length}`] 
        }
        if(this.email === ''){
            rightErrorLabel.forEach((el, i ) =>  i === 2 ? el.classList.remove('hidden') : console.log(`yes`))
            delete Accounts[`person--${x.length}`] 
        }
        if(this.password === ''){
            rightErrorLabel.forEach((el, i ) =>  i === 3 ? el.classList.remove('hidden') : console.log(`yes`))
            delete Accounts[`person--${x.length}`] 
        }
}  
}
let Accounts = {}

let x= []

rightBtn.addEventListener('click', function(e){
    e.preventDefault()
     Accounts[`person--${x.length}`] = new Person (firstName.value, lastName.value, email.value, password.value),
     Accounts[`person--${x.length}`].validation; 
     x.push(1)
     console.log(Accounts);
     firstName.value = lastName.value = email.value = password.value = ''
})


