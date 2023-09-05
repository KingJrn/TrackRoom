<script>
export default {
    name: "summary",
}
</script>

<template>
    <!-- top navigation -->
    <main class="pt-4 overflow-auto">
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">

                <input type="date" class="rounded-2">
            </div>
            <div class="page_title">Course Title</div>
        </div>
        <!-- Attendance -->
        <div class="fs-5 m-3">Attendance</div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-check-lg text-success me-3"></i>
                    <div class="fs-6 fw-lighter text-white">Present</div>
                </div>
                <!-- present -->
                <div class="attendance">
                    <span class="fs-5">25</span>
                    <i class="bi bi-chevron-right ms-3"></i>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-x-lg text-info me-3"></i>
                    <div class="fs-6 fw-lighter text-white">absent -excused</div>
                </div>
                <div class="attendance">
                    <span class="fs-5">25</span>
                    <i class="bi bi-chevron-right ms-3"></i>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-x-lg text-danger me-3"></i>
                    <div class="fs-6 fw-lighter text-white">absent -unexcused</div>
                </div>
                <div class="attendance">
                    <span class="fs-5">25</span>
                    <i class="bi bi-chevron-right ms-3"></i>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-clock text-warning me-3"></i>
                    <div class="fs-6 fw-lighter text-white">Tardy / late</div>
                </div>
                <div class="attendance">
                    <span class="fs-5">25</span>
                    <i class="bi bi-chevron-right ms-3"></i>
                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-clock text-warning-emphasis me-3"></i>
                    <div class="fs-6 fw-lighter text-white">left early</div>
                </div>
                <div class="attendance">
                    <span class="fs-5">25</span>
                    <i class="bi bi-chevron-right ms-3"></i>
                </div>
            </div>

        </div>
        <!-- Behavior -->
        <div class="fs-5 m-3">
            Behavior
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class=" fs-6">Total</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">30</span>
                    <span class="b_point text-bg-danger text-center text-white">-6</span>
                    <i class="bi bi-chevron-right"></i>

                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class=" fs-6">Teamwork</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">30</span>
                    <span class="b_point text-bg-danger text-center text-white">-6</span>
                    <i class="bi bi-chevron-right"></i>

                </div>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class=" fs-6">Persistance</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">30</span>
                    <span class="b_point text-bg-danger text-center text-white">-6</span>
                    <i class="bi bi-chevron-right"></i>
                </div>

            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class=" fs-6">Preparedness</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">30</span>
                    <span class="b_point text-bg-danger text-center text-white">-6</span>
                    <i class="bi bi-chevron-right"></i>
                </div>

            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class=" fs-6">Follows instructions</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row w-25 justify-content-around align-items-center">
                    <span class="b_point text-bg-success text-center text-white">30</span>
                    <span class="b_point text-bg-danger text-center text-white">-6</span>
                    <i class="bi bi-chevron-right"></i>
                </div>

            </div>
        </div>
        <!-- Behavior -->
        <div class="fs-5 m-3">
            Grading
        </div>
        <div class="nav-tab">

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class="fs-6">Daily homework</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row justify-content-around align-items-center">
                    <div class="fw-bold">99</div>
                    <span class="fs-4 m-2">/</span>
                    <div class="fw-bold">83</div>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class="fs-6">Pop quiz</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row justify-content-around align-items-center">
                    <div class="fw-bold">99</div>
                    <span class="fs-4 m-2">/</span>
                    <div class="fw-bold">83</div>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class="fs-6">Class exam</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row justify-content-around align-items-center">
                    <div class="fw-bold">99</div>
                    <span class="fs-4 m-2">/</span>
                    <div class="fw-bold">83</div>
                </div>
            </div>

            <div class="nav-tabs">
                <div class="d-flex flex-row  justify-content-start align-items-center">
                    <span class="b_point text-bg-success me-3"><i class="bi bi-check-lg text_color"></i></span>
                    <span class="fs-6">Team project</span>
                </div>
                <!-- point counter-->
                <div class="d-flex flex-row justify-content-around align-items-center">
                    <div class="fw-bold">67</div>
                    <span class="fs-4 m-2">/</span>
                    <div class="fw-bold">90</div>
                </div>
            </div>
        </div>


        <!-- bottom navigation -->
        <div class="nav_guard">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-filetype-csv"></i>
                <RouterLink to="/">Export CSV</RouterLink>

            </div>

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-printer"></i>
                <RouterLink to="/">Share/Print</RouterLink>

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