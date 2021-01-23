import React, {useRef, useEffect} from 'react'

export const Canvas = () => {
    const canvasRef: React.MutableRefObject<null | HTMLCanvasElement> = useRef(null);

    useEffect (() => {
    const canvasElement = canvasRef.current;
    const context = canvasElement!.getContext('2d') as CanvasRenderingContext2D;
    context.beginPath()
    context.arc(250,250,200,0,2 * Math.PI);
    context.stroke();
    })
    return <canvas ref={canvasRef} id='myCanvas' width={500} height={500} style={{border:'1px solid #000'}} >  
    </canvas>
};