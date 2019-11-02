import Vue from 'vue';
import CardsComponent from '../components/Cards/Cards.vue';
import HeaderComponent from '../components/Header/Header.vue';

export function registerVueGlobalComponent() {
    [
        { component: CardsComponent, selector: 'card' }
        ,{ component: HeaderComponent, selector: 'header-menu' }
        
    ]
    .forEach(config => Vue.component(config.selector, config.component));
}