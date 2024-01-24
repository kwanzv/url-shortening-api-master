const shorten = document.querySelector("#shorten");

shorten.addEventListener("click", () => {
  const url = document.querySelector("#url").value;
  postData(url);
});

async function postData(url) {
  console.log(url);
  try {
    const res = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `url=${url}`,
    });

    const data = await res.json();
    console.log(data.result_url);
    displayData(data, url);
  } catch (err) {
    console.log(err);
  }
}
