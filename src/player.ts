

export class Player{
    private symbol: string;
    private turn: boolean;
    private score: number;

    constructor(symbol: string){
        this.turn = false;
        this.symbol = symbol;
        this.score = 0;
    }

    public increaseScore(){
        this.score = this.score + 1;
    }

    public changeTurn(){
        this.turn = !this.turn;
    }

    public getSymbol(): string{
        return this.symbol;
    }

    public getScore(): number {
        return this.score;
    }

    public isMyTurn(){
        return this.turn == true;
    }

}