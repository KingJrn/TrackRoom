<script>
import ClassInfo from '../student/components/ClassInfo.vue';

export default {
    name: "teacher",
    components: {
        ClassInfo,
    },
    data() {
        return {
            tab: '',
            teacher: true
        }
    },
    methods: {
        openClassInfo() {
            this.tab = 'class'
            this.teacher = false;
        }
    }
}
</script>

<template>
    <!-- top navigation -->

    <main v-if="teacher">
        <div class="nav_guard">
            <i class="bi bi-arrow-left" @click="goBack"></i>
            <div class="date">
                <select class="form-select" aria-label="select example">
                    <option value="1">2023-2024</option>
                    <option value="2">2022-2023</option>
                </select>
            </div>
            <div class="page_title" @click="openClassInfo">JavaScript</div>
        </div>
        <div class="nav-tab">
            <div class="nav-tabs">
                <RouterLink to="/studentreport">
                    <i class="bi bi-bar-chart text-light"></i>
                    <span class="ms-3">Student report</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/student">
                    <i class="bi bi-mortarboard text-light"></i>
                    <span class="ms-3">Students</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/activity">
                    <i class="bi bi-stopwatch text-light"></i>
                    <span class="ms-3">Time activity</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/attendance">
                    <i class="bi bi-person-check-fill text-light"></i>
                    <span class="ms-3">Attendance</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/classnote">
                    <i class="bi bi-journal-code text-light"></i>
                    <span class="ms-3">Class notes</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/messages">
                    <i class="bi bi-chat-left text-light"></i>
                    <span class="ms-3">Messages</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/grading">
                    <i class="bi bi-pass text-light"></i>
                    <span class="ms-3">Grading</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>

            <div class="nav-tabs">
                <RouterLink to="/behaviour">
                    <i class="bi bi-people text-white"></i>
                    <span class="ms-3"> Behavior points</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
            <div class="nav-tabs">
                <RouterLink to="/calendar">
                    <i class="bi bi-calendar text-light"></i>
                    <span class="ms-3">Calendar</span>
                </RouterLink>
                <i class="bi bi-chevron-right"></i>
            </div>
        </div>

        <!-- bottom navigation -->

        <div class="nav_guard">
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-person"></i>
                <RouterLink to="/">My account</RouterLink>


            </div>

            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-gear"></i>
                <RouterLink to="/">Settings</RouterLink>

            </div>
            <div class="d-flex flex-column justify-center align-items-center">
                <i class="bi bi-person-fill-add"></i>
                <RouterLink to="/">Add class</RouterLink>

            </div>

        </div>

    </main>
    <ClassInfo v-if="tab === 'class'" />
</template>

<style scoped> 

@media (min-width: 1024px) {}
</style>
