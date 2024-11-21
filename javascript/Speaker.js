let Speakers =  [
    {id:1,  ProductName: "AUDIO Engine Speaker"        ,        ProductPrice:"₹ 5,000"  ,           ProductImg:  "../images/Speaker/AUDIO Engine Speaker.png"        ,             link: "AUDIOEngineSpeaker.html"      ,           ProductOldPrice:"₹ 8,000"   ,      Percentage:"35%"},
    {id:2,  ProductName: "HOTMAY Bluetooth Speaker"    ,        ProductPrice:"₹ 4,000"  ,           ProductImg:  "../images/Speaker/BroJect V33 Speaker.png"         ,             link: "BroJectV33Speaker.html"       ,           ProductOldPrice:"₹ 7,500"   ,      Percentage:"40%"},
    {id:3,  ProductName: "ProJect Bluetooth Speaker"   ,        ProductPrice:"₹ 3,500"  ,           ProductImg:  "../images/Speaker/Brown Speaker XYZ.png"           ,             link: "ProJectAC.html"               ,           ProductOldPrice:"₹ 5,000"   ,      Percentage:"30%"},
    {id:4,  ProductName: "JBL Professional Speaker"    ,        ProductPrice:"₹ 10,000" ,           ProductImg:  "../images/Speaker/download-removebg-preview.png"   ,             link: "JBLProfessionalSpeaker.html"  ,           ProductOldPrice:"₹ 15,000"  ,      Percentage:"30%"},
    {id:5,  ProductName: "RCF Vmax 12AD Speaker"       ,        ProductPrice:"₹ 7,500"  ,           ProductImg:  "../images/Speaker/RCF Vmax Speaker.png"            ,             link: "RCFVmaxSpeaker.html"          ,           ProductOldPrice:"₹ 15,000"  ,      Percentage:"50%"},
    {id:6,  ProductName: "JBL Beats BT Speaker"        ,        ProductPrice:"₹ 7,000"  ,           ProductImg:  "../images/Speaker/Wharfedale Beats Speaker.png"    ,             link: "JBLBeatsSpeaker.html"         ,           ProductOldPrice:"₹ 8,000"   ,      Percentage:"12%"},
    {id:7,  ProductName: "LD-Systems  Stinger"         ,        ProductPrice:"₹ 6000"   ,           ProductImg:  "../images/Speaker/Wharfedale Black Speaker.png"    ,             link: "LDSystemsStinger.html"        ,           ProductOldPrice:"₹ 8,000"   ,      Percentage:"30%"},
    {id:8,  ProductName: "JBL EV Bluetooth Speaker"    ,        ProductPrice:"₹ 4500"   ,           ProductImg:  "../images/Speaker/Wharfedale EV Speaker.png"       ,             link: "JBL EV Speaker.html"          ,           ProductOldPrice:"₹ 5,000"   ,      Percentage:"10%"},
    {id:9,  ProductName: "Wharfedale EVO Speaker"      ,        ProductPrice:"₹ 3000"   ,           ProductImg:  "../images/Speaker/Wharfedale White Speaker.png"    ,             link: "WharfedaleEVO.html"           ,           ProductOldPrice:"₹ 4,000"   ,      Percentage:"25%"},
    {id:10, ProductName: "Wharfedale Aura Speaker"     ,        ProductPrice:"₹ 8,000"  ,           ProductImg:  "../images/Speaker/Wharfedale Wallnet 3Speaker.png" ,             link: "WharfedaleAura2.html"         ,           ProductOldPrice:"₹ 16,000"  ,      Percentage:"50%"},
    {id:11, ProductName: "Wharfedale Evo Bookself "    ,        ProductPrice:"₹ 30,000" ,           ProductImg:  "../images/Speaker/Wharfedale Wallnet Speaker.png"  ,             link: "WharfedaleEvoBookself .html"  ,           ProductOldPrice:"₹ 40,000"  ,      Percentage:"25%"},
    {id:12, ProductName: "Pro-Ject Speaker Box"        ,        ProductPrice:"₹ 15,000" ,           ProductImg:  "../images/Speaker/Pure Black Speaker.png"          ,             link: "ProJect.html"                 ,           ProductOldPrice:"₹ 18,000"  ,      Percentage:"15%"},
];


let cart = document.querySelector(".boxes");

Speakers.map((Speaker)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Speaker.ProductImg}" alt="">
    <h5>${Speaker.ProductName}</h5>
    <small data-product="" ><i><b>${Speaker.ProductPrice}</b></i><span><br><strike>${Speaker.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="${Speaker.link}"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})