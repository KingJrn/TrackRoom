<script>
export default {
    name: "messages",
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
            <div class="page_title">Messages</div>
        </div>
        <div class="nav-tab">
            
            <div class="mt-3 fs-6 fw-lighter text-center">Coming Soon!</div>
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