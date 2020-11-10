import { Button } from '@material-ui/core';
import React from 'react';
import "./SearchPage.css";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays · 24 septembre to 26 septembre · 2 guest</p>

                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation flexibility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Default</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
            </div>

            <SearchResult
            img="https://a0.muscache.com/im/pictures/687a6f9d-d9b1-409a-a438-2192bb594241.jpg?im_w=720"
            location="Nabeul‎, Nabeul, Tunisie"
            title="Yassmine residence"
            description="3 guests 1 bedroom 2 beds 1 bathroom"
            star={4.25}
            price="70 DT / NIGHT"
            total= "140 DT" />

            <SearchResult
            img="https://a0.muscache.com/im/pictures/fc73848e-bf4a-43e3-ad83-06acc21e4d15.jpg?aki_policy=large"
            location="Nabeul‎, Nabeul, Tunisie"
            title="Cosy flat with Wi-fi and a courtyard"
            description="6 guests · 1 bedroom · 6 beds · 1 bath"
            star={4.52}
            price="120 DT / NIGHT"
            total= "240 DT" />

            <SearchResult
            img="https://a0.muscache.com/im/pictures/67b54164-acd0-4218-9a0b-15860a5252ba.jpg?im_w=720"
            location="Mahdia, Gouvernorat de Mahdia, Tunisia"
            title="Dar Sevim bungalow près de la plage, avec piscine"
            description="4 guests · 2 bedrooms · 3 beds · 1 bath"
            star={4.75}
            price="230 DT / NIGHT"
            total= "460 DT" />

            <SearchResult
            img="https://a0.muscache.com/im/pictures/914b5b7e-4b97-44a4-9303-72f9d9d15a36.jpg?im_w=720"
            location="Mahdia, Tunisia"
            title="Dar Salha"
            description="2 guests · 1 bedroom · 1 bed · 1 bath"
            star={4.49}
            price="190 DT / NIGHT"
            total= "380 DT" />

            <SearchResult
            img="https://a0.muscache.com/im/pictures/219dd9cf-2a9a-4a65-aaa0-93cbfed177f4.jpg?im_w=720"
            location="Dar Allouche, Nabeul, Tunisia"
            title="The dream house"
            description="6 guests · 3 bedrooms · 5 beds · 1 bath"
            star={4.80}
            price="90 DT / NIGHT"
            total= "180 DT" />

            <SearchResult
            img="https://a0.muscache.com/im/pictures/6bbed4b6-2d8f-4db1-8f19-c8b8337967de.jpg?im_w=720"
            location="Al Huwariyah, Tunisia"
            title="Beautiful villa in El Haouaria Tunisia"
            description="4 guests · 2 bedrooms · 3 beds · 1 bath"
            star={4.20}
            price="80 DT / NIGHT"
            total= "180 DT" />
        </div>
    )
}

export default SearchPage
