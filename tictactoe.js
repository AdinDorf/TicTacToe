const Gameboard = function() {
    const board = new Array(9).fill("");

    const getBoard = () => {
        return board;
    }

    const getTile = (index) => {
        return board[index];
    };

    const setTile = (index, symbol) => {
        board[index] = symbol;
    };


    const checkState = () => {

        let winPositions = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7],
        ];
        //Check if the game fits a win condition
        winPositions.forEach(position => {
            if (board[position[0]] === board[position[1]]  && board[position[0]] === board[position[2]] && board[position[0]] !== "")
            {
                return board[position[1]];
            }
        });

        return 'active';
        //return active, a symbol, or cats
    };



    return {board, getBoard, getTile, setTile, checkState};
};

function createPlayer(symbol, name) {

    const getSymbol = () => symbol;

    return {symbol, name}
};

const GameManager = (function () {
    console.log("Game Manager running!");
    //Initialize Objects
    const player1 = createPlayer("X","John");
    const player2 = createPlayer("O", "Jane");
    const board = Gameboard();

    console.log(board.getBoard());
    
    let activePlayer = player1;
    
    console.log(board.checkState());
    console.log(activePlayer);
    //Loop through the game until a winner is found
    
    while (board.checkState() === 'active')
    {
        //Display the current board
        console.log(board);
        //Swap Active Player
        activePlayer = activePlayer === player1 ? player2 : player1;
        //Place tile
        let index = prompt("Pick a move");
        board.setTile(index, activePlayer);
    }

    console.log("game over");

})();