
var count = Math.floor(Math.random() * 2)
var count2 = 0
var AIarr = []
var personarr = [];
var arr = [0,1,2,3,4,5,6,7,8]
var arr1 = [[0,1,2,11,11],[3,4,5,11,11],[6,7,8,11,11],[0,3,6,11,11],[1,4,7,11,11],[2,5,8,11,11],[0,4,8,11,11],[2,4,6,11,11]];


function handleClick(clickedElement){
    
    if(clickedElement.style.backgroundColor != "lightblue" && clickedElement.style.backgroundColor != "red"){
        person(clickedElement)
    } 
    
}

function person(clickedElement){

    count2++
    // document.getElementById("PersonSound").play()
    if(clickedElement.style.backgroundColor != "lightblue"){
        clickedElement.innerText = "X"
        clickedElement.style.backgroundColor = "red"
        arr.splice(arr.findIndex((i) => i == clickedElement.id),1)
        count = 1
        
    }
    var personarr = []
    for(let i = 0; i < 9; i++){
        var color = document.getElementById(i).style.backgroundColor;
        var id = document.getElementById(i).id;
        
        if(color == "red"){
            personarr.push(id);
        }
        
    }
    
    for(let i = 0; i < 8; i++){
        var personcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x = 0; x < personarr.length; x++){
                if(arr1[i][j] == personarr[x]){
                    personcount++;
                }
                if(personcount == 3){
                    console.log("person");
                    document.getElementById("EndSound").play()
                    
                    document.getElementById("result").innerText = "You-Win";
                    document.getElementById("result").style.color = "red";
    
                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    return 0;
                }
            } 
        }
    }
    if(count2 == 9 && personcount < 3){
        closing()
    }
    if(personcount < 3){
            document.getElementById("ai").style.backgroundColor = "lightblue"
            document.getElementById("human").style.backgroundColor = "white"
        setTimeout(()=>{
            
            AI()  
        },500)

        setTimeout(()=>{
            document.getElementById("human").style.backgroundColor = "red"
            document.getElementById("ai").style.backgroundColor = "white" 
        },1500)
        
    }

}

function AI(){
    document.getElementById("AiSound").play()
    count2++
    if(arr.length != 0){

        var count1 = Math.floor(Math.random() * arr.length);
        if(document.getElementById(arr[count1]).style.backgroundColor != "red"){
    
            AIarr.push(arr[count1])
            document.getElementById(arr[count1]).innerText = "O";
            document.getElementById(arr[count1]).style.backgroundColor = "lightblue";
        
            arr.splice(arr.findIndex((i) => i == arr[count1]),1);
            count = 0;
    
        } 
    }

    for(let i = 0; i < 8; i++){
        var AIcount = 0;
        for(let j = 0; j < 5; j++){
            for(let x = 0; x < AIarr.length; x++){
                if(arr1[i][j] == AIarr[x]){
                    AIcount++;
                }
                if(AIcount == 3){

                    console.log("AI");
                    document.getElementById("EndSound").play()
                    
                    document.getElementById("result").innerText = "AI-Win";
                    document.getElementById("result").style.color = "lightblue";

                    setTimeout(() => {
                        window.location.reload();
                    }, 3000);
                    return 0;
                }
            }
        }
    }
    
}

function closing(){
    document.getElementById("EndSound").play();
    document.getElementById("result").innerText = "Try Again!!!";
    setTimeout(() => {
        window.location.reload();
    }, 3000);
    return 0;
}

