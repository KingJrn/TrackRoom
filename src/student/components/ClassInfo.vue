<script>
export default {
    name: "classInfo",
    methods: {
        goBackTeacher() {
            location.reload(true);
        }
    }
}
</script>

<template>
    <!-- top navigation -->
    <main class="nav_top">
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBackTeacher"></i>

            <div class="page_title">CLass Info</div>
        </div>
        <form class="w-75 mt-3 login_form">
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">Class name</label>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">School term:</label>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1"
                    placeholder="2023 - 2024" />
            </div>
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">School name:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea" style="color: dimgrey;">Description</label>
            </div>
            <button type="submit" class="btn btn-primary mb-4">Update</button>
        </form>

        <!-- bottom navigation -->
        <div class="nav_guard nav_footer">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-gear"></i>
                <RouterLink to="/">Settings</RouterLink>

            </div>

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-list"></i>
                <RouterLink to="/">School terms</RouterLink>

            </div>
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-x-circle-fill"></i>
                <RouterLink to="/">Delete class</RouterLink>

            </div>
        </div>
    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>