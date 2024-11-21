let Mics =  [
    {id:1,  ProductName: "Tosing 008 Mic"               ,        ProductPrice:"₹ 3,000"     ,               ProductImg:  "../images/Mic/Tossing 008 Mic.png"             ,      link: "Tossing008Mic.html"       ,        ProductOldPrice:"₹ 5,000"   ,     Percentage:"40%"},
    {id:2,  ProductName: "UBON Handhelg Mic"            ,        ProductPrice:"₹ 3,200"     ,               ProductImg:  "../images/Mic/Portable Handhelg Mic.png"       ,      link: "UBONHandhelgMic.html"     ,        ProductOldPrice:"₹ 6,000"   ,     Percentage:"45%"},
    {id:3,  ProductName: "Generic H11 Mic"              ,        ProductPrice:"₹ 2,000"     ,               ProductImg:  "../images/Mic/Generic H11 Mic.png"             ,      link: "GenericH11Mic.html"       ,        ProductOldPrice:"₹ 2,500"   ,     Percentage:"20%"},
    {id:4,  ProductName: "Mic Furuggo UK Mic"           ,        ProductPrice:"₹ 2,200"     ,               ProductImg:  "../images/Mic/Furuggo UK Mic.png"              ,      link: "HITSANTosing.html"        ,        ProductOldPrice:"₹ 4,000"   ,     Percentage:"40%"},
    {id:5,  ProductName: "RODE SM6 USB Mic"             ,        ProductPrice:"₹ 16,000"    ,               ProductImg:  "../images/Mic/RODE NT2 Mic.png"                ,      link: "RODESM6Mic.html"          ,        ProductOldPrice:"₹ 20,000"  ,     Percentage:"30%"},
    {id:6,  ProductName: "RODE NT1 USB Mic"             ,        ProductPrice:"₹ 25,000"    ,               ProductImg:  "../images/Mic/RODE NT1 Mic.png"                ,      link: "RODENT1Mic.html"          ,        ProductOldPrice:"₹ 39,000"  ,     Percentage:"30%"},
    {id:7,  ProductName: "BOYA Condenser Mic"           ,        ProductPrice:"₹ 32,000"    ,               ProductImg:  "../images/Mic/BOYA Condenser Mic.png"          ,      link: "BOYACondenserMic.html"    ,        ProductOldPrice:"₹ 38,000"  ,     Percentage:"20%"},
    {id:8,  ProductName: "RODE PodMic USB"              ,        ProductPrice:"₹ 15,000"    ,               ProductImg:  "../images/Mic/PodMic USB Portile.png"          ,      link: "RODEPodMicUSB.html"       ,        ProductOldPrice:"₹ 20,000"  ,     Percentage:"25%"},
    {id:9,  ProductName: "ADIUM  Dynamic Mic"           ,        ProductPrice:"₹ 3,000"     ,               ProductImg:  "../images/Mic/Retro Dynamic Mic .png"          ,      link: "ADIUMDynamicMic.html"     ,        ProductOldPrice:"₹ 5,000"   ,     Percentage:"30%"},
    {id:10, ProductName: "Soundeus Desktop Mic"         ,        ProductPrice:"₹ 13,500"    ,               ProductImg:  "../images/Mic/Mic Black.png"                   ,      link: "SoundeusDesktopMic.html"  ,        ProductOldPrice:"₹ 20,000"  ,     Percentage:"30%"},
    {id:11, ProductName: "Sennheiser USB Mic"           ,        ProductPrice:"₹ 7,000"     ,               ProductImg:  "../images/Mic/Sennheiser USB.png"              ,      link: "Sennheiser.html"          ,        ProductOldPrice:"₹ 10,000"  ,     Percentage:"30%"},
    {id:12, ProductName: "Retro Stand Mic"              ,        ProductPrice:"₹ 3,000"     ,               ProductImg:  "../images/Mic/3D Retro Mic.png"                ,      link: "RetroStandMic.html"       ,        ProductOldPrice:"₹ 7,000"   ,     Percentage:"55%"},
];


let cart = document.querySelector(".boxes");

Mics.map((Mic)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Mic.ProductImg}" alt="">
    <h5>${Mic.ProductName}</h5>
    <small data-product="" ><i><b>${Mic.ProductPrice}</b></i><span><br><strike>${Mic.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="${Mic.link}"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})