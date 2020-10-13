<template>
   <div class="primary">
        <button class="btn btn-secondary" @click="randomNumber()">Random</button>
        <span class="ml-2 mr-2">สุ่มได้: {{ stockRandom }}</span>
        <hr />
        <button :class="{'btn btn-primary' : stockStatus,'btn btn-danger' : !stockStatus}"
            :disabled="!stockStatus"
            @click="showAlert()"
        >{{textButton}}</button>
   </div>
</template>
<script>
export default {
    data() {
        return {
            stockRandom: null // 1. เริ่มจากสร้างตัวแปร
        };
    },
    methods: {
        // 2. ฟังชันrandomNumber เพื่อนำค่าที่ random ใส่ตัวแปร stockRandom
        randomNumber() {
            this.stockRandom = Math.random().toFixed(2);
        },
        showAlert() {
            alert("Add to Cart Successfully");
        }

    },
    computed: {
        // 3. Math.round() ปัดทศนิยม 
        stockStatus() {
            return Math.round(this.stockRandom) == 0 ? false:true;
        },
        textButton() {
            return this.stockStatus ? "Add to Cart" : "Out Of Stock"
        }
    }
}
</script>
<style scoped>

</style>