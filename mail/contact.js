$(function () {

    "use strict";

    $("#contactForm").on("submit", function (event) {

        event.preventDefault();

        const form = this;
        const $form = $(form);
        const $button = $("#sendMessageButton");
        const $success = $("#success");

        // Limpiar mensajes anteriores
        $success.html("");

        // Validación básica
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Deshabilitar botón mientras se envía
        $button.prop("disabled", true);

        // Crear FormData
        const formData = new FormData(form);

        // Convertir los datos para Netlify
        const encodedData = new URLSearchParams(formData).toString();

        fetch("/", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: encodedData
        })
            .then(response => {

                if (!response.ok) {
                    throw new Error("Error al enviar el formulario");
                }

                $success.html(`
                    <div class="alert alert-success">
                        <button type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-hidden="true">
                            &times;
                        </button>

                        <strong>
                            ¡Mensaje enviado correctamente!
                        </strong>

                        <p class="mb-0">
                            Gracias por contactarme. Me pondré en contacto contigo
                            lo antes posible.
                        </p>
                    </div>
                `);

                form.reset();
            })
            .catch(error => {

                console.error("Error:", error);

                $success.html(`
                    <div class="alert alert-danger">
                        <button type="button"
                                class="close"
                                data-dismiss="alert"
                                aria-hidden="true">
                            &times;
                        </button>

                        <strong>
                            No fue posible enviar el mensaje.
                        </strong>

                        <p class="mb-0">
                            Por favor inténtalo nuevamente más tarde.
                        </p>
                    </div>
                `);
            })
            .finally(() => {

                setTimeout(() => {
                    $button.prop("disabled", false);
                }, 1000);

            });

    });

});