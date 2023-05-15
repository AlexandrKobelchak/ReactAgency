import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Clock} from "./components/clock/clock";
import {Switch} from "./components/switch/switch";
import {ClientTagsComponent} from "./components/client-tags/client-tags-component";
import {TagViewModel} from "./data/TagViewModel";
import {Guid} from "guid-typescript";



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <Clock locale="en-us"/>
        <br/>
        <Switch isChecked={true} id="test" name="test" label="Check me" />
        <br/>

        <ClientTagsComponent clientTags = {[
          new TagViewModel( Guid.create(), "VIP", true),
          new TagViewModel( Guid.create(),"Горнолыжный отдых", false),
          new TagViewModel( Guid.create(),"Постоянный клиент", true),
          new TagViewModel( Guid.create(), "Эконом", true),
          new TagViewModel( Guid.create(),"Активный отдых", false),
          new TagViewModel( Guid.create(),"Ездит один", false),
          new TagViewModel( Guid.create(),"Семья", true),
          new TagViewModel( Guid.create(),"Экскурсионный отдых", false),
        ]}/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
