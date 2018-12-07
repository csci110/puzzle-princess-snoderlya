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
        this.emptySquareSymbol = '-';
        this.dataModel = [];
        for (let row = 0; row < this.size; row = row + 1) {
            this.dataModel[row] = [];
            for (let col = 0; col < this.size; col = col + 1) {
                this.dataModel[row][col] = this.emptySquareSymbol;
            }
        }
    }
    countingWinningMoves(forOpponent) {
        let squareSymbol = this.activeMarker.squareSymbol;
        if (forOpponent) {
            squareSymbol = this.squareSymbolForHumanPlayer;
        }
        let winningMoves = 0;
        // check rows
        for (let row = 0; row < this.size; row = row + 1) {
            let emptyCount = 0;
            let markerCount = 0;
            for (let col = 0; col < this.size; col = col + 1) {
                if (this.getSquareSymbol(row, col) === this.emptySquareSymbol) {
                    emptyCount = emptyCount + 1;
                }
                else if (this.getSquareSymbol(row, col) === squareSymbol) {
                    markerCount = markerCount + 1;
                }
                // ADD CODE HERE THAT COUNTS EMPTY SQUARES AND MARKER SQUARES IN THE ROW
            }
            if (emptyCount === 1 && markerCount === 2) {
                winningMoves = winningMoves + 1;
            }
        }
        for (let col = 0; col < this.size; col = col + 1) {
            let emptyCount = 0;
            let markerCount = 0;
            for (let row = 0; row < this.size; row = row + 1) {
                if (this.getSquareSymbol(row, col) === this.emptySquareSymbol) {
                    emptyCount = emptyCount + 1;
                }
                else if (this.getSquareSymbol(row, col) === squareSymbol) {
                    markerCount = markerCount + 1;
                }
            }
            if (emptyCount === 1 && markerCount === 2) {
                winningMoves = winningMoves + 1;
            }
        }

        // check first diagonal
        let emptyCount = 0;
        let markerCount = 0;
        if (this.getSquareSymbol(0, 0) === this.emptySquareSymbol) {
            emptyCount = emptyCount + 1;
        }
        else if (this.getSquareSymbol(0, 0) === squareSymbol) {
            markerCount = markerCount + 1;
        }
        if (this.getSquareSymbol(1, 1) === this.emptySquareSymbol) {
            emptyCount = emptyCount + 1;
        }
        else if (this.getSquareSymbol(1, 1) === squareSymbol) {
            markerCount = markerCount + 1;
        }
        if (this.getSquareSymbol(2, 2) === this.emptySquareSymbol) {
            emptyCount = emptyCount + 1;
        }
        else if (this.getSquareSymbol(2, 2) === squareSymbol) {
            markerCount = markerCount + 1;
        }
        if (emptyCount === 1 && markerCount === 2) {
            winningMoves = winningMoves + 1;
        }

        // check second diagonal
        if (this.getSquareSymbol(2, 0) === this.emptySquareSymbol) {
            emptyCount = emptyCount + 1;
        }
        else if (this.getSquareSymbol(2, 0) === squareSymbol) {
            markerCount = markerCount + 1;
        }
        if (this.getSquareSymbol(1, 1) === this.emptySquareSymbol) {
            emptyCount = emptyCount + 1;
        }
        else if (this.getSquareSymbol(1, 1) === squareSymbol) {
            markerCount = markerCount + 1;
        }
        if (this.getSquareSymbol(0, 2) === this.emptySquareSymbol) {
            emptyCount = emptyCount + 1;
        }
        else if (this.getSquareSymbol(0, 2) === squareSymbol) {
            markerCount = markerCount + 1;
        }
        if (emptyCount === 1 && markerCount === 2) {
            winningMoves = winningMoves + 1;
        }
        return winningMoves;
    }
    getSquareSymbol(row, col) {
        return this.dataModel[row][col];
    }
    markSquare(row, col, forOpponent) {
        let squareSymbol = this.activeMarker.squareSymbol;
        if (forOpponent === true) {
            this.squareSymbol = this.squareSymbolForHumanPlayer;
        }
        if (this.getSquareSymbol(row, col) === this.emptySquareSymbol) {
            this.dataModel[row][col] = squareSymbol;
            return true;
        }
        return false;
    }
    unmarkSquare(row, col) {
        this.dataModel[row][col] = this.emptySquareSymbol;
    }
    gameIsWon() {
        // diagonal 1
        if (this.dataModel[0][0] === this.dataModel[1][1] &&
            this.dataModel[1][1] === this.dataModel[2][2] &&
            this.dataModel[2][2] !== this.emptySquareSymbol
        ) {
            return true;
        }
        // diagonal 2
        if (this.dataModel[2][0] === this.dataModel[1][1] &&
            this.dataModel[1][1] === this.dataModel[0][2] &&
            this.dataModel[0][2] !== this.emptySquareSymbol) {
            return true;
        }
        // 1st col
        if (this.dataModel[0][0] === this.dataModel[1][0] &&
            this.dataModel[1][0] === this.dataModel[2][0] &&
            this.dataModel[2][0] !== this.emptySquareSymbol) {
            return true;
        }
        // 2nd col
        if (this.dataModel[0][1] === this.dataModel[1][1] &&
            this.dataModel[1][1] === this.dataModel[2][1] &&
            this.dataModel[2][1] !== this.emptySquareSymbol) {
            return true;
        }
        // 3rd col
        if (this.dataModel[0][2] === this.dataModel[1][2] &&
            this.dataModel[1][2] === this.dataModel[2][2] &&
            this.dataModel[2][2] !== this.emptySquareSymbol) {
            return true;
        }
        // 1st row
        if (this.dataModel[0][0] === this.dataModel[0][1] &&
            this.dataModel[0][1] === this.dataModel[0][2] &&
            this.dataModel[0][2] !== this.emptySquareSymbol) {
            return true;
        }
        // 2nd row
        if (this.dataModel[1][0] === this.dataModel[1][1] &&
            this.dataModel[1][1] === this.dataModel[1][2] &&
            this.dataModel[1][2] !== this.emptySquareSymbol) {
            return true;
        }
        // 3rd row
        if (this.dataModel[2][0] === this.dataModel[2][1] &&
            this.dataModel[2][1] === this.dataModel[2][2] &&
            this.dataModel[2][2] !== this.emptySquareSymbol) {
            return true;
        }
        return false;
    }
    gameIsDrawn() {
        if (this.dataModel[0][0] !== this.emptySquareSymbol &&
            this.dataModel[1][0] !== this.emptySquareSymbol &&
            this.dataModel[2][0] !== this.emptySquareSymbol &&
            this.dataModel[0][1] !== this.emptySquareSymbol &&
            this.dataModel[0][2] !== this.emptySquareSymbol &&
            this.dataModel[1][1] !== this.emptySquareSymbol &&
            this.dataModel[1][2] !== this.emptySquareSymbol &&
            this.dataModel[2][1] !== this.emptySquareSymbol &&
            this.dataModel[2][2] !== this.emptySquareSymbol) {
            return true;
        }
        return false;
    }
    takeTurns() {
        if (this.gameIsWon()) {
            let message = '        Game Over.\n        ';
            if (this.activeMarker instanceof PrincessMarker) {
                message = message + 'The Princess wins.';
            }
            else if (this.activeMarker instanceof StrangerMarker) {
                message = message + 'The Stranger wins.';
            }
            game.end(message);
            return;
        }
        if (this.gameIsDrawn()) {
            game.end('        Game Over.\n        The game ends in a draw.');
            return;
        }

        if (!this.activeMarker) {
            if (Math.random() < 0.5) {
                this.activeMarker = new PrincessMarker(this);
            }
            else this.activeMarker = new StrangerMarker(this);
        }
        else if (this.activeMarker instanceof PrincessMarker) {
            // princess has moved; now it's stranger's turn
            this.activeMarker = new StrangerMarker(this);
        }
        else if (this.activeMarker instanceof StrangerMarker) {
            // stranger has moved; now it's princess's turn
            this.activeMarker = new PrincessMarker(this);
        }
    }
    debugBoard() {
        let moveCount = 0;
        let boardString = '\n';
        for (let row = 0; row < this.size; row = row + 1) {
            for (let col = 0; col < this.size; col = col + 1) {
                if (this.dataModel[row][col] != this.emptySquareSymbol) {
                    moveCount = moveCount + 1;
                }
                boardString = boardString + this.dataModel[row][col] + ' ';
            }
            boardString = boardString + '\n';
        }
        console.log('The data model after' + moveCount + 'move(s)' + boardString);
    }
}



class Marker extends Sprite {
    constructor(board, image, name) {
        super();
        this.board = board;
        this.setImage(image);
        this.name = name;
        this.x = this.startX = 150;
        this.y = this.startY = 275;
        this.squareSymbol = this.name.substring(0, 1);
        this.inBoard = false;
    }
    playInSquare(row, col) {
        this.x = col * 150 + this.board.x + 50;
        this.y = row * 150 + this.board.y + 50;
        this.board.dataModel[row][col] = this.squareSymbol;
        this.board.debugBoard();
        this.inBoard = true;
    }
}



class PrincessMarker extends Marker {
    constructor(board) {
        super(board, "annFace.png", "Princess Ann");
        this.board = board;
        this.dragging = false;
        this.board.squareSymbolForHumanPlayer = this.squareSymbol;
    }
    handleMouseLeftButtonDown() {
        if (this.inBoard) {
            return;
        }
        this.dragging = true;
    }
    handleMouseLeftButtonUp() {
        if (this.inBoard) {
            return;
        }
        this.dragging = false;
        let row = Math.floor((game.getMouseY() - this.board.y) / this.board.SquareSize);
        let col = Math.floor((game.getMouseX() - this.board.x) / this.board.SquareSize);
        if (row < 0 || row > 2 && col < 0 || col > 2 && this.board.markSquare(row, col, this.board.forOpponent)) {
            this.x = this.startX;
            this.y = this.startY;
        }
        this.playInSquare(row, col);
        this.board.takeTurns();
    }
    handleGameLoop() {
        if (this.dragging === true) {
            this.x = game.getMouseX() - this.width / 2;
            this.y = game.getMouseY() - this.height / 2;
        }

    }
}

class StrangerMarker extends Marker {
    constructor(board) {
        super(board, 'strangerFace.png', "Stranger");
        this.board = board;
    }
    handleGameLoop() {
        if (this.inBoard) {
            return true;
        }

        let foundMove = this.findWinningMove();
        if (!foundMove) {
            foundMove = this.findWinningMove();
        }
        if (!foundMove) {
            foundMove = this.findWinningMove(true);
        }
        if (!foundMove) {
            foundMove = this.findForkingMove();
        }
        if (!foundMove) {
            foundMove = this.findForkingMove(true);
        }
        if (!foundMove) {
            foundMove = this.findCenterMove();
        }
        if (!foundMove) {
            foundMove = this.findOppositeCornerMove();
        }
        if (!foundMove) {
            foundMove = this.findAnyCornerMove();
        }
        if (!foundMove) {
            foundMove = this.findAnySideMove();
        }
        if (!foundMove) {
            let row, col;
            do {
                row = Math.round(Math.random() * (this.board.size - 1));
                col = Math.round(Math.random() * (this.board.size - 1));
            }
            while (this.board.dataModel[row][col] !== this.board.emptySquareSymbol);
            // this.board.dataModel[row][col] = this.squareSymbol;
            this.playInSquare(row, col);
            foundMove = true;
        }
        // if (!foundMove) throw new Error('Failed to find a move.');
        this.board.takeTurns();
    }
    findWinningMove(forOpponent) {
        for (let row = 0; row < this.board.size; row++) {
            for (let col = 0; col < this.board.size; col++) {
                if (this.board.markSquare(row, col, forOpponent)) {
                    if (this.board.gameIsWon()) {
                        this.playInSquare(row, col);
                        return true;
                    }
                    else this.board.unmarkSquare(row, col);
                }
            }
        }
        return false;
    }
    forceOpponentToBlock() {
        for (let row = 0; row < this.game.boardSize; row = row + 1) {
            for (let col = 0; col < this.game.boardSize; col = col + 1) {
                // Mark the square tentatively ...
                if (this.game.markSquare(row, col)) {
                    // if it creates threat to win ...
                    if (this.board.gameIsWon(row,col)) {
                        // ... figure out how princess would block it
                        for (let princessRow = 0; princessRow < this.game.boardSize; princessRow++) {
                            for (let princessCol = 0; princessCol < this.game.boardSize; princessCol = princessCol + 1) {
                                // Mark the square tentatively for opponent ...
                                if (this.game.markSquare(princessRow, princessCol, true)) {
                                    // if this is the block, and it creates no fork ...
                                    if ( this.findWinningMove(true) && this.findForkingMove(true)) {
                                        // ... unmark the princess block and play here.
                                        this.game.unmarkSquare(princessRow, princessCol);
                                        this.playInSquare(row, col);
                                        return true;
                                    }
                                    // unmark tentative princess square
                                    this.game.unmarkSquare(princessRow, princessCol);
                                }
                            }
                        }
                    }
                    // unmark tentative stranger move
                    this.game.unmarkSquare(row, col);
                }
            }
        }
        // no move found
        return false;
    }

    findForkingMove(forOpponent) {
        for (let row = 0; row < this.board.size; row++) {
            for (let col = 0; col < this.board.size; col++) {
                if (this.board.markSquare(row, col, forOpponent)) {
                    if (this.board.countingWinningMoves(forOpponent)) {
                        if (forOpponent) {
                            // ... remove the tentative mark ...
                            this.game.unmarkSquare(row, col);
                            // ... and try to force opponent to block.
                            if (this.forceOpponentToBlock()) {
                                return true;
                            }
                        }
                        this.board.unmarkSquare(row, col, forOpponent);
                        this.board.markSquare(row, col);
                        this.playInSquare(row, col);
                        return true;
                    }
                    else this.board.unmarkSquare(row, col);
                }
            }
        }
        return false;
    }
    findCenterMove() {
        let center = Math.floor(this.board.size / 2);
        if (this.board.markSquare(center, center)) {
            this.playInSquare(center, center);
            return true;
        }
        return false;
    }
    findOppositeCornerMove() {
        if (this.board.getSquareSymbol(2, 2) === 'P' &&
            this.board.markSquare(0, 0)) {
            this.playInSquare(0, 0);
            return true;
        }
        if (this.board.getSquareSymbol(2, 0) === 'P' &&
            this.board.markSquare(0, 2)) {
            this.playInSquare(0, 2);
            return true;
        }
        if (this.board.getSquareSymbol(0, 0) === 'P' &&
            this.board.markSquare(2, 2)) {
            this.playInSquare(2, 2);
            return true;
        }
        if (this.board.getSquareSymbol(0, 2) === 'P' &&
            this.board.markSquare(2, 0)) {
            this.playInSquare(2, 0);
            return true;
        }
        return false;
    }
    findAnyCornerMove() {
        if (this.board.markSquare(0, 0)) {
            this.playInSquare(0, 0);
            return true;
        }
        if (this.board.markSquare(0, 2)) {
            this.playInSquare(0, 2);
            return true;
        }
        if (this.board.markSquare(2, 0)) {
            this.playInSquare(2, 0);
            return true;
        }
        if (this.board.markSquare(2, 2)) {
            this.playInSquare(2, 2);
            return true;
        }
        return false;
    }
    findAnySideMove() {
        let last = this.board.size - 1;
        // Check all interior columns of first row.
        for (let col = 1; col < last; col = col + 1) {
            if (this.board.markSquare(0, col)) {
                this.playInSquare(0, col);
                return true;
            }
            if (this.board.markSquare(1, col)) {
                this.playInSquare(1, col);
                return true;
            }
            if (this.board.markSquare(2, col)) {
                this.playInSquare(2, col);
                return true;
            }
            return false;
        }
    }
}

let theBoard = new TicTacToe();
theBoard.takeTurns();
