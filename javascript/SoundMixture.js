let SoundMixtures =  [
    {id:1,  ProductName: "ICON Audio Mixture"                ,        ProductPrice:"₹ 30,000"  ,           ProductImg:  "../images/Sound Mixture/ICON Audio Mixture.png"             ,     link : "ICONAudioMixture.html"        ,      ProductOldPrice:"₹ 38,000",    Percentage:"15%"},
    {id:2,  ProductName: "Pocket DJ Mixture"                 ,        ProductPrice:"₹ 7,200"   ,           ProductImg:  "../images/Sound Mixture/Pocket DJ Mixture.png"              ,     link : "PocketDJMixture.html"         ,      ProductOldPrice:"₹ 8,000" ,    Percentage:"10%"},
    {id:3,  ProductName: "Profess Audio Mixture"             ,        ProductPrice:"₹ 7,200"   ,           ProductImg:  "../images/Sound Mixture/Professional Audio Mixture.png"     ,     link : "ProfessionalDJMixture.html"   ,      ProductOldPrice:"₹ 8,000" ,    Percentage:"10%"},
    {id:4,  ProductName: "Futchoy Audio Mixture"             ,        ProductPrice:"₹ 25,000"  ,           ProductImg:  "../images/Sound Mixture/Channel Audio Mixture.png"          ,     link : "FutchoyAudioMixture.html"     ,      ProductOldPrice:"₹ 30,000",    Percentage:"17%"},
    {id:5,  ProductName: "Da.Beatz Sound Mixture"            ,        ProductPrice:"₹ 8,000"   ,           ProductImg:  "../images/Sound Mixture/EMM Setro Mixture.png"              ,     link : "DaBeatz.html"                 ,      ProductOldPrice:"₹ 10,000",    Percentage:"10%"},
    {id:6,  ProductName: "MX12 Channel Mixture"              ,        ProductPrice:"₹ 38,000"  ,           ProductImg:  "../images/Sound Mixture/MX12 Channel Mixture.png"           ,     link : "MX12.html"                    ,      ProductOldPrice:"₹ 40,000",    Percentage:"5%"},
    {id:7,  ProductName: "Profo Sound Mixture"               ,        ProductPrice:"₹ 38,000"  ,           ProductImg:  "../images/Sound Mixture/PA Sound Mixture.png"               ,     link : "PASoundMixture.html"          ,      ProductOldPrice:"₹ 40,000",    Percentage:"5%"},
    {id:8,  ProductName: "Powered Audio Mixture"             ,        ProductPrice:"₹ 33,000"  ,           ProductImg:  "../images/Sound Mixture/Powered Audio Mixture.png"          ,     link : "PoweredAudioMixture.html"     ,      ProductOldPrice:"₹ 45,000",    Percentage:"30%"},
    {id:9,  ProductName: "Setro Audio Mixture"               ,        ProductPrice:"₹ 20,000"  ,           ProductImg:  "../images/Sound Mixture/Sound Mixture.png"                  ,     link : "SteroAudioMixture.html"       ,      ProductOldPrice:"₹ 30,000",    Percentage:"33%"},
    {id:10, ProductName: "S-10 Audio Mixture"                ,        ProductPrice:"₹ 16,000"  ,           ProductImg:  "../images/Sound Mixture/Stage Audio Mixture.png"            ,     link : "S-10djmixure.html"            ,      ProductOldPrice:"₹ 30,000",    Percentage:"55%"},
    {id:11, ProductName: "ZIJINGM Audio Mixture"             ,        ProductPrice:"₹ 13,000"  ,           ProductImg:  "../images/Sound Mixture/Studio Audio Mixture.png"           ,     link : "ZIJINGMAudioMixture.html"     ,      ProductOldPrice:"₹ 20,000",    Percentage:"35%"},
    {id:12, ProductName: "TRONIC Audio Mixture"              ,        ProductPrice:"₹ 18,000"  ,           ProductImg:  "../images/Sound Mixture/TRONIC Audio Mixture.png"           ,     link : "TRONICAudioMixture.html"      ,      ProductOldPrice:"₹ 20,000",    Percentage:"10%"},
    
];


let cart = document.querySelector(".boxes");

SoundMixtures.map((SoundMixture)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${SoundMixture.ProductImg}" alt="">
    <h5>${SoundMixture.ProductName}</h5>
    <small data-product="" ><i><b>${SoundMixture.ProductPrice}</b></i><span><br><strike>${SoundMixture.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="${SoundMixture.link}"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})