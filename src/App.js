import React from "react";
import {FeaturedView} from "./FeaturedJam/FeaturedJam";
import './App.css'
import {JamList} from "./Jam/JamList";
import {GameList} from "./Game/GameList";
import {Nav} from "./components/Nav/Nav";
import {Search, SearchView} from "./components/Search/Search";

function App() {
    return (
        <div className="App">
            <Nav/>
            <SearchView icon={require('./components/Search/arrow.png').default}>
                <Search placeholder={"Search"}/>
            </SearchView>
            <FeaturedView/>
            <JamList/>
            <GameList/>
        </div>
    );
}

export default App;
