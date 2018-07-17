<template>
  <v-app
	:dark="darkMode"
	id="inspire"
	:class="[{ 
		'box-layout': boxLayout, 
		'collapse-sidebar': collapseSidebar, 
		'rtl-layout': rtlLayout
	}]"
  >
      <example-one></example-one>
  </v-app>
</template>

<script>
import { mapGetters } from "vuex";
import ExampleOne from "./views/pages/ExampleOne";

export default {
  components: {
    ExampleOne
  },
  mounted() {
    if (
      this.selectedLocale.locale === "he" ||
      this.selectedLocale.locale === "ar"
    ) {
      this.$store.dispatch("rtlLayout");
    }
  },
  computed: {
    ...mapGetters([
      "darkMode",
      "collapseSidebar",
      "boxLayout",
      "rtlLayout",
      "selectedLocale"
    ])
  }
};
</script>
