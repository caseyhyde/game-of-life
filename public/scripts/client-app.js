/************************************************************************************************
                                         RULES:
1) Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2) Any live cell with two or three live neighbours lives on to the next generation.
3) Any live cell with more than three live neighbours dies, as if by overpopulation.
4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
**************************************************************************************************/
/************************************************************************************************
                                          STEPS:
1) loop row
    1a) check each neighboring cell, count total live
    ab) apply rules based on live count
**************************************************************************************************/
// i = row number
// j = collumn number
var gameApp = angular.module('gameApp', []);

gameApp.controller('GameController', ['$scope', function($scope) {
  const self = this;
  self.currentGrid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0],
    [0,0,0,0,1,0,0,0,0,0],
    [0,0,1,1,1,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];
  var nextGrid = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
  ];
  self.cycle = function() {
    for (var i = 0; i < self.currentGrid.length; i++) {
      for (var j = 0; j < self.currentGrid[i].length; j++) {
        //if top row:
        if (i == 0) {
          console.log("i = 0");
          //if leftmost collumn:
          if (j == 0) {
            var liveCount = self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j + 1];
            console.log("liveCount top row 1", liveCount);
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
            var liveCount = self.currentGrid[i][j - 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j - 1];
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
            var liveCount = self.currentGrid[i][j -1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j + 1];
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
            var liveCount = self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j +1] + self.currentGrid[i][j +1];
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
            var liveCount = self.currentGrid[i -1][j] + self.currentGrid[i - 1][j -1] + self.currentGrid[i][j - 1];
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
            var liveCount = self.currentGrid[i][j - 1] + self.currentGrid[i - 1][j - 1] + self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1];
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
            var liveCount = self.currentGrid[i  - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j + 1] + self.currentGrid[i + 1][j];
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
            var liveCount = self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j - 1] + self.currentGrid[i][j - 1] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i + 1][j];
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
            var liveCount = self.currentGrid[i - 1][j -1] + self.currentGrid[i - 1][j] + self.currentGrid[i - 1][j + 1] + self.currentGrid[i][j + 1] + self.currentGrid[i + 1][j + 1] + self.currentGrid[i + 1][j] + self.currentGrid[i + 1][j - 1] + self.currentGrid[i][j - 1];
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

    var temp = self.currentGrid;
    self.currentGrid = nextGrid;
    nextGrid = temp;
  }//End cycle fxn
}]);//End controller

//DRAWING ON A CANVAS ELEMENT EXAMPLE:
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
