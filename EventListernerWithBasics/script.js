
var overlay = document.querySelector(".over-lay")
var container = document.querySelector(".container-box")
var addPopUpButton = document.getElementById("pop-add-button")

addPopUpButton.addEventListener("click", function(){
    overlay.style.display = "block";
    container.style.display = "block";
})

var cancelButton = document.getElementById("cancel-button")

cancelButton.addEventListener("click", function(event){
    event.preventDefault()
    overlay.style.display = "none";
    container.style.display = "none";
})

var bookContainer = document.querySelector(".container")
var addBook = document.getElementById("save-button")
var bookAuthor = document.getElementById("author-name")
var bookTitle = document.getElementById("book-title")
var bookContent = document.getElementById("content")

addBook.addEventListener("click", function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML=`<h2>${bookTitle.value}</h2>
    <h5>${bookAuthor.value}</h5>
    <p>${bookContent.value}</p>
    <button class="delete" onclick="deleteBook(event)">Delete</button>`
    bookContainer.append(div)
    overlay.style.display = "none";
    container.style.display = "none";
    console.log(bookAuthor.value, bookTitle.value, bookContent.value);
})

function deleteBook(event){
    event.target.parentElement.remove()
}
