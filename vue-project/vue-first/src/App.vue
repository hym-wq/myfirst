<template>
  <div id="app">
   <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>


<script>
	export default{
		name:'app',
		data(){
			return{
				
			}
		}
	}
</script>


<style lang="less">
*{margin: 0 ;padding: 0 ;}
li{list-style: none;}
a{text-decoration: none;}
#app {
  font-family:Microsoft YaHei, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
img.title{width:55px;height: 17px;margin-top:13px;}
.spa{span{display: block;width:100%;height: 1px;background-color: rgba(245, 243, 241, 1);margin-top:12px;}}
p.title{width:120px;height: 31px;text-align:left;font:27px Microsoft YaHei;margin:15px 0 40px 45px;font-weight:600;}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
