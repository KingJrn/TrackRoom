<template>

  <div class="teachers fs-1">Class</div>
    <div class="nav-tabs">
      <RouterLink to="/teacher">Name 1</RouterLink>
      <span>class</span>
      <span>5</span>
      <span class="delete"> <i class="bi bi-x-lg"></i></span>
    </div>
    <div class="nav-tabs">
      <RouterLink to="/teacher">Name 2</RouterLink>
      <span>class</span>
      <span>5</span>
      <span class="delete"> <i class="bi bi-x-lg"></i></span>
    </div>

</template>
<script>
export default {
  name: "class-list"
}
</script>