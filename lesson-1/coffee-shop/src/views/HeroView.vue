<template>
    <main>
        <div class="preview">
            <div class="container">
                <div class="row">
                    <div class="col">
                        <nav-bar-component/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <header-title-component
                        title="Everything You Love About Coffee"
                        />
                        <img class="beanslogo" src="@/assets/logo/Beans_logo.svg" alt="Beans logo">
                        <div class="preview__subtitle">We makes every day full of energy and taste</div>
                        <div class="preview__subtitle">Want to try our beans?</div>
                        <a href="./coffeepage.html" class="preview__btn">More</a>
                    </div>
                </div>
            </div>
        </div>
        <section class="about">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 offset-lg-3">
                        <div class="title">About Us</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="about__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            Afraid at highly months do things on at. Situation recommend objection do intention
                            so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                            met spot shy want. Children me laughing we prospect answered followed. At it went
                            is song that held help face.<br><br>

                            Now residence dashwoods she excellent you. Shade being under his bed her, Much
                            read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                            horrible but confined day end marriage. Eagerness furniture set preserved far
                            recommend. Did even but nor are most gave hope. Secure active living depend son
                            repair day ladies now.
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="best">
            <div class="container">
                <div class="title">Our best</div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="best__wrapper">
                            <card-component
                            classItem="best__item"
                            :text="hero_cards[0].text"
                            :price="hero_cards[0].price"
                            :img="hero_cards[0].img"
                            />
                            <card-component
                            classItem="best__item"
                            :text="hero_cards[1].text"
                            :price="hero_cards[1].price"
                            :img="hero_cards[1].img"
                            />
                            <card-component
                            classItem="best__item"
                            :text="hero_cards[2].text"
                            :price="hero_cards[2].price"
                            :img="hero_cards[2].img"
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
    components: {NavBarComponent, CardComponent, HeaderTitleComponent},
    data() {
        return {
            hero_cards: [
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
            ]
        }
    }
}
</script>
