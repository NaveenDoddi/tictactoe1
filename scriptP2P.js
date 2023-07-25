var count
function onload(){
    count = Math.floor(Math.random() * 2)
    
    console.log(count)
    if(count == 0){
        document.getElementById("player1").style.backgroundColor = "red";
    }else{
        document.getElementById("player2").style.backgroundColor = "lightblue";
    }
}
var count1 = 0
function handleClick(clickedElement) {
    
    if(count == 0){
        
        if(clickedElement.style.backgroundColor != "lightblue"){
            document.getElementById("PersonSound").play()
            clickedElement.innerText = "X"
            clickedElement.style.backgroundColor = "red";
            document.getElementById("player1").style.backgroundColor="white"
            document.getElementById("player2").style.backgroundColor="lightblue"
            count = 1;
            count1++;
        }
        console.log(clickedElement.style.backgroundColor);
        
    }else{
        
        if(clickedElement.style.backgroundColor != "red"){
            document.getElementById("AiSound").play()
            clickedElement.innerText = "O"
            clickedElement.style.backgroundColor = "lightblue";
            document.getElementById("player2").style.backgroundColor="white"
            document.getElementById("player1").style.backgroundColor="red"
            count = 0;
            count1++;
        }
        console.log(clickedElement.style.backgroundColor);
    }
    run()
  
}

var arr = [[1,2,3,0,0],[4,5,6,0,0],[7,8,9,0,0],[1,4,7,0,0],[2,5,8,0,0],[3,6,9,0,0],[1,5,9,0,0],[3,5,7,0,0]];

function run(){

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
    
    for(let i = 0; i < 8; i++){
        var redcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x = 0; x<redarr.length; x++){
                if(arr[i][j] == redarr[x]){
                    redcount++;

                }
                if(redcount == 3){
                    
                    // for(let y = 0 ; y<3; y++){
                    //     document.getElementById(arr[i][y]).className = "yes";
                    // }
                    document.getElementById("EndSound").play();
                    document.getElementById("result").innerText = "Winner-player 1";
                    document.getElementById("result").style.backgroundColor = "red";
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
                    // for(let y = 0 ; y<3; y++){
                    //     document.getElementById(arr[i][y]).id = "yes"
                    // }
                    document.getElementById("EndSound").play();
                    document.getElementById("result").innerText = "Winner-player 2";
                    document.getElementById("result").style.backgroundColor = "lightblue"

                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                }
                
            }
        }

    }
    if(count1 == 9){
        document.getElementById("EndSound").play();
        document.getElementById("result").innerText = "Try Again!!!";
        setTimeout(() => {
            window.location.reload();
        }, 3000);
    }

}

