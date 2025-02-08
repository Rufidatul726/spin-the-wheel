**Spin the Wheel Game Report**

**1. Introduction**
The "Spin the Wheel" game is a simple yet engaging game built using React.js. The game consists of a spinning wheel divided into 10 slices, each with a unique score. The objective is to spin the wheel five times and track the total score. After five spins, the player can reset the game and start over.

**2. Component Breakdown**
The game is structured into the following components:
- **App.js**: Manages the game state, spin logic, and resets functionality.
- **Wheel Component**: Handles the spinning mechanism, slice highlighting, and visual representation.
- **ScoreBoard Component**: Displays the history of spins, total score, and remaining spins.
- **SpinButton Component**: Manages the spin button functionality, including enabling/disabling it.

**3. Architecture and Implementation Details**
- The wheel consists of **10 equal slices**, each representing a different score (e.g., 10, 20, 30…100).
- At first, the idea was to segment slices and use an **8-second timeout** to determine the result. However, this approach led to the same result appearing repeatedly.
- To solve this, a **random spin degree** strategy was implemented:
  - A random number between **0 to 359** is generated.
  - The number determines which slice the wheel lands on.
  - The wheel visually rotates for **8 seconds** before stopping at the winning slice.
- **Highlighting the Winning Slice**:
  - The index of the current score is tracked.
  - When a slice matches the current score index, its color is changed.
- **Disabling Buttons During Spin**:
  - While the wheel is spinning, all buttons are disabled to prevent multiple spins at once.
- **Tracking and Resetting Spins**:
  - A **scores variable** tracks the last five spins.
  - Once five spins are completed, the game can be reset to start over.

**4. Code Overview**
- **App.js**: Manages game state, spin logic, and reset function.
- **Wheel.jsx**: Implements the spinning animation and slice highlighting.
- **ScoreBoard.jsx**: Displays the score history, current score, and remaining spins.
- **SpinButton.jsx**: Controls the spin button state.

**5. Conclusion**
The "Spin the Wheel" game is fully functional, providing a smooth and fair spinning mechanism. The use of React.js ensures modularity, and the implementation of random spin logic guarantees unpredictability. The game successfully tracks spin history and total score while maintaining an interactive and visually engaging experience. Future improvements may include animations, sound effects, and customizable themes for enhanced user engagement.