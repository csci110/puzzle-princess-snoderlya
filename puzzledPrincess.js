import { game, Sprite } from "./sgc/sgc.js";
game.setBackground("floor.png");

class TicTacToe extends Sprite {
    constructor() {
        super();
        this.name = "Board";
        this.x = 300;
        this.y = 85;
        this.SquareSize = 150;
        this.size = 3;
        this.activeMarker;
        this.setImage("board.png");
        this.emptySquareSymbol = '-'
        this.dataModel = [];
        for (let row = 0; row < this.size; row = row + 1) {
            this.dataModel[row] = [];
            for (let col = 0; col < this.boardsize; col = col + 1) {
                this.dataModel[row][col] = this.emptySquareSymbol;
            }
        }
    }
    takeTurns() {
        this.activeMarker = new PrincessMarker(this);
    }
    debugBoard() {
        let boardString = '\n';
        for (let row = 0; row < this.size; row = row + 1) {
            for (let col = 0; col < this.size; col = col + 1) {
                boardString = boardString + this.dataModel[row][col] + ' ';
            }
            boardString = boardString + '\n';
        }
        console.log('The current state of the board is ' + boardString);
    }
}

let Board = new TicTacToe;

class Marker extends Sprite {
    constructor(board, image, name) {
        super();
        this.board = board;
        this.setImage(image);
        this.name = name;
        this.x = this.startX = 150;
        this.y = this.startY = 275;
        this.squareSymbol = this.name.substring(0, 1);
    }
    playInSquare(row, col) {
        this.x = col * 150 + this.board.x + 50
        this.y = row * 150 + this.board.y + 50;
        this.squareSymbol - 
    }
}



class PrincessMarker extends Marker {
    constructor(board) {
        super(board, "annFace.png", "Princess Ann");
        this.board = board;
        this.dragging = false;
    }
    handleMouseLeftButtonDown() {
        this.dragging = true;
    }
    handleMouseLeftButtonUp() {
        this.dragging = false;
        let row = Math.floor((game.getMouseY() - Board.y) / Board.SquareSize);
        let col = Math.floor((game.getMouseX() - Board.x) / Board.SquareSize);
        if (row < 0 || row > 2 && col < 0 || col > 2) {
            this.x = this.startX;
            this.y = this.startY;
        }
        this.playInSquare(row, col);
        Board.takeTurns();

    }
    handleGameLoop() {
        if (this.dragging === true) {
            this.x = game.getMouseX() - this.width / 2;
            this.y = game.getMouseY() - this.height / 2;
        }

    }
}

new PrincessMarker(Board);
