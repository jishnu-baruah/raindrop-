class Drop {
    constructor(x) {
        fill("blue");
        this.body = createSprite(x, 0, 2, 100);
    }
    applyProperties() {
        this.body.lifetime = 300;
        this.body.velocityY = 14;
        this.body.shapeColor = random(150, 255), random(150, 255), random(150, 255);
    }


}