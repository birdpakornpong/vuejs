<template>
    <div class="container text-center mb-4">
        <div class="display-4 text-warning">{{ myProperty }}</div>
        <div class="display-4 text-danger">{{ myProperty | uppercase}}</div>
        <hr /><br>
        <div class="display-4 text-warnning">{{ textProperty}}</div>
        <div class="display-4 text-danger">{{ textProperty | readmore }}</div>
        <hr /><br>
        <div class="text-warnning">{{ dateProperty }}</div>
        <div class="text-danger">{{ dateProperty | date}}</div>
        <div class="text-success">{{ dateProperty | date("thai")}}</div>
        <hr /><br>
        <div class="text-danger">{{ textProperty }}</div>
        <div class="text-danger">{{ textProperty | textUppercase}}</div>
        <div class="text-success">{{ myProperty.toUpperCase() }}</div> <!-- ห้อยเอาก็จบ -->
        <hr />
    </div>
</template>
<script>
export default {
    name: "filter",
    data () {
        return {
            myProperty: "abCdEFsdK",
            textProperty: "We don't talk anymore, we don't talk anymore, like we used to do",
            dateProperty: new Date()
        }
    },
    filters: {
        textUppercase(value) {
            if (typeof value != "string") {
                return "";
            }
            return value.toUpperCase();
        }
    }
}
</script>
<style scoped>

</style>