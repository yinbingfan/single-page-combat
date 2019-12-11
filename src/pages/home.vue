<template>
  <div>
    <social-share />

    <vue-tree-navigation :items="items" :defaultOpenLevel="1" />
  </div>
</template>

<script>
import socialShare from "../components/share.vue";
export default {
  name: "home",
  components: {
    socialShare
  },
  data() {
    return {
      items: [
        { name: "Products", children: [{ name: "Shoes", path: "shoes" }] },
        {
          name: "About",
          path: "about",
          children: [
            {
              name: "Contact",
              path: "contact",
              children: [
                { name: "E-mail", element: "email" },
                { name: "Phone", element: "phone" }
              ]
            }
          ]
        },
        { name: "Github", external: "https://github.com" }
      ]
    };
  }
};
</script>


<style scoped>
</style>