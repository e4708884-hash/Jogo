const jogar = document.getElementById("jogar");

jogar.onclick = async function () {

    try {

        // Entra em tela cheia
        if (document.documentElement.requestFullscreen) {
            await document.documentElement.requestFullscreen();
        }

        // Tenta travar a orientação em paisagem
        if (screen.orientation && screen.orientation.lock) {
            await screen.orientation.lock("landscape");
        }

    } catch (erro) {

        console.log(
            "O navegador não permitiu bloquear a orientação:",
            erro
        );

    }

    // Vai para o hangar
    location.href = "hangar.html";
};