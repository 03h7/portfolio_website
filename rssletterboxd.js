const RSSURL = "https://letterboxd.com/03h7/rss/";

fetch(RSSURL)
  .then(response => response.text())
  .then(str => new window.DOMParser().parseFromString(str, "application/xml"))
  .then(data => {
    console.log(data);
    const items = data.querySelectorAll("item");
    let html = ``;
    var i=0;
    items.forEach(el => {
      html += `
            <p> 
              ${el.querySelector("title").innerHTML}
            </p>
      `;
    });
    console.log(html);
    var divlett=document.getElementById("letterboxd")
    divlett.insertAdjacentHTML("beforeend", html);
  });