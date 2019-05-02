
import HelloWorld from "./components/HelloWorld.vue";
import myForm from "./components/myForm.vue";
import formBootraps from "./components/fromBootstraps.vue";
import page404 from "./components/404Page.vue";
import carouselBootstraps from "./components/carouselBootstraps.vue";
import datatableBootstraps from "./components/datatableBootstraps.vue";
import menuHeader from "./components/Header.vue";
import footermdb from "./components/Footer.vue";
import signin from "./components/SignUp.vue"
import login from "./components/Login.vue"
import fruits from "./components/fruits/Fruits.vue"
import fruitStart from "./components/fruits/FruitStart.vue"
import fruitDetails from "./components/fruits/FruitDetails.vue"
import fruitEdit from "./components/fruits/FruitEdit.vue"
export const routes = [
    {
        path: '/',
        name: 'home',
        components: {
            default: carouselBootstraps,
     
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path : '/fruit', name: 'fruit', components:{
            default: fruits,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }, children: [
            { path: '', component: fruitStart },
            { path: ':id', component: fruitDetails },
            { path: ':id/edit', component: fruitEdit, name: 'fruitEdit' }
        ]
    },
    {
        path: '/myForm', name: 'myForm', components: {
            default: myForm,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/signip', name: 'signin', components:{
            default: signin,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }

    },
    {
        path: '/login', name: 'login', components:{
            default: login,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/myFormBoots', name: 'myFormBoots', components: {
            default: formBootraps,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/helloWorld', name: 'helloWorld', components: {
            default: HelloWorld,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/tableData', name: 'tableData', components: {
            default: datatableBootstraps,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    {
        path: '/page404', name: 'page404', components: {
            default: page404,
            'header-top': menuHeader,
            'header-bottom': footermdb
        }
    },
    { path: '/redirect-me', redirect: { name: 'home' } },
    { path: '*', redirect: '/page404' }
];