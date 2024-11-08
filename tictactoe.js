//Get reference to DOM Objects
const boardContainer = document.querySelector(".boardContainer");


function createGameboard() {
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
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

        let state = 'active';
        //Check if the game fits a win condition
        winPositions.forEach(position => {
            if (board[position[0]] === board[position[1]]  && board[position[0]] === board[position[2]] && board[position[0]] !== "")
            {
                console.log("IT HAPPENED");
                state = 'end';
            }
        });

        return state;
        //return active, a symbol, or cats
    };

    return {getBoard, getTile, setTile, checkState};
};

function createPlayer(symbol, name) {
    return {symbol, name}
};


//IIFE that controls game functionality
const GameManager = (function () {
    console.log("Game Manager running!");
    //Initialize Objects
    const player1 = createPlayer("X", "John");
    const player2 = createPlayer("O", "Jane");
    const board = createGameboard();

    console.log(board.getBoard());
    
    let activePlayer = player2;
    
    console.log(board.checkState());
    console.log(activePlayer);
    //Loop through the game until a winner is found
    //(this will be changed with display implementation)
    // while (board.checkState() === 'active')
    // {

        //Display the current board
        console.log(board.checkState(),board);
        //Swap Active Player
        activePlayer = activePlayer === player1 ? player2 : player1;
        //Place tile
        let index = prompt("Pick a move");
        board.setTile(index, activePlayer);
   // }

    console.log("game over");
    console.log(activePlayer.name +  " wins");

})();

