<script>
export default {
    name: "attendance",
}
</script>

<template>
    <!-- top navigation -->
    <main>
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">

                <input type="date" class="rounded-2">
            </div>
            <div class="page_title">Students</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/studentAttendance">
                    <div>Emmanuel Eze</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@gmail.com</div>
                </RouterLink>
                <!-- present -->
                <i class="bi bi-check-lg"></i>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/studentAttendance">
                    <div>Maxwell Skies</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@yahoo.com</div>
                </RouterLink>
                <!-- absent -->
                <i class="bi bi-x-lg"></i>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="mt-3 ">
                <span class="fs-6 fw-lighter">2 students</span>
                <span class="fs-6 fw-lighter ms-3">-1 present</span>
                <span class="fs-6 fw-lighter ms-3">-0 absent</span>

            </div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-slash-circle"></i>
                <RouterLink to="/">Clear all</RouterLink>


            </div>

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-graph-up"></i>
                <RouterLink to="/">Statistics</RouterLink>

            </div>
        </div>
    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>