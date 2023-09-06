<script>
export default {
    name: 'gradingDetails',

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
            <div class="page_title">Course Title</div>
        </div>
        <div class="nav-tab">

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span> -->
                    <span class="fs-5">Daily homework</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <input type="number" class="form-control" aria-label="Username" >
                    <span class="fs-4 m-2">/</span>
                    <input type="number" class="form-control" aria-label="Server" >
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <!-- <i class="bi bi-slash-circle me-3 b_point bg-secondary" ></i> -->
                    <span class="b_point text-bg-success  text-center text-white me-3">2</span>
                    <span class="fs-5">Pop quiz</span>
                </div>
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <input type="number" class="form-control" aria-label="Username" placeholder="2">
                    <span class="fs-4 m-2">/</span>
                    <input type="number" class="form-control" aria-label="Server" placeholder="3">
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary" ></i>
                    <span class="fs-5">Class</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <input type="number" class="form-control" aria-label="Username" >
                    <span class="fs-4 m-2">/</span>
                    <input type="number" class="form-control" aria-label="Server" >
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span>
                    <span class="b_point text-bg-danger text-center text-white me-3">0</span> -->
                    <span class="fs-5">Team project</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <input type="number" class="form-control" aria-label="Username" >
                    <span class="fs-4 m-2">/</span>
                    <input type="number" class="form-control" aria-label="Server" >
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
