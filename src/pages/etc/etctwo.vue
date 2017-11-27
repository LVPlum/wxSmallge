<template>
    <div id="etctwo" class="tea-bg-white aui-padded-t-10" v-cloak>
        <div class="aui-bar-btn bar">
            <div class="warp">
                <ul class="aui-list aui-media-list">
                    <li class="aui-list-item aui-padded-0 border-b">
                        <div class="aui-media-list-item-inner">
                            <div class="aui-list-item-inner aui-padded-l-15 aui-padded-r-0">
                                <div class="aui-info aui-padded-0 aui-margin-t-5">
                                    <div v-show="this.$route.query.is_vip != '0' " class="aui-margin-r-5">
                                        <div class="vip black">VIP</div>
                                    </div>
                                    <div class="aui-list-item-label aui-font-size-16 tea-font-weight-bold" style="width: 100%;line-height: normal">
                                        {{ this.$route.query.province +" "+ this.$route.query.number }} <span class="aui-font-size-14 tea-text-gray aui-margin-l-15" style="font-weight: normal">{{ this.$route.query.carType == 'sedan' ? '小车' : '货车' }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <input-option :checked="checked" :config="optionConfig" @select="checkedOn"></input-option>
                <div v-show="checked == '1' " class="aui-list">
                    <div class="aui-list-item border-t" style="margin-left: 0;padding-left: 0.75rem">
                        <div class="aui-info aui-padded-0">
                            <div class="aui-info-item aui-font-size-16 tea-text-title">
                                <span>店铺地址</span>
                                <span class="aui-margin-l-10 aui-ellipsis">{{store}}</span>
                            </div>
                        </div>
                    </div>
                    <div class="aui-list-item border-t" style="margin-left: 0;padding-left: 0.75rem">
                        <div class="aui-info aui-padded-0">
                            <div class="aui-info-item aui-font-size-16 tea-text-title">
                                <span>手机号码</span>
                                <span class="aui-margin-l-10">
                                    <input type="tel" placeholder="请输入您的手机号码" maxlength="11"
                                           v-model = "tel">
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-show="checked == '2' " class="aui-list">
                    <div class="aui-list-item border-t" style="margin-left: 0;padding-left: 0.75rem">
                        <div class="aui-info aui-padded-0">
                            <div class="aui-info-item aui-font-size-16 tea-text-title">
                                <span>姓名</span>
                                <span class="aui-margin-l-10">
                                    <input type="text" placeholder="请输入您的姓名" maxlength="11"
                                           v-model = "address_name">
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="aui-list-item border-t" style="margin-left: 0;padding-left: 0.75rem">
                        <div class="aui-info aui-padded-0">
                            <div class="aui-info-item aui-font-size-16 tea-text-title">
                                <span>手机号码</span>
                                <span class="aui-margin-l-10">
                            <input type="tel" placeholder="请输入您的手机号码" maxlength="11"
                                   v-model = "tel">
                        </span>
                            </div>
                        </div>
                    </div>
                    <div class="aui-list-item border-t" style="margin-left: 0;padding-left: 0.75rem" >
                        <div class="aui-info aui-padded-0">
                            <div class="aui-info-item aui-font-size-16 tea-text-title">
                                <span>详细地址</span>
                                <span class="aui-margin-l-10">
                            <input type="text" placeholder="请输入您的地址" maxlength="130"
                                   v-model = "address_info">
                        </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p v-show="checked == '2' " class="aui-font-size-14 tip">免费上门安装服务，仅限北海市区和合浦县城</p>
            <!--<coupon :type='coupon_type' @updata="updataMsg" ></coupon>-->
        </div>
        <div class="aui-content-padded aui-font-size-14 tea-text-default">
            <p>办理须知</p>
            <p>1.八桂行卡高速收费优惠5%</p>
            <p>2.免费上门安装服务，仅限北海市区和合浦县城</p>
            <p>3.办理ETC，收费350元，含电子签证、八桂行卡</p>
            <p>4.仅限小轿车 (货车期待开通...)</p>
        </div>
        <footer class="aui-bar aui-bar-tab" style="z-index: 99">
            <div class="aui-bar-tab-item tea-border-t" style="width: auto;">
                <span class="tea-text-orange tea-font-weight-bold aui-font-size-16">¥{{result}}</span>
                <span :class="frm ? 'tea-text-arrow-up' : 'tea-text-arrow-down' " class="aui-font-size-12" @click="toggleFrm">明细</span>
            </div>
            <div class="aui-bar-tab-item aui-text-white tea-bg-blue" style="width: 50%" @click="post">
                <div class="search-input tea-font-weight-bold aui-font-size-16">提交</div>
            </div>
        </footer>
        <div v-show="frm" class="frm" @click="toggleFrm">
            <section class="aui-list aui-media-list" style="background: #f7f7f7;margin-bottom: 0">
                <div class="aui-list-item">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-font-size-14 tea-text-title">ETC售价</div>
                                <div class="aui-font-size-14 aui-pull-right tea-text-orange">¥{{ETCFee}}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aui-list-item">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-font-size-14 tea-text-title">安装费用</div>
                                <div v-if="installFee" class="aui-font-size-14 aui-pull-right tea-text-orange">+ ¥{{installFee}}</div>
                                <div v-else class="aui-font-size-14 aui-pull-right tea-text-orange">免费</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="aui-list-item">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-font-size-14 tea-text-title">VIP优惠</div>
                                <div class="aui-font-size-14 aui-pull-right tea-text-orange">- ¥{{couponFee}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
    import option from '../../components/input-option.vue'
    import { Toast } from 'vux'

    export default {
        name: 'etctwo',
        data (){
            return {
                checked: '',
                optionConfig: {
                    title: '安装方式',
                    way: [
                        {title:'到店安装',id:'1'},
                        {title:'上门安装',id:'2'}
                    ],
                },
                tel: '',
                address_info: '',
                address_name: '',
                store: '合浦还珠南路小马哥审车处',
                ETCFee: 350,
                couponFee: 0,
                installFee: 0,
                frm: false
            }
        },
        methods:{
            test(){
                this.$vux.toast.show({
                    text: '车牌号码错误',
                    type: 'text',
                    position: 'middle'
                })
            },
            checkedOn (val){
                this.checked = val;
            },
            post (){
                console.log(this.result);
                this.$router.push({ name: 'etcthree' } )
            },
            toggleFrm (){
                if(this.frm){
                    this.frm = false;
                }else {
                    this.frm = true;
                }
            },
        },
        computed: {
            result: function (){
                return this.ETCFee - this.couponFee
            }
        },
        components:{
            Toast,
            'input-option': h => h(option),
        },
        mounted (){
            // console.log('13245646');
            console.log(this.$route.query);
        }
    }
</script>

<style scoped lang="less">
    //原有样式，搬运
    .bar{
        width: 92%;
        position: relative;
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
    /*diy 跟随文本的箭头朝下*/
    .tea-text-arrow-up {
        position: relative;
        display: inline-block;
        padding-right: 1rem !important;
    }
    .tea-text-arrow-up:after {
        content: '';
        width: 0.4rem;
        height: 0.4rem;
        position: absolute;
        top: 50%;
        right: 0.2rem;
        margin-top: -0.1rem;
        background: transparent;
        border: 1px solid #999;
        border-bottom: none;
        border-left: none;
        z-index: 2;
        -webkit-border-radius: 0;
        border-radius: 0;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
    }
    .frm{
        position: absolute;
        width: 100%;
        bottom: 2.5rem;
        background: rgba(0, 0, 0, 0.4);
        padding-top: 100rem;
        z-index: 98;
    }
    .frm >section{
        width: 100%;
    }
    .info{
        margin-bottom: 3rem;
        bottom: 0;
    }
    [v-cloak]{
        display: none;
    }
    .aui-mask-in {
        z-index: 100;
    }
    .tip{
        color: #ff0000;
        padding: 0.5rem 0.5rem 0 0;
        text-align: right;
    }
</style>
