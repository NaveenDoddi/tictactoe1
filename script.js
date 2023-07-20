
var count = Math.floor(Math.random() * 2)
// var count = 0
var count2 = 0

var redarr = [];
var arr = [0,1,2,3,4,5,6,7,8]
var arr1 = [[0,1,2,11,11],[3,4,5,11,11],[6,7,8,11,11],[0,3,6,11,11],[1,4,7,11,11],[2,5,8,11,11],[0,4,8,11,11],[2,4,6,11,11]];


function handleClick(clickedElement) {
    
    if(clickedElement.style.backgroundColor != "red"){
        
        clickedElement.innerText = "X"
        clickedElement.style.backgroundColor = "lightblue"
        arr.splice(arr.findIndex((i) => i == clickedElement.id),1)
        count = 1
    }
     
}

function run(){
    count2++

    var blackarr = [];
    // setTimeout(() => {
        
        var count1 = Math.floor(Math.random() * arr.length)
    
        if(document.getElementById(arr[count1]).style.backgroundColor != "lightblue"){
            redarr.push(arr[count1])
            document.getElementById(arr[count1]).innerText = "O"
            document.getElementById(arr[count1]).style.backgroundColor = "red"
        
            arr.splice(arr.findIndex((i) => i == arr[count1]),1)
            count = 0
            // console.log(redarr)
        }
        
    // }, 300);

    for(let i = 0; i < 9; i++){
        var color = document.getElementById(i).style.backgroundColor;
        var id = document.getElementById(i).id;
        // console.log(color, id)
        if(color == "lightblue"){
            blackarr.push(id);
            // console.log(blackarr)
        }
        
    }

    for(let i = 0; i < 8; i++){
        var redcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x = 0; x < redarr.length; x++){
                // console.log((arr1[i][j]))
                // console.log(("red"+redarr[x]))
                if(arr1[i][j] == redarr[x]){
                    redcount++;
                }
                if(redcount == 3){
                    console.log("yes")
                    // for(let y = 0 ; y<3; y++){
                    //     document.getElementById(arr[i][y]).className = "yes"
                    // }
                    
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
            for(let x = 0; x < blackarr.length; x++){
                // console.log(arr1[i][j])
                
                if(arr1[i][j] == blackarr[x]){
                    console.log(blackarr[x] == arr1[i][j])
                    blackcount++;
                    console.log(blackcount)
                }
                // console.log(count2)
                if(blackcount == 3){
                    console.log("fdk")
                    
                    // for(let y = 0 ; y<3; y++){
                    //     document.getElementById(arr[i][y]).id = "yes"
                    // }

                    document.getElementById("result").innerText = "Black-Winner";
                    document.getElementById("result").style.color = "balck"

                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
            }
        }
    }

    if(count2 == 9){
        document.getElementById("result").innerText = "Try Again!!!";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }
    
}
