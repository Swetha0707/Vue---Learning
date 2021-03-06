const app = Vue.createApp(
    {
        data() {
            return {
                url: 'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started',
                showBooks: true,
                books: [
                    {
                        title: 'name of the wind',
                        author: 'patrick johnson',
                        img: 'assets/1.jpg',
                        isFav: true
                    },
                    {
                        title: 'World of Power',
                        author: 'John with',
                        img: 'assets/2.jpg',
                        isFav: false

                    },
                    {
                        title: 'narnia',
                        author: 'Fedrick Bason',
                        img: 'assets/3.jpg',
                        isFav: true

                    }

                ]
            }
        },
        methods: {
            toggleShowBooks() {
                this.showBooks = !this.showBooks
            },
            toggleEvent(book) {
                book.isFav = !book.isFav

            },
           
            computed:{
                filteredBooks(){
                    return this.books.filter((book) => book.isFav)
                }
            }
           
        }
    }
)
app.mount('#app')