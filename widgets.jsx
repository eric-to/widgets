import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock'
import Tabs from './frontend/tabs'

const TAB_PANES = {}

function Root() {
  return(
    <div>
      <div>
        <Clock />
      </div>
      <div>
        <Tabs />
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