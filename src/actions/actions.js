import cuid from 'cuid'

const ADD_CHAT = 'ADD_CHAT';

export const addChat = ({
  // cuid is safer than random uuids/v4 GUIDs
  // see usecuid.org
  id = cuid(),
  timeStamp = Date.now()
} = {}) => ({
  type: ADD_CHAT,
  payload: { id, timeStamp }
});

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
