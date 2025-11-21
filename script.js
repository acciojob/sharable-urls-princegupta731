document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("myForm");
    const urlElement = document.getElementById("url");

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const year = document.getElementById("year").value.trim();

        let baseURL = "https://localhost:8080/";
        let params = [];

        if (name !== "") {
            params.push(`name=${encodeURIComponent(name)}`);
        }

        if (year !== "") {
            params.push(`year=${encodeURIComponent(year)}`);
        }

        if (params.length > 0) {
            baseURL += "?" + params.join("&");
        }

        urlElement.textContent = baseURL;
    });

});
