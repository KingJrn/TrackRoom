<script>
export default {
    name: "studentAttendance",
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
            <div class="page_title">Emmanuel Eze</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-check-lg text-success me-3"></i>
                    <div class="fs-6 fw-lighter text-white">Present</div>
                </div>
                <!-- present -->
                <i class="bi bi-check-lg"></i>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-x-lg text-info me-3"></i>
                    <div class="fs-6 fw-lighter text-white">absent -excused</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-x-lg text-danger me-3"></i>
                    <div class="fs-6 fw-lighter text-white">absent -unexcused</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-clock text-warning me-3"></i>
                    <div class="fs-6 fw-lighter text-white">Tardy / late</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-clock text-warning-emphasis me-3"></i>
                    <div class="fs-6 fw-lighter text-white">left early</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-slash-circle text-white-50 me-3"></i>
                    <div class="fs-6 fw-lighter text-white">Not recorded</div>
                </div>
            </div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-slash-circle"></i>
                <RouterLink to="/">Clear all</RouterLink>


            </div>

        </div>
    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>