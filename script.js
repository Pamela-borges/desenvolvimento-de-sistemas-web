const textInput = document.getElementById('text-input');
const emojiSelector = document.getElementById('emoji-selector');
const outputText = document.getElementById('output-text');

// Função para inserir emoji no texto
emojiSelector.addEventListener('click', (e) => {
    if (e.target.classList.contains('emoji-button')) {
        const emoji = e.target.getAttribute('data-emoji');
        textInput.value += eval(emoji);  // Avaliando o código Unicode com `eval()`
        updateOutput();
    }
});

// Atualiza a saída com o texto e emojis
textInput.addEventListener('input', updateOutput);

function updateOutput() {
    outputText.innerText = textInput.value;
}

