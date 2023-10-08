<template>
  <div class="about">
    <form class="w-75 login_form">
      <div class="mb-3 w-100">
        <label for="exampleInputEmail1" class="form-label">First name</label>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="mb-3 w-100">
        <label for="exampleInputEmail1" class="form-label">Last name</label>
        <input
          type="text"
          class="form-control"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </div>
      <div class="mb-3 w-100">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input
          type="email"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Create Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
        <label class="form-check-label" for="exampleCheck1">Show password</label>
      </div>
      <button type="submit" class="btn btn-primary py-2 w-100">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "signUp",
  setup() {

  }
}
</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
