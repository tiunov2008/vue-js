const cards = {
    state: {
        hero:
        [
            {
                id: 0,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 1kg',
                price: '11.73$',
            },
            {
                id: 1,
                img: 'coffee-2.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '12.73$',
            },
            {
                id: 2,
                img: 'coffee-3.jpg',
                text: 'Solimo Coffee Beans 3kg',
                price: '13.73$',
            },
        ],
        goodsPage:
        [
            {
                id: 0,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 1kg',
                price: '11.73$',
            },
            {
                id: 1,
                img: 'coffee-2.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '12.73$',
            },
            {
                id: 2,
                img: 'coffee-3.jpg',
                text: 'Solimo Coffee Beans 3kg',
                price: '13.73$',
            },
            {
                id: 3,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 4kg',
                price: '14.73$',
            },
            {
                id: 4,
                img: 'coffee-2.jpg',
                text: 'Solimo Coffee Beans 5kg',
                price: '15.73$',
            },
            {
                id: 5,
                img: 'coffee-3.jpg',
                text: 'Solimo Coffee Beans 6kg',
                price: '16.73$',
            },
        ],
        ourCoffee:
        [
            {
                id: 0,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 1kg',
                price: '11.73$',
            },
            {
                id: 1,
                img: 'coffee-2.jpg',
                text: 'Solimo Coffee Beans 2kg',
                price: '12.73$',
            },
            {
                id: 2,
                img: 'coffee-3.jpg',
                text: 'Solimo Coffee Beans 3kg',
                price: '13.73$',
            },
            {
                id: 3,
                img: 'coffee-1.jpg',
                text: 'Solimo Coffee Beans 4kg',
                price: '14.73$',
            },
            {
                id: 4,
                img: 'coffee-2.jpg',
                text: 'Solimo Coffee Beans 5kg',
                price: '15.73$',
            },
            {
                id: 5,
                img: 'coffee-3.jpg',
                text: 'Solimo Coffee Beans 6kg',
                price: '16.73$',
            },
        ]
    },
    getters: {
        getHeroCards(state) {
            return state.hero
        },
        getGoodsPageCards(state) {
            return state.goodsPage
        },
        getOurCoffeeCards(state) {
            return state.ourCoffee
        },
        getOurCoffeeProductId(state) {
            return (id) => {
                return state.ourCoffee.find((card) => card.id === +id)
            }
        },
        getGoodsPageProductId(state) {
            return (id) => {
                return state.ourCoffee.find((card) => card.id === +id)
            }
        }
    }
}

export default cards