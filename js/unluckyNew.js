var folioToLoad = [{image:"abcGYM.png",name:"ABC Gym"},
{image:"burnerTech.png",name:"Burner Tech"},
{image:"carmen.png",name:"Carmen"},
{image:"Dubai.png",name:"Dubai Expo"},
{image:"etkan.png",name:"Etkan"},
{image:"JSTEEL-1.png",name:"JSteel"},
{image:"juiceSalad.png",name:"Juice Salad"},
{image:"VODAFONE.png",name:"Vodafone"},
{image:"watany.png",name:"Watany"},
{image:"passion-resturants.png",name:"Passion"}
];
var randomPosSelector = [3],randomImgSelector = [3], changingLinkVar,onlineFetchingVar, flexEleArr;
let populateRandomSelector = () =>{
    flexEleArr = document.getElementsByClassName("flexEle");
    for (i = 0;i < 100 ; i++){
        randomPos = Math.ceil(Math.random()*(flexEleArr.length))-1;
        randomImg = Math.ceil(Math.random()*(folioToLoad.length))-1;
        if (randomPosSelector[i] != randomPos && randomImgSelector[i] != randomImg){
            randomPosSelector.push(randomPos);
            randomImgSelector.push(randomImg);
        }
        else{
            i--;
        }
    }
};
populateRandomSelector();
let changingLinksControlFunction = (quietTime)=>{
    if (getActiveSection() != "6"){
        return;
    }
    let count = 0;
    changingLinkVar = setInterval(()=>{
        pos = randomPosSelector[count];
        img = randomImgSelector[count];
        for (i = 0 ; i < flexEleArr[randomPosSelector[count]].childNodes.length ; i++){
            if (flexEleArr[randomPosSelector[count]].childNodes[i].nodeType == 1){
                if (flexEleArr[randomPosSelector[count]].childNodes[i].getAttribute("class") == "luckyLink"){
                    luckyChild = flexEleArr[randomPosSelector[count]].childNodes[i];
                }
                else{
                    unluckyChild = flexEleArr[randomPosSelector[count]].childNodes[i];
                }
            }
        }
        luckyChild.setAttribute("class",""); //not so lucky anymore
        unluckyChild.setAttribute("class","luckyLink");
        let imgIndex = randomImgSelector[count];
        if (window.navigator.onLine){
            onlineFetchingVar = setTimeout(()=>{
                newImg  = luckyChild.getAttribute("source");
                newName = luckyChild.innerHTML;
                luckyChild.style.backgroundImage = "url(../folio-images/" + folioToLoad[imgIndex].image +")";
                luckyChild.setAttribute("source",folioToLoad[imgIndex].image);
                luckyChild.innerHTML = folioToLoad[imgIndex].name; 
                folioToLoad.splice(imgIndex,1,{image:newImg,name:newName});
            },quietTime/2); 
        }
        else{
            clearTimeout(onlineFetchingVar);
        }
        count = (count+1)%randomPosSelector.length;
    },quietTime);
}
changingLinksControlFunction(2000);
document.getElementById("folioContainer").addEventListener("mouseover",()=>{
    clearInterval(changingLinkVar);
});
document.getElementById("folioContainer").addEventListener("mouseout",()=>{
     changingLinksControlFunction(2000);
});
window.addEventListener("focus",()=>{
    changingLinksControlFunction(2000);
});
window.addEventListener("blur",()=>{
    clearInterval(changingLinkVar);
})


