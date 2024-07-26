import React, {useRef, useState} from "react";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

let data = ["","","","","","","","",""];
const TicTacToe = ()=>{
     let[count, setCount] = useState(0);
     let[lock,setLock] = useState(false);
     let titleRef = useRef(null);
     let box1 = useRef(null);
     let box2 = useRef(null);
     let box3 = useRef(null);
     let box4 = useRef(null);
     let box5 = useRef(null);
     let box6 = useRef(null);
     let box7 = useRef(null);
     let box8 = useRef(null);
     let box9 = useRef(null);



     let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];



    const toggle = (e, num)=>{
         if(lock) {
             return 0;
         }
         if(count%2===0){
             e.target.innerHTML = `<img src="${cross_icon}"/>`;
             data[num]="x";
             setCount(++count);

         }
         else{
             e.target.innerHTML = `<img src="${circle_icon}"/>`;
             data[num]= "o";
             setCount(++count);
         }
         checkWin();

     }

     const checkWin = ()=>{
         if(data[0]===data[1] && data[1]===data[2] && data[2]!==""){
             won(data[2]);
         }
         else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
             won(data[5]);
         }
         else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
             won(data[8]);
         }
         else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
             won(data[6]);
         }
         else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
             won(data[7]);
         }
         else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
             won(data[8]);
         }
         else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
             won(data[8]);
         }
         else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
             won(data[6]);
         }

     }
     const won = (winner)=>{
         setLock(true);

         if(winner==="x"){
             titleRef.current.innerHTML = `Congratulations: <img style="height: 40px" style="padding: 20px 20px"  src="${cross_icon}"  /> wins`;
         }
         else if(winner==="o"){
             titleRef.current.innerHTML = `Congratulations: <img style="height: 40px" style="padding: 20px 20px" src="${circle_icon}"  /> wins`;
         }
     }

     const reset = ()=>{
         setLock(false);
         data = ["","","","","","","","",""];
         titleRef.current.innerHTML = `Tic Tac Toe`;
         box_array.map((e)=>{
             e.current.innerHTML = "";
         })

     }


    return(<div className="h-screen flex flex-col justify-center items-center bg-cyan-950 gap-8">
        <div className=" flex flex-col text-center">
            <h1 className="text-white mt-0 mb-6 text-3xl flex items-center justify-center" ref={titleRef}>Tic Tac Toe</h1>
            <div className="m-auto flex h-min w-min">
                <div className="row1">
                    <div ref={box1} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,0)}}></div>
                    <div ref={box2} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,1)}}  ></div>
                    <div ref={box3} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer"  onClick={(e)=>{toggle(e,2)}} ></div>

                </div>
                <div className="row2">
                    <div ref={box4} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,3)}}></div>
                    <div ref={box5} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,4)}}></div>
                    <div ref={box6} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,5)}}></div>

                </div>
                <div className="row3">
                    <div ref={box7} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,6)}}></div>
                    <div ref={box8} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,7)}}></div>
                    <div ref={box9} className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,8)}}></div>

                </div>
            </div>
        </div>

        <button onClick={()=>{reset()}} className="w-20 h-10 outline-0 cursor-pointer text-white rounded-xl bg-blue-900 hover:bg-blue-100 hover:text-cyan-950 " >Reset</button>

    </div>)
}

export default TicTacToe