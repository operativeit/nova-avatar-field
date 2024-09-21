<template>
  <PanelItem :index="index" :field="field">
    <template #value>
      <avatar
        :name="fieldValue"
        color="yellow"
        :src="imageSrc"
        size="sm"
      />
    </template>
  </PanelItem>
</template>

<script>
import Avatar from "./Avatar.vue";

export default {
  props: ['index', 'resource', 'resourceName', 'resourceId', 'field'],
  components: {
    Avatar
  },
  computed: {
    fieldValue() {
      return this.field.displayedAs || this.field.value
    },
  }
}
</script>
