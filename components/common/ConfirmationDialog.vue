<template>
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div class="bg-white rounded-lg p-6 max-w-md w-full">
        <h3 class="text-lg font-bold mb-4">{{ title }}</h3>
        <p class="mb-6">{{ message }}</p>
        <div class="flex justify-end gap-3">
          <UtilityButton @click="onCancel" class="btn btn-grey-light" >
            <span>Cancel</span>
          </UtilityButton>
          <UtilityButton @click="onConfirm"  class="btn btn-primary px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700" >
            Confirm
          </UtilityButton>
        </div>
      </div>
    </div>
</template>

<script setup>
const props = defineProps({
  show: Boolean,
  title: {
    type: String,
    default: 'Confirm Action'
  },
  message: {
    type: String,
    default: 'Are you sure you want to perform this action?'
  }
})

const emit = defineEmits(['confirm', 'cancel'])

const onConfirm = () => {
  emit('confirm')
}

const onCancel = () => {
  emit('cancel')
}
</script>