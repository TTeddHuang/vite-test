<script setup>
import { ref, watch, onMounted } from 'vue'
import { Modal } from 'bootstrap'

const modalRef = ref(null)
let myModal

const props = defineProps({
  show: Boolean
})
const emit = defineEmits(['update:show'])

onMounted(() => {
  myModal = new Modal(modalRef.value)

  // 加入監聽器後開始出錯
  modalRef.value.addEventListener('hidden.bs.modal', () =>
    emit('update:show', false)
  )
})

watch(
  () => props.show,
  value => (value ? myModal.show() : myModal.hide())
)
</script>

<template>
  <!-- Modal -->
  <div
    ref="modalRef"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5">我的天啊</h1>
          <button type="button" class="btn-close" aria-label="Close"></button>
        </div>
        <div class="modal-body">你還真的按...</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger">不行嗎？</button>
          <button type="button" class="btn btn-success">不然呢？</button>
        </div>
      </div>
    </div>
  </div>
</template>
