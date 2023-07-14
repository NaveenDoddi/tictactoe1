
var count = Math.floor(Math.random() * 2)
// var count = 0
var count1 = 0
var arr = [0,1,2,3,4,5,6,7,8]

function handleClick(clickedElement) {
    
    if(clickedElement.style.backgroundColor != "red"){
        
        clickedElement.innerText = "X"
        clickedElement.style.backgroundColor = "lightblue"
        arr.splice(arr.findIndex((i) => i == clickedElement.id),1)
        count = 1
    }
    console.log(arr)
    
}
var arr1 = [[1,2,3,0,0],[4,5,6,0,0],[7,8,9,0,0],[1,4,7,0,0],[2,5,8,0,0],[3,6,9,0,0],[1,5,9,0,0],[3,5,7,0,0]];


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
    
    for(let i = 0; i < 9; i++){
        var color = document.getElementById(i).style.backgroundColor;
        var id = document.getElementById(i).id;
        if(color == "red"){
            redarr.push(id);
        }else if(color == "lightblue"){
            blackarr.push(id);
        }
        
    }
    for(let i = 0; i < 8; i++){
        var redcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x = 0; x<redarr.length; x++){
                if(arr1[i][j] == redarr[x]){
                    redcount++;

                }
                if(redcount == 3){
                    
                    for(let y = 0 ; y<3; y++){
                        document.getElementById(arr[i][y]).className = "yes"
                    }
                    
                    document.getElementById("result").innerText = "Red-Winner";
                    document.getElementById("result").style.color = "red"
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            }
        
            
        }

        var blackcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x =0; x < blackarr.length; x++){
                if(arr[i][j] == blackarr[x]){
                    blackcount++;
                }
                if(blackcount == 3){
                    for(let y = 0 ; y<3; y++){
                        document.getElementById(arr[i][y]).id = "yes"
                    }

                    document.getElementById("result").innerText = "Black-Winner";
                    document.getElementById("result").style.color = "balck"

                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
                
            }
        }


    }
    if(count1 == 9){
        document.getElementById("result").innerText = "Try Again!!!";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    
}
