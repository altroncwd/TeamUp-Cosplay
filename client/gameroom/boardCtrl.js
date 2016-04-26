angular
  .module('rts.board', [])
    .controller('Board', [ '$scope', 'BoardLogic', function ($scope, BoardLogic) {

      $scope.box = ['nope1', 'nope2'];
      $scope.test = function () {
        console.log('math');
        console.log(this.box);
        this.box.push("nope"+($scope.box.length+1));
      }
      $scope.makeBoard = function () {
        console.log('new board');
        BoardLogic.makeBoard(8);
      }

      $scope.board = BoardLogic.board;
      $scope.log = function(row, columb, piece) {
        console.log('first step : ', piece, '--', '['+row+'.'+columb+']');
        if(BoardLogic.currentPiece.piece === null) {
          BoardLogic.currentPiece = {
            piece: piece,
            row: row,
            columb: columb
          };
        }
        else if(BoardLogic.currentPiece.row === row &&
           BoardLogic.currentPiece.columb === columb &&
           BoardLogic.currentPiece.piece === piece) {
            console.log('same piece, reset');
            BoardLogic.currentPiece = BoardLogic.defaultPiece;
        }
        else if( ((BoardLogic.currentPiece.row === row+1 || BoardLogic.currentPiece.row === row-1)
                      && BoardLogic.currentPiece.columb === columb)
                      ||
                 ((BoardLogic.currentPiece.columb === columb+1 || BoardLogic.currentPiece.columb === columb-1)
                      && BoardLogic.currentPiece.row === row)
               ) {
          console.log('its a valid move');
          // now we can set a piece/take piece
          if( piece !== null) {
            console.log('You just took a piece');
            // do something?
          }
          BoardLogic.board[row][columb].piece = BoardLogic.currentPiece.piece;
          BoardLogic.board[BoardLogic.currentPiece.row][BoardLogic.currentPiece.columb].piece = null;
          BoardLogic.currentPiece.piece = null;
        }
        else {
          console.log('its a diffrent square your clicking on');
        }

        console.log(BoardLogic.currentPiece);
      }


    }])
