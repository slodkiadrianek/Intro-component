'use strict'

const firstName = document.querySelector('#firstName')
const lastName = document.querySelector('#lastName')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const rightErrorLabel = document.querySelectorAll('.right__error__label')

const rightBtn = document.querySelector('.right__btn')


const specialCharacters = ['@', '.com']


let Accounts = {}
function check(){
    firstName.value ==='' ? rightErrorLabel.forEach((el, i) => i ===0 ? el.classList.remove('hidden') : console.log()) : rightErrorLabel.forEach((el, i) => i ===0 ? el.classList.add('hidden') : console.log()) ;
    lastName.value ==='' ? rightErrorLabel.forEach((el, i) => i ===1 ? el.classList.remove('hidden') : console.log()) : rightErrorLabel.forEach((el, i) => i ===1 ? el.classList.add('hidden') : console.log()) ;
    password.value ==='' ? rightErrorLabel.forEach((el, i) => i ===3 ? el.classList.remove('hidden') : console.log()) : rightErrorLabel.forEach((el, i) => i ===3 ? el.classList.add('hidden') : console.log()) ;
}

function emailcheck(email){
    const checked = specialCharacters.every(el => email.includes(el))
    if(checked){
        const splitted = email.split('@')
        const firstHalf = splitted[0]
        const secondHalf = splitted[1].split('.com')
        if(firstHalf.length > 0 && secondHalf.length > 0){
            rightErrorLabel.forEach((el, i) => i ===2 ? el.classList.add('hidden') : console.log());
            return true

            
        }
    }else{
        rightErrorLabel.forEach((el, i) => i ===2 ? el.classList.remove('hidden') : console.log());
        delete Accounts[`person--${x.length }`]
        return false
    }
}

class Person{
    constructor(firstName, lastName, email, password, operator){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.operatorEmail = operator
        
    }
    set operatorEmail(operator){
        if(emailcheck(email.value)){
        const splitted = operator.split('@');
        const secondHalf = splitted[1].split('.com');
        if(secondHalf[0] === 'zs2.ostrzeszow') alert(`Więzień fumu `)
        else this._operatorEmail = secondHalf[0]
        }else{
            delete Accounts[`person--${x.length}`]
        }
    }
    get operatorEmail(){
       return this._operatorEmail;
    }
}


let x= []

rightBtn.addEventListener('click', function(e){
    e.preventDefault()
      check()
     Accounts[`person--${x.length}`] = new Person (firstName.value, lastName.value, email.value, password.value,email.value ),
   emailcheck(email.value)
     x.push(1)
     console.log(Accounts);
     firstName.value = lastName.value = email.value = password.value = ''
})


