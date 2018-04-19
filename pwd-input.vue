<template>
    <div class="pwd-box">
        <input
            class="input"
            type="tel"
            v-model="inputVal"
            :maxlength="maxLength"
            ref="input"
            @blur="blurInput"
            @input="listenInput"
        >
        <div class="block-box" @click="focusInput">
            <div class="block" v-for="(pwd,index) in pwdList" :key="index">{{pwd}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pwd-input',
    props: {
        maxLength: {
            type: Number,
            default: 6
        }
    },
    data () {
        return {
            pwdList: new Array(this.maxLength).fill(''),
            inputVal: ''
        }
    },
    methods: {
        focus () {
            this.$refs.input.focus()
        },
        blur () {
            this.$refs.input.blur()
        },
        focusInput () {
            this.focus()
        },
        blurInput () {
            if (this.pwdList[this.maxLength-1] !== '') {
                let pwd = this.pwdList
                this.$emit('blur', pwd)
            }
        },
        clear () {
            this.pwdList = new Array(this.maxLength).fill('')
            this.inputVal = ''
        },
        listenInput () {
            this.$emit('listenInput', this.inputVal)
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
