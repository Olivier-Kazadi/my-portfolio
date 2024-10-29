// src/message.js

/**
 * Affiche une alerte de confirmation.
 * @param {string} message - Le message à afficher dans l'alerte.
 */
function showAlert(message) {
    alert(message);
}

/**
 * Affiche un message de succès dans un élément HTML.
 * @param {string} message - Le message à afficher.
 * @param {HTMLElement} element - L'élément dans lequel afficher le message.
 */
function showSuccessMessage(message, element) {
    element.innerHTML = `<div class="bg-green-500 text-white p-4 rounded-lg">${message}</div>`;
}

/**
 * Affiche un message d'erreur dans un élément HTML.
 * @param {string} message - Le message à afficher.
 * @param {HTMLElement} element - L'élément dans lequel afficher le message.
 */
function showErrorMessage(message, element) {
    element.innerHTML = `<div class="bg-red-500 text-white p-4 rounded-lg">${message}</div>`;
}

// Exemples d'utilisation (à adapter selon ton besoin)
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector("form");
    const messageContainer = document.getElementById("message-container");

    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Empêche le rechargement de la page

            // Logique de traitement du formulaire (ex. validation)
            const name = contactForm.elements["name"].value;
            const email = contactForm.elements["email"].value;
            const message = contactForm.elements["message"].value;

            // Validation simple
            if (name && email && message) {
                // Affiche un message de succès
                showSuccessMessage("Merci pour votre message ! Je vous répondrai bientôt.", messageContainer);
                contactForm.reset(); // Réinitialise le formulaire
            } else {
                // Affiche un message d'erreur
                showErrorMessage("Veuillez remplir tous les champs.", messageContainer);
            }
        });
    }
});
