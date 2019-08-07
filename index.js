function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
   .then(r => r.json())
   .then(books => renderBooks(books))
   
  //  return fetch()

}


function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})
