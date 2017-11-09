<template id="input-plate">
    <ul class="aui-list aui-media-list">
        <li class="aui-list-item aui-padded-0 border-b">
            <div class="aui-media-list-item-inner">
                <div class="aui-list-item-inner aui-padded-l-15 aui-padded-r-0">
                    <div class="aui-list-item-text">
                        <div class="aui-list-item-title tea-text-blue aui-font-size-14">车牌号码</div>
                    </div>
                    <slot name="car_type"></slot>
                    <div class="aui-info aui-padded-0 aui-margin-t-5">
                        <slot name="vip"></slot>
                        <div class="aui-list-item-label" style="width: 4rem;line-height: normal" @click="openPicker">
                            <span class="tea-text-title aui-font-size-16 tea-text-arrow-down">{{ province }}</span>
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
    export default {
        name: 'input-plate',
        template: '#input-plate',
        props: ['province','value'],
        data: function() {
            return {
            }
        },
        computed: {

        },
        methods: {
            updateValue: function (value) {
                this.$emit('input',value);
            },
            openPicker: function () {
                this.$emit('updata','picker')
            }
        },
        watch: {

        }
    }
</script>
<style>

</style>
