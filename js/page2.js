let getActiveSection = ()=>{
    try{
        let active = document.getElementsByClassName("page-el section active")[0];
        return active.getAttribute("data-index");
       
    }
    catch{
        return "1";
    }
}
var onSiteImgArray,onSiteImgCol,onSiteItemArray,onSiteItemCol;
const ImgSize = 800; // (width + border_left_right border), width/borders are set in css
let setInitialImgPosition = () =>{
    onSiteImgCol = document.getElementsByClassName("imgContainer");
    onSiteImgArray = Array.from(onSiteImgCol);
    for (i = 0 ; i < onSiteImgArray.length; i++){
        onSiteImgArray[i].style.left = -i*ImgSize  + "px";
        onSiteItemArray[i].style.left = "0px";
    }
} ; 
let setConstantTextPosition = () =>{
    onSiteItemCol = document.getElementsByClassName("itemContainer")[0].childNodes;
    onSiteItemArray = [];
    for (i = 0; i < onSiteItemCol.length ; i++){
        if (onSiteItemCol[i].nodeType == 1){
            onSiteItemArray.push(onSiteItemCol[i]);
        }
    }
    for (i = 0; i < onSiteItemArray.length ; i++){
        onSiteItemArray[i].style.top = i * 100 + "px" ; 
    }
    onSiteItemArray[1].style.animation ="glowing .7s alternate infinite ease-in-out";
    onSiteItemArray[1].style.fontSize ="3.5em";

}
var controlVar ;
let controlFunction = ()=> {
    if (getActiveSection() != "2"){
        return;
    }
    controlVar = setInterval(()=>{
        for (i = 0; i < onSiteImgArray.length ; i++){
            let orgPosLeft = parseInt(onSiteImgArray[i].style.left);
            orgPosLeft += ImgSize;  
            onSiteImgArray[i].style.left = orgPosLeft + "px";    
        }
        onSiteImgArray[1].style.opacity = "1" ;
        onSiteImgArray.push(onSiteImgArray[0]);
        onSiteImgArray[0].style.opacity = "0";
        onSiteImgArray[0].style.zIndex = "-1";
        for (i = 0; i < onSiteItemArray.length ; i++){
            let orgPosTop = parseInt(onSiteItemArray[i].style.top);
            orgPosTop -= 100;
            onSiteItemArray[i].style.top = orgPosTop + "px";
        }

        onSiteItemArray[1].style.opacity = ".2" ;
        onSiteItemArray[2].style.opacity = "1";
        onSiteItemArray[3].style.opacity = ".2";
        
        onSiteItemArray[2].style.animation ="glowing .7s alternate infinite ease-in-out";
        onSiteItemArray[2].style.fontSize ="3.5em";

        onSiteItemArray[1].style.fontSize ="1.7em";
        onSiteItemArray[3].style.fontSize ="1.7em";
        onSiteItemArray[1].style.animation ="none";

        onSiteItemArray.push(onSiteItemArray[0]);
        onSiteItemArray[0].style.opacity = "0";
        onSiteItemArray[0].style.zIndex = "-1";
        onSiteImgArray[0].style.fontSize = "1.7em";
        setTimeout(()=>{
            onSiteItemArray[0].style.top = 7*100 + "px";   
            onSiteItemArray.shift(); 
            onSiteImgArray[onSiteImgArray.length-1].style.left = -(onSiteImgCol.length-1)*ImgSize + "px";   
            onSiteImgArray.shift(); 
        },1000);  
    },2000);
};


setConstantTextPosition();
setInitialImgPosition();
let imgControl = document.getElementById("slidingImgContainer");
imgControl.addEventListener("mouseover",()=>{
    clearInterval(controlVar);
});
imgControl.addEventListener("mouseout",()=>{
    controlFunction();
})
let itemControl = document.getElementById("slidingItemContainer");
itemControl.addEventListener("mouseover",()=>{
    clearInterval(controlVar);
});
itemControl.addEventListener("mouseout",()=>{
    controlFunction();
});
window.addEventListener("focus",()=>{
    controlFunction();
});
window.addEventListener("blur",()=>{
    clearInterval(controlVar);
})


/*only start the animation when the use is on the page, from 1 to 2 in the custom */
