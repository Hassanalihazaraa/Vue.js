import {createRouter, createWebHistory} from "vue-router"

import TeamsList from "@/pages/TeamsList";
import UsersList from "@/pages/UsersList";
import TeamMembers from "@/components/teams/TeamMembers";
import NotFound from "@/pages/NotFound";
import TeamsFooter from "@/pages/TeamsFooter";
import UsersFooter from "@/pages/UsersFooter";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/teams'},
        {
            name: 'teams',
            path: '/teams',
            meta: {
                needsAuth: true
            },
            components: {
                default: TeamsList,
                footer: TeamsFooter
            },
            children: [
                {name: 'team-members', path: ':teamId', component: TeamMembers, props: true},
            ]
        }, /* alias: '/teams'*/
        {
            name: 'users',
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            beforeEnter(to, from, next) {
                console.log('users before enter')
                console.log(to, from)
                next()
            }

        },
        {name: 'not-found', path: '/:notFound(.*)', component: NotFound},
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        if (savedPosition) {
            return savedPosition
        }
        return {
            left: 0,
            top: 0
        }
    }
})

router.beforeEach((to, from, next) => {
    console.log('Global beforeEach')
    console.log(to, from)
    if (to.meta.needsAuth) {
        console.log('Needs auth')
        next()
    } else {
        next()
    }
})


router.afterEach((to, from) => {
    console.log('Global afterEach')
    console.log(to, from)
})


export default router