<template>
     <div class="container">
        <div class="row mt-3">
            <div class="col-lg-4 mx-auto">
                <ul class="list-group">
                    <li class="list-group-item">
                        Celsius
                        <span class="badge badge-primary badge-pill">{{celsius}} &#8451;</span>
                    </li>        
                    <li class="list-group-item">
                        Fahrenheit
                        <span class="badge badge-primary badge-pill">{{fahrenheit}} &#8457;</span>
                    </li>    
                </ul>
            </div>
        </div>
  </div>
</template>
<script>
export default {
  name: "Tem",
  components: {
   
  },
  data() {
     return {
         celsius: 90,
     };
  },
  computed: {
      fahrenheit() {
          let result = (this.celsius - 32)/1.8
          result = result.toFixed(2)
          return result
      }
  }
}
</script>
<style scoped>

</style>