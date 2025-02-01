<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Game</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <h1>Game</h1>
        <div>
            <label for="xInput">X turn:</label>
            <input type="number" id="xInput">
        </div>
        <div>
            <label for="yInput">Y turn:</label>
            <input type="number" id="yInput">
        </div>
        <button onclick="playGame()">Play</button>
        <p id="result"></p>
    </div>
    <script src="script.js"></script>
</body>
</html>
