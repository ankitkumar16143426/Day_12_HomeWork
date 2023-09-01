// Get references to the input textarea and character count span
const inputText = document.getElementById("input-text");
const charCount = document.getElementById("char-count");

// Add an event listener to the textarea for input changes
inputText.addEventListener("input", updateCharacterCount);

// Function to update the character count
function updateCharacterCount() {
    const text = inputText.value;
    const count = text.length;
    charCount.textContent = count;
}

// Initial character count
updateCharacterCount();
