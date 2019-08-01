const axios = require("axios");

(async () => {
  const { data } = await axios.get("https://api.unsplash.com/search/photos", {
    params: { query: "cars" },
    headers: {
      Authorization:
        "Client-ID ac5d24436c0ec4aabdc91100afcec9a48c9ef07d478d045acf49920fba366a63"
    }
  });
  console.log(data.results);
})();
// loop();
