import { request } from "../../request/index"
//Page Object
Page({
  data: {
    swiperList: [],
    catesList:[],
    floorList:[]
  },
  //options(Object) 
  onLoad: function(options) {
    // wx.request({ 
    //   url: 'http://localhost:3000/home_swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // });
    // 调用获取轮播图方法
    this.getSwiperList();
    this.getCatesList();
    this.getFloorList();
      
  },
  // 获取轮播图接口
  getSwiperList() {
    request({ url: "/home_swiperdata" }).then(res => {
      this.setData({
        swiperList:res
      })
    })
  },
  getCatesList() {
    request({ url: "/home_catitems" }).then(res => {
      console.log(res)
      this.setData({
        catesList:res
      })
    })
  },
  getFloorList() {
    request({ url: "/home_floordata" }).then(res => {
      this.setData({
        floorList:res
      })
    })
  }
});
  