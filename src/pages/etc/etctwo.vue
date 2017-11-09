<template>
    <div id="app" class="tea-bg-white" v-cloak>
        <div class="aui-content-padded aui-font-size-14 tea-text-default info" style="margin-bottom: 2.8rem">
            <p>办理须知</p>
            <p>1.八桂行卡高速收费优惠5%</p>
            <p>2.免费上门安装服务，仅限北海市区和合浦县城</p>
            <p>3.办理ETC，收费元，含电子签证、八桂行卡</p>
            <p>4.仅限小轿车 (货车期待开通...)</p>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'etc',
        methods:{
            next: function(){
                alert('下一步');
            }
        },
        mounted (){
            console.log('13245646');
        }
    }
</script>

<style>
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
    /*修改value的placeholder的颜色*/
    input::-webkit-input-placeholder, textarea::-webkit-input-placeholder{
        color:   #CCCCCC;
    }
    input:-moz-placeholder, textarea:-moz-placeholder {
        color:    #CCCCCC;
    }
    input:-ms-input-placeholder, textarea:-ms-input-placeholder {
        color:    #CCCCCC;
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
        /*position: absolute;*/
        bottom: 0;
    }
</style>
