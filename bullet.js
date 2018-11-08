class Bullet {
	constructor(x, y, sprite, onHitCB) {
		this.x = x;
		this.y = y;
		this.bulletSprite = alienBullets.create(x, y, sprite);
		this.bulletSprite.bulletObj = this;
		this.cb = onHitCB;
		this.liveTicks = 30;
		
		game.physics.arcade.moveToXY(this.bulletSprite, player.x + 20, player.y + 20, bulletSpeed / 2);
	}
	
	handle() {
		--this.liveTicks;
		
		if(this.liveTicks <= 0) {
			this.bulletSprite.destroy();
		}
		
		this.x = this.bulletSprite.x;
		this.y = this.bulletSprite.y;
	}
}

