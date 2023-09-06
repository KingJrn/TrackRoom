<script>
export default {
    name: 'grading'
}
</script>

<template>
    <!-- top navigation -->
    <main class="nav_top">
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <input type="date" class="rounded-2" />
            </div>
            <div class="page_title">Grading</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/gradingdetails">
                    <div>Emmanuel Eze</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@gmail.com</div>
                </RouterLink>
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <!-- <span class="b_point text-bg-success text-center text-white">4</span> -->
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                </div>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/gradingdetails">
                    <div>Maxwell Skies</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@yahoo.com</div>
                </RouterLink>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">4</span>
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                </div>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="mt-3">
                <span class="fs-6 fw-lighter">2 students - </span>
                <span class="fs-6 fw-lighter">average 1.0 / 3.0</span>

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
.b_point {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
}

/* md` applies to small devices (landscape phones, less than 768px) */
@media (max-width: 992px) {
    main{
        overflow: visible;
    }
    .b_point{
        width: 30px;
        height: 30px;
    }
}
</style>
