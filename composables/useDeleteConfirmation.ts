import { ref } from "vue";
const isOpen = ref(false);
const resolvePromise = ref<((value: unknown) => void) | null>(null);
export function useDeleteConfirmation() {
  function showDeleteConfirmation() {
    isOpen.value = true;
    return new Promise((resolve) => {
      resolvePromise.value = resolve;
    });
  }
  function confirmDelete() {
    isOpen.value = false;
    if (resolvePromise.value) {
      resolvePromise.value(true);
      resolvePromise.value = null; // Reset the resolver
    }
  }
  function cancelDelete() {
    isOpen.value = false;
    if (resolvePromise.value) {
      resolvePromise.value(false);
      resolvePromise.value = null; // Reset the resolver
    }
  }
  return { isOpen, showDeleteConfirmation, confirmDelete, cancelDelete };
}
