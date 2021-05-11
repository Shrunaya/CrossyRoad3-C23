class Player{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.spt=createSprite(this.x,this.y,50,50);
        this.spt.shapeColor="orange";
        this.spt.addAnimation("player",playerAnimation);
        this.spt.scale = 0.09;
    }

    moveLeft(){
        this.spt.x = this.spt.x -10;
    }
    moveRight(){
        this.spt.x = this.spt.x +10;
    }
    moveUp(){
        this.spt.y = this.spt.y -10;
    }
    moveDown(){
        this.spt.y = this.spt.y +10;
    }
}