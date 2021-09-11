import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message:'Hey, girls! The good day!', like_count: 3},
  {id: 2, message:'Upyyyyyyy... Puppy....Cats', like_count: 5},
  {id: 3, message:'x-ray in medcine rules', like_count: 12}
]

let dialogs = [
  {id: 1, name: 'Hanna'},
  {id: 2, name: 'Nikolay'},
  {id: 3, name: 'Andrey'},
  {id: 4, name: 'Anastaysha'},
  {id: 5, name: 'Alex'}
]

let messages = [
  {id: 1, message:'Hi! How are you?'},
  {id: 2, message:'How is your job? Finished the redesign?'},
  {id: 3, message:'Maybe we will meet in the evening?'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages = {messages} />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
