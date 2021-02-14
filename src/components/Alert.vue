<template>
  <teleport to="#alert">
    <div class="modal d-block" tabindex="-1" v-if="visible">
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- 弹出框的头部 -->
          <div class="modal-header">
            <h4 class="modal-title">提示信息</h4>
            <button type="button" class="close" data-dismiss="modal" @click.prevent="onClose">
              <span aria-hidden="true">&times;</span><span class="sr-only"></span>
            </button>
          </div>
          <!-- 弹出框的内容 -->
          <div class="modal-body">
            <slot></slot>
          </div>
          <!-- 弹出框的底部 -->
          <div class="modal-footer">
            <!-- 设置了data-dismiss="modal"属性，就可以关闭该弹出框 -->
            <button type="button" class="btn btn-default" data-dismiss="modal" @click.prevent="onClose">取消</button>
            <button type="button" class="btn btn-primary" @click.prevent="onConfirm">确定</button>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import userCreateDom from "@/hooks/UserCreateDom";

export default defineComponent({
  name: "Alert",
  props: {
    message: String,
    visible: {
      type: Boolean,
      default: false
    }
  },
  emits: ['cancel', 'confirm'],
  setup(props, context) {
    userCreateDom('alert')
    const onClose = () => {
      context.emit('cancel')
    }
    const onConfirm = () => {
      context.emit('confirm')
    }
    return {
      onClose,
      onConfirm
    }
  }
})
</script>

<style scoped>

</style>
