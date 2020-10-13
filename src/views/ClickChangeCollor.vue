<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-4 col-sm-6 mb-3">
                <div class="card">
                    <div class="card-header">
                        <div class="float-left">v-bind directive</div>
                        <button 
                            class="btn btn-primary btn-sm float-right"
                            :class="{'btn-danger': status,'btn-primary': !status}"
                            @click="myMethod"
                        >Click</button>
                    </div>
                    <div class="card-body" :class="{'alert-danger':status}">
                        <div>I am bird pakornpong hirunjaraspieat learn about vuejs boot nodejs mongoDB</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "ClickChangeCollor",
  components: {
    
  },
  data () {
      return {
          status: false,
      };
  },
  methods: {
      myMethod() {
          this.status = !this.status;
      }
  }
}
</script>
<style scoped>

</style>