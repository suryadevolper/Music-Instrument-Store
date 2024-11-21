const interface = [
    {id: 1, ProductName : "Focusrite Scarlett Audio Interface"   ,                   ProductPrice : "28,700",  ProductOldPrice : "33,839" , Precentages : "-16%" , link : "../html/Audio_Interface_Focusrite_Scarlett.html"    , ProductImg : "../images/Interface/Focusrite Scarlett Audio Interface.png" },
    {id: 2, ProductName : "Arturia MiniFuse 1 USB-2 Audio Interface"   ,             ProductPrice : "28,700",  ProductOldPrice : "33,839" , Precentages : "-19%" , link : "../html/Audio_Interface_Arturia_MiniFuse.html"    , ProductImg : "../images/Interface/Arturia MiniFuse 1 USB-2 Audio Interface.png" },
    {id: 3, ProductName : "Behringer U-PHORIA UMC204HD 2X4 Audio Interface"   ,      ProductPrice : "13,900",  ProductOldPrice : "25,960" , Precentages : "-47%" , link : "../html/Audio_Interface_Behringer.html"    , ProductImg : "../images/Interface/Behringer U-PHORIA UMC204HD 2X4 Audio Interface.png" },
    {id: 4, ProductName : "ESI U22 XT Professional 24 bit USB Audio Interface",      ProductPrice : "6,200",  ProductOldPrice : "6,890" , Precentages : "-11%"   , link : "../html/Audio_Interface_USB_Audio_Interface.html"    , ProductImg : "../images/Interface/ESI U22 XT Professional 24 bit USB Audio Interface.png" },
    {id: 5, ProductName : "Behringer U-PHORIA UMC 404HD 24-Bit USB Audio"   ,        ProductPrice : "13,900",  ProductOldPrice : "25,960" , Precentages : "-47%" , link : "../html/Audio_Interface_U-PHORIA.html"    , ProductImg : "../images/Interface/Behringer U-PHORIA UMC 404HD 24-Bit USB Audio.png" },
    {id: 6, ProductName : "Native Instruments Komplete Audio channel"   ,            ProductPrice : "13,900",  ProductOldPrice : "25,960" , Precentages : "-47%" , link : "../html/"    , ProductImg : "../images/Interface/Native Instruments Komplete Audio channel.png" },
];



const boxes = document.querySelector(".boxes");

interface.map((interfaces)=>{
    const box = document.createElement("div");

    box.innerHTML = 

    `
    <div class="box">
        <img src="${interfaces.ProductImg}" alt="">
        <h5>${interfaces.ProductName}</h5>
        <small data-product="" ><i><b>${interfaces.ProductPrice}</b></i><span><strike>${interfaces.ProductOldPrice}</strike></span><span class="percentage"> ${interfaces.Precentages} </span></small> <br>  
        <a style="text-decoration: none; color:black;" href=" ${interfaces.link}"><button class="check-out">Buy</button></a>
    </div>
    `;

    boxes.append(box);


});

