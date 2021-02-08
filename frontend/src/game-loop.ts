

const aArray = [
        [1, 1, 0, 1, 1, 1, 1,0,0,0,0,0],
        [0, 1, 0, 0, 0, 0, 0,0,0,0,0,0],
        [0, 1, 0, 1, 1, 0, 1,0,0,0,0,0],
        [0, 0, 0, 1, 0, 0, 1,0,0,0,0,0],
        [0, 1, 0, 1, 1, 1, 1,0,0,0,0,0],
        [0, 1, 0, 0, 0, 1, 0,0,0,0,0,0],
        [0, 0, 0, 1, 0, 1, 0,0,0,0,0,0],
    ];





export const myGameLoop = (context: CanvasRenderingContext2D, height: number, width: number) => {
    const heightInc = height/aArray.length
    const widthInc = width/aArray[0].length
    context.beginPath()
    context.stroke();
    for(let x = 0; x < aArray.length; x++) {
      for(let y = 0; y < aArray[x].length; y++) {
        if(aArray[x][y] === 1) {
            context.fillStyle ='blue';
            context.strokeRect(x*widthInc,y*heightInc,widthInc,heightInc);
        }
      }
    }
    context.fillStyle ='black';
    context.fillRect(0,0,heightInc/8,width);
    context.fillRect(0,0,height,widthInc/8);
    context.fillRect(width,height,-heightInc/8,-width);
    context.fillRect(width,height,-height,-widthInc/8);
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
};