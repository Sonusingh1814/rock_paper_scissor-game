let userscore=0;
let computerscore=0;

let btn=document.querySelectorAll("img");
let score=document.querySelector(".results")
let yourscore=document.querySelector("#user-score");
let comscore=document.querySelector("#computer-score");








let comchoice=()=>
{
    let arr=["paper", "rock", "scissore"];
    let com=Math.floor(Math.random ()*3);   // pick random values from computer
    return arr[com];

}

const drawgame=() =>
{
    console.log(" match is draw");
    score.innerHTML="match is draw";
    score.classList.remove("print");
    score.classList.add("draw");

};
const showwinner=(userwin)=>
{
    if(userwin)
    {
        userscore++;
        yourscore.innerHTML=userscore;
        console.log(" you win");
        score.innerHTML=" you win";
        score.classList.add("print");
        score.classList.remove("draw");
        score.classList.remove("lose");
        
        
    }
    else{
        computerscore++;
        comscore.innerHTML=computerscore;
        console.log(" you lose ");
        score.classList.remove("draw");
        score.classList.remove("print");
        score.classList.add("lose")

        score.innerHTML="you lose"
    }
}


const winnerscore=(userid)=>{
    console.log(" user choice is =",userid);
  //  comchoice();
    const ans=comchoice();
    console.log(" computer choice is =",ans);

    if(userid === ans)
    {
         drawgame();
    }
    else
    {
        let userwin=true;
        if(userwin="rock")
        {
            userwin=ans==="paper" ? false: true;

        }
        else if(userwin==="paper")
        {
            userwin=ans==="scissore" ? false : true;

        }
        else{
            userwin=ans==="rock" ? false : true; 
        }

        showwinner(userwin);

    }
};




btn.forEach((box) =>
{

    box.addEventListener("click",()=>
    
    {

        
        const userid=box.getAttribute("id");
        
         winnerscore(userid);




    });
});


