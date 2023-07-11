
var count = Math.floor(Math.random() * 2)
// var count = 0
var count1 = 0
var arr =[0,1,2,3,4,5,6,7,8]

function handleClick(clickedElement) {
    
    if(clickedElement.style.backgroundColor != "red"){
        
        clickedElement.innerText = "X"
        clickedElement.style.backgroundColor = "lightblue"
        arr.splice(arr.findIndex((i) => i == clickedElement.id),1)
        count = 1
    }
    console.log(arr)
    
}
  


function run(){

    setTimeout(() => {
        
        var count1 = Math.floor(Math.random() * arr.length)
    
        if(document.getElementById(arr[count1]).style.backgroundColor != "lightblue"){
            document.getElementById(arr[count1]).innerText = "O"
            document.getElementById(arr[count1]).style.backgroundColor = "red"
            arr.splice(arr.findIndex((i) => i == arr[count1]),1)
            count = 0
            console.log(arr)
        }
    }, 300);

    var redarr = [];
    var blackarr = [];
    
    for(let i = 1; i < 10; i++){
        var color = document.getElementById(i).style.backgroundColor;
        var id = document.getElementById(i).id;
        if(color == "red"){
            redarr.push(id);
        }else if(color == "lightblue"){
            blackarr.push(id);
        }
        
    }
    
}