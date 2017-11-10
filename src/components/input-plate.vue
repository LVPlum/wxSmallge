<template id="input-plate">
    <ul class="aui-list aui-media-list">
        <li class="test">qasdak</li>
        <li class="aui-list-item aui-padded-0 border-b">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-inner aui-padded-l-15 aui-padded-r-0">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title tea-text-blue aui-font-size-14">车牌号码</div>
                    </div>
                    <slot name="car_type"></slot>
                    <div class="aui-info aui-padded-0 aui-margin-t-5">
                        <slot name="vip"></slot>
                        <div class="aui-list-item-label" style="width: 4rem;line-height: normal">
                            <span class="tea-text-title aui-font-size-16 tea-text-arrow-down">
                                <popup-picker :data="list" :title="province" @on-change="onChange"></popup-picker>
                            </span>
                        </div>
                        <div class="aui-list-item-input aui-font-size-16">
                            <input type="text" placeholder="请输入车牌后5位数" maxlength="8"
                                   :value="value"
                                   @input="updateValue($event.target.value)">
                        </div>
                        <!--<div class="tea-text-round" style="border: none;"  @click="openWinPlate"><img src="../assets/select.png"></div>-->
                        <!--<div class="tea-text-round tea-big"  @click="openWinPlate">选</div>-->
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template>

<script>
    import { PopupPicker } from 'vux'

    export default {
        name: 'input-plate',
        template: '#input-plate',
        props: ['province','value'],
        data: function() {
            return {
                list: [
                    ['京','沪','津','渝','翼','晋','蒙','辽','吉','黑','苏','浙','皖','闽','赣','鲁','豫','鄂','湘','粤','桂','琼','川','贵','云','藏','陕','甘','青','宁','新'],
                    ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
                ],
            }
        },
        computed: {

        },
        methods: {
            updateValue: function (value) {
                this.$emit('input',value.toUpperCase().replace(/\s+/g,""));
            },
            onChange: function (val) {
                console.log('val change', val);
                this.$emit('updata','picker',val.join(''))
            }
        },
        watch: {

        },
        components: {
            PopupPicker
        },
    }
</script>

<style scoped lang="less">
    @import "../assets/test.less";
    .vux-cell-box:before{
        content: none;
    }
</style>
