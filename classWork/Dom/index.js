const wrapper = document.getElementById("wrapper")
console.log(wrapper);

const titles = document.getElementsByClassName("title")

console.log(titles)

// const list = document.getElementsByTagName("li")
// const liArray = Array.from(list)

// // console.log(Array.isArray(list))

const ul = document.querySelector("li")

console.log(ul)

const list = document.querySelectorAll("li")

console.log(list)

const bookList = document.querySelector("#book-list ul")

bookList.addEventListener("click",(event)=>{
    // console.log(event)
    if(event.target.textContent == "delete"){
        let li = event.target.closest("li")
        // bookList.removeChild(li)
        li.remove()
        
    }

})

const addBookForm = document.getElementById("add-book")

addBookForm.addEventListener("submit",(event)=>{
    event.preventDefault()


    const value = document.querySelector("#add-book input").value.trim()

    if(value!= ""){

        const {newLiTag,firstNewSpan,secondSpan} = createNewElements()
        addClassNames(firstNewSpan,secondSpan);
        addTextContent(firstNewSpan,value,secondSpan);
        appendChildren(newLiTag,firstNewSpan,secondSpan)
        addBookForm.reset()   
    }

    else{
        alert("enter a valid input")
    }


})


   const searchBookForm = document.getElementById("search-books");
const bookList = document.getElementById("book-list"); // assuming you have <div id="book-list">
const books = bookList.getElementsByTagName("li"); // if your books are inside <li>

// Listen for input
searchBookForm.addEventListener("input", (event) => {
    const searchText = event.target.value.toLowerCase();

    for (let book of books) {
        const title = book.textContent.toLowerCase();
        if (title.includes(searchText)) {
            book.style.display = ""; // show
        } else {
            book.style.display = "none"; // hide
        }
    }
});

 

function createNewElements(){
    let newLiTag = document.createElement("li");
    let firstNewSpan = document.createElement("span");
    let secondSpan = document.createElement("span");
    return {newLiTag,firstNewSpan,secondSpan}

}

function addClassNames(firstNewSpan,secondSpan){
    firstNewSpan.classList.add("name");
    secondSpan.classList.add("delete");

}

function addTextContent(firstNewSpan,value,secondSpan){
firstNewSpan.textContent = value;
secondSpan.textContent = "delete";

}

function appendChildren(newLiTag,firstNewSpan,secondSpan){
    newLiTag.append(firstNewSpan);
    newLiTag.append(secondSpan);
    bookList.append(newLiTag);
}





