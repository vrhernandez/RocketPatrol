// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this);   // add an object to existing scene, displayList, updateList
        this.points = pointValue;
    }

    update() {
        // move spaceship left
        this.x -= game.settings.spaceshipSpeed;
        // wraparaound screen bounds
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }

    reset() {
        this.x = game.config.width;
    }
}