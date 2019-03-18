<template>
  <transition name="modal-fade">
    <div class="modal modal-mask"
         style="display: block">
      <div class="modal"
           style="display: block">
        <div class="modal-dialog"
             role="document">
          <div class="modal-content">
            <div class="modal-header">
              <slot name="header"></slot>
            </div>

            <div class="modal-body">
              <slot name="body"></slot>
            </div>

            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style>
.modal-fade-enter,
.modal-fade-leave-active {
  opacity: 0;
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}

.modal {
  overflow-y: auto;
}

.modal-mask {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
