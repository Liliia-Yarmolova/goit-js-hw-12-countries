import fetchCountries from './js/find-country'
import refs from './js/refs'
import debounce from 'lodash.debounce'
import updateMarkup from './js/markUpPage'

refs.inputField.addEventListener('input', debounce(readInput, 500))

function readInput(event) {  
    const countryName = event.target.value
    refs.container.innerHTML = '';
           
    fetchCountries(countryName).then(updateMarkup)
}
