<script>
export default {
    name: "admin",
}
</script>

<template>
    <!-- top navigation -->
    <main>
        <div class="nav_guard">
            <i class="bi bi-arrow-left"></i>
            <div class="date">
                <select class="form-select" aria-label="select example">
                    <option value="1">2023-2024</option>
                    <option value="2">2022-2023</option>
                </select>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="page_title" v-if="false">Messages</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/schoolcalandar">
                    <i class="bi bi-calendar-week text-white"></i>
                    <span class="ms-3">School calender</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="teachers">Teachers</div>
            <div class="nav-tabs">
                <RouterLink to="/">Name 1</RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/">Name 2</RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-person"></i>
                <RouterLink to="/">My account</RouterLink>


            </div>

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-gear"></i>
                <RouterLink to="/">Settings</RouterLink>

            </div>

        </div>
    </main>
</template>

<style scoped>
.teachers {
    font-size: 1.5rem;
    margin-block: 2rem 1rem;

}

@media (min-width: 1024px) {}
</style>