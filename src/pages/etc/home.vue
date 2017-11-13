<template>
    <div id="etc">
        <!--<a href="http://localhost:8082/#/vip">这里是ETC，测试页面</a>-->
        <header class="banner"><img src="../../assets/image/etc/banner@2x.png" alt="banner"></header>
        <div class="aui-bar-btn bar">
            <div class="warp aui-margin-b-10">
                <input-plate :province="province" v-model="number" @updata="updataMsg">
                    <div slot="car_type" class="aui-font-size-16 tea-text-title aui-margin-t-10 aui-padded-b-10 aui-border-b">
                        <span @click="selectCarType('sedan')" style="width: 40%">小车<label class="aui-radio btn aui-checked"></label></span>
                        <span @click="selectCarType('truck')">货车<span class="tea-text-gray">(即将开通)</span><label class="aui-radio btn aui-checked no"></label></span>
                    </div>
                    <div v-if="is_vip" slot="vip" class="aui-margin-r-5">
                        <div class="vip black">VIP</div>
                    </div>
                </input-plate>
                <!--<ul class="aui-list aui-media-list" id="list">
                    <li class="aui-list-item aui-padded-0 border-b">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-inner aui-padded-l-15 aui-padded-r-0">
                                <div class="aui-list-item-text">
                                    <div class="aui-list-item-title tea-text-blue aui-font-size-14">车牌号码</div>
                                </div>
                                <div class="aui-font-size-16 tea-text-title aui-margin-t-10 aui-padded-b-10 aui-border-b">
                                    <span style="width: 40%">小车<label class="aui-radio btn aui-checked"></label></span>
                                    <span>货车<span class="tea-text-gray">(即将开通)</span><label class="aui-vueradio btn aui-checked no"></label></span>
                                </div>
                                <div class="aui-info aui-padded-0 aui-margin-t-5">
                                    <div class="aui-list-item-label" style="width: 4rem;line-height: normal">
                                        <span class="tea-text-title aui-font-size-16 tea-text-arrow-down">桂E</span>
                                    </div>
                                    <div class="aui-list-item-input aui-font-size-16">
                                        <input type="text" placeholder="请输入车牌后5位数" maxlength="8">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>-->
            </div>
        </div>
        <!--<input-plate :province=" '桂E' " :value=" '123' " ></input-plate>-->
        <div class="aui-content-padded aui-font-size-14 tea-text-default info" style="margin-bottom: 3rem">
            <p class="test">办理须知</p>
            <p>1.八桂行卡高速收费优惠5%</p>
            <p>2.免费上门安装服务，仅限北海市区和合浦县城</p>
            <p>3.办理ETC，收费350元，含电子签证、八桂行卡</p>
            <p>4.仅限小轿车 (货车期待开通...)</p>
        </div>
        <footer class="aui-bar aui-bar-tab" @click="nextStep">
            <div class="aui-bar-tab-item aui-text-white tea-bg-blue">
                <div class="search-input tea-font-weight-bold aui-font-size-16">下一步</div>
            </div>
        </footer>
        <!--<router-link :to=" '/etctwo' ">
            <footer class="aui-bar aui-bar-tab">
                <div class="aui-bar-tab-item aui-text-white tea-bg-blue">
                    <div class="search-input tea-font-weight-bold aui-font-size-16">下一步</div>
                </div>
            </footer>
        </router-link>-->
    </div>
</template>

<script>
    import plate from '../../components/input-plate.vue'
    import { PopupPicker, Toast } from 'vux'

    export default {
        name: 'etc',
        data (){
            return {
                carType: '',
                is_vip: 0,
                province: '桂E',
                number: ''
            }
        },
        methods:{
            selectCarType (type){
                alert(type);
            },
            nextStep () {
                console.log(this.province+this.number);
                if(this.number){
//                    this.$router.push({ path: '/etctwo' }, )
                    this.$router.push({ name: 'etctwo' , query: { province: decodeURI(this.province), number: this.number }}, )
                }else {
                    this.$vux.toast.show({
                        text: '车牌号码错误',
                        type: 'text',
                        position: 'middle'
                    })
                }
            },
            updataMsg (type,val){
                switch (type){
                    case 'picker':
                        /*this.$vux.toast.show({
                            text: '获取数据失败，请检查网络！',
                            time: '2000',
                            type: 'text',
                            width: '10rem',
                            position: 'middle'
                        })*/
                        this.province = val;
                        break;
                }
            },
        },
        components:{
            Toast,
            'input-plate': h => h(plate),
        },
        mounted (){
            /*const _this = this
            _this.$vux.toast.show({
                text: '获取数据失败，请检查网络！',
                time: '2000',
                type: 'text',
                width: '10rem',
                position: 'middle'
            })*/
//            console.log('13245646');
        },
    }
</script>

<style lang="less">
    //vux 样式修改,全组件覆盖
    .vux-toast {
        .weui-toast {
            p {
                color: white;
                font-size: 0.8rem;
            }
        }
    }
</style>

<style scoped lang="less">
    //原有样式，scoped此页面有效
    .banner img{
        width: 100%;
        height: auto;
    }
    .bar{
        width: 92%;
        position: relative;
        margin-top: -4.5rem;
    }
    .warp{
        border-radius: 0.3rem;
        overflow: hidden;
        line-height: normal;
        -moz-box-shadow:0 0 0.9rem 0 rgba(107, 65, 65, 0.15);
        -webkit-box-shadow:0 0 0.9rem 0 rgba(107, 65, 65, 0.15);
        box-shadow:0 0 0.9rem 0 rgba(107, 65, 65, 0.15);
    }
    .border{
        background-position: 0 bottom !important;
    }
    .aui-radio:checked, .aui-radio.aui-checked.no{
        background-color: #ccc;
        border: solid 1px #ccc;
    }
    @media screen and (-webkit-min-device-pixel-ratio: 1.5){
        .aui-list,.aui-list .aui-list-item {
            background-image: none;
        }
        .aui-list.border-b,.aui-list .aui-list-item.border-b{
            background-image: -webkit-linear-gradient(90deg,#dddddd,#dddddd 50%,transparent 50%);
        }
    }
    .aui-list .aui-list-item.border-b-t{
        padding-left: 0;
        margin-left: 0.75rem;
        background-size: 100% 1px;
        background-repeat: no-repeat;
        background-position: left top,right bottom;
        background-image: linear-gradient(0,#dddddd,#dddddd 50%,transparent 50%),linear-gradient(0,#dddddd,#dddddd 50%,transparent 50%) !important;
    }
    .aui-list .aui-list-item.border-t{
        padding-left: 0;
        margin-left: 0.75rem;
        background-position: left top;
        background-image: linear-gradient(0,#dddddd,#dddddd 50%,transparent 50%) !important;
    }
    .vip{
        width: 1.25rem;
        font-size: 0.6rem;
        color: #fff;
        font-weight: bolder;
        text-align: center;
        background-color: #CCCCCC;
        border-radius: 4px;
    }
    .vip.black{
        background-color: #333333;
        color: #f2d394;
    }
    .btn{
        width: 1rem !important;
        height: 1rem !important;
        vertical-align: sub !important;
        margin-left: 0.5rem;
    }
    .info{
        margin-bottom: 3rem;
        bottom: 0;
    }
</style>
