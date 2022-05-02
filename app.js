const app = Vue.createApp(
    {
        data() {
            return {
                url:'https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Client-side_JavaScript_frameworks/Vue_getting_started',
                showBooks: true,
                books: [
                    {
                        title: 'name of the wind',
                        author: 'patrick johnson',
                        img:'assets/1.jpg'
                    },
                    {
                        title: 'World of Power',
                        author: 'John with',
                        img:'assets/2.jpg'

                    },
                    {
                        title: 'narnia',
                        author: 'Fedrick Bason',
                        img:'assets/3.jpg'

                    }

                ]
            }
        },
        methods: {
            toggleShowBooks() {
                this.showBooks = !this.showBooks;
            },
            handleEvent(e) {
                console.log(e, e.type)
                if (data) {
                    console.log(data)
                }
            },
            handleMousemove(e) {
                this.x = e.offsetX
                this.y = e.offsetY
            }
        }
    }
)
app.mount('#app')