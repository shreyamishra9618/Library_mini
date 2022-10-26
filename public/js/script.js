console.log("i am linked!")
const bookUl = document.querySelector("#allBooks")
const bookForm = document.querySelector("#newBook");
const bookId = document.querySelector("#bookId");
const bookTitle = document.querySelector("#bookTitle");
const bookAuthor = document.querySelector("#bookAuthor");

fetch("/books").then(res=>{
    return res.json()
}).then(data=>{
    console.log(data);
    data.forEach(ani=>{
        const newLi = document.createElement('li');
        newLi.textContent = ani.name
        bookUl.append(newLi)
    })
})

bookForm.addEventListener("submit",e=>{
    e.preventDefault();
    const dataObj ={
        id:parseInt(bookId.value),
        name:bookTitle.value,
        author:bookAuthor.value
    }
    console.log(dataObj);
    fetch("/books",{
        method:"POST",
        body:JSON.stringify(dataObj),
        headers:{
            "Content-Type":"application/json"
        }
    }).then(res=>{
        if(res.ok){
           location.reload()
        } else {
            alert("trumpet sound")
        } 
    })
})