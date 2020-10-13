<template>
    <div class="container">
        <button @click="myMethod(5,$event)"> <!-- $event คือ event object ของclient -->
            การส่งพารามิเตอร์ค่าเดียว
        </button>
        <button @click="yourMethod(4,5,$event)">
            การส่งพารามิเตอร์ 2 ค่า
        </button>
    </div>
</template>
<script>
export default {
    name: "Parameter",
    data() {
        return {

        };
    },
    methods: {
        myMethod(input,e) {
            console.log(input,e);
        },
        yourMethod(input1,input2) {
            console.log(input1,input2);
        }
    }
}
</script>
<style scoped>

</style>