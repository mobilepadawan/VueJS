<template> 
 <div id="app">
  <vue-form :state="formstate" @submit.prevent="onSubmit">
 
    <validate tag="label">
      <span>Name *</span>
      <input v-model="model.name" required name="name" />
 
      <field-messages name="name">
        <div>Success!</div>
        <div slot="required">Name is a required field</div>
      </field-messages>
    </validate>
 
    <validate tag="label">
      <span>Email</span>
      <input v-model="model.email" name="email" type="email" required />
 
      <field-messages name="email">
        <div slot="required">Email is a required field</div>
        <div slot="email">Email is not valid</div>
      </field-messages>
    </validate>
 
    <button type="submit">Submit</button>
  </vue-form>
  <pre>{{ formstate }}</pre>
</div>
</template>

<script>
export default {
  name: 'VueFG',

}
</script>

<style scoped>

</style>
