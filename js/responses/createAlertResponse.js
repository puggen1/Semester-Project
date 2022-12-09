export default function createAlertResponse( responseText, responseType) {
    let response = document.createElement("div");
    response.classList.add("alert", "alert-dismissible", "fade", "show", "mt-2");
    if (responseType === "success") {
        response.classList.add("alert-success");
    } else{
        response.classList.add("alert-danger");
    }
    response.innerHTML = `${responseText}  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>`;

    return response;
}