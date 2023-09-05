<script>
export default {
    name: "classNote",
}
</script>

<template>
    <!-- top navigation -->
    <main>
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <select class="form-select" aria-label="select example">
                    <option value="1">2023-2024</option>
                    <option value="2">2022-2023</option>
                </select>
            </div>
            <div class="page_title">Class Notes</div>
        </div>
        <div class="nav-tab">
            <div class="form-floating">
                <textarea class="form-control bg-dark-subtle" placeholder="Leave a comment here" id="floatingTextarea2"
                    style="height: 100px;"></textarea>
                <label for="floatingTextarea2" style="color: rgb(0, 0, 0);">Comments</label>
            </div>
            <button type="button" class="btn btn-primary my-3">Send</button>
            <div class="mt-3 fs-6 fw-lighter">Tap to add notes</div>
        </div>

        <!-- bottom navigation -->
        <div class="nav_guard">

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-search"></i>
                <RouterLink to="/">Search</RouterLink>

            </div>
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-filetype-csv"></i>
                <RouterLink to="/">Export CSV</RouterLink>

            </div>

        </div>
    </main>
</template>

<style scoped>
@media (min-width: 1024px) {}
</style>