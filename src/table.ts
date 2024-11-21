import {Player} from "./player"



export class Table {
    private tableMap: Map<string, string>;

    constructor(){
        this.tableMap = this.initMap();
    }

    public initMap(){
        return new Map<string, string>([
            ["11", "*"],
            ["12", "*"],
            ["13", "*"],
            ["21", "*"],
            ["22", "*"],
            ["23", "*"],
            ["31", "*"],
            ["32", "*"],
            ["33", "*"],
        ]);
    }

    public update(position: string, player: Player): boolean {
        this.tableMap.set(position, player.getSymbol());
        return this.checkVictory(player);
    }

    private checkVictory(player: Player): boolean{
        var won = false;
        
        this.winCombinationList().some(subList => {
            won = this.checkEqualsTo(subList, player.getSymbol());
            if(won) return true;
        });
        console.log(won);

       return won;
    }

    private checkEqualsTo(listValue: (string | undefined)[], expected: string){
        var allEquals = true;
        listValue.forEach(value => {
            if(value != expected)
                allEquals = false;
        });
        return allEquals;
    }

    private winCombinationList(): (string | undefined)[][] {
        const list = [
            [ // cruzado 1
                this.tableMap.get("11"),
                this.tableMap.get("22"),
                this.tableMap.get("33")
            ],
            [ // cruzado 2
                this.tableMap.get("13"),
                this.tableMap.get("22"),
                this.tableMap.get("31")
            ],
            [ //linha topo
                this.tableMap.get("11"),
                this.tableMap.get("12"),
                this.tableMap.get("13")
            ],
            [ //linha meio
                this.tableMap.get("21"),
                this.tableMap.get("22"),
                this.tableMap.get("23")
            ],
            [ // linha baixo
                this.tableMap.get("31"),
                this.tableMap.get("32"),
                this.tableMap.get("33")
            ],
            [ //coluna esquerda
                this.tableMap.get("11"),
                this.tableMap.get("21"),
                this.tableMap.get("31")
            ],
            [ //coluna meio
                this.tableMap.get("12"),
                this.tableMap.get("22"),
                this.tableMap.get("32")
            ],
            [ //coluna direita
                this.tableMap.get("13"),
                this.tableMap.get("23"),
                this.tableMap.get("33")
            ]
        ];
        return list;
    }
}