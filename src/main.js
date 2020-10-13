import Vue from 'vue'
import App from './App.vue'
import router from './router'

//ประกาศ filter ตัวใหญ่หมด
Vue.filter('uppercase', (val) => {
  if (!val || typeof val != "string") {
    return ""
  } 
  let result = val.toUpperCase()
  return result;
})

//ประกาศ filter ใส่ ... เมื่อข้อความเกินกำหนด
Vue.filter('readmore', (val) => {
  if (!val || typeof val != "string"){
    return "";
  }
  let result = val.slice(0,10);
  result = result + "..."
  return result;
})
//ประกาศ filter date
Vue.filter('date', (val, param) => {
  if (!val) {
    return "";
  }
  let data = {
    day: val.getDate(),
    month: val.getMonth() + 1,
    year: val.getFullYear()  //getFullYear()*** 
  }
  let months = [
    "มกราคม","กุมภาพันธ์","มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฏาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"
  ]
  if (param == "thai") {
    return `${data.day} ${months[data.month -1]} ${data.year + 543}` 
  } else {
    return `${data.day}/${data.month}/${data.year}` 
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
