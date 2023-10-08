<script>
export default {
    name: 'gradingDetails',

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
            <div class="page_title">Course Title</div>
        </div>
        <div class="nav-tab">

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary text-white"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span> -->
                    <span class="fs-5">Daily homework</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <input type="number" class="form-control" aria-label="Username">
                    <span class="fs-4 m-2">/</span>
                    <input type="number" class="form-control" aria-label="Server">
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
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary text-white"></i>
                    <span class="fs-5">Class</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <input type="number" class="form-control" aria-label="Username">
                    <span class="fs-4 m-2">/</span>
                    <input type="number" class="form-control" aria-label="Server">
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <i class="bi bi-slash-circle me-3 b_point bg-secondary text-white"></i>
                    <!-- <span class="b_point text-bg-success  text-center text-white me-3">0</span>
                    <span class="b_point text-bg-danger text-center text-white me-3">0</span> -->
                    <span class="fs-5">Team project</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <input type="number" class="form-control" aria-label="Username">
                    <span class="fs-4 m-2">/</span>
                    <input type="number" class="form-control" aria-label="Server">
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

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 576px) {
    span {
        font-size: 14px !important;
    }

    .nav-tabs div+div {
        width: 45% !important;
    }

    input {
        font-size: 10px;
    }
}
</style>
