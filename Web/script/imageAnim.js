(() => {
	// square brackets means it's an array
	// set up the puzzle pieces and boards
	const pieces = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
	
	let piecesBoard = document.querySelector(".puzzle-pieces"),
		puzzleBoard = document.querySelector(".puzzle-board"),
		puzzleSelectors = document.querySelectorAll("#buttonHolder img");

		// functions go in the middle
		function createPuzzlePieces(pictureIndex) {
			// generate puzzle pieces for the left hand side
			//debugger;
			pieces.forEach((piece, index) => {
				let newPuzzlePiece = `<img id="piece${index}" class="puzzle-image" src="images/${piece + pictureIndex}.jpg" alt="thumbnail">`;

				piecesBoard.innerHTML += newPuzzlePiece;
				});
			
		}

		function resetPuzzlePieces() {
			// empty the thumbnail container 
			piecesBoard.innerHTML = "";
			createPuzzlePieces(this.dataset.puzzleref);
		
		}

		//event handling down here
		puzzleSelectors.forEach(puzzle => puzzle.addEventListener("click", resetPuzzlePieces));

		createPuzzlePieces(0);
	
})();
