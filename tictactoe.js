const Gameboard = function() {
    const board = new Array(9).fill("");

    const getTile = (index) => {
        return board[index];
    }

    const setTile = (index, symbol) => {
        board[index] = symbol;
    }

    const checkState = () => {
        //let winPositions = [
    //   [1, 2, 3],
    //   [4, 5, 6],
    //   [7, 8, 9],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   [3, 6, 9],
    //   [1, 5, 9],
    //   [3, 5, 7],
    // ];

    //return active, a symbol, or cats
    }
}

const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        sign;
    }

}

const GameManager = (function () {

    //Initialize Objects
    const player1 = Player("X");
    const player2 = Player("O");
    const board = Gameboard();

    let activePlayer = player2;
    
    //Loop through the game until a winner is found
    while (board.checkState == 'active')
    {
        //Swap Active Player

        //Place tile

    }


});