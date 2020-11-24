"use strict";
var x = "."; //  Ska ersättas med en siffra mellan 1-9 på 9 ställen varje loop
var a = "a"; //  Available
var b = "b"; //  Busy, temporärt unavailable
var c = "c"; //  Column, unavailable hela kolumnen
var d = "d"; //  Temporary placeholder
var e = "e"; //  Used by number already

var boardRef = [
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
    [[a], [a], [a], [a], [a], [a], [a], [a], [a]]
];

var boardFin = [
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
    [[x], [x], [x], [x], [x], [x], [x], [x], [x]]
];
//  Generate Level
function generateGame(level) {
    for (let i = 0; i < 81; i++) {
        let htmlSquare = document.getElementById("square" + i);
        htmlSquare.innerHTML = "";
    }

    // Syntax board[row][square][state of square]

    for (let boardIndex = 0; boardIndex <= 8; boardIndex++) {

        let squareValueDrawer = [9,8,7,6,5,4,3,2,1];
        let squareValue = squareValueDrawer[boardIndex]; //   Value, this board-runthrough
        let rowIndex = 0
        let availableSquares = [0,1,2,3,4,5,6,7,8]
        let valuePlacementOnRow = 0; //   Placement of Value on row
        let indexOfReservedSquare = -1;

        if (boardIndex > 0) {
            boardRef = [
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                [[a], [a], [a], [a], [a], [a], [a], [a], [a]]
            ];
        }

        loop2:
        for (let threeSectionIndex = 0; threeSectionIndex <= 2; threeSectionIndex++) {

            for (let threeRowIndex = 0; threeRowIndex <= 2; threeRowIndex++) {
                
                // Find taken square(s) from boardFin
                function adjustAvailable() {
                    if (boardIndex > 0) {
                        // Remove indexnumber of already taken square from available squares
                        for (let i = 0; i < 9; i++) {
                            for (let valueNumber = 9; valueNumber > 0; valueNumber--) {
                                if (boardFin[rowIndex][i].includes(valueNumber)) {
                                    indexOfReservedSquare = i;
                                    let indexToSplice = availableSquares.indexOf(indexOfReservedSquare);
                        
                                    if (indexToSplice >= 0) {
                                        availableSquares.splice(indexToSplice, 1);
                                    }
                                }
                            }
                        }
                    }
                }
                adjustAvailable();

                //Choose Value placement out of the available squares
                if (availableSquares.length > 1) {
                    valuePlacementOnRow = availableSquares[Math.floor(Math.random() * availableSquares.length)];
                } else {
                    valuePlacementOnRow = availableSquares[0];
                }

                //IF board doesn't compute, restart board
                if (valuePlacementOnRow === undefined) {
                    boardIndex = -1;
                    boardRef = [
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]],
                        [[a], [a], [a], [a], [a], [a], [a], [a], [a]]
                    ];
                    
                    boardFin = [
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]],
                        [[x], [x], [x], [x], [x], [x], [x], [x], [x]]
                    ];
                    break loop2;
                }

                if (threeRowIndex === 0) {
                    // Temporary placeholder. Add D at the beginning of current Value-placement array
                    boardRef[rowIndex][valuePlacementOnRow].unshift(d);
                    
                    // Add B's to corresponding section of D (at end of array)
                    if (boardRef[rowIndex][0].includes(d) || 
                        boardRef[rowIndex][1].includes(d) || 
                        boardRef[rowIndex][2].includes(d)) {
                            boardRef[rowIndex][0].push(b);
                            boardRef[rowIndex][1].push(b);
                            boardRef[rowIndex][2].push(b);
                    }
                    if (boardRef[rowIndex][3].includes(d) || 
                        boardRef[rowIndex][4].includes(d) || 
                        boardRef[rowIndex][5].includes(d)) {
                            boardRef[rowIndex][3].push(b);
                            boardRef[rowIndex][4].push(b);
                            boardRef[rowIndex][5].push(b);
                    }
                    if (boardRef[rowIndex][6].includes(d) || 
                        boardRef[rowIndex][7].includes(d) || 
                        boardRef[rowIndex][8].includes(d)) {
                            boardRef[rowIndex][6].push(b);
                            boardRef[rowIndex][7].push(b);
                            boardRef[rowIndex][8].push(b);
                    }
                    for (let removeBFromC = 0; removeBFromC < 9; removeBFromC++) {
                        if (boardRef[rowIndex][removeBFromC].includes(b) &&
                            boardRef[rowIndex][removeBFromC].includes(c)) {
                                boardRef[rowIndex][removeBFromC] = boardRef[rowIndex][removeBFromC].filter(function(item) {
                                    return item !== b
                                })
                            }
                    }

                    // Remove Temporary placeholder / Remove D
                    boardRef[rowIndex][valuePlacementOnRow].shift();

                    // Remove A from all squares that include B
                    for (let removeAPerSquare = 0; removeAPerSquare < 9; removeAPerSquare++) {
                        let squareArray = boardRef[rowIndex][removeAPerSquare];
                        if (squareArray.includes(b)) {
                            let indexOfA = squareArray.indexOf(a);
                            squareArray.splice(indexOfA, 1);

                        }
                    }
                }

                if (threeRowIndex === 1) {
                    // Temporary placeholder. Add D at the beginning of current Value-placement array
                    boardRef[rowIndex][valuePlacementOnRow].unshift(d);
                    
                    // Add B's to corresponding section of D (at end of array)
                    if (boardRef[rowIndex][0].includes(d) || 
                        boardRef[rowIndex][1].includes(d) ||
                        boardRef[rowIndex][2].includes(d)) {
                            boardRef[rowIndex][0].push(b);
                            boardRef[rowIndex][1].push(b);
                            boardRef[rowIndex][2].push(b);
                    }
                    if (boardRef[rowIndex][3].includes(d) || 
                        boardRef[rowIndex][4].includes(d) || 
                        boardRef[rowIndex][5].includes(d)) {
                            boardRef[rowIndex][3].push(b);
                            boardRef[rowIndex][4].push(b);
                            boardRef[rowIndex][5].push(b);
                    }
                    if (boardRef[rowIndex][6].includes(d) || 
                        boardRef[rowIndex][7].includes(d) || 
                        boardRef[rowIndex][8].includes(d)) {
                            boardRef[rowIndex][6].push(b);
                            boardRef[rowIndex][7].push(b);
                            boardRef[rowIndex][8].push(b);
                    }
                    for (let removeBFromC = 0; removeBFromC < 9; removeBFromC++) {
                        if (boardRef[rowIndex][removeBFromC].includes(b) &&
                            boardRef[rowIndex][removeBFromC].includes(c)) {
                                boardRef[rowIndex][removeBFromC] = boardRef[rowIndex][removeBFromC].filter(function(item) {
                                    return item !== b
                                })
                            }
                    }

                    // Remove Temporary placeholder / Remove D
                    boardRef[rowIndex][valuePlacementOnRow].shift();

                    // Remove A from all squares that include B
                    for (let removeAPerSquare = 0; removeAPerSquare < 9; removeAPerSquare++) {
                        let squareArray = boardRef[rowIndex][removeAPerSquare];
                        if (squareArray.includes(b) && squareArray.includes(a)) {
                            let indexOfA = squareArray.indexOf(a);
                            squareArray.splice(indexOfA, 1);
                        }
                    }
                }
                
                
                
                
                //Add current Value in the beginning of array at current value placement
                boardFin[rowIndex][valuePlacementOnRow].unshift(squareValue);
                boardRef[rowIndex][valuePlacementOnRow].shift(b);
                boardRef[rowIndex][valuePlacementOnRow].unshift(c);

                //  ###################### BELOW IS PREP FOR NEXT LOOP ######################
                
                //Undelete square, prep for next row
                if (indexOfReservedSquare > -1) {
                    availableSquares.push(indexOfReservedSquare);
                    availableSquares.sort();
                }

                //  Available squares next row (index-values of row)
                availableSquares = boardRef[rowIndex].map(function(value, i) { 
                    if (value.includes(a) && !value.includes(b)) {
                        return i;
                    } else {
                        return -1;
                    }
                }).filter(function(value) {
                    return value >= 0;
                });
                    
                // Copy this row to next row.
                if (rowIndex < 8) {
                    for (let rowSquare = 0; rowSquare < 9; rowSquare++) {
                        let nextRow = rowIndex + 1;
                        boardRef[nextRow][rowSquare] = boardRef[rowIndex][rowSquare];
                    }
                    // Next row (iterate rowIndex)
                    rowIndex++;
                }
            }
            //  Remove sectional limiter
            if (rowIndex <= 8) {
                for (let removeBPerSquare = 0; removeBPerSquare < 9; removeBPerSquare++) {
                    if (boardRef[rowIndex][removeBPerSquare].includes(b)) {
                        boardRef[rowIndex][removeBPerSquare] = boardRef[rowIndex][removeBPerSquare].filter(function(item) {
                            return item !== b
                        })
                        boardRef[rowIndex][removeBPerSquare].unshift(a);
                    }
                }
                

                availableSquares = boardRef[rowIndex].map(function(value,i) { 
                    if (value.includes(a) && !value.includes(c)) {
                        return i;
                    } else {
                        return -1;
                    }
                }).filter(function(value) {
                    return value >= 0;
                });
            }
        }
    }

    console.log("### SUDOKU SOLUTION GENERATED ###");
    
    let toTippexArr = [];
    for (let i = 0; i < level; i++) {
        let ranSquare = Math.floor(Math.random() * 80);
        toTippexArr.includes(ranSquare) ? i-- : toTippexArr.push(ranSquare);
    }

    //  Insert blanks as answerable squares
    for (let squareNb of toTippexArr) {
        let htmlSquare = document.getElementById("square" + squareNb);
        htmlSquare.innerHTML = `<input id='input${squareNb}' class='inputs' type='number' min='1' max='9'>`;
    }

    let squareIndex = 0;

    for (let rowIndexHTMLDOM = 0; rowIndexHTMLDOM < 9; rowIndexHTMLDOM++) {

        let rowArrayTileIndex = 0;
        let squareIndexPlus9 = squareIndex + 9;

        for (squareIndex; squareIndex < squareIndexPlus9; squareIndex++) {

            let htmlSquare = document.getElementById("square" + squareIndex);
            let value = boardFin[rowIndexHTMLDOM][rowArrayTileIndex][0];

            if (htmlSquare.innerHTML === "") {
                htmlSquare.innerHTML = value;
            }
            rowArrayTileIndex++;
        }
    }
}

//  Insert board into HTML-body
function showSolution() {
    let squareIndex = 0;

    for (let rowIndexHTMLDOM = 0; rowIndexHTMLDOM < 9; rowIndexHTMLDOM++) {

        let rowArrayTileIndex = 0;
        let squareIndexPlus9 = squareIndex + 9;

        for (squareIndex; squareIndex < squareIndexPlus9; squareIndex++) {

            let htmlSquare = document.getElementById("square" + squareIndex);
            let value = boardFin[rowIndexHTMLDOM][rowArrayTileIndex][0];

            htmlSquare.innerHTML = value;
            rowArrayTileIndex++;
        }
    }
}

//  LEVELS
let selectedLevel = 30;
let levelbutton = document.getElementById("levelsbutton");
levelbutton.addEventListener("click", function() {

    if (document.getElementById("levelchooser")) {
        return;
    }

    //  Level-chooser container
    let levelchooser = document.createElement("div");
    levelchooser.style.backgroundColor = "white";
    levelchooser.style.border = "2px solid black";
    levelchooser.style.position = "absolute";
    levelchooser.style.zIndex = "10";
    levelchooser.style.padding = "10px";
    levelchooser.style.lineHeight = "3em";
    levelchooser.style.top = "50%";
    levelchooser.style.left = "50%";
    levelchooser.style.transform = "translate(-50%, -50%)";
    levelchooser.style.height = "300px";
    levelchooser.style.width = "150px";
    levelchooser.style.overflow = "scroll";
    levelchooser.style.filter = "drop-shadow(0px 30px 20px rgba(0, 0, 0, 0.582)";
    levelchooser.style.textAlign = "center";
    levelchooser.setAttribute("id", "levelchooser");
    document.querySelector("form").appendChild(levelchooser);

    let toBlur = document.querySelectorAll("form div:not(#levelchooser)");
    for (let element of toBlur) {
        element.style.filter = "blur(2px)";
    }

    // Generate level-buttons and level
    for (let i = 1; i <= 80; i++) {
    let levelOption = document.createElement("input");
    levelOption.setAttribute("type", "button");
    levelOption.setAttribute("class", "levels buttons");
    levelOption.setAttribute("id", "level" + i);
    levelOption.setAttribute("value", i);
    levelOption.style.display = "block";
    levelOption.style.width = "100%";
    levelOption.addEventListener("click", function(){
        this.parentNode.remove();
        selectedLevel = i;
        clearColor();
        for (let element of toBlur) {
            element.style.filter = "";
        }
        return generateGame(i);
    });
    document.getElementById("levelchooser").appendChild(levelOption);
    }
});

// Enabling closing of levels-popup
window.addEventListener("click", (e) => {
    if (e.target === document.getElementById("levelchooser") || e.target === levelbutton) {
        return;
    } else if (document.getElementById("levelchooser")) {
        let toBlur = document.querySelectorAll("form div:not(#levelchooser)");
        for (let element of toBlur) {
            element.style.filter = "";
        }
        document.getElementById("levelchooser").remove();
    } else {
        return;
    }
})

//  Generate a game at entry
generateGame(selectedLevel);

// New game
let newGameBtn = document.getElementById("newgame");
newGameBtn.addEventListener("click", () => {
    clearColor();
    generateGame(selectedLevel);
});

function clearColor() {
    let tiles = document.getElementsByClassName("tile");
    for (let tile of tiles) {
        tile.style.backgroundColor = "";
    }
    document.getElementById("board").style.backgroundColor = "";
}


//  Check if correct
let checkYourAnswerButton = document.getElementById("checkyouranswer");
checkYourAnswerButton.addEventListener("click", () => {     checkYourAnswer()    });

function checkYourAnswer() {
    let squareIndex = 0;
    let wrongNumbers = [];

    for (let rowIndexHTMLDOM = 0; rowIndexHTMLDOM < 9; rowIndexHTMLDOM++) {

        let rowArrayTileIndex = 0;
        let squareIndexPlus9 = squareIndex + 9;

        for (squareIndex; squareIndex < squareIndexPlus9; squareIndex++) {

            let inputSquare = document.getElementById(`input${squareIndex}`);
            let correctValue = boardFin[rowIndexHTMLDOM][rowArrayTileIndex][0];

            if (inputSquare) {
                if (inputSquare.value != correctValue) {
                    wrongNumbers.push(squareIndex);
                } else {
                    document.getElementById(`tile${squareIndex}`).style.backgroundColor = "rgb(137, 255, 133)";
                }
            }
            rowArrayTileIndex++;
        }
    }
    if (wrongNumbers.length > 0) {
        for (let v of wrongNumbers) {
            document.getElementById(`tile${v}`).style.backgroundColor = "rgb(255, 138, 138)";
        }
    } else {
        document.getElementById("board").style.backgroundColor = "rgb(137, 255, 133)";
    }
}