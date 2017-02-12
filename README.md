# AngularJS Conway's Game of Life
### Now with 1,000,000x more [Methuselah](http://conwaylife.com/wiki/Methusaleh) Rain!



1. `npm install` </br>
2. `npm test` </br>
4. Point you browser to [http://localhost:3000](http://localhost:3000)</br>
  * You can also visit it live <a href="https://mysterious-stream-19493.herokuapp.com/" target='_blank'>here</a>.

### Things you can do:
1. Click on cells to toggle them on/off (alive/dead).
2. Click <button>START</button> to start the game.
3. Change the generation interval by entering a new number in the <input placeholder="milliseconds"/>input field.
  > Currently, The game uses Angular to render the game grid to the DOM. Compared to using a canvas element, this method is relatively slow. As such, 150ms between generations is about the fastest the game can run.
4. Click <button>Toggle Methuselah Rain</button> to, well, toggle Methuselah rain on and off
   > "A methuselah is a pattern that takes a large number of generations in order to stabilize (known as its lifespan) and becomes much larger than its initial configuration at some point during its evolution. There is no consensus on the exact definition." [**-LifeWiki**](http://conwaylife.com/wiki/Main_Page)</br>![R-Pentomino](http://conwaylife.com/w/images/6/6e/Rpentomino.png) R-Pentomino Methuselah used in rain.

  * Methuselah Rain is some crazy sh*t I came up with, where the game randomly drops the R-Pentomino Methuselah onto the grid every 30 generations. <b>Here's how it works:</b>
    1. Methuselah Rain initial toggle "on".
    2. Client makes GET request to server.
    3. Server makes POST request to the [Random.org](https://random.org) [API](https://api.random.org/json-rpc/1/)
    4. Random.org API responds with an array of 10 random integers between 0 and the number of cells on the game board (2500);
    5. Server sends this array to the client, where each number is given an x and y coordinate, corresponding to it's place on the Game board.
    6. Every 30 generations, the `rain()` function draws a 5x5 grid containing a R-Pentomino Methuselah onto the Game board with it's center cell at the x and y coordinates out of the random number array. After 10 drops, the game will have cycled through all random coordinates and start from the beginning of the random coordinates array.<br><br>
5. Click <button>PAUSE</button> to, well, pause the game. click <button>START</button> again to continue.
6. While paused, you can click <button>NEXT</button> to advance the game one generation.
7. Click <button>RESET</button> to, well, reset the game back to a black grid.

<br><br>*You're good people. Thanks for checking this out*
