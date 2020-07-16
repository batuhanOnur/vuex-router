<template>
  <div>
      <router-view>
        <router-link to="/foo" exact>Go to Foo</router-link>
        <router-link to="/bar" exact>Go to Bar</router-link>   
      </router-view>
  </div>
</template>

<script>

 export default{
     name: 'Home',
 }
</script>