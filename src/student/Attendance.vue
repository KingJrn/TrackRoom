<script>
export default {
    name: "attendance",
}
</script>

<template>
    <!-- top navigation -->
    <main class="nav_top">
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="input-group input-group-sm w-50">
                <span class="input-group-text" id="inputGroup-sizing-sm">Select<i
                        class="bi bi-arrow-right-short"></i></span>
                <input type="date" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="page_title">Students</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/studentAttendance">
                    <div>Emmanuel Eze</div>
                    <div class="fs-6 fw-lighter">emmajr502@gmail.com</div>
                </RouterLink>
                <!-- present -->
                <i class="bi bi-check-lg text-success"></i>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/studentAttendance">
                    <div>Maxwell Skies</div>
                    <div class="fs-6 fw-lighter">emmajr502@yahoo.com</div>
                </RouterLink>
                <!-- absent -->
                <i class="bi bi-x-lg text-danger"></i>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="mt-3 ">
                <span class="fs-6 fw-lighter">2 students</span>
                <span class="fs-6 fw-lighter ms-3">-1 present</span>
                <span class="fs-6 fw-lighter ms-3">-0 absent</span>

            </div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard nav_footer">
            <div class="text-white">Techroom</div>
        </div>
    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>