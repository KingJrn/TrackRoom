<script>
export default {
    name: "studentReport",
}
</script>

<template>
    <!-- top navigation -->
    <main>
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <select class="form-select" aria-label="select example">
                    <option value="1">2023-2024</option>
                    <option value="2">2022-2023</option>
                </select>
            </div>
            <div class="page_title">Student Reports</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/summary">
                    <div>Emmanuel Eze</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@gmail.com</div>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/summary">
                    <div>Maxwell Skies</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@yahoo.com</div>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="mt-3 fs-6 fw-lighter">2 students</div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-sort-alpha-down"></i>
                <RouterLink to="/">Sort</RouterLink>


            </div>
        </div>
    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>