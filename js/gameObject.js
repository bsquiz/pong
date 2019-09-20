class GameObject {
	constructor() {
		this.x = 0;
		this.y = 0;
		this.width = 50;
		this.height = 50;
		this.xSpeed = 5;
		this.ySpeed = 5;
		this.isMoving = false;
		this.gameWidth = 0;
		this.gameHeight = 0;
	}

	setXSpeed(val) {
		this.xSpeed = val;
	}

	setYSpeed(val) {
		this.ySpeed = val;
	}

	getXSpeed() {
		return this.xSpeed;
	}
	
	getYSpeed() {
		return this.ySpeed;
	}

	setIsMoving(isMoving) {
		this.isMoving = isMoving;
	}

	setGameWidth(width) {
		this.gameWidth = width;
	}

	setGameHeight(height) {
		this.gameHeight = height;
	}
	
	getX() {
		return thix.x;
	}
	
	getY() {
		return this.y;
	}

	getWidth() {
		return this.width;
	}
	
	getHeight() {
		return this.height;
	}

	reflectDX() {
		this.dx *= -1;
	}

	reflectDY() {
		this.dy *= -1;
	}

	reset() {}

	hitTest(testObject) {
		if (this.x > testObject.x &&
			this.x < testObject.x + testObject.width &&
			this.y > testObject.y &&
			this.y < testObject.y + testObject.height) {
			return true;
		} 

		return false;
	}

	move() {}
	
	draw(ctx) {
		ctx.fillRect(this.x, this.y, this.width, this.height);	
	}
}
