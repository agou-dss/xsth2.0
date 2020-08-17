import vue from 'vue'
import myNotify from './myNotify'

// 创建vue组件实例
const notifys = vue.extend(myNotify);



let myMsg = {
    /**
     * 通知框
     * @content 提示内容;
     * @type 提示框类型，parameter： success，error，warning
     * @time 显示时长
     */
    notify: ({
        content,
        type,
        time = 1500,
    }) => {


            //添加通知节点(用来存放通知的元素)
            let notifyWrap = document.createElement('div');
            notifyWrap.className = "notify-wrap"
            notifyWrap.style = "position: fixed; right: 0px; top: 90px; z-index: 99999; transition-duration: .5s;"
            document.body.appendChild(notifyWrap);

            //创建一个存放通知的div
            const notifyDom = new notifys({
                el: document.createElement('div'),
                data() {
                    return {
                        notifyFlag: true, // 是否显示
                        time: time,//取消按钮是否显示
                        content: content, // 文本内容
                        type: type, // 类型
                        timer: '',
                        timeFlag: false,
                    }
                },
                watch: {
                    timeFlag() {
                        if (this.timeFlag) {
                            this.notifyFlag = false;
                            window.clearTimeout(this.timer);
                            document.body.removeChild(notifyWrap)
                        }
                    }
                },
                created() {
                    this.timer = setTimeout(() => {
                        this.timeFlag = true;
                    }, this.time);

                },
                beforeDestroy() {
                    window.clearTimeout(this.timer);

                }
            })

            console.log(notifyDom)
            //往notifyWrap里面添加通知
            notifyWrap.appendChild(notifyDom.$el);
        
    }
}

//注册

vue.prototype.$myMsg = myMsg

export default {
    myMsg
}
