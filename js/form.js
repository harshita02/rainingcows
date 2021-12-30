class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
       this.buttonHit = createButton('Hit');
      // this.buttonHit = loadImage('images/button.png')
       this.buttonHit = createImg('images/button.png');
      
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("RAINING COWS");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'skyblue');
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
        this.buttonHit.position(1050,500);
        this.buttonHit.style('width', '100px');
        this.buttonHit.style('height', '100px');
        this.buttonHit.hide();
      
      
      
       
        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            this.buttonHit.show();
      
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(400,250);
            this.greeting.style('color', 'white');
            this.greeting.style('font-size', '100px');
        });

        this.buttonHit.mousePressed(() => {
            player.score =player.score+1;
            player.update();
            game.fall();
            
            

        })

        this.reset.mousePressed(() => {
            
            player.updateCount(0);
            game.update(0);
            player.update();



            var playerInfoRef = database.ref('players');
            playerInfoRef.remove();

            
        });

    }
}