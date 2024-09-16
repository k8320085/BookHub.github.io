let columns = document.createElement("div");
columns.className = "columns";
document.body.appendChild(columns);

function card_book(image_src, book_title, book_writer) {
  let container = document.createElement("div");
  container.className = "book";
  
  container.id = book_title;

  columns.appendChild(container);

  let img = document.createElement("img");
  let title = document.createElement("a");
  let writer = document.createElement("p");
  let rating = document.createElement("div");
  let star = document.createElement("span");

  img.src = image_src;

  title.className = "title";
  title.textContent = book_title;
  title.href = "#";

  writer.textContent = book_writer;
  writer.className = "writer";

  rating.className = "rating";
  rating.appendChild(star);
  star.textContent = "★★★★☆";
  star.className = "star";

  container.appendChild(img);
  container.appendChild(title);
  container.appendChild(writer);
  container.appendChild(rating);
}
///////////////////////////////////
function search() {
  var search = document.getElementById("search");
  search.onclick = function () {
    let title = prompt("Enter book name:");

    let bookElement = document.getElementById(title);

    if (bookElement) {
      let elementPosition = bookElement.offsetTop;
      bookElement.scrollIntoView({
        elementPosition : top,
        behavior : 'smooth'
      });
    } else {
      alert("Book not found!");
    }
  };
}
/////////////////////////////////////////////////////////////////////////////////
var modal = document.getElementById("myModal");

var btn = document.getElementById("openModal");

var span = document.getElementById("closeModal");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

////////////////////////////////////////////////

function mainBooks() {
  let mab = {
    "محاط بالحمقي.webp": "محاط بالحمقى",
    "فن اللا مباله.jpg": "فن اللا مباله",
    "فضائل الصحابة.jpg": "فضائل الصحابه",
    "فاتتني صلاة.jpg": "فاتتني صلاة",
    "جلسات نفسيه.jpg": "جلسات نفسيه",
    "المرحلة الملكيه.jpg": "المرحله الملكيه",
    "العادات الذرية.jpg": "العادات الذريه",
    "الدحيح.jpg": "ما ورائ الكواليس",
    "ابي الذي اكره.jpg": "ابي الذي اكره",
    "https://m.media-amazon.com/images/I/51VaS2uR1BL._AC_UY218_.jpg":
      "تاريخ دمشق",
    "https://m.media-amazon.com/images/I/51jRJ6pdAIL._AC_UY218_.jpg":
      "الاب الغني والاب الفقير",
    "https://m.media-amazon.com/images/I/71-MXzgGEjL._AC_UL320_.jpg":
      "في عالم اخر",
    "https://m.media-amazon.com/images/I/71f5+XW8GcL._AC_UL320_.jpg":
      "في قلبي انثى",
    "https://www.noor-book.com/publice/covers_cache_webp/3/7/7/8/59ed8a2d987780b86dd1b99294ec3e41.png.webp":
      "صحيح البخاري",
    "https://www.noor-book.com/publice/covers_cache_webp/9/e/b/d/56d83b9aebebdc2d6ea25e97f7b6f521.png.webp":
      "البدايه والنهايه",
    "https://www.noor-book.com/publice/covers_cache_webp/3/0/a/9/4d90187b280a9d9b2a961c4dfffdc441.png.webp":
      "الرحيق المختوم",
    "https://www.noor-book.com/publice/covers_cache_webp/3/a/6/c/c86be281b8a6c4ce6a5aecbb4b1a38f9.jpg.webp":
      "لانك الله",
    "https://www.noor-book.com/publice/covers_cache_webp/6/e/b/6/9f2c45ff22eb6c827113e74bba35b0e3.png.webp":
      "نظريه الفستق",
    "https://www.noor-book.com/publice/covers_cache_webp/1/2/e/5/6e05b46b0f2e5e29424838c3a3a25ec3.png.webp":
      "دع القلق وابدأ الحياه",
  };
  let index = 0;
  let keys = Object.keys(mab);
  let values = Object.values(mab);

  for (index = 0; index < keys.length; index++) {
    let mab2 = { [values[index]]: "غير معروف" };
    card_book(keys[index], values[index], Object.values(mab2));
  }
}

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");
var form = document.getElementById("bookForm");

form.onsubmit = function (event) {
  event.preventDefault();

  let book_title = document.getElementById("book-title").value;
  let book_writer = document.getElementById("book-writer").value;
  let book_imageInput = document.getElementById("book-img");

  let reader = new FileReader();
  reader.onload = function (event) {
    let imageSrc = event.target.result;

    card_book(imageSrc, book_title, book_writer);

    modal.style.display = "none";

    form.reset();
  };
  if (book_imageInput.files && book_imageInput.files[0]) {
    reader.readAsDataURL(book_imageInput.files[0]);
  } else {
    alert(`You didn't complete book information`);
  }
};
mainBooks();
search();
