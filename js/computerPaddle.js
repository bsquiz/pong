class ComputerPaddle extends Paddle {
	constructor() {
		super();	
	}

	move(ballY) { 
		if (ballY > this.y) {
			this.ySpeed = 1;
		}

		if (ballY < this.y) {
			this.ySpeed = -1;
		}

		this.y += this.ySpeed;
	}
}
