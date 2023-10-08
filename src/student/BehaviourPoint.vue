<script>
export default {
    name: 'behaviourTypes'
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
                <RouterLink to="/behaviourtypes">
                    <div>Emmanuel Eze</div>
                    <div class="fs-6 fw-lighter">emmajr502@gmail.com</div>
                </RouterLink>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">0</span>
                    <span class="b_point text-bg-danger text-center text-white">0</span>
                </div>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/behaviourtypes">
                    <div>Maxwell Skies</div>
                    <div class="fs-6 fw-lighter">emmajr502@yahoo.com</div>
                </RouterLink>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">0</span>
                    <span class="b_point text-bg-danger text-center text-white">0</span>
                </div>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="mt-3">
                <span class="fs-6 fw-lighter">Tap students to record behavior</span>
            </div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard nav_footer">
            <div class="text-white">Techroom</div>
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
    .b_point {
        width: 30px;
        height: 30px;
    }
}
</style>
