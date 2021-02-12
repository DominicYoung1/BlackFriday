

const aArray = [
    [1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
];


export class GameLoop {
    wPressed: boolean;
    aPressed: boolean;
    sPressed: boolean;
    dPressed: boolean;
    x: number;
    y: number;



    constructor() {
        this.wPressed = false;
        this.aPressed = false;
        this.sPressed = false;
        this.dPressed = false;
        this.x = 7 / 8;
        this.y = 1 / 4;
    }

    connectListener() {
        const onKeydown = (event: any) => {
            console.log('I pressed', event.code);
            if (event.code === 'KeyW') {
                this.wPressed = true;
            }
            if (event.code === 'KeyA') {
                this.aPressed = true;
            }
            if (event.code === 'KeyS') {
                this.sPressed = true;
            }
            if (event.code === 'KeyD') {
                this.dPressed = true;
            }

        }

        const onKeyup = (event: any) => {
            if (event.code === 'KeyW') {
                this.wPressed = false;
            }
            if (event.code === 'KeyA') {
                this.aPressed = false;
            }
            if (event.code === 'KeyS') {
                this.sPressed = false;
            }
            if (event.code === 'KeyD') {
                this.dPressed = false;
            }
        }
        document.addEventListener('keydown', onKeydown);
        document.addEventListener('keyup', onKeyup);

    }

    update() {
        let x = 0;
        let y = 0;

        if (this.wPressed) {
            y -= .001;
        }
        if (this.aPressed) {
            x -= .001;
        }
        if (this.sPressed) {
            y += .001;
        }
        if (this.dPressed) {
            x += .001;
        }
        const r = Math.sqrt(x*x+y*y);
        if (r !== 0){
        x=x/r;
        y=y/r;
        this.x += .001*x;
        this.y += .001*y;
    }}

    render(context: CanvasRenderingContext2D, height: number, width: number) {
        const heightInc = height / aArray.length
        const widthInc = width / aArray[0].length
        context.beginPath()
        context.stroke();
        for (let x = 0; x < aArray.length; x++) {
            for (let y = 0; y < aArray[x].length; y++) {
                if (aArray[x][y] === 1) {
                    context.fillStyle = 'blue';
                    context.strokeRect(x * widthInc, y * heightInc, widthInc, heightInc);
                }
            }
        }
        context.fillStyle = 'black';
        context.fillRect(0, 0, heightInc / 8, width);
        context.fillRect(0, 0, height, widthInc / 8);
        context.fillRect(width, height, -heightInc / 8, -width);
        context.fillRect(width, height, -height, -widthInc / 8);
        context.fillRect(width * this.x, height * this.y, 30, 30);
    }

}