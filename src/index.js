import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import './index.css';
import 'whatwg-fetch';

fetch('/api/category').then(response => response.json()).then(response => {
	console.log(response.data);
})

fetch('/api/category/architecture').then(response => response.json()).then(response => {
	console.log('architecture');
	console.log(response.data);
})

fetch('/api/category/cinemagraph').then(response => response.json()).then(response => {
	console.log('cinemagraph')
	console.log(response.data);
})

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
