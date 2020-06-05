<template>
  <div class="randomCode">
    <canvas id="code" ref="code" @click="drawCode"></canvas>
  </div>
</template>

<script>
export default {
  name: "RandomCode",
  props: ['number'],
  mounted() {
    this.$refs.code.width = this.$refs.code.offsetWidth
    this.$refs.code.height = this.$refs.code.offsetHeight
    this.drawCode()
  },
  methods: {
    // 随机生成指定数量字母数字混合码
    randomCode(number) {
      return Math.random().toString(36).substr(2, number)
    },
    // 随机 RGB
    randomRGB() {
      let r = Math.floor(Math.random() * 256)
      let g = Math.floor(Math.random() * 256)
      let b = Math.floor(Math.random() * 256)
      return 'rgb(' + r + ',' + g + ',' + b + ')'
    },
    // 生成一个随机数
    randomNum(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    },
    // 画验证码
    drawCode() {
      let canvas = this.$refs.code
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      let text = this.randomCode(this.number)
      this.$emit('CodeHandle', text)
      for (let i = 0; i < text.length; i++) {
        this.drawText(ctx, text[i], i)
      }
      this.drawLine(ctx)
      this.drawDot(ctx)
    },
    // 画字
    drawText(ctx, text, i) {
      ctx.fillStyle = this.randomRGB()
      let fontsize = (this.$refs.code.offsetWidth + this.$refs.code.offsetHeight) / 6
      ctx.font = this.randomNum(fontsize, fontsize + 5) + 'px SimHei bold'
      let x = (i + 1) * (this.$refs.code.offsetWidth / 5)
      let y = this.randomNum(fontsize + 5, this.$refs.code.offsetHeight - 5)
      var deg = this.randomNum(-45, 45)
      // 修改坐标原点和旋转角度
      ctx.translate(x, y)
      ctx.rotate(deg * Math.PI / 180)
      ctx.fillText(text, 0, 0)
      // 恢复坐标原点和旋转角度
      ctx.rotate(-deg * Math.PI / 180)
      ctx.translate(-x, -y)
    },
    // 绘制干扰线
    drawLine(ctx) {
      for (let i = 0; i < 5; i++) {
          ctx.strokeStyle = this.randomRGB()
          ctx.beginPath()
          ctx.moveTo(this.randomNum(0, this.$refs.code.offsetWidth), this.randomNum(0, this.$refs.code.offsetHeight))
          ctx.lineTo(this.randomNum(0, this.$refs.code.offsetWidth), this.randomNum(0, this.$refs.code.offsetHeight))
          ctx.stroke()
      }
    },
    // 绘制干扰点
    drawDot(ctx) {
      for (let i = 0; i < 80; i++) {
          ctx.fillStyle = this.randomRGB()
          ctx.beginPath()
          ctx.arc(this.randomNum(0, this.$refs.code.offsetWidth), this.randomNum(0, this.$refs.code.offsetHeight), 1, 0, 2 * Math.PI)
          ctx.fill()
      }
    }
  }
}
</script>

<style scoped>
.randomCode {
  display: block;
}

#code {
  width: 100%;
  height: 100%;
  cursor: pointer;
}
</style>