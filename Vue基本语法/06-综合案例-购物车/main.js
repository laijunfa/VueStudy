const app = new Vue({
  el: "#app",
  data: {
    books: [{
        name: "《算法导论》",
        beginDate: "2006-9",
        price: 85.00,
        count: 1
      },
      {
        name: "《UNIX编程艺术》",
        beginDate: "2006-2",
        price: 59.00,
        count: 1
      },
      {
        name: "《编程大全》",
        beginDate: "2008-10",
        price: 39.00,
        count: 1
      },
      {
        name: "《代码大全》",
        beginDate: "2006-3",
        price: 128.00,
        count: 1
      },
    ]
  },
  computed: {
    //计算总价格
    totalPrice(){
      let sum=0;
      let books=this.books;
      for(let key in books){
        sum+=books[key].price*books[key].count
      }
      return sum;
    }
  
  },
  methods: {
    //加
    increment(index){
        this.books[index].count++;
    },
    //减
    decrement(index){
      this.books[index].count--;
    },
    //删除当前行
    remove(index){
      this.books.splice(index,1);
    }
  },
  filters:{//过滤器
    showPrice(price){
      return "￥" + price.toFixed(2)
    }
  }
})




