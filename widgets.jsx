import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock'
import Tabs from './frontend/tabs'

const TAB_PANES = [
  {title: 'Julian', content: 'Lorem Ipsum -- pfft, overrated. My name is Julian and my dog is a good boy.'},
  {title: 'Eric', content: 'Where\'s the CSS? -webkit-background-text: transparent; for days'},
  {title: 'Sue', content: 'My name is Sue. I\'m not as cool as Julian or Eric, but I\'m still pretty cool.'},
  {title: 'Sai', content: 'Eric, if I see you doing work during lunchtime, I will stab you!'},
  {title: 'Choi', content: 'I have another question!'},
  {title: 'Miso', content: 'Massages for days'},
  {title: 'Erica', content: '15 minutes are up.'},
  {title: 'Trevor', content: 'Broooooooooooo'},
  {title: 'Nicky', content: 'Sup'}
];

function Root() {
  return(
    <div>
      <div>
        <Clock />
      </div>
      <div>
        <Tabs panes={TAB_PANES}/>
      </div>
    </div>
  );
}

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    ReactDOM.render(
      <Root />, root
    );
});