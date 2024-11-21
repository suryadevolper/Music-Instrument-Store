let Cable =  [
    {id:1,  ProductName: "BENFEI USB C to Audio Jack"      ,        ProductPrice:"₹ 1000"  ,           ProductImg: "../images/Cables/BENFEI USB C to Audio Jack.png"     ,             ProductOldPrice:"₹ 2800",       Percentage:"60%",          link :"BENFEIUSBCtoAudioJack.html"},
    {id:2,  ProductName: "UGREEN USB C to 3.5mm"           ,        ProductPrice:"₹ 900"   ,           ProductImg: "../images/Cables/UGREEN USB C to 3.5mm.png"          ,             ProductOldPrice:"₹ 1500",       Percentage:"40%",          link :"UGREENUSBCto3.5mm.html"},
    {id:3,  ProductName: "Cable Creation USB 3mm USB"      ,        ProductPrice:"₹ 1100"  ,           ProductImg: "../images/Cables/Cable Creation USB 3mm USB.png"     ,             ProductOldPrice:"₹ 2500",       Percentage:"65%",          link :"CableCreationUSB3mmUSB.html"},
    {id:4,  ProductName: "UGREEN Micro USB 3.0 cable"      ,        ProductPrice:"₹ 950"   ,           ProductImg: "../images/Cables/UGREEN Micro USB 3.0 cable.png"     ,             ProductOldPrice:"₹ 1800",       Percentage:"48%",          link :"UGREENMicroUSB3.0cable.html"},
    {id:5,  ProductName: "Xumee USB Type C to 3.5mm"       ,        ProductPrice:"₹ 750"   ,           ProductImg: "../images/Cables/Xumee USB Type C to 3.5mm.png"      ,             ProductOldPrice:"₹ 1500",       Percentage:"54%",          link :"XumeeUSBTypeCto3.5mm.html"},
    {id:6,  ProductName: "Fasgear Micro B 3.0 Cable"       ,        ProductPrice:"₹ 1000"  ,           ProductImg: "../images/Cables/Fasgear Micro B 3.0 Cable.png"      ,             ProductOldPrice:"₹ 2200",       Percentage:"70%",          link :"FasgearMicroB3.0Cable.html"},
    {id:7,  ProductName: "UGREEN 10 Gbps Micro B"          ,        ProductPrice:"₹ 1600"  ,           ProductImg: "../images/Cables/UGREEN 10 Gbps Micro B.png"         ,             ProductOldPrice:"₹ 2800",       Percentage:"40%",          link :"UGREEN10GbpsMicroB.html"},
    {id:8,  ProductName: "JSAUX Hard Drive Cable 1.6FT"    ,        ProductPrice:"₹ 2200"  ,           ProductImg: "../images/Cables/JSAUX Hard Drive Cable 1.6FT.png"   ,             ProductOldPrice:"₹ 3500",       Percentage:"30%",          link :"JSAUXHardDriveCable1.6FT.html"},
    {id:9,  ProductName: "J&D 3.5mm to 6.35mm cable"       ,        ProductPrice:"₹ 1150"  ,           ProductImg: "../images/Cables/J&D 3.5mm to 6.35mm cable.png"      ,             ProductOldPrice:"₹ 2100",       Percentage:"50%",          link :"J&D3.5mmto6.35mmcable.html"},
    {id:10, ProductName: "Stouchi 2-in-1 USB C 3.5mm"      ,        ProductPrice:"₹ 1550"  ,           ProductImg: "../images/Cables/Stouchi 2-in-1 USB C 3.5mm .png"    ,             ProductOldPrice:"₹ 3100",       Percentage:"60%",          link :"Stouchi2-in-1USBC3.5mm.html"},
    {id:11, ProductName: "Nanxudyj 3.5mm Audio Cable"      ,        ProductPrice:"₹ 850"   ,           ProductImg: "../images/Cables/Nanxudyj 3.5mm Audio Cable.png"     ,             ProductOldPrice:"₹ 1800",       Percentage:"55%",          link :"Nanxudyj3.5mmAudioCable.html"},
    {id:12, ProductName: "Headphone USB cable 3mm"         ,        ProductPrice:"₹ 600"   ,           ProductImg: "../images/Cables/Headphone USB cable 3mm.png"        ,             ProductOldPrice:"₹ 1000",       Percentage:"40%",          link :"HeadphoneUSBcable3mm.html"},
];


let cart = document.querySelector(".boxes");

Cable.map((Cables)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Cables.ProductImg}" alt="">
    <h5>${Cables.ProductName}</h5>
    <small data-product="" ><i><b>${Cables.ProductPrice}</b></i><span><br><strike>${Cables.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="${Cables.link}"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})