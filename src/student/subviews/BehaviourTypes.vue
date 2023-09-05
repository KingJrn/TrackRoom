<script>
export default {
    name: 'behaviour'
}
</script>

<template>
    <!-- top navigation -->
    <main>
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <input type="date" class="rounded-2" />
            </div>
            <div class="page_title">All behavior types</div>
        </div>
        <div class="nav-tab">

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span>
                    <span class="b_point text-bg-danger text-center text-white me-3">0</span> -->
                    <span class="fs-5">Teamwork</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point bg-light  w-25 text-center text-success fs-2">+</span>
                    <span class="b_point bg-light text-center text-danger fs-2">-</span>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <!-- <i class="bi bi-slash-circle me-3 b_point bg-secondary" ></i>
                    <span class="b_point text-bg-success  text-center text-white me-3">0</span> -->
                    <span class="b_point text-bg-danger text-center text-white me-3">-4</span>
                    <span class="fs-5">Persistance</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point bg-light  w-25 text-center text-success fs-2">+</span>
                    <span class="b_point bg-light text-center text-danger fs-2">-</span>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <!-- <i class="bi bi-slash-circle me-3 b_point bg-secondary" ></i> -->
                    <span class="b_point text-bg-success  text-center text-white me-3">2</span>
                    <!-- <span class="b_point text-bg-danger text-center text-white me-3">0</span> -->
                    <span class="fs-5">Participation</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point bg-light  w-25 text-center text-success fs-2">+</span>
                    <span class="b_point bg-light text-center text-danger fs-2">-</span>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span>
                    <span class="b_point text-bg-danger text-center text-white me-3">0</span> -->
                    <span class="fs-5">Preparedness</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point bg-light  w-25 text-center text-success fs-2">+</span>
                    <span class="b_point bg-light text-center text-danger fs-2">-</span>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span>
                    <span class="b_point text-bg-danger text-center text-white me-3">0</span> -->
                    <span class="fs-5">Follow instructions</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point bg-light  w-25 text-center text-success fs-2">+</span>
                    <span class="b_point bg-light text-center text-danger fs-2">-</span>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span>
                    <span class="b_point text-bg-danger text-center text-white me-3">0</span> -->
                    <span class="fs-5">Willing to help others</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point bg-light  w-25 text-center text-success fs-2">+</span>
                    <span class="b_point bg-light text-center text-danger fs-2">-</span>
                </div>
            </div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-gear"></i>
                <RouterLink to="/">Settings</RouterLink>
            </div>

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-arrows-move"></i>
                <RouterLink to="/">Customize</RouterLink>
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

@media (min-width: 1024px) {}
</style>
