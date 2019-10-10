<template>
  <div id="all-info">
    <h1>学生信息查询</h1>
    <information-search-section :data="data1"></information-search-section>
    <information-search-section style="border-bottom: 1px solid black" :data="data2"><button>查询</button></information-search-section>
<!--    表格部分也要抽离出去-->
    <section class="table-info">
      <table>
        <tr>
          <th>姓名</th><th>年级</th><th>学院</th><th>专业</th><th>班级</th>
        </tr>
        <tr v-for="object in studentinfo">
          <td v-for="value in object">{{value}}</td>
        </tr>
      </table>
    </section>
  </div>
</template>

<script>
  import InformationSearchSection from "./InformationSearchSection";
  export default {
    name: "InformationSearch",
    data() {
      return {
        data1: ['年级','专业','班别','性别','宿舍区'],
        data2: ['身份','党支部','民族','楼栋','房间号'],
        studentinfo: [
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'张三', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'李四', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          {name:'王五', grade:'2017级', college: '软件学院', major: '软件工程', class:'1班'},
          ],
      }
    },
    components: {
      InformationSearchSection
    }
  }
</script>

<style scoped>
  h1 {
    text-align: center;
  }

  #all-info {
    margin: 10px auto;
    width: 1200px;
    height: 800px;
    border: 1px solid #dedede;
  }
  .table-info {
    margin: 0 auto;
    width: 1000px;

  }
  table {
    width: 100%;
    margin-top: 20px;
    border: 1px solid black;
    border-collapse: collapse;
  }
  tr,th,td{
    text-align: center;
    border: 1px solid black;
  }


</style>