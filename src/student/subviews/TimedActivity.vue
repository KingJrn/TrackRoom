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
                    <i class="bi bi-hourglass-split me-3"></i>
                    <div>
                        <div class="fs-5">Timed exam</div>
                        <div class="fs-6 fw-lighter">0:00:03</div>
                    </div>
                </div>
                <!-- play button -->
                <i class="bi bi-pause text-danger"></i>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">
                    <i class="bi bi-check-lg text-success me-3"></i>
                    <div>
                        <div class="fs-5">Timed exam</div>
                        <div class="fs-6 fw-lighter">0:00:03</div>
                    </div>
                </div>
                <!-- play button -->
                <i class="bi bi-play text-success"></i>
            </div>
            <div class="nav-tabs">
                <div class="d-flex flex-row justify-content-between align-items-center">

                    <i class="bi bi-slash-circle me-3"></i>
                    <div>
                        <div class="fs-5">Launch break</div>
                        <div class="fs-6 fw-lighter">0:00:00</div>
                    </div>
                </div>
                <!-- play button -->
                <i class="bi bi-play text-success"></i>
            </div>
        </div>
        <!-- logs -->
        <table class="table mt-5 table-dark logs">
            <thead>
                <tr>
                    <th scope="col">Log</th>
                    <th scope="col">Start</th>
                    <th scope="col">End</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="w-25">Timed exam</td>
                    <td class="w-25"><input type="time" class="form-control w-75" id="exampleInputEmail1"
                            aria-describedby="emailHelp"></td>
                    <td class="w-25"><input type="time" class="form-control w-75" id="exampleInputEmail1"
                            aria-describedby="emailHelp"></td>
                </tr>
                <tr>
                    <td class="w-25">Timed Exam</td>
                    <td class="w-25"><input type="time" class="form-control w-75" id="exampleInputEmail1"
                            aria-describedby="emailHelp"></td>
                    <td class="w-25"><input type="time" class="form-control w-75" id="exampleInputEmail1"
                            aria-describedby="emailHelp"></td>
                </tr>
            </tbody>
        </table>

        <!-- bottom navigation -->
        <div class="nav_guard nav_footer">
            <div class="text-white">Techroom</div>
        </div>
    </main>
</template>

<style scoped>
@media (max-width: 992px) {
    .logs {
        margin-bottom: 4rem;
    }
}</style>