<template>
  <div class="container">
      <div class="row mt-3">
          <div class="col-4">
              <button  @click="onUserClick($event)" class="btn btn-primary"><!-- eventคลิก -->
                  Click
              </button>
              <button  @dblclick="onUserDoubleClick($event)" class="btn btn-success"> <!-- eventดับเบ้ลคลิก -->
                  DoubleClick
              </button>
              <button  @click.shift="myMethod($event)" class="btn btn-danger"> <!-- event shift+คลิก -->
                  ShiftClick
              </button>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  name: "Click",
  data() {
      return {
          message: "Text display when user click."
      };
  },
  components: {
    
  },
  methods: {
      onUserClick(e) {
          console.log(`You ${e.type} the button at (${e.clientX},${e.clientY})`); //ตำแหน่งแกนX,Yที่คลิก
      },
      onUserDoubleClick(e) {
          console.log(`You ${e.type} the button`); //บอกtypeของevent
      },
      myMethod(e) {
          alert(`You ${e.type} the button at (${e.clientX},${e.clientY})`);
      }
  }
}
</script>
<style scoped>

</style>