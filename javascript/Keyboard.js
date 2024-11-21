let keyboard = [
    {id:1,name:"Digital Keyboard PSR-A3000",price:"3,79,137",img:"../images/Keyboard/PSR-A3000.png"                 ,  link:""              },
    {id:2,name:"Yamaha PSR-SX720 Digital Arranger Keyboard",price:"3,79,137",img:"../images/Keyboard/PSR-A5000.png" ,  link:""              },
    {id:3,name:"Digital Keyboard PSR-S670",price:"3,79,137",img:"../images/Keyboard/PSR-S670.png"                   ,  link:""              },
    {id:4,name:"Digital Keyboard PSR-SX600",price:"3,79,137",img:"../images/Keyboard/PSR-SX600.png"                 ,  link:""              },
    {id:5,name:"Digital Keyboard PSR-SX700",price:"3,79,137",img:"../images/Keyboard/PSR-SX700.png"                 ,  link:""              },
    {id:6,name:"Digital Keyboard PSR-SX720",price:"3,79,137",img:"../images/Keyboard/PSR-SX720.png"                 ,  link:""              },
    {id:7,name:"Digital Keyboard PSR-SX900",price:"3,79,137",img:"../images/Keyboard/PSR-SX900.png"                 ,  link:""              },
    {id:8,name:"Digital Keyboard PSR-SX920",price:"3,79,137",img:"../images/Keyboard/PSR-SX920.png"                 ,  link:""              },
    {id:9,name:"Digital Keyboard PSR-A3000",price:"3,79,137",img:"../images/Keyboard/PSR-A3000.png"                 ,  link:""              },
    {id:10,name:"Digital Keyboard PSR-A3000",price:"3,79,137",img:"../images/Keyboard/PSR-A3000.png"                ,  link:""              },
    {id:11,name:"Digital Keyboard PSR-A3000",price:"3,79,137",img:"../images/Keyboard/PSR-A3000.png"                ,  link:""              },
    {id:12,name:"Digital Keyboard PSR-A3000",price:"3,79,137",img:"../images/Keyboard/PSR-A3000.png"                ,  link:""              }
]


let board =  document.getElementById("boxes");




keyboard.forEach((key)=>{
    let box = document.createElement('div');
    box.innerHTML=

        `
        <div class="box">
            <img src=" ${key.img}" />
            <h5>${key.name}</h5>
             <small><i><b> ${key.price}</b></i><span><strike>₹ 2,50,000</strike></span><span class="percentage">   </span></small> <br>
             <a href"${key.link}"><button class="check-out">Buy</button></a>
        </div>
        `;
        board.append(box);
});