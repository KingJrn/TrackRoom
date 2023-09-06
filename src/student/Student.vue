<script>
export default {
    name: "student",
}
</script>

<template>
    <!-- top navigation -->
    <main class="nav_top">
        <div class="nav_guard ">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <select class="form-select" aria-label="select example">
                    <option value="1">2023-2024</option>
                    <option value="2">2022-2023</option>
                </select>
            </div>
            <div class="page_title">Students</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/studentinfo">
                    <div>Emmanuel Eze</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@gmail.com</div>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/studentinfo">
                    <div>Maxwell Skies</div>
                    <div class="fs-6 fw-lighter text-white">emmajr502@yahoo.com</div>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="mt-3 fs-6 fw-lighter">2 students</div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard nav_footer">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-sort-alpha-down"></i>
                <RouterLink to="/">Sort</RouterLink>


            </div>

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-person-add"></i>
                <RouterLink to="/">Add student</RouterLink>

            </div>
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-x-circle-fill"></i>
                <RouterLink to="/">Delete student</RouterLink>

            </div>
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-filetype-csv"></i>
                <RouterLink to="/">Export CSV</RouterLink>

            </div>

        </div>
    </main>
</template>

<style scoped>
@media (max-width: 576px) {
    .nav_footer a{
        font-size: 10px;
    }
    .nav_footer i{
        font-size: 1.5rem ;
    }
}
</style>