<template>
  <div>
   <h3 class="text-center">Register</h3>
    <b-form>
      <b-form-group id="input-group-1" label="Email address:" label-for="input-1">
        <b-form-input id="input-1" type="email" required placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Password:" label-for="input-2">
        <b-form-input id="input-2" type="password" required placeholder="Enter your password"></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Register</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
export default {};
</script>