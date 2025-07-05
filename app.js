const app = Vue.createApp({
  // data, functions
  data() {
    return {
      url: "https://vuejs.org/",
      books: [
        {
          title: "The Fellowship of the Ring",
          author: "J.R.R. Tolkien",
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "The Two Towers",
          author: "J.R.R. Tolkien",
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "The Return of the King",
          author: "J.R.R. Tolkien",
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    handleEvent(e, data) {
      console.log(e, e.type);

      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      // Return only the books that are marked as favorite (isFav: true)
      // This computed property is automatically updated when 'books' changes
      // Vue caches the result unless 'books' is modified, improving performance
      // It can be used like a normal variable inside the template
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
