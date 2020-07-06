export function countDownFun (time) {
  let timenow = time * 1000
  let nowTime = new Date().getTime() // 现在时间
  if(nowTime<=timenow){

    //  获取时间差
    let timediff = Math.round(( timenow - nowTime ) / 1000 )

    //  获取还剩多少小时
   let hour = parseInt( timediff / 3600 % 24 )

    //  获取还剩多少分钟
   let minute = parseInt( timediff / 60 % 60 )

    //  获取还剩多少秒
   let second = timediff % 60

   return hour + '小时' + minute + '分' + second + '秒'

   } else{
       return 0
   }
}
