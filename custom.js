var a=document.querySelector(".body1");
var b=document.getElementById("slide-h1");
console.dir(a.style.backgroundImage);
var b=0;
function changeImage(){
    var imagelist=["url(image/1714581273_gai1619162508.jpg)","url(image/gaiin.jpg)"];
    if(b<=1){
        a.style.backgroundImage=imagelist[b]
        b++;
    }
    else{
        b=0;
        a.style.backgroundImage=imagelist[b]
        
        b++;
    };
};
setInterval(changeImage,5000)


