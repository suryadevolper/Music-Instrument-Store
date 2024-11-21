let Drum =  [
    {id:1,  ProductName: "YAMAHA Amber Drum"  ,  ProductPrice:"₹ 1000",  ProductImg:  "../images/Drums/YAMAHA Amber Drum.png" ,      ProductOldPrice:"₹ 2800", Percentage:"60%" ,  link :"YAMAHAAmberDrum.html"},
    {id:2,  ProductName: "YAMAHA Bass Drum"   ,  ProductPrice:"₹ 900",   ProductImg:  "../images/Drums/YAMAHA Bass Drum.png" ,       ProductOldPrice:"₹ 1500", Percentage:"40%" ,  link :"YAMAHABassDrum.html"},
    {id:3,  ProductName: "Marcing Bass Drum"  ,  ProductPrice:"₹ 1100",  ProductImg:  "../images/Drums/Marcing Bass Drums .png" ,    ProductOldPrice:"₹ 2500", Percentage:"65%" ,  link :"MarcingBassDrum.html"},
    {id:4,  ProductName: "Antante Tenor Drum" ,  ProductPrice:"₹ 950",   ProductImg:  "../images/Drums/Antante Tenor Drum .png" ,    ProductOldPrice:"₹ 1800", Percentage:"48%" ,  link :"AntanteTenorDrum.html"},
    {id:5,  ProductName: "Indian Folk Tabla"  ,  ProductPrice:"₹ 750",   ProductImg:  "../images/Drums/Indian Folk Tabla.png" ,      ProductOldPrice:"₹ 1500", Percentage:"54%" ,  link :"IndianFolkTabla.html"},
    {id:6,  ProductName: "Snare Drums Beat"   ,  ProductPrice:"₹ 1000",  ProductImg:  "../images/Drums/Snare Drums Beat.png" ,       ProductOldPrice:"₹ 2200", Percentage:"70%" ,  link :"SnareDrumsBeat.html"},
    {id:7,  ProductName: "Hi-Hat Field Drum"  ,  ProductPrice:"₹ 1600",  ProductImg:  "../images/Drums/Hi Hat Field Drum.png" ,      ProductOldPrice:"₹ 2800", Percentage:"40%" ,  link :"Hi-HatFieldDrum.html"},
    {id:8,  ProductName: "Istan Cymbal Drum"  ,  ProductPrice:"₹ 2200",  ProductImg:  "../images/Drums/Istanbul Cymbal Drum.png" ,   ProductOldPrice:"₹ 3500", Percentage:"30%" ,  link :"IstanCymbalDrum.html"},
    {id:9,  ProductName: "LOKI Persion Tenor" ,  ProductPrice:"₹ 1150",  ProductImg:  "../images/Drums/KERREY Percusion Tenor.png" , ProductOldPrice:"₹ 2100", Percentage:"50%" ,  link :"LOKIPersionTenor.html"},
    {id:10, ProductName: "Spalsh Cymbal Tenor",  ProductPrice:"₹ 1550",  ProductImg:  "../images/Drums/Spalsh Cymbal Tenor.png" ,    ProductOldPrice:"₹ 3100", Percentage:"60%" ,  link :"SpalshCymbalTenor.html"},
    {id:11, ProductName: "AC Tom Bass Drum"   ,  ProductPrice:"₹ 850",   ProductImg: "../images/Drums/AC Tom Drum.png" ,             ProductOldPrice:"₹ 1800", Percentage:"55%" ,  link :"ACTomBeatDrum.html"},
    {id:12, ProductName: "Concert Tom-Tom"    ,  ProductPrice:"₹ 600",   ProductImg:  "../images/Drums/Concert Tom-Tom.png" ,        ProductOldPrice:"₹ 1000", Percentage:"40%" ,  link :"ConcertTom-Tom.html"},
];


let cart = document.querySelector(".boxes");

Drum.map((Drums)=>{
    let box = document.createElement("div");

    box.innerHTML=

`
<div class="box">
    <img src="${Drums.ProductImg}" alt="">
    <h5>${Drums.ProductName}</h5>
    <small data-product="" ><i><b>${Drums.ProductPrice}</b></i><span><br><strike>${Drums.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="${Drums.link}"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
});