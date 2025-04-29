let formEl = document.getElementById("bookmarkForm");
let sitename = document.getElementById("siteNameInput");
let siteurl = document.getElementById("siteUrlInput");
let nameErr = document.getElementById("siteNameErrMsg");
let urlErr = document.getElementById("siteUrlErrMsg");
let unorderlist = document.getElementById("bookmarksList");
sitename.addEventListener("change", function(event) {
    if (sitename.value === "") {
        nameErr.textContent = "Required*";
    } else {
        nameErr.textContent = "";

    }
});
siteurl.addEventListener("change", function(event) {
    if (siteurl.value === "") {
        urlErr.textContent = "Required*";
    } else {
        urlErr.textContent = "";
    }
});

function submitdata(unorderlist) {

    let listElement = document.createElement("li");
    listElement.classList.add("formcontainer");
    unorderlist.appendChild(listElement);

    let msgcontainer = document.createElement("div");
    listElement.appendChild(msgcontainer);
    let heading = document.createElement("h1");
    heading.textContent = sitename.value;
    heading.classList.add("site");
    msgcontainer.appendChild(heading);
    let anchorelement = document.createElement("a");
    anchorelement.target = "_blank";
    anchorelement.textContent = siteurl.value;
    anchorelement.href = siteurl.value;
    anchorelement.classList.add("anchor");
    msgcontainer.appendChild(anchorelement);
    sitename.value = "";
    siteurl.value = "";
}
formEl.addEventListener("submit", function(event) {
    event.preventDefault();
    if (sitename.value === "") {
        nameErr.textContent = "Required*";
    }
    if (siteurl.value === "") {
        urlErr.textContent = "Required*";
        return;
    }
    submitdata(unorderlist);
});