import {Table} from "./table"
import {Player} from "./player"


export class Game {

    private buttons = document.querySelectorAll('.button');

    private table = new Table();
    private firstPlayer = new Player("X");
    private secondPlayer = new Player("O");
    private currentPlayer: Player

    constructor(){
        this.firstPlayer.changeTurn();
        this.currentPlayer = this.firstPlayer;
    }


    public start(){
        
        this.buttons.forEach(button => {

            this.initUI(button);
    
            button.addEventListener('click', (event) => {
                this.play(event);

                this.updateUI(button);
    

                this.changeTurn();
                
            });
        });
    }

    private play(event: Event){
        const target = event.target as HTMLElement;

        let won = this.table.update(target.id, this.currentPlayer);

        if(won) {
            var winner = document.getElementById('title') as HTMLHeadingElement;
            winner.innerText = this.messageList() + " - " + this.currentPlayer.getSymbol() + " : venceu";

            const gameArea = document.getElementById('gameArea') as HTMLDivElement;
            gameArea.style.opacity = "0.5";
            gameArea.style.backgroundColor = "green";
            gameArea.style.pointerEvents = "none";

            this.currentPlayer.increaseScore();

        }
    }

    private messageList(): string {
        var list = [ 
            "Parabéns pela vitória!",
            "Você arrasou!",
            "Que desempenho incrível!",
            "Você jogou como um campeão!",
            "Vitória merecida!",
            "Você foi brilhante!",
            "Que jogada espetacular!",
            "Você dominou o jogo!",
            "Excelente trabalho!",
            "Você é imbatível!", 
            "Que talento impressionante!",
            "Você fez história!",
            "Que vitória emocionante!",
            "Você foi fenomenal!",
            "Que habilidade incrível!", 
            "Você superou todas as expectativas!",
            "Que conquista fantástica!",
            "Você é um verdadeiro vencedor!",
            "Que jogo memorável!",
            "Você mostrou do que é capaz!" 
        ];
        var index = this.getRandom(0, list.length-1);
        return list[index];
    }

    private getRandom(min: number, max: number): number {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    private updateUI(button: Element) {
        button.setAttribute('style', 'background-color: gray; color: white');
        button.textContent = this.currentPlayer.getSymbol();
    }

    private changeTurn() {
        this.firstPlayer.changeTurn();
        this.secondPlayer.changeTurn();

        if(this.firstPlayer.isMyTurn())
            this.currentPlayer = this.firstPlayer;
        else
        this.currentPlayer = this.secondPlayer;
    }

    private initUI(button: Element) {
        button.setAttribute('style', 'color: aliceblue');
        button.textContent = "*";
    }

}

