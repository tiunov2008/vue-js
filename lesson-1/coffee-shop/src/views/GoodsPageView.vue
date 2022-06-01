<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component />
                    </div>
                </div>
                <header-title-component
                title="For your pleasure"
                />
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <card-component
                                classItem="shop__item"
                                :text="shop_2_cards[0].text"
                                :price="shop_2_cards[0].price"
                                :img="shop_2_cards[0].img"
                            />
                            <card-component
                                classItem="shop__item"
                                :text="shop_2_cards[1].text"
                                :price="shop_2_cards[1].price"
                                :img="shop_2_cards[1].img"
                            />
                            <card-component
                                classItem="shop__item"
                                :text="shop_2_cards[2].text"
                                :price="shop_2_cards[2].price"
                                :img="shop_2_cards[2].img"
                            />
                            <card-component
                                classItem="shop__item"
                                :text="shop_2_cards[3].text"
                                :price="shop_2_cards[3].price"
                                :img="shop_2_cards[3].img"
                            />
                            <card-component
                                classItem="shop__item"
                                :text="shop_2_cards[4].text"
                                :price="shop_2_cards[4].price"
                                :img="shop_2_cards[4].img"
                            />
                            <card-component
                                classItem="shop__item"
                                :text="shop_2_cards[5].text"
                                :price="shop_2_cards[5].price"
                                :img="shop_2_cards[5].img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import NavBarComponent from '@/components/NavBarComponent.vue'
import CardComponent from '@/components/CardComponent.vue'
import HeaderTitleComponent from '@/components/HeaderTitleComponent.vue'
export default {
    components: { NavBarComponent, CardComponent, HeaderTitleComponent},
    data() {
        return {
            shop_2_cards: [
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
        }
    }
}
</script>