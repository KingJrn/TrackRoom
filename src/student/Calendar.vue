<script>
export default {
    name: 'calendar'
}
</script>

<template>
    <!-- top navigation -->
    <main class="justify-content-center nav_top">
        <div class="nav_guard mb-5">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">Set Event</div>
        </div>

        <!-- Set Event From  -->
        <form class="w-75 mt-3 login_form">
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
            <button type="submit" class="btn btn-primary mb-4 w-100 p-2">Save</button>
        </form>

        <!-- Saved Details -->

        <div class="nav-tab" v-if="false">
            <div class="nav-tabs">
                <div class="fs-5">Class</div>
                <div class="fs-6">JavaScript</div>
            </div>
            <div class="nav-tabs">
                <div class="fs-5">Topic</div>
                <div class="fs-6">Basic of JavaScript</div>
            </div>
            <div class="nav-tabs">
                <div class="fs-5">Teacher</div>
                <div class="fs-6">Wisdom</div>
            </div>
            <div class="nav-tabs">
                <div class="fs-5">Time</div>
                <div class="fs-6">12:00pm - 1.00pm</div>
            </div>
            <button type="submit" class="btn btn-primary mt-4 w-100 p-2">Edit</button>
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
