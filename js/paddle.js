class Paddle extends GameObject {
	constructor() {
		super();	

		this.xSpeed = 0;	
		this.width = 20;
		this.height = 50;
	}

	reset(x, y) {
		this.x = x;
		this.y = y;
	}

        move() {
                const tempY = this.y + this.ySpeed;

                if (!this.isMoving) {
                        return;
                }

                if ( 
                        tempY > this.gameHeight ||
                        tempY < 0
                ) {     
                        return;
                }
                
                this.y = tempY;
        }
}
