angular
  .module('rts.board.logic', [])
    .factory('BoardLogic', function () {

      var defaultPiece = {
        piece: null,
        row: null,
        columb: null
      }
      var currentPiece = {
        piece: null,
        row: null,
        columb: null
      }
      var board = [];
      var makeBoard = function (size) {
        board = [];
        console.log('lets make a board');
        for(var i = 0; i < size; i++) {
          var row = [];
          for(var j = 0; j < size; j++) {
            var square = {
              piece: null,
              canUse: false,
              highlight: false
            };
            if(Math.random()*10 < 1 ) {
              square.piece = 'pawn';
            }
            row.push(square);
          }
          board.push(row);
        }
      };

      makeBoard(8);
      console.log('The board : ', board);
      return {
        board: board,
        currentPiece: currentPiece,
        defaultPiece: defaultPiece,
        makeBoard: makeBoard
      };

    })
