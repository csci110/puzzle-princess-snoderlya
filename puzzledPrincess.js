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
    }
    takeTurns() {
        this.activeMarker = new PrincessMarker(this);
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
        let col = Math.floor((game.getMouseX() - Board.x) / Board.SquareSize);]
        if (row )
    }
    handleGameLoop() {
        if (this.dragging === true) {
            this.x = game.getMouseX() - this.width / 2;
            this.y = game.getMouseY() - this.height / 2;
        }
    }
}

new PrincessMarker(Board);
