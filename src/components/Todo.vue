<template>
  <div>
    <input type="text" placeholder="请输入内容.." v-model="inputVal" ref="myinput">
    <button @click="addTodo">add</button>

<ul>
  <!--v-for 要与 key 连用，否则会报错 ；删除操作，涉及到子组件要修改父组件的数据，所以父组件要绑定一个自定义事件给子组件，从而修改数据；todo要传给Todoitem组件 ,渲染到页面-->
  <Todoitem 
  v-for="(item,index) in todolist" 
  :key="item.id"  
  @abc="delTodo"
  :todo="item.name"
  :index="index"
   />
</ul>
  </div>
</template>


<script>
import Todoitem from './Todoitem.vue'
import axios from 'axios'

export default {
  data(){
    return {
      inputVal:'',
      todolist: []
    }
  },
  components:{
    Todoitem
  },
  methods:{
    addTodo(){
      this.todolist.push(this.inputVal)
      this.inputVal=""
      this.$refs.myinput.focus()
    },
    delTodo(index){
      this.todolist.splice(index,1)
    },
    
  },
  created(){
      axios.get('http://localhost:8080/api/todos.json')
      .then(response=>{
        let res=response.data;
        if(res.code===0){
          this.todolist=res.data;
        }else{
         alert(res.msg);
        }
      })
    }
}
</script>


<style>

</style>