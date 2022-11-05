const player = () => {
    return {}
}


const gameBoard = ((player1, player2)=>{
    let board = ["", "", "", "", "", "", "", "", ""]
    let boardDOM = []
    let turn = 1
    const boardContainer = document.getElementById("container")

    const renderBoard = () => {
        for(let i = 0; i < 9; i++){
            let cell = document.createElement("div")
            cell.innerText = board[i]
            boardDOM.push(cell)
            boardContainer.appendChild(cell)
        }
    }

    const bindEvents = () => {
        for(let i = 0; i < 9; i++){
        boardDOM[i].addEventListener('click', ()=>{
            if(turn == 1 && boardDOM[i].innerText == ""){
                boardDOM[i].innerText = 'O'
                turn = 2
            }
            else if(turn == 2 && boardDOM[i].innerText == ""){
                boardDOM[i].innerText = 'X'
                turn = 1
            }
            board[i] = boardDOM[i].innerText
            console.log(checkWinner())
        })
    }}

    const checkWinner = () => {
        for(i = 0; i < 3; i++)
            if(board[i] == board[i+3] && board[i] == board[i+6]){
                if(board[i] == 'X') return 'X'
                if(board[i] == 'O') return 'O'
            }
        for(i = 0; i < 7; i = i + 3)
            if(board[i] == board[i+1] && board[i] == board[i+2]){
                if(board[i] == 'X') return 'X'
                if(board[i] == 'O') return 'O'
            }
        if(board[0] == board[4] && board[0] == board[8]){
            if(board[0] == 'X') return 'X'
            if(board[0] == 'O') return 'O'
        }

        if(board[2] == board[4] && board[2] == board[6]){
            if(board[2] == 'X') return 'X'
            if(board[2] == 'O') return 'O'
        }
    }

    const clearBoard = () => {
        boardContainer.innerHTML = ""
        board = ["", "", "", "", "", "", "", "", ""]
        boardDOM = []
        turn = 1
        renderBoard()
        bindEvents()
    }
    return {renderBoard, clearBoard, bindEvents}
})();



const displayController = (() => {
    const reset_btn = document.getElementById("reset")
    reset_btn.addEventListener('click',()=>{
        gameBoard.clearBoard()
    })

    const start = () => {
        gameBoard.renderBoard()
        gameBoard.bindEvents()
    }
    return {start}
})()

displayController.start()
