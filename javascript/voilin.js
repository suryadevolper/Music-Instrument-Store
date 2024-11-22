let violins =  [
    {id:1,        ProductName: "Acoustic AC2 Violin ",              ProductPrice:"₹ 6,000",         ProductImg:  "../images/violin/Acoustic Violin With Bow, Rosin And Soft Case 44 Classical .png",   link: "AcousticAC2Violin.html"   ,        ProductOldPrice:"₹ 8,200" ,      Percentage:"16%"},
    {id:2,        ProductName: "KERRY Acoustic Violin",             ProductPrice:"₹ 7,000",         ProductImg:  "../images/Violin/KERRY Acoustic Violin.png",                                               link: "KERRYAcousticViolin.html" ,     ProductOldPrice:"₹ 15,000",      Percentage:"55%"},
    {id:3,        ProductName: " JUAREZ Acoustic Violin",           ProductPrice:"₹ 10,000",        ProductImg:  "../images/violin/Deluxe Electro Acoustic Violin.png",                                  link: "JUAREZ.html"          ,        ProductOldPrice:"₹ 12,000",      Percentage:"24%"},
    {id:4,        ProductName: "NGM Musical Violin",                ProductPrice:"₹ 8,000",         ProductImg:  "../images/Violin/NGM.png",                               link: "NGMMusicalViolin.html"   ,        ProductOldPrice:"₹ 10,000",      Percentage:"20%"},
    {id:5,        ProductName: "Vault Fiddler Violin",              ProductPrice:"₹ 7,500",         ProductImg:  "../images/Violin/Vault Fiddler.png",          link: "VaultFider.html" ,        ProductOldPrice:"₹ 15,000",      Percentage:"50%"},
    {id:6,        ProductName: "Glasser Carbon Violin ",            ProductPrice:"₹ 8,000",         ProductImg:  "../images/violin/Glasser Carbon Composite Violin .png",                               link: "GlasserCarbonViolin.html" ,     ProductOldPrice:"₹ 10,000",      Percentage:"20%"},
    {id:7,        ProductName: "KADENCE ViValdi Violin",            ProductPrice:"₹ 10,000",        ProductImg:  "../images/Violin/Kadense Vivolt.png",                  link: "KadenseVivault.html" ,     ProductOldPrice:"₹ 12,000",      Percentage:"18%"},
    {id:8,        ProductName: "Maro Music Violin",                 ProductPrice:"₹ 12,000",        ProductImg:  "../images/violin/Maro Music Ebony Viola.png",                                         link: "MaroMusicViolin.html" ,     ProductOldPrice:"₹ 15,000",      Percentage:"20%"},
    {id:9,        ProductName: "Kadense ViValdi Violin",            ProductPrice:"₹ 11,000",        ProductImg:  "../images/Violin/Kadence.png",                                                 link: "Kadence.html" ,     ProductOldPrice:"₹ 20,000",      Percentage:"45%"},
    {id:10,       ProductName: "KAILINGBAIHUO Violin",              ProductPrice:"₹ 8,000",         ProductImg:  "../images/Violin/KAILINGBAIHUO.png",                                           link: "KAILINGBAIHUO.html" ,     ProductOldPrice:"₹ 10,000",      Percentage:"20%"},
    {id:11,       ProductName: "Infinity Colour Violin",            ProductPrice:"₹ 9,000",         ProductImg:  "../images/Violin/Infinity Violin.png",                                            link: "InfinityColourViolin.html" ,     ProductOldPrice:"₹ 10,000",      Percentage:"10%"},
    {id:12,       ProductName: "Btuty Simulated Violin ",           ProductPrice:"₹ 7,000",         ProductImg:  "../images/Violin/Btuty Simulated Violin .png",                                       link: "BtutySimulatedViolin.html" ,     ProductOldPrice:"₹ 10,000",      Percentage:"30%"},
];


let cart = document.querySelector(".boxes");

violins.map((violin)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${violin.ProductImg}" alt="">
    <h5>${violin.ProductName}</h5>
    <small data-product="" ><i><b>${violin.ProductPrice}</b></i><span><br><strike>${violin.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="${violin.link}"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})