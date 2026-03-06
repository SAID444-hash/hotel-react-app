import room1 from "../images/room1.jpg"
import room2 from "../images/room2.jpg"
import room3 from "../images/room3.jpg"

function Rooms(){

return(

<section className="rooms" id="rooms">

<h2>Our Rooms</h2>

<div className="rooms-container">

<div className="room-card">
<img src={room1} alt="Deluxe Room"/>
<h3>Deluxe Room</h3>
<p>Spacious room with sea view.</p>
</div>

<div className="room-card">
<img src={room2} alt="Executive Suite"/>
<h3>Executive Suite</h3>
<p>Luxury suite with premium services.</p>
</div>

<div className="room-card">
<img src={room3} alt="Presidential Suite"/>
<h3>Presidential Suite</h3>
<p>The most luxurious suite with premium comfort.</p>
</div>

</div>

</section>

)

}

export default Rooms