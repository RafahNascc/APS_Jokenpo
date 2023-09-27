function playerChoiceHandler(playerChoice) {
    countdown(function() {
        const computerChoice = getComputerChoice();
        document.getElementById("playerChoice").textContent = playerChoice;

        // Oculta todas as imagens
        const computerChoiceImages = document.getElementById("computerChoiceImages");
        computerChoiceImages.querySelectorAll("img").forEach(img => {
            img.style.display = "none";
        });

        // Mostra a imagem correspondente à escolha do dispositivo
        const computerChoiceImg = document.getElementById(computerChoice + "Img");
        computerChoiceImg.style.display = "inline"; // Ou use "block" dependendo do layout desejado

        const result = determineWinner(playerChoice, computerChoice);
        document.getElementById("result").textContent = result;
        updateScore();
    });
}
