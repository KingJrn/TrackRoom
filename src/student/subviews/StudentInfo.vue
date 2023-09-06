<script>
export default {
    name: "studentinfo",
}
</script>

<template>
    <!-- top navigation -->
    <main>
        <div class="nav_guard nav_top">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <select class="form-select" aria-label="select example">
                    <option value="1">2023-2024</option>
                    <option value="2">2022-2023</option>
                </select>
            </div>
            <div class="page_title">Student Info</div>
        </div>
        <form class="w-75 mt-3 mb-5 login_form ">
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">First name</label>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">Last name</label>
                <input type="text" class="form-control" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div class="mb-3 w-100">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Student ID</label>
                <input type="number" class="form-control" id="exampleInputPassword1" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Date of birth</label>
                <input type="date" class="form-control" id="exampleInputPassword1" />
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
                <i class="bi bi-x-circle-fill"></i>
                <RouterLink to="/">Delete student</RouterLink>

            </div>
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-x-circle"></i>
                <RouterLink to="/">Delete student</RouterLink>

            </div>

        </div>
    </main>
</template>

<style scoped>
@media (max-width: 576px) {
    .nav_footer a {
        font-size: px;
    }

    .nav_footer i {
        font-size: 1.5rem;
    }
}
</style>