<template>
  <v-app>
    <v-content>
      <h1>Hola mundo</h1>
      <Calendar/>
    </v-content>
  </v-app>
</template>

<script>
import Calendar from './components/Calendar';

export default {
  name: 'App',
  components: {
    Calendar,
  },

  data: () => ({
    //
  }),
};
</script>
