<script>
export default {
  name: 'Teacher',
  data() {
    return {}
  }
}
</script>

<template>
  <!-- top navigation -->

  <main class="nav_top">
    <div class="nav_guard">
      <i class="bi bi-arrow-left" @click="goBack"></i>
      <div class="date">
        <select class="form-select" aria-label="select example">
          <option value="1">2023-2024</option>
          <option value="2">2022-2023</option>
        </select>
      </div>
      <div class="page_title" @click="openClassInfo">Teacher's Name</div>
    </div>
    <div class="nav-tab">
      <div class="nav-tabs">
        <RouterLink to="/studentreport">
          <i class="bi bi-bar-chart"></i>
          <span class="ms-3">Student report</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="nav-tabs">
        <RouterLink to="/student">
          <i class="bi bi-mortarboard"></i>
          <span class="ms-3">Students</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="nav-tabs">
        <RouterLink to="/activity">
          <i class="bi bi-stopwatch"></i>
          <span class="ms-3">Time activity</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="nav-tabs">
        <RouterLink to="/attendance">
          <i class="bi bi-person-check-fill"></i>
          <span class="ms-3">Attendance</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="nav-tabs">
        <RouterLink to="/classnote">
          <i class="bi bi-journal-code"></i>
          <span class="ms-3">Class notes</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="nav-tabs">
        <RouterLink to="/messages">
          <i class="bi bi-chat-left"></i>
          <span class="ms-3">Messages</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="nav-tabs">
        <RouterLink to="/grading">
          <i class="bi bi-pass"></i>
          <span class="ms-3">Grading</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>

      <div class="nav-tabs">
        <RouterLink to="/behaviour">
          <i class="bi bi-people"></i>
          <span class="ms-3"> Behavior points</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <div class="nav-tabs">
        <RouterLink to="/calendar">
          <i class="bi bi-calendar"></i>
          <span class="ms-3">Calendar</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
    </div>

    <!-- bottom navigation -->

    <div class="nav_guard nav_footer">
      <div class="text-white">Techroom</div>
    </div>
  </main>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
