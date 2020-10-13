<template>
    <div class="container">
        <div class="row mt-3">
            <div class="col-lg-4 col-sm-6 mb-3">
                <div class="card">
                    <img class="card-img-top" :src="student.myImage" />
                    <div class="card-header">
                        <div class="float-left">{{student.myName}}</div>
                        <button class="btn btn-primary btn-sm float-right" @click="myMethod">
                            {{myButtonName}}
                        </button>
                    </div>
                    <div class="card-body" :hidden="!myShowHide"> <!-- hide ส่วน card-body -->
                        <dl class="row">
                            <dt class="col-lg-3 col-sm-4 col-3">ห้อง</dt>
                            <dd class="col-lg-9 col-sm-8 col-9">{{student.myClassRoom}}</dd>
                            <dt class="col-lg-3 col-sm-4 col-3">ห้อง</dt>
                            <dd class="col-lg-9 col-sm-8 col-9">{{student.myAddress}}</dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "Hide",
    data() {
        return {
            student: {
                myName: "Jeerawuth Varin",
                myImage: "https://picsum.photos/id/33/200/100",
                myClassRoom: "6/1",
                myAddress: "99/99 หมู่ 1 ตำบลท้องเนียน นครศรีธรรมราช"
            },
            myShowHide: true
        };
    },
    methods: {
        myMethod() {
            this.myShowHide = !this.myShowHide;
        }
    },
    computed: {
        myButtonName() {
            return this.myShowHide ? "Hide" : "Show";
        }
    }
}
</script>
<style scoped>

</style>