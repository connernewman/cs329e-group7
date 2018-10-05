var solarSystem = {
    
    preload: function(){
        game.load.image('spaceBackground', 'assets/spaceTypeable.png');
        game.load.image('sun', 'assets/planets/sun.png');
        game.load.image('mercury', 'assets/planets/mercury.png')
        game.load.image('venus', 'assets/planets/venus.png')
        game.load.image('earth', 'assets/planets/Earth.png')
        game.load.image('mars', 'assets/planets/mars.png')
        game.load.image('jupiter', 'assets/planets/jupiter.png')
        game.load.image('saturn', 'assets/planets/saturn.png')
        game.load.image('uranus', 'assets/planets/uranus.png')
        game.load.image('neptune', 'assets/planets/neptune.png')
        game.load.image('pluto', 'assets/planets/pluto.png')
        game.load.audio('spaceBGM', 'assets/backGroundMusic/spaceBGM.mp3');
        game.load.audio('buttonBGM', 'assets/backGroundMusic/buttonBGM.mp3');
    },
    
    create: function(){
        
        
        game.add.sprite(0, 0, 'spaceBackground');
        game.add.sprite(0, 0, 'sun'); // background
        
        
        
        var p1 = game.add.button(190, 0, 'mercury'); // we will need state change function
        var p2 = game.add.button(300, 15, 'venus');
        var p3 = game.add.button(420, 30, 'earth');
        var p4 = game.add.button(550, 40, 'mars');
        var p5 = game.add.button(670, 80, 'jupiter');
        var p6 = game.add.button(670, 230, 'saturn');
        var p7 = game.add.button(550, 260, 'uranus');
        var p8 = game.add.button(420, 290, 'neptune');
        var p9 = game.add.button(310, 320, 'pluto');
        
        p1.onInputDown.add(this.tint, p1);
        p2.onInputDown.add(this.tint, p2);
        p3.onInputDown.add(this.tint, p3);
        p4.onInputDown.add(this.tint, p4);
        p5.onInputDown.add(this.tint, p5);
        p6.onInputDown.add(this.tint, p6);
        p7.onInputDown.add(this.tint, p7);
        p8.onInputDown.add(this.tint, p8);
        p9.onInputDown.add(this.tint, p9);
        
        
        
        
        
        
        p1.onInputUp.add(this.unTint, p1);
        p2.onInputUp.add(this.unTint, p2);
        p3.onInputUp.add(this.unTint, p3);
        p4.onInputUp.add(this.unTint, p4);
        p5.onInputUp.add(this.unTint, p5);
        p6.onInputUp.add(this.unTint, p6);
        p7.onInputUp.add(this.unTint, p7);
        p8.onInputUp.add(this.unTint, p8);
        p9.onInputUp.add(this.unTint, p9);

        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#800080';
        console.log('solarSystem');
        
        spaceBGM = game.add.audio('spaceBGM'); //has to be last for some reason
        spaceBGM.addMarker('spaceBGM', 0, 151);
        
        buttonBGM = game.add.audio('buttonBGM');
        buttonBGM.addMarker('click', 0, 1);
        
        spaceBGM.play('spaceBGM');
//        spaceBGM.repeat('spaceBGM'); //wrong code
    },
    
    tint: function(){
        this.tint = 0xbbbbbb;
        buttonBGM.play('click');
    },
    
    unTint: function(){
        this.tint = 0xFFFFFF;
    },
    
    update: function(){
        
    }
    
};// solarSystem State