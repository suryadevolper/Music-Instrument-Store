let flutes = [
    { id: 1, ProductName: "Bamboo Flues Bansuri Handcrafted", ProductPrice: "₹ 319", ProductOldPrice: "₹ 600", ProductImg: "../images/Flutes/Bamboo_Flute.png" },
    { id: 2, ProductName: "HARIPRASAD Flutes C Natural Medium Right", ProductPrice: "₹ 319", ProductOldPrice: "₹ 450", ProductImg: "../images/Flutes/HARIPRASAD Flutes C Natural Medium Right Hand.png" },
    { id: 3, ProductName: "Shiv'z Muzic Flute, C Natural medium", ProductPrice: "₹ 319", ProductOldPrice: "₹1200", ProductImg: "../images/Flutes/Shiv'z Muzic Flute, C Natural Medium.png" },
    { id: 4, ProductName: "Radhe Flutes PVC Fiber C Natural Bansuri Middle", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Radhe Flutes PVC Fiber C Natural Bansuri Middle.png" },
    { id: 5, ProductName: "Gold lacquer Eb alto saxophone the gold", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Gold lacquer Eb alto saxophone.png" },
    { id: 6, ProductName: "Havana M1106A Tenor Saxophone - Gold", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Havana M1106A Tenor Saxophone - Gold.png" },
    { id: 7, ProductName: "Kadence Alto Saxophone is a Blue Gold", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Kadence Alto Saxophone Blue Gold.png" },
    { id: 8, ProductName: "Kadence Alto Saxophone, Case, Mouthpiece", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Kadence Alto Saxophone, Case, Mouthpiece.png" },
    { id: 9, ProductName: "Radhe Flutes PVC Fiber D Natural Bansuri", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Radhe Flutes PVC.png" },
    { id: 10, ProductName: "SAI Musicals Clarinet (Black) 13 key", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/SAI Musicals Clarinet (Black) 13 key.png" },
    { id: 11, ProductName: "SOUND SAGA® Special Design Bb Trumpet", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/SOUND SAGA® Special Design Bb Trumpet.png" },
    { id: 12, ProductName: "Pocket Trumpet Bb Pitch super Brass Quality", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Pocket Trumpet Bb Pitch super Brass Quality.png" },
    { id: 13, ProductName: "Havana M1103B Clarinet Tenor", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Havana M1103B Clarinet.png" },
    { id: 14, ProductName: "Radhe Flutes Brass Flute Soprano Vertical Blow", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Radhe Flutes Brass Flute Soprano Vertical Blow.png" },
    { id: 13, ProductName: "Mustang New Descant Soprano Recorder 8-hole", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Mustang New Descant Soprano Recorder.png" },
    { id: 13, ProductName: "Yamkay Bansuri Handcrafted Bamboo", ProductPrice: "₹ 319", ProductOldPrice: "", ProductImg: "../images/Flutes/Yamkay Bansuri Handcrafted Bamboo.png" },
];


let cart = document.querySelector(".boxes");

flutes.map((flute) => {
    let box = document.createElement("div");

    box.innerHTML =

        `
     <div class="box">
        <img src="${flute.ProductImg}" alt="">
        <h5>${flute.ProductName}</h5>
        <small data-product="" ><i><b>${flute.ProductPrice}</b></i><span><strike>${flute.ProductOldPrice}</strike></span><span class="percentage">65% </span></small> <br>  
        <a style="text-decoration: none; color:black;" href="../html/Electric_black_guitar.html"><button class="check-out">Buy</button></a>
    </div>
    `;

    cart.append(box);
});