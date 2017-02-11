/************************************************************************************************
                                         RULES:
1) Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2) Any live cell with two or three live neighbours lives on to the next generation.
3) Any live cell with more than three live neighbours dies, as if by overpopulation.
4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
**************************************************************************************************/
// i = row number
// j = collumn number
var gameApp = angular.module('gameApp', []);

gameApp.controller('GameController', ['$scope', '$timeout', function($scope, $timeout) {
  const self = this;
  self.currentGrid = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ];
  var nextGrid = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ];
  var temp = [];

  self.start = function() {
    self.run = true;
    let next = false;
    cycle(next);
  }

  self.next = function() {
    self.run = true;
    let next = true;
    cycle(next);
  }

  self.stop = function() {
    self.run = false;
  }

  self.reset = function() {
    self.run = false;
    for(let i = 0; i < self.currentGrid.length; i ++) {
      for(let j = 0; j < self.currentGrid[i].length; j++) {
        self.currentGrid[i][j] = 0;
      }
    }
  }

  self.toggleCell = function(row, cell) {
    console.log("Cell clicked: " + row + ", " + cell);
    console.log(self.currentGrid[row][cell]);
    if(self.currentGrid[row][cell] == 1) {
      self.currentGrid[row][cell] = 0;
    } else self.currentGrid[row][cell] = 1;
  }

  function cycle(next) {
    if(self.run) {
      console.time('cycle');
      for (var i = 0; i < self.currentGrid.length; i++) {
        for (var j = 0; j < self.currentGrid[i].length; j++) {
          //if top row:
          if (i == 0) {
            //if leftmost collumn:
            if (j == 0) {
              let liveCount = self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j + 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if rightmost collumn:
            else if (j == self.currentGrid[i].length - 1) {
              let liveCount = self.currentGrid[i][j - 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j - 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if any other collumn:
            else {
              let liveCount = self.currentGrid[i][j -1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j + 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
          }
          //if bottom row:
          else if (i == self.currentGrid.length - 1) {
            //if leftmost collumn:
            if (j == 0) {
              let liveCount = self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j +1] + self.currentGrid[i][j +1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if rightmost collumn:
            else if (j == self.currentGrid[i].length - 1) {
              let liveCount = self.currentGrid[i -1][j] + self.currentGrid[i - 1][j -1] + self.currentGrid[i][j - 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if any other collumn:
            else {
              let liveCount = self.currentGrid[i][j - 1] + self.currentGrid[i - 1][j - 1] + self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
          }
          //if any other row:
          else {
            //if leftmost collumn:
            if (j == 0) {
              let liveCount = self.currentGrid[i  - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j + 1] + self.currentGrid[i + 1][j];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if rightmost collumn:
            else if (j == self.currentGrid[i].length - 1) {
              let liveCount = self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j - 1] + self.currentGrid[i][j - 1] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i + 1][j];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
            //if any other collumn:
            else {
              let liveCount = self.currentGrid[i - 1][j -1] + self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j + 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i][j - 1];
              switch (liveCount) {
                case 2:
                  //if already alive, stays alive... If dead, stays dead:
                  nextGrid[i][j] = self.currentGrid[i][j];
                  break;
                case 3:
                  //if dead, turns alive... If alive, stays alive:
                  nextGrid[i][j] = 1;
                  break;
                default:
                  //if < 2 || > 3 and alive, dies... If < 2 || > 3 and dead, stays dead:
                  nextGrid[i][j] = 0;
              }
            }
          }
        }
      }
      temp = self.currentGrid;
      self.currentGrid = nextGrid;
      nextGrid = temp;
      console.timeEnd('cycle');
      if(!next) {
        $timeout(cycle, 50);
      }
    }
  }//End cycle fxn

}]);//End controller

// // DRAWING ON A CANVAS ELEMENT EXAMPLE:
// function draw() {
//   var canvas = document.getElementById('canvas');
//   if (canvas.getContext) {
//     var ctx = canvas.getContext('2d');
//
//     ctx.fillStyle = 'rgb(200,0,0)';
//     ctx.fillRect (10, 10, 50, 50);
//
//     ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
//     ctx.fillRect (15, 15, 100, 100);
//   }
// }
