<template>
  <div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title">提示信息</h4>
        </div>
        <div class="modal-body">{{ message }}</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
          <button type="button" class="btn btn-primary">确定</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Alert",
  props: {
    message: String,
  },
  setup() {

  }
})
</script>

<style scoped>

</style>