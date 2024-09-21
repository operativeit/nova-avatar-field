<template>
  <vue-avatar :username="fieldValue" />
</template>

<script>
import VueAvatar from "@webzlodimir/vue-avatar";

export default {
  props: ['resourceName', 'field'],
  components: {
    VueAvatar
  },
  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  }
}
</script>
