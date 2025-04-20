<script setup>
import { ref, onMounted } from 'vue'
import { Modal } from 'bootstrap'

const modalRef = ref(null)
let myModal

onMounted(() => {
  myModal = new Modal(modalRef.value, {
    backdrop: false
  })
})

const openModal = () => myModal.show()

const closeModal = () => myModal.hide()

const submitData = () => {
  console.log('資料已送出')
  myModal.hide()
}
</script>

<template>
  <!-- Button trigger modal -->
  <button type="button" class="btn btn-primary" @click="openModal">
    打開 Modal
  </button>
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
          <h1 class="modal-title fs-5">Modal 標題</h1>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            @click="closeModal"
          ></button>
        </div>
        <div class="modal-body">Modal 內容</div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger" @click="closeModal">
            取消
          </button>
          <button type="button" class="btn btn-success" @click="submitData">
            確定
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
