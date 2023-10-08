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
            <div class="input-group input-group-sm w-50">
                <span class="input-group-text" id="inputGroup-sizing-sm">Select<i
                        class="bi bi-arrow-right-short"></i></span>
                <input type="date" class="form-control" aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-sm" />
            </div>
            <div class="page_title">Activity</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/schoolcalandar">
                    <div class="course-title fs-4 text-light-emphasis">JavaScript</div>
                    <div class="fst-italic">Basic to programming</div>
                    <div class="fs-6 fw-lighter">Wisdom</div>
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
                    <div class="fs-6 fw-lighter">Abaz</div>
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
            <div class="text-white">Techroom</div>
        </div>
    </main>
</template>

<style scoped>
</style>