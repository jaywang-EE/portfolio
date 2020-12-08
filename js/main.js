window.addEventListener("load", changeBody);
window.addEventListener("resize", changeBody);

function changeBody() {
    let main = document.getElementsByTagName("main")[0];
    console.log(window.innerHeight);
    console.log(document.body.offsetHeight);    
    console.log(document.body.offsetHeight);    
    main.style.minHeight = (Math.max(window.innerHeight, document.body.offsetHeight) - 158) + "px";
};

