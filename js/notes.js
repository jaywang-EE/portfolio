var url = "https://script.google.com/macros/s/AKfycbyCCJX_JVAGckZNLZZexg3_1giU80DetWXLEdXQOsHUmT0JcDI/exec";
window.addEventListener("load", function() {
  getData();
//   changeBody();
});

function getData(){
  $.ajax({
    type: "get",
    url: url,
    dataType: "JSON",
    success: function (response) {
      response.forEach(element => {
        var [title, url] = element;
        if (title != "title") {
            addNote(title, url);
        }
        console.log(title);
        console.log(url);
      });
      changeBody();
    }
  });
}
function addNote(title, url) {
    document.getElementById("notes").innerHTML += `
        <a href="` + url + `">
        <div class="` + title + ` text-block">
        <img src="imgs/leetcode.png" alt="proj_heroku"/>
        <h2>` + title + `</h2>
        <p></p>
        </div>
        </a>
        `;
}
function changeBody() {
    let main = document.getElementsByTagName("main")[0];
    console.log(window.innerHeight);
    console.log(document.body.offsetHeight);    
    main.style.minHeight = (Math.max(window.innerHeight, document.body.offsetHeight) - 158) + "px";
};
