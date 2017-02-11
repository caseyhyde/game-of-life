/************************************************************************************************
                                         RULES:
1) Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
2) Any live cell with two or three live neighbours lives on to the next generation.
3) Any live cell with more than three live neighbours dies, as if by overpopulation.
4) Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
**************************************************************************************************/


switch (totalCells) {
    case 2:
        mirrorGrid[j][k] = theGrid[j][k];

        break;
    case 3:
        mirrorGrid[j][k] = 1; //live

        break;
    default:
        mirrorGrid[j][k] = 0; //
}
