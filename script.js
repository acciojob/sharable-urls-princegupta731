// your code here

 const form = document.getElementById("myForm");
        const urlElement = document.getElementById("url");

        form.addEventListener("submit", function(e) {
            e.preventDefault(); // Stop page reload

            const name = document.getElementById("name").value.trim();
            const year = document.getElementById("year").value.trim();

            let baseURL = "https://localhost:8080/";

            // Build query string
            let params = [];

            if (name !== "") {
                params.push(`name=${encodeURIComponent(name)}`);
            }

            if (year !== "") {
                params.push(`year=${encodeURIComponent(year)}`);
            }

            // If we have parameters, join them
            if (params.length > 0) {
                baseURL += "?" + params.join("&");
            }

            urlElement.textContent = baseURL;
        });