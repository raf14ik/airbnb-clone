import React from 'react';
import Banner from './Banner';
import './Home.css';
import Card from './Card';

function Home() {
    
    return (
        <div className="home">
            <Banner/>

            <div className="home__section">
                <Card src="https://a0.muscache.com/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg"
                title="Unique stays"
                description="Spaces that are more than just a place to sleep."/>
                <Card src="https://a0.muscache.com/pictures/8e3d5167-55ca-4fbd-832d-e3b66dad54ec.jpg"
                title="Online Experiences"
                description="A new way to travel from home."/>
                <Card src="https://a0.muscache.com/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg"
                title="Entire homes"
                description="Comfortable private places, with room for friends or family."/>    
            </div>
            <div className="home__section">
            <Card src="https://cf.bstatic.com/images/hotel/max1024x768/101/101205531.jpg"
                title="Mahdia Tunisia Beach Tourist Zone"
                description="The apartment has a large terrace overlooking the sea."
                price="80 DT / NIGHT"/>    

                <Card  src="https://www.shared-house.com/images55/fullsize/67613.jpg"
                title="Kelibia House"
                description="Immeuble Corniche is located in Kelibia."
                price="100 DT / NIGHT"/>
                <Card  src="http://www.promohotel.tn/images_hotel/262/Plage%20-%20Beach%20(7)RESIZE.jpg"
                title="Hotel Lookea Salammbo Hammamet"
                description="
                the Lookea Salammbo Hammamet hotel is located opposite Hammamet beach."
                price="130 DT / NIGHT"/>
            </div>

        </div>
    )
}

export default Home
