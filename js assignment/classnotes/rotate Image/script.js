//Write your code here
//Write your code here
let imageone = document.getElementById("i1");
let imagetwo = document.getElementById("i2")
let imagethree = document.getElementById("i3")
let imagefour = document.getElementById("i4")

let pathArray = ["https://d3dyfaf3iutrxo.cloudfront.net/general/upload/020e4610fbee4e8abe525bd6482fb865.jpg",
"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/b59a7c2973b44b2cb3a6d78634146d41.jpg",
"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/60171f69a20443b3ab5972df422661bc.jpg",
"https://d3dyfaf3iutrxo.cloudfront.net/general/upload/6160f7789c5048aaaefaff0210895201.jpg"]

let count =0;

function rotateImages() {
    
        imageone.src = pathArray[(count)%4];
            imagetwo.src = pathArray[(count+1)%4];
                imagethree.src = pathArray[(count+2)%4];
                    imagefour.src = pathArray[(count+3)%4];
                    count++;

                    }
                    rotateImages();