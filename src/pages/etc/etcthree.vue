<template>
    <div id="etcthree">
        <div class="aui-content">
            <ul class="aui-list aui-media-list">
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">车牌号码</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">{{ plate }}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">车型</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">{{ carType == 'sedan' ? '小车' : '货车' }}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">手机号码</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">{{ tel }}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">安装方式</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">{{install == 'arrive' ? '到店安装' : '上门安装'}}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="install == 'arrive'" class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">店铺地址</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">{{store}}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="install != 'arrive'" class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">姓名</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title ">{{address.name}}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li v-if="install != 'arrive'" class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">用户地址</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">阿萨德</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">ETC价格</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">￥{{ ETCFee }}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">ETC安装费用</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">￥{{ installFee }}</div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">VIP专享</div>
                                <div v-if="is_vip" class="aui-list-item-right aui-font-size-16  aui-ellipsis-1">-￥{{ couponFee }}</div>
                                <div v-else class="aui-list-item-right aui-font-size-16 tea-text-title  aui-ellipsis-1" @click="openWinVip"><a style="color: #3399ff;">暂无，成为VIP</a></div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="aui-list-item aui-list-item-middle">
                    <div class="aui-media-list-item-inner">
                        <div class="aui-list-item-inner">
                            <div class="aui-list-item-text">
                                <div class="aui-list-item-title aui-font-size-16">付款金额</div>
                                <div class="aui-list-item-right aui-font-size-16 tea-text-title aui-ellipsis-1">￥{{ total }}</div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
            <div v-if="!is_vip" style="padding: 0.5rem 0.5rem;" @cilck="openWinVip"><a style="color: #3399ff; font-size: 16px;" @click="openWinVip">加入VIP，限时优惠200元</a></div>
        </div>
        <div class="aui-btn-row aui-margin-t-10" style="margin: 0 auto;width: 86%" @click="postData">
            <div class="aui-btn aui-btn-block" style="border-radius: 30px;border: 0;background: #3399ff;color: white;">马上支付</div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'etcthree',
        data (){
            return {
                plate: "桂E12345",
                carType: "sedan",
                install: 'arrive',
                address: '',
                tel: '15736883259',
                is_vip: 1,
                ETCFee: 350,
                installFee: 0,
                store: '合浦还珠南路小马哥审车处',
                couponFee: 0,
            }
        },
        methods:{
            postData (){
                var postVal = {
                    ID: $api.getStorage('ID'),
                    carnum: vm.plate,
                    tel: vm.tel,
                    cartype: vm.carType,
                    install: vm.checkedOn == '1' ? 'arrive' : 'on_spot',
                    addrid: data.address.addrid,
                    coupon_id: vm.coupon_id,
                };
                saveOrder(postVal);
            },
            openWinVip (){
                console.log('vip')
            }
        },
        computed: {
            total (){
                var money;
                money = (this.ETCFee + this.installFee) - this.couponFee;
                money = money < 0 ? 0.00 : money;
                return money;
            }
        },
        components:{
        },
        mounted (){
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
