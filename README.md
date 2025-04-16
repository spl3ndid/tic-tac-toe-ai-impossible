# Tic Tac Toe vs AI

This project is a web-based implementation of the classic Tic Tac Toe game, where a human player competes against an AI opponent. The AI uses the minimax algorithm to make optimal moves, providing a challenging gameplay experience.

👉 **[Play the game here](https://spl3ndid.github.io/tic-tac-toe-ai-impossible/)**

## Features

- Interactive web-based Tic Tac Toe game
- Play against an AI opponent that uses the minimax algorithm
- Responsive design that works on desktop and mobile devices
- Simple and intuitive user interface

## Screenshot

![Tic Tac Toe Game Screenshot](https://github.com/spl3ndid/tic-tac-toe-ai/blob/main/screenshot.png)

## Installation

1. Clone this repository or download the source code.
2. No additional dependencies are required as this project uses vanilla HTML, CSS, and JavaScript.

## Usage

1. Open the `index.html` file in a web browser.
2. The game board will be displayed, and you can start playing immediately.
3. Click on any empty cell to make your move (you'll be playing as 'X').
4. The AI opponent will automatically make its move (playing as 'O').
5. Continue playing until there's a winner or the game ends in a tie.
6. Use the "Reset Game" button to start a new game at any time.

## Project Structure

- `index.html`: The main HTML file that structures the game interface.
- `style.css`: Contains all the CSS styles for the game layout and appearance.
- `logic.js`: Implements the game logic, AI opponent, and user interactions.

## How the AI Works

The AI opponent uses the minimax algorithm to determine the best move. This algorithm works by:

1. Simulating all possible future game states.
2. Assigning a score to each end state (win = +10, lose = -10, tie = 0).
3. Choosing the move that leads to the best possible outcome for the AI, assuming the human player also plays optimally.

This makes the AI very challenging to beat. The best a human player can achieve against this AI is a tie.

## Customization

You can customize the game by modifying the following:

- Adjust the styling in `style.css` to change the game's appearance.
- Modify the delay of the AI's move in `logic.js` by changing the timeout value in the `handleCellClick` function.
- Experiment with the scoring in the `minimax` function to adjust the AI's behavior.

## Contributing

Contributions to improve the game are welcome. Please feel free to submit issues or pull requests.

## License

This project is open source and available under the MIT License.
