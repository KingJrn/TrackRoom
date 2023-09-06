<script>
export default {
    name: "calendar",
}
</script>

<template>
    <!-- top navigation -->
    <main class="justify-content-center">
        <div class="nav_guard mb-5">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">

                <input type="date" class="rounded-2">
            </div>
            <div class="page_title">
                <a class="icon-link icon-link-hover" style="--bs-icon-link-transform: translate3d(0, -.125rem, 0);"
                    href="#">
                    <i class="bi bi-calendar fs-6"></i>
                    Set Event
                </a>
            </div>
        </div>

        <!-- Set Event From  -->
        <form class="w-75 mt-3" >
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">Class</label>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">Date</label>
                <input type="date" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">Start time</label>
                <input type="time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">End time</label>
                <input type="time" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Tutor Name</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Course Title</label>
                <input type="text" class="form-control" id="exampleInputPassword1" />
            </div>
            <button type="submit" class="btn btn-primary mb-4">Save</button>
        </form>

        <!-- Saved Details -->

        <div class="nav-tab " v-if="false">
            <div class="nav-tabs">
                <div class="fs-4 fw-lighter text-white">Class</div>
                <div class="fs-6 fw-lighter text-white">JavaScript</div>
            </div>
            <div class="nav-tabs">
                <div class="fs-4 fw-lighter text-white">Topic</div>
                <div class="fs-6 fw-lighter text-white">Basic of JavaScript</div>
            </div>
            <div class="nav-tabs">
                <div class="fs-4 fw-lighter text-white">Teacher</div>
                <div class="fs-6 fw-lighter text-white">Wisdom</div>
            </div>
            <div class="nav-tabs">
                <div class="fs-4 fw-lighter text-white">Time</div>
                <div class="fs-6 fw-lighter text-white">12:00pm - 1.00pm</div>
            </div>
            <button type="submit" class="btn btn-primary mt-4">Edit</button>

        </div>

    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>