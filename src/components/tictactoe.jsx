import React, {useRef, useState} from "react";
import circle_icon from "../assets/circle.png";
import cross_icon from "../assets/cross.png";

let data = ["","","","","","","","",""];
const TicTacToe = ()=>{
     let[count, setCount] = useState(0);
     let[lock,setLock] = useState(false);
     let titleRef = useRef(null);

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
             won(data);
         }
         else if(data[3]===data[4] && data[4]===data[5] && data[5]!==""){
             won(data);
         }
         else if(data[6]===data[7] && data[7]===data[8] && data[8]!==""){
             won(data);
         }
         else if(data[0]===data[3] && data[3]===data[6] && data[6]!==""){
             won(data);
         }
         else if(data[1]===data[4] && data[4]===data[7] && data[7]!==""){
             won(data);
         }
         else if(data[2]===data[5] && data[5]===data[8] && data[8]!==""){
             won(data);
         }
         else if(data[0]===data[4] && data[4]===data[8] && data[8]!==""){
             won(data);
         }
         else if(data[2]===data[4] && data[4]===data[6] && data[6]!==""){
             won(data);
         }

     }
     const won = (winner)=>{
         setLock(true);
     }


    return(<div className="h-screen flex flex-col justify-center items-center bg-cyan-950 gap-8">
        <div className=" flex flex-col text-center">
            <h1 className="text-white mt-0 mb-6 text-3xl flex items-center justify-center">Tic Tac Toe</h1>
            <div className="m-auto flex h-min w-min">
                <div className="row1">
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,0)}}></div>
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,1)}}  ></div>
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer"  onClick={(e)=>{toggle(e,2)}} ></div>

                </div>
                <div className="row2">
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,3)}}></div>
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,4)}}></div>
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,5)}}></div>

                </div>
                <div className="row3">
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,6)}}></div>
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,7)}}></div>
                    <div className="Box flex h-24 w-24 bg-cyan-700 rounded border-gray-800 border-4 hover:bg-cyan-500 cursor-pointer" onClick={(e)=>{toggle(e,8)}}></div>

                </div>
            </div>
        </div>

        <button className="w-20 h-10 outline-0 cursor-pointer text-white rounded-xl bg-blue-900 hover:bg-blue-100 hover:text-cyan-950 " >Reset</button>

    </div>)
}

export default TicTacToe