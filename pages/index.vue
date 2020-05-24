<template>
  <section>
    <div>
      <Logo :width="350"/>
      <h1 class="title">
        NUXT
        <span class="green">JS</span>
      </h1>
      <h2 class="subtitle">localePath bug</h2>
      <div class="links">
        <n-link to="/" class="button--grey">Home</n-link>
        <button type="button" class="button--grey" @click="changePageBug">Params bug</button>
        <button type="button" class="button--grey" @click="changePage">Params ok</button>
      </div>
    </div>
    <br>
    <br>
    <div>
      <h3>Params</h3>
      <div>{{$route.params || 'None'}}</div>
    </div>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import IconLink from "~/components/IconLink.vue";

export default {
  components: {
    Logo,
    IconLink
  },
  methods: {
    changePageBug() {
      // See, here the params that are not in the URL and should be sent as props to the component are missing
      const path = this.localePath({
        name: "bus",
        force: true,
        params: {
          stop: "hollywood",
          stopId: "1234"
        },
        meta: {
          key: 1
        }
      });
      console.log(path);
      this.$router.push(path);
    },
    changePage() {
      // Here, instead of trasnforming the route objet to a string, we only translate the route name so the param is receive as props
      this.$router.push({
        name: `train___${this.$i18n.locale}`,
        force: true,
        params: {
          stop: "hollywood",
          stopId: "1234"
        },
        meta: {
          key: 2
        }
      });
    }
  }
};
</script>

<style scoped>
.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #2E495E;
  letter-spacing: 1px;
  font-size: 6em;
}
.green {
  color: #00C48D;
}

.subtitle {
  font-weight: 300;
  font-size: 3em;
  color: #2E495E;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
