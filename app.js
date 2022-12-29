var a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
}
let brandD = document.getElementById('brand');
let modelD = document.getElementById('model');
let result = document.getElementById('result');
let brands;
let modelss;
function init() {
    brands = Object.keys(a.mobiles)
    brandD.innerHTML = ""
    for(i=0;i<brands.length;i++){
        brandD.innerHTML += `<option value="${brands[i]}">${brands[i]}</option>` 
    }
}
init()
function models(){
    modelss = Object.keys(a.mobiles[brandD.value])
    console.log(modelss)
    modelD.innerHTML = ""
    for(i=0;i<modelss.length;i++){
        modelD.innerHTML += `<option value="${modelss[i]}">${modelss[i]}</option>` 
    }
}
function search() {
    result.innerHTML = "";
    var object = a.mobiles[brand.value][model.value]
    if(object == undefined){
        result.innerHTML = 
        `<h1 class="datanot">Data Not Found</h1>`
    }
    result.innerHTML =
        `<ul>
        <li> ${object.name}</li>
        <li> ${object.ram} / ${object.rom} </li>
        <li> ${object.camera}Px Camera</li>
        <li> Rs:${object.price}</li>
    </ul>`
}


