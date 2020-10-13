<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-4">
                <div class="card">
                    <a :href="myLink"><img class="card-img-top" :src="myImage" /></a> <!-- คลิปลิงค์รูป -->
                    <div class="card-body">
                        <p>Name : {{myName}}</p>
                        <p>Score : {{myScore}}</p>
                        <p class="alert-warning">{{mycontent}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Student',
    data() {
        return {
            myName: "Natty",
            myScore: 90,
            myImage: "https://picsum.photos/id/33/200/100",
            myLink: "http://google.com",
            dataStringArray: ["ก้อย","หัว"]
        };
    },
    computed: {
        randomNumber() {
            return Math.random() > 0.5 ? 1 : 0;
        },
        mycontent() {
            return this.dataStringArray[this.randomNumber];
        }
    }
};
</script>
<style scoped>

</style>