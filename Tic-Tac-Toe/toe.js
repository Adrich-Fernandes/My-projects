const btn = document.querySelectorAll('.box');
const result = document.querySelector('#res');
const reset = document.querySelector('#reset');
// counts the wins of X , O and Draw...
let countX = 0;
let countO = 0;
let countD = 0;
// winning patterns
let win_ptn =[
    [0,1,2],[0,4,8],
    [0,3,6],[1,4,7],
    [2,5,8],[2,4,6],
    [3,4,5],[6,7,8]
]
let turn = true;

// mark X and Y turns
btn.forEach(function(b){
    b.addEventListener('click',function(){
        if(turn){
            b.innerHTML="X";
            turn = false;
        }
        else{
            b.innerHTML="O";
            turn = true;
        }
        b.disabled=true;
        check_win();
    })
})

const check_win = ()=>{
    for(let ptn of win_ptn){
        // position values...
        let pos1 =btn[ptn[0]].innerHTML;
        let pos2 =btn[ptn[1]].innerHTML;
        let pos3 =btn[ptn[2]].innerHTML;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                // to count the number of wins of X , O and Draw's
                if(pos1 === "X"){
                    countX+=1;
                }
                else if(pos1 === "O"){
                    countO+=1;
                }
                display_win(pos1);
                disable();
            }
            else if(pos1 || pos2 !== pos3){
                countD+=1;
                console.log(countD);
            }
        }
    }
}

// function to disable all the buttons...
function disable(){
    for(let b of btn){
        b.disabled = true;
    }
}

// display winner and display the new game button...
function display_win(winner){
    result.innerText = `The Winner is ${winner}`
}

reset.addEventListener('click',function(){
    turn = true;
    btn.forEach((bn)=>{
        bn.disabled = false;
        bn.innerText = "";
    })
    result.innerText = "";
})
