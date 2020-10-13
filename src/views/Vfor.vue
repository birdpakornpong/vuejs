<template>
  <div class="container">
      <div class="row mt-3 justify-content-center"> <!-- justify-content-center กลางหน้า -->
          <div class="col-lg-3 col-sm-6 mt-3">
              <select class="form-control" name="food">
                  <option>โปรดเลือกรายการอาหาร</option>
                  <option v-for="(item, index) in allProduct" :key="index" :value="item">{{ item }}</option>
              </select>
          </div>
      </div>
  </div>
</template>
<script>

export default {
  name: "Vfor",
  components: {
    
  },
  data() {
      return {
          allProduct: ["ส้มตำ","ลาบ","น้ำตก","ห่อหมกฮวก"]
      };
  }
}
</script>
<style scoped>

</style>