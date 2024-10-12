window.onload = function () {
  let columns = document.createElement("div");
  columns.className = "columns";
  document.body.appendChild(columns);

  let detailModal = document.getElementById("bookDetailModal");
  let closeDetailModal = document.getElementById("closeDetailModal");
  let modalBookTitle = document.getElementById("modalBookTitle");
  let modalBookImage = document.getElementById("modalBookImage");
  let modalBookWriter = document.getElementById("modalBookWriter");
  let modalBookRating = document.getElementById("modalBookRating");
  let downloadLink = document.getElementById("downloadLink");

  closeDetailModal.onclick = function () {
    detailModal.style.display = "none";
    document.body.style.overflow = "auto";
  };

  function card_book(image_src, book_title, book_writer, href) {
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
    img.style.height = "100%";

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

    title.onclick,
      (container.onclick = function (event) {
        event.preventDefault();

        modalBookTitle.textContent = book_title;
        modalBookWriter.textContent = book_writer;
        modalBookRating.textContent = star.textContent;
        modalBookImage.src = image_src;

        downloadLink.href = href !== "#" ? href : "#"; // تأكد من تعيين href بشكل صحيح
        downloadLink.textContent = "Preview and Download"; // إضافة نص لزر التحميل في الـ modal

        detailModal.style.display = "block";
        document.body.style.overflow = "hidden";
        detailModal.style.overflow = "auto";
      });
  }

  function search() {
    var search = document.getElementById("search");
    search.onclick = function () {
      let title = prompt("Enter book name:");

      let bookElement = document.getElementById(title);

      if (bookElement) {
        bookElement.scrollIntoView({
          elementPosition: top,
          behavior: "smooth",
        });
      } else {
        alert("Book not found!");
      }
    };
  }

  var modal = document.getElementById("myModal");
  var btn = document.getElementById("openModal");
  var span = document.getElementById("closeModal");
  var form = document.getElementById("bookForm");

  btn.onclick = function () {
    modal.style.display = "block";
  };

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal || event.target == detailModal) {
      modal.style.display = "none";
      detailModal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  };

  form.onsubmit = function (event) {
    event.preventDefault();

    let book_title = document.getElementById("book-title").value;
    let book_writer = document.getElementById("book-writer").value;
    let book_imageInput = document.getElementById("book-img");

    let reader = new FileReader();
    reader.onload = function (event) {
      let imageSrc = event.target.result;

      card_book(imageSrc, book_title, book_writer, "#");

      modal.style.display = "none";

      form.reset();
    };
    if (book_imageInput.files && book_imageInput.files[0]) {
      reader.readAsDataURL(book_imageInput.files[0]);
    } else {
      alert(`You didn't complete book information`);
    }
  };

  function mainBooks() {
    let mab = {
      "https://www.noor-book.com/publice/covers_cache_webp/2/8/d/2/f5702d41748d204c1c2fe2cb73ef1756.jpeg.webp":
        [
          "محاط بالحمقى",
          "توماس اريكسون",
          "https://docs.google.com/viewerng/viewer?url=https://www.filedownload.click/files/ktabpdf.com_%D9%83%D8%AA%D8%A7%D8%A8_%D9%85%D8%AD%D8%A7%D8%B7_%D8%A8%D8%A7%D9%84%D8%AD%D9%85%D9%82%D9%89_%D8%A7%D9%84%D8%A3%D9%86%D9%85%D8%A7%D8%B7_%D8%A7%D9%84%D8%A3%D8%B1%D8%A8%D8%B9%D8%A9_%D9%84%D9%84%D8%B3%D9%84%D9%88%D9%83_%D8%A7%D9%84%D8%A8%D8%B4%D8%B1%D9%8A.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/2/5/4/3/280d8758945437f086633e92eb2f2723.jpg.webp":
        [
          "فن اللا مباله",
          "مارك مانيسون",
          "https://docs.google.com/viewerng/viewer?url=https://www.filedownload.click/files/%D9%81%D9%86+%D8%A7%D9%84%D9%84%D8%A7%D9%85%D8%A8%D8%A7%D9%84%D8%A7%D8%A9+%D9%85%D8%A7%D8%B1%D9%83+%D9%85%D8%A7%D9%86%D8%B3%D9%88%D9%86++-+KtabPDF.com.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/1/e/8/3/cdf5d297bde83265d88a7c4583fcbf13.png.webp":
        ["فضائل الصحابه", "احمد بن حنبل", "https://archive.org/embed/wahawaha"],
      "https://www.noor-book.com/publice/covers_cache_webp/2/6/b/8/628dd2af4d6b8931be3c95aedc4e5ed9.png.webp":
        [
          "فاتتني صلاة",
          "اسلام جمال",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D9%81%D8%A7%D8%AA%D8%AA%D9%86%D9%8A+%D8%B5%D9%84%D8%A7%D8%A9_86475_Foulabook.com_.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/2/7/3/8/4762d3f9087384cda17177850310c6ed.jpg.webp":
        [
          "جلسات نفسيه",
          "محمد ابراهيم",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D8%AC%D9%84%D8%B3%D8%A7%D8%AA+%D9%86%D9%81%D8%B3%D9%8A%D8%A9_41490_Foulabook.com_.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/7/4/f/6/2ed0b164094f66894104cc006ad0f87b.png.webp":
        [
          "المرحله الملكيه",
          "خالد المنيف",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D8%A7%D9%84%D9%85%D8%B1%D8%AD%D9%84%D8%A9+%D8%A7%D9%84%D9%85%D9%84%D9%83%D9%8A%D8%A9_34422_Foulabook.com_.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/2/7/7/8/66cba4e45a778873f44a5387a1b55bc2.jpg.webp":
        [
          "العادات الذريه",
          "جميس كلير",
          "https://www.bookleaks.com/files/fhrst7/267.pdf",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/2/7/5/5/d1f82bc790755b6150f80b7635db0636.png.webp":
        [
          "ما ورائ الكواليس",
          "الدحيح",
          "https://e8cc3e4264ac4da38dfc-9a34d1e02bfbb47888cca75f836ef7c7.ssl.cf3.rackcdn.com/jarir-shopping-guide-Qatar.pdf",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/2/2/f/a/53ebf5e0832fa7633ea353504f8b70dc.jpg.webp":
        [
          "ابي الذي اكره",
          "عماد رشاد عثمان",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D8%A3%D8%A8%D9%8A+%D8%A7%D9%84%D8%B0%D9%8A+%D8%A3%D9%83%D8%B1%D9%87_25826_Foulabook.com_.pdf&hl=ar",
        ],
      "https://m.media-amazon.com/images/I/51VaS2uR1BL._AC_UY218_.jpg": [
        "تاريخ دمشق",
        "ابن عساكر",
        "https://www.cia.gov/library/abbottabad-compound/2B/2B4E051CE5A70B71D308371C5BE674D2_35.pdf",
      ],
      "https://m.media-amazon.com/images/I/51jRJ6pdAIL._AC_UY218_.jpg": [
        "الاب الغني والاب الفقير",
        "روبرت كيوساكي",
        "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D8%A7%D9%84%D8%A3%D8%A8+%D8%A7%D9%84%D8%BA%D9%86%D9%8A+%D9%88%D8%A7%D9%84%D8%A3%D8%A8+%D8%A7%D9%84%D9%81%D9%82%D9%8A%D8%B1_34240_Foulabook.com_.pdf&hl=ar",
      ],
      "https://m.media-amazon.com/images/I/71-MXzgGEjL._AC_UL320_.jpg": [
        "في عالم اخر",
        "محمد عبد الوهاب",
        "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D8%B9%D8%A7%D9%84%D9%85+%D8%A2%D8%AE%D8%B1_39815_Foulabook.com_.pdf&hl=ar",
      ],
      "https://m.media-amazon.com/images/I/71f5+XW8GcL._AC_UL320_.jpg": [
        "في قلبي انثى",
        "خوله حمدي",
        "https://www.asjp.cerist.dz/en/downArticle/307/7/1/154999",
      ],
      "https://www.noor-book.com/publice/covers_cache_webp/3/7/7/8/59ed8a2d987780b86dd1b99294ec3e41.png.webp":
        [
          "صحيح البخاري",
          "البخاري",
          "https://www.alukah.net/userfiles/pdf/albukhari01.pdf",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/9/e/b/d/56d83b9aebebdc2d6ea25e97f7b6f521.png.webp":
        [
          "البدايه والنهايه",
          "ابن كثير",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D8%A7%D9%84%D8%A8%D8%AF%D8%A7%D9%8A%D8%A9+%D9%88%D8%A7%D9%84%D9%86%D9%87%D8%A7%D9%8A%D8%A9+-+%D8%A7%D9%84%D8%AC%D8%B2%D8%A1+%D8%A7%D9%84%D8%A3%D9%88%D9%84_49378_Foulabook.com_.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/3/0/a/9/4d90187b280a9d9b2a961c4dfffdc441.png.webp":
        [
          "الرحيق المختوم",
          "صفي الرحمن",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D8%A7%D9%84%D8%B1%D8%AD%D9%8A%D9%82+%D8%A7%D9%84%D9%85%D8%AE%D8%AA%D9%88%D9%85_Foulabook.com_.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/3/a/6/c/c86be281b8a6c4ce6a5aecbb4b1a38f9.jpg.webp":
        [
          "لانك الله",
          "عالي جابر الفيفي",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D9%84%D8%A3%D9%86%D9%83+%D8%A7%D9%84%D9%84%D9%87+_+%D8%B1%D8%AD%D9%84%D8%A9+%D8%A5%D9%84%D9%89+%D8%A7%D9%84%D8%B3%D9%85%D8%A7%D8%A1+%D8%A7%D9%84%D8%B3%D8%A7%D8%A8%D8%B9%D8%A93774.Foulabook.com.1527550136.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/6/e/b/6/9f2c45ff22eb6c827113e74bba35b0e3.png.webp":
        [
          "نظريه الفستق",
          "فهد الاحمدي",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D9%86%D8%B8%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D9%81%D8%B3%D8%AA%D9%82_63507_Foulabook.com_.pdf&hl=ar",
        ],
      "https://www.noor-book.com/publice/covers_cache_webp/1/2/e/5/6e05b46b0f2e5e29424838c3a3a25ec3.png.webp":
        [
          "دع القلق وابدأ الحياه",
          "ديل كرنيجي",
          "https://docs.google.com/viewerng/viewer?url=https://foulabook.com/storage/book/%D9%86%D8%B8%D8%B1%D9%8A%D8%A9+%D8%A7%D9%84%D9%81%D8%B3%D8%AA%D9%82_63507_Foulabook.com_.pdf&hl=ar",
        ],
    };

    for (let key in mab) {
      let [book_title, book_writer, href] = mab[key];
      card_book(key, book_title, book_writer, href);
    }
  }
  mainBooks();
  search();
};
