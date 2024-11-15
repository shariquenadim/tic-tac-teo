<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tic Tac Toe</title>
  <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
  <style>
    /* Global Styles */
    body {
      margin: 0;
      padding: 0;
      background: url('blackboard.jpg') no-repeat center center fixed;
      background-size: cover;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: 'Your-Handwritten-Font', sans-serif;
      color: white;
      text-align: center;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100vh;
      gap: 20px;
      padding: 20px;
    }

    /* Animation Section */
    .animation {
      width: 250px;
      height: 250px;
      margin-bottom: 20px;
      filter: drop-shadow(0 4px 6px rgba(0, 0, 0, 0.2));
    }

    /* Div Section for Buttons */
    .game-options {
      display: flex;
      flex-direction: column;
      gap: 15px;
      width: 100%;
    }

    .game-option {
      background: rgba(255, 255, 255, 0.1);
      border: 2px solid white;
      border-radius: 10px;
      padding: 15px;
      font-size: 18px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      text-align: center;
    }

    .game-option:hover {
      background: white;
      color: black;
      transform: scale(1.05);
    }

    /* Responsive Design */
    @media (min-width: 768px) {
      .container {
        gap: 30px;
      }

      .game-options {
        flex-direction: row;
        justify-content: center;
        gap: 20px;
      }

      .game-option {
        font-size: 20px;
        padding: 20px;
        width: 200px;
      }

      .animation {
        width: 350px;
        height: 350px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Animation Section -->
    <lottie-player 
      class="animation" 
      src="animation.lottie" 
      background="transparent" 
      speed="1" 
      loop 
      autoplay>
    </lottie-player>

    <!-- Game Options Section -->
    <div class="game-options">
      <div class="game-option">Play with AI</div>
      <div class="game-option">Play with Strangers</div>
      <div class="game-option">Play with a Friend</div>
    </div>
  </div>
</body>
</html>
