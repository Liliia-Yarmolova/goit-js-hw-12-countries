import country from '../templates/country.hbs';
import list from '../templates/list.hbs';
import refs from './refs';
import '@pnotify/core/dist/BrightTheme.css';
import "@pnotify/core/dist/PNotify.css";
import { error, notice } from '@pnotify/core';

function updateMarkup(countryInfo) {
    if (countryInfo.status === 404) {
    notice('There is no matches found.') 
    } else if  (countryInfo.length === 1) {
    const markup = country(countryInfo);
    refs.container.insertAdjacentHTML('beforeend', markup);
  } else if (countryInfo.length > 1 && countryInfo.length < 11) {
    const markup = list(countryInfo);
    refs.container.insertAdjacentHTML('beforeend', markup);
  } else {
    error('Too many mathces found. Please enter a more specific query!');
  }
}

export default updateMarkup;