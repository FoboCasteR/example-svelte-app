import { writable, get } from 'svelte/store';


export const apiKey = writable(localStorage.getItem('apiKey'));
export const username = writable(localStorage.getItem('username'));
export const password = writable(localStorage.getItem('password'));
export const userToken = writable(localStorage.getItem('userToken'));

export function persist() {
  localStorage.setItem('apiKey', get(apiKey))
  localStorage.setItem('username', get(username))
  localStorage.setItem('password', get(password))
  localStorage.setItem('userToken', get(userToken))
}
