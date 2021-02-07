import { createHook } from 'async_hooks';
import React, {useRef, useEffect} from 'react'
import context from 'react-bootstrap/esm/AccordionContext';

export const Canvas = () => {
    const canvasRef: React.MutableRefObject<null | HTMLCanvasElement> = useRef(null);
    let blRect = {color: 'black', cHoff: 0, rWoff: 50}
    
   
    let aArray = [
        [1, 1, 0, 1, 1, 1, 1,0,0,0,0,0],
        [0, 1, 0, 0, 0, 0, 0,0,0,0,0,0],
        [0, 1, 0, 1, 1, 0, 1,0,0,0,0,0],
        [0, 0, 0, 1, 0, 0, 1,0,0,0,0,0],
        [0, 1, 0, 1, 1, 1, 1,0,0,0,0,0],
        [0, 1, 0, 0, 0, 1, 0,0,0,0,0,0],
        [0, 0, 0, 1, 0, 1, 0,0,0,0,0,0],
    ]
    const width = 600
    const height = 600
    const heightInc = height/aArray.length
    const widthInc = width/aArray[0].length
    useEffect (() => {
        const canvasElement = canvasRef.current;
        const context = canvasElement!.getContext('2d') as CanvasRenderingContext2D;
        context.beginPath()
        context.stroke();
        for(let x = 0; x < aArray.length; x++){
            for(let y = 0; y < aArray[x].length; y++){
                if(aArray[x][y] === 1)
                {
                    context.fillStyle ='blue';
                    context.strokeRect(x*widthInc,y*heightInc,widthInc,heightInc);
                }
                }
                /*if(aArray[x][y] === 1)
                {
                    context.fillStyle ='blue'
                    context.fillRect(y*heightInc,x*widthInc,heightInc,widthInc)
                } /*else if (aArray[x][y] === .125){
                    context.fillStyle ='black'
                    context.fillRect(y*heightInc,x*widthInc+50,heightInc/8,widthInc)} 
                
                else if (aArray[x][y] === 'rbo'){

                }
                }*/
            }
            context.fillStyle ='black';
            context.fillRect(0,0,heightInc/8,width);
            context.fillRect(0,0,height,widthInc/8);
            context.fillRect(600,600,-heightInc/8,-width);
            context.fillRect(600,600,-height,-widthInc/8);
        }
    )
    
    return <canvas ref={canvasRef} id='myCanvas' width={width} height={height} style={{border:'1px solid #000', backgroundColor: '#fff'}} >  
    </canvas>
};


