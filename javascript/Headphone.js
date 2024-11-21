let Headphones =  [
    {id:1,  ProductName: "Lmminer Bluetooth Headphone"       ,        ProductPrice:"₹ 4000",           ProductImg:  "../images/Headphone/ADITAM bluetooth Headphone.png"                                    ,               ProductOldPrice:"₹ 5800",     Percentage:"30%" ,     link: "ADI Bluetooth Headphone.html" },
    {id:2,  ProductName: "GMUDA Cushion Headphone"           ,        ProductPrice:"₹ 3500",           ProductImg:  "../images/Headphone/Apple beats studio 3.png"                                          ,               ProductOldPrice:"₹ 4500",     Percentage:"20%" ,     link: "Apple Beats Earphone.html" },
    {id:3,  ProductName: "Beats Wireless Bluetooth"          ,        ProductPrice:"₹ 1800",           ProductImg:  "../images/Headphone/Beats by Dr. Dre Wireless Bluetooth On-Ear Headphones Golden.png"  ,               ProductOldPrice:"₹ 2500",     Percentage:"35%" ,     link: "Beats Wireless Bluetooth.html" },
    {id:4,  ProductName: "boAt Rooky Bluetooth"              ,        ProductPrice:"₹ 3300",           ProductImg:  "../images/Headphone/BOAT Rooky AZ23.png"                                               ,               ProductOldPrice:"₹ 3800",     Percentage:"28%" ,     link: "BOAT Rooky Bluetooth.html" },
    {id:5,  ProductName: "boAt Wireless Headphone"           ,        ProductPrice:"₹ 4550",           ProductImg:  "../images/Headphone/BOAT DC Headphone.png"                                             ,               ProductOldPrice:"₹ 5500",     Percentage:"34%" ,     link: "BOAT Wireless Headphone.html" },
    {id:6,  ProductName: "boAt Rockerz Headphone"            ,        ProductPrice:"₹ 2800",           ProductImg:  "../images/Headphone/BOAT Rockerz 425.png"                                              ,               ProductOldPrice:"₹ 3200",     Percentage:"20%" ,     link: "BOAT Rockerz Headphone.html" },
    {id:7,  ProductName: "boAt Bluetooth Headphone"          ,        ProductPrice:"₹ 4000",           ProductImg:  "../images/Headphone/BOAT Wireless Bluetooth Headphone .png"                            ,               ProductOldPrice:"₹ 4800",     Percentage:"30%" ,     link: "BOATBluetoothHeadphone.html" },
    {id:8,  ProductName: "Mokato Headphone limited"          ,        ProductPrice:"₹ 2900",           ProductImg:  "../images/Headphone/Mokato Head phone volume limited.png"                              ,               ProductOldPrice:"₹ 3500",     Percentage:"40%" ,     link: "MokatoHeadphonelimited.html" },
    {id:9,  ProductName: "Nosie reduction Bluetooth"         ,        ProductPrice:"₹ 3050",           ProductImg:  "../images/Headphone/Nosie reduction blueetooth.png"                                    ,               ProductOldPrice:"₹ 6100",     Percentage:"50%" ,     link: "NosiereductionBluetooth.html" },
    {id:10, ProductName: "Stero A33 Headphone"               ,        ProductPrice:"₹ 3850",           ProductImg:  "../images/Headphone/Stero Headphone wireless.png"                                      ,               ProductOldPrice:"₹ 4100",     Percentage:"25%" ,     link: "SteroA33Headphone.html" },
    {id:11, ProductName: "Stero A32 Headphone"               ,        ProductPrice:"₹ 4850",           ProductImg:  "../images/Headphone/V33 Bluetooth Headphone.png"                                       ,               ProductOldPrice:"₹ 6800",     Percentage:"30%" ,     link: "SteroA32Headphone.html" },
    {id:12, ProductName: "Volkano Bluetooth Headphone"       ,        ProductPrice:"₹ 1800",           ProductImg:  "../images/Headphone/Volkano Bluetooth Wireless Headphone.png"                          ,               ProductOldPrice:"₹ 2000",     Percentage:"10%" ,     link: "VolkanoBluetoothHeadphone.html" },
];


let cart = document.querySelector(".boxes");

Headphones.map((Headphone)=>{
    let box = document.createElement("div");

    box.innerHTML=

`

<div class="box">
    <img src="${Headphone.ProductImg}" alt="">
    <h5>${Headphone.ProductName}</h5>
    <small data-product="" ><i><b>${Headphone.ProductPrice}</b></i><span><br><strike>${Headphone.ProductOldPrice}</strike></span><span class="percentage">65%</span></small> <br>                   
    <a style="text-decoration: none; color:black;" href="${Headphone.link}"><button class="check-out">Buy</button></a>  
    
</div>

`;

cart.append(box);
})