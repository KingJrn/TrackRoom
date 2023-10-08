<script>
export default {
    name: "studentAttendance",
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
            <div class="page_title">Emmanuel Eze</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-check-lg text-success me-3"></i>
                    <div class="fs-6 fw-lighter">Present</div>
                </div>
                <!-- present -->
                <i class="bi bi-check-lg"></i>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-x-lg text-info me-3"></i>
                    <div class="fs-6 fw-lighter">absent -excused</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-x-lg text-danger me-3"></i>
                    <div class="fs-6 fw-lighter">absent -unexcused</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-clock text-warning me-3"></i>
                    <div class="fs-6 fw-lighter">Tardy / late</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-clock text-warning-emphasis me-3"></i>
                    <div class="fs-6 fw-lighter">left early</div>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-slash-circle me-3"></i>
                    <div class="fs-6 fw-lighter">Not recorded</div>
                </div>
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