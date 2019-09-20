class Ball extends GameObject {
	constructor() {
		super();
		this.width = 10;
		this.height = 10;
		this.xSpeed = 15;
		this.ySpeed = 35;
	}

	move() {
		if (this.y > this.gameHeight ||
			this.y < 0) {
			this.ySpeed *= -1;
		}
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}
	
	reset() {
		const r = Math.ceil(Math.random() * 2);

		this.x = this.gameWidth / 2;
		this.y = this.gameHeight / 2;

		if (r === 1) {
			this.xSpeed = -1;
			this.ySpeed = -1;
		} else {
			this.xSpeed = 1;
			this.ySpeed = 1;
		}		
	}

	isOutOfBounds() {
		if (this.y < 0 || this.y > this.gameHeight) {
			return true;
		}

		return false;
	}

	isInPlayerScoreZone() {
		if (this.x < 0) {
			return true;
		}
		
		return false;
	}

	isInOpponentScoreZone() {
		if (this.x > this.gameWidth) {
			return true;
		}
		
		return false;
	}

	isInScoreZone(gameWidth) {
		if (this.x < 0 || this.x > gameWidth) {
			return true;
		}
	
		return false;
	}
	
	reflectOffPaddle(paddleY, paddleHeight) {
		const strikeY = this.y - paddleY;
		let strikeRatio = Math.abs(
			(paddleHeight / 2) - strikeY
		);
		strikeRatio *= 0.1;

		if (strikeRatio > 0) {
			this.ySpeed *= strikeRatio;
		}
		this.xSpeed *= -1;
	}
}
