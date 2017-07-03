

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8"/>
    <title>Andrews awesome dice game</title>
        <script src="diceGame.js"></script>
        <link rel="stylesheet" type="text/css" href="diceGame.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
        <script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
</head>
<body>
    <h1 id="gameTitle" class="col-lg-12">The Dice Game</h1>
    <div id="die1" class="dice">0</div>
    <div id="die2" class="dice">0</div>
    <div class="col-lg-12 playerScore">
        <h2>PLAYER 1:</h2>
        <h2 id="player1Score"></h2>
        <h2>PLAYER 2:</h2>
        <h2 id="player2Score"></h2>
    <button onclick="rollDice()" id="rollBtn">Roll Dice</button>
    <h2 id="status" style="clear:left;"></h2>
</body>
</html>