<script>
export default {
    name: "messages",
}
</script>

<template>
    <!-- top navigation -->
    <main class="nav_top">
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <select class="form-select" aria-label="select example">
                    <option value="1">Option</option>
                </select>
            </div>
            <div class="page_title">Messages</div>
        </div>
        <div class="nav-tab message">

            <div class="mt-3 fs-6 fw-lighter text-center">Coming Soon!</div>
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