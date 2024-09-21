<template>
  <avatar
    :name="fieldValue" 
    size="sm"
  />
</template>

<script>
import Avatar from "./Avatar.vue"

export default {
  props: ['resourceName', 'field'],
  components: {
    Avatar
  },
  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  },
  data() {
    return {
    }
  }
}
</script>
