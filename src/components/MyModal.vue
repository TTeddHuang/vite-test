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
  myModal = new Modal(modalRef.value, { backdrop: false })

  modalRef.value.addEventListener('hidden.bs.modal', () =>
    emit('update:show', false)
  )
})

watch(
  () => props.show,
  value => (value ? myModal.show() : myModal.hide())
)

const closeModal = () => myModal.hide()
</script>

<template>
  <teleport to="body">
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
            <h1 class="modal-title fs-5">
              <slot name="header">我的天啊</slot>
            </h1>
            <button
              type="button"
              class="btn-close"
              aria-label="Close"
              @click="closeModal"
            ></button>
          </div>
          <div class="modal-body">
            <slot name="default">你還真的按...</slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              <button type="button" class="btn btn-danger" @click="closeModal">
                不行嗎？
              </button>
              <button type="button" class="btn btn-success" @click="closeModal">
                不然呢？
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </teleport>
</template>
