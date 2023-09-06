<script>
export default {
    name: "schoolcalandar",
}
</script>

<template>
    <!-- top navigation -->
    <main class="nav_top">
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">

                <input type="date" class="rounded-2">
            </div>
            <div class="page_title">Activity</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/schoolcalandar">
                    <div class="course-title fs-4 text-light-emphasis">JavaScript</div>
                    <div class="fst-italic">Basic to programming</div>
                    <div class="fs-6 fw-lighter text-white">Wisdom</div>
                </RouterLink>
                <!-- present -->
                <!-- time -->
                <div class="fs-5">10:00 Am</div>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/schoolcalandar">
                    <div class="course-title fs-4 text-light-emphasis">JavaScript</div>
                    <div class="fst-italic">Introduction to HTML</div>
                    <div class="fs-6 fw-lighter text-white">Abaz</div>
                </RouterLink>
                <!-- present -->
                <!-- time -->
                <div class="fs-5">12:00 noon</div>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="mt-3 ">
                <span class="fs-6 fw-lighter">select event</span>

            </div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard nav_footer">
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
</style>