<template>
  <div
    class="flex items-center justify-center uppercase font-medium shadow"
    :class="avatarClasses" :style="avatarStyles" 
  > 
    <img
      v-if="$attrs.src"
      class="w-full h-full overflow-hidden"
      :class="roundClasses"
      v-bind="$attrs"
      v-on="$listeners"
    >
    <span v-else>
      <slot>{{avatarText}}</slot>
    </span>
  </div>
</template>
<script>
export default {
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: "primary"
    },
    size: {
      type: String,
      default: "md" //sm, md, lg
    },
    round: {
      type: Boolean,
      default: true
    }
  },
  computed: {
     avatarStyles() {
	const backgroundColor = this.backgroundColor;
	const textColor = this.lightenColor(backgroundColor, 150);
        return { backgroundColor: backgroundColor, color: textColor};
     },   
     backgroundColor() {
       let hash = 0;
       for (let i = 0; i < this.name.length; i++) {
         hash = this.name.charCodeAt(i) + ((hash << 5) - hash);
       }
       let color = "#";
       for (let i = 0; i < 3; i++) {
         const value = (hash >> (i * 8)) & 0xff;
         color += ("00" + value.toString(16)).substr(-2);
       } 
       return color;
    },  
    sizeClasses() {
      const sizeMappings = {
        sm: `h-12 w-12 text-lg`,
        md: `h-16 w-16 text-2xl`,
        lg: `text-lg h-24 w-24 text-3xl`
      };
      return sizeMappings[this.size] || sizeMappings.md;
    },
    roundClasses() {
      return this.round ? "rounded-full" : "rounded";
    },
    avatarClasses() {
      return `bg-${this.color}-500 ${this.roundClasses} ${this.sizeClasses}`;
    },
    avatarText() {
      if (!this.name || typeof this.name !== "string" || !this.name.length) {
        return "";
      }

      return this.name.match(/(^\S\S?|\s\S)?/g).map(v=>v.trim()).join("").match(/(^\S|\S$)?/g).join("").toLocaleUpperCase();
    }
  },
  methods: {
    lightenColor(backgroundColor, amt) {
      let usePound = false;
      if (backgroundColor[0] === "#") {
        backgroundColor = backgroundColor.slice(1);
        usePound = true;
      }
      const num = parseInt(backgroundColor, 16);
      let r = (num >> 16) + amt;
      if (r > 255) {
        r = 255;
      } else if (r < 0) {
        r = 0;
      }
      let b = ((num >> 8) & 0x00ff) + amt;
      if (b > 255) {
        b = 255;
      } else if (b < 0) {
        b = 0;
      }
      let g = (num & 0x0000ff) + amt;
      if (g > 255) {
        g = 255;
      } else if (g < 0) {
        g = 0;
      }
      return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }
  }    
};
</script>
