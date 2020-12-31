<template>
  <section>
    <base-card>
      <template #header>
        <header>{{ fullName }}</header>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <template #default>
        <p>{{ infoText }}</p>
      </template>
    </base-card>
  </section>

</template>

<script>
export default {
  props: ['fullName', 'infoText', 'role'],
};
</script>