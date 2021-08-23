document.addEventListener('DOMContentLoaded', () => {
    const squares = document.querySelectorAll('.grid div')
    const result = document.querySelector('#result')
    const displayCurrentPlayer = document.querySelector('#current-player')




  //  function to listen to everytime we click on the grid
for (var i=0, len = squares.length; i < len ; i++)
(function(index){
    //add onlick event to each square in your grid
    squares[i].onclick = function(){
        //if the square  below your current square is taken you can go ontop of it
        if(squares[index + 7].classList.contains('taken')){
            if(currentPlayer ===1){
                squares[index].classList.add('taken')
                squares[index].classList.add('player-one')
                //change the player
            }
            
        }
    }
})





})