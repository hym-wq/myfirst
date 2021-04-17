import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '../components/Loading.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Loading',
    component: Loading
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/email_Login',
    name: 'email_Login',
    component: () => import( '../views/email_Login.vue')
  },
  {
	  path:'/email_Regist',
	  name:'email_Regist',
	  component:()=>import('../views/email_Regist.vue')
  },
  {
	  path:'/Home',
	  
	  component:()=>import('../views/home.vue')
  },
  {
  	  path:'/Search',
  	  component:()=>import('../views/Search.vue')
  },  {
  	  path:'/Tours',
  	  component:()=>import('../views/Tours.vue'),
	  children:[
		  {
			path:'',
			name:'word',
			meta:{index:0},
			component:()=>import('../components/word_list.vue'),
		  },
		  {
			path:'/picture_list',
			name:'picture',
			meta:{index:1},
		  	component:()=>import('../components/picture_list.vue'),
		  },
	  ]
  },{
	  path:'/Hotels',
	  component:()=>import('../views/Hotels'),
	  children:[
		  {
			  path:'',
			  name:'hotels1',
			  meta:{index:0},
			  component:()=>import('../components/hotels1.vue')
		  },
		  {
		  			  path:'/hotels2',
		  			  name:'hotels2',
					   meta:{index:1},
		  			  component:()=>import('../components/hotels2.vue')
		  },
		  {
		  			  path:'/hotels3',
		  			  name:'hotels3',
					   meta:{index:2},
		  			  component:()=>import('../components/hotels3.vue')
		  }
	  ]
  },{
	  path:'/Setting',
	  component:()=>import('../views/Setting'),
	  children:[
		  {
			  path:'',
			  component:()=>import('../components/set_home.vue')
		  },{
			  path:'/Notification',
			   component:()=>import('../components/Notification.vue')
		  }
	  ]
  },{
	  path:'/Costa/:index',
	  name:'Costa',
	  component:()=>import('../views/Costa.vue')
  },{
	  path:'/tohotel/:id',
	  name:'tohotel',
	  component:()=>import('../views/tohotel.vue')
  },
  {
	  path:'/reserve',
	  name:'reserve',
	  component:()=>import('../views/reserve.vue')
  },
  {
  	  path:'/order',
  	  name:'order',
  	  component:()=>import('../views/order.vue')
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
