import { writable } from 'svelte/store';

export const count = writable(5);

export const album = writable({
	name: '',
	artist: '',
	genre: '',
	year: ''
});
