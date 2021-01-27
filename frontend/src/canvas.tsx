import React, {useRef, useEffect} from 'react'
import context from 'react-bootstrap/esm/AccordionContext';

export const Canvas = () => {
    const canvasRef: React.MutableRefObject<null | HTMLCanvasElement> = useRef(null);
    let aArray = [
        [0,1,0],
        [0,1,0],
        [0,1,0],
        [0,1,0],
        [0,1,0],
    ]
    const width = 600
    const height = 600
    const heightInc = height/aArray[0].length
    const widthInc = width/aArray.length
    useEffect (() => {
    const canvasElement = canvasRef.current;
    const context = canvasElement!.getContext('2d') as CanvasRenderingContext2D;
    context.beginPath()
    context.arc(250,250,200,0,2 * Math.PI);
    context.stroke();
    for(let r = 0; r < aArray.length; r++)
    for(let c = 0; c < aArray[r].length; c++){
    if(aArray[r][c] === 1)
    {
        context.fillStyle ='blue'
        context.fillRect(c*heightInc,r*widthInc,heightInc,widthInc)
    }
    }
    })
    return <canvas ref={canvasRef} id='myCanvas' width={width} height={height} style={{border:'1px solid #000', backgroundColor: '#fff'}} >  
    </canvas>
};