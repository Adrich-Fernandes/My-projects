const btn = document.querySelectorAll('.box');
const result = document.querySelector('#res');

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
                
                display_win(pos1)
                disable();
            }
        }
    }
}
function disable(){
    for(let b of btn){
        b.disabled = true;
    }
}
// display winner and display the new game button...
function display_win(winner){
    result.innerText = `The Winner is ${winner}`
}

const reset = document.querySelector('#reset');

reset.addEventListener('click',function(){
    turn = true;
    btn.forEach((bn)=>{
        bn.disabled = false;
        bn.innerText = "";
    })
    result.innerText = "";
})
