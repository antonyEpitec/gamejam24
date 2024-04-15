const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    // Charger les ressources du jeu (images, sons, etc.)
    this.load.image('luther', 'assets/images/luther.jpg');
}

function create() {
    // Créer les éléments du jeu
    this.add.image(400, 300, 'luther');
}
