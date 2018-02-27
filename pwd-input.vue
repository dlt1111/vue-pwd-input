<template>
    <div class="pwd-box">
        <input
            class="input"
            type="tel"
            v-model="inputVal"
            maxlength="6"
            ref="input"
            @blur="blurInput"
        >
        <div class="block-box" @click="changeFocus">
            <div class="block" v-for="(pwd,index) in pwdList" :key="index">{{pwd}}</div>
        </div>
    </div>
</template>
<script>
// import MD5 from 'js-md5'
export default {
    name: 'pwd-input',
    props: {
        hasMd5: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            pwdList: new Array(6).fill(''),
            inputVal: ''
        }
    },
    mounted () {
        if (this.hasMd5) {
            this.MD5 = require('js-md5')
        }
    },
    methods: {
        changeFocus () {
            this.$refs.input.focus()
        },
        blurInput () {
            if (this.pwdList[5] !== '') {
                let pwd
                if (this.hasMd5) {
                    pwd = this.MD5(this.pwdList)
                } else {
                    pwd = this.pwdList
                }
                this.$emit('blur', pwd)
            }
        },
        clear () {
            this.pwdList = new Array(6).fill('')
            this.inputVal = ''
        }
    },
    watch: {
        inputVal (newVal, oldVal) {
            let valueArr = Array.from(newVal)
            this.pwdList.forEach(function(v,i,arr){
                if (valueArr[i] || valueArr[i] === '0') {
                    arr[i] = valueArr[i]
                } else {
                    arr[i] = ''
                }
            })
        }
    }
}
</script>
<style scoped>

.pwd-box{
    position: relative;
    width: 100%;
    height: 100px;
}
.input{
    position: absolute;
    top: -1000px;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    font-size: 40px;
    border: none;
    background: transparent;
    color: transparent;
}
.block-box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 5;
    display: flex;
    justify-content: space-around;
}
.block{
    display: inline-block;
    width: 90px;
    height: 90px;
    line-height: 90px;
    border-radius: 10px;
    border: 1px solid #999;
    font-size: 40px;
    font-weight: 900;
    text-align: center;
}
</style>
