<script>
import teachersList from '../admin/teachersList.vue'
import classList from '../admin/classList.vue'

export default {
  name: 'Admin',
  components: {
    teachersList,
    classList
  },
  data() {
    return {
      ActiveTab: 'teachers'
    }
  },
  methods: {
    changeTab(tab) {
      this.ActiveTab = tab
    }
  }
}
</script>

<template>
  <!-- top navigation -->
  <main>
    <div class="nav_guard">
      <i class="bi bi-arrow-left"></i>
      <div class="date">
        <select class="form-select" aria-label="select example">
          <option value="1">2023-2024</option>
          <option value="2">2022-2023</option>
        </select>
      </div>
      <button
        type="button"
        class="page_title btn btn-secondary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal2"
      >
        Add Teacher
      </button>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Add Class
      </button>
    </div>
    <div class="nav-tab">
      <div class="nav-tabs">
        <RouterLink to="/schoolcalandar">
          <i class="bi bi-calendar-week"></i>
          <span class="ms-3">School calender</span>
        </RouterLink>
        <i class="bi bi-chevron-right"></i>
      </div>
      <!-- switch tab -->
      <nav class="nav nav-pills flex-row flex-sm-row mb-5 mt-3">
        <a
          class="flex-sm-fill text-sm-center nav-link"
          aria-current="page"
          href="#"
          :class="{ active: ActiveTab === 'teachers' }" @click="changeTab('teachers')"
          >Teachers</a
        >
        <a
          class="flex-sm-fill text-sm-center nav-link"
          href="#"
          :class="{ active: ActiveTab === 'class' }"
          @click="changeTab('class')">Class</a
        >
      </nav>
      <!-- Component -->
      <teachersList v-if="ActiveTab === 'teachers'" />
      <classList v-if="ActiveTab === 'class'" />
    </div>

    <!-- bottom navigation -->
    <div class="nav_guard nav_footer">
      <div class="text-white">Techroom</div>
    </div>
  </main>

  <!-- Add Class modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Class</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="w-75 mt-3 login_form">
            <div class="mb-3 w-100">
              <label for="exampleInputEmail1" class="form-label">Class name</label>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="mb-3 w-100">
              <label for="exampleInputEmail1" class="form-label">School term:</label>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
                placeholder="2023 - 2024"
              />
            </div>
            <div class="mb-3 w-100">
              <label for="exampleInputEmail1" class="form-label">School name:</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div class="form-floating mb-3">
              <textarea
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea"
              ></textarea>
              <label for="floatingTextarea" style="color: dimgrey">Description</label>
            </div>
            <button type="submit" class="btn btn-primary mb-4">Update</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Add Teacher modal -->
  <div
    class="modal fade"
    id="exampleModal2"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Add Teacher</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form class="w-75 mt-3 login_form">
            <div class="mb-3 w-100">
              <label for="exampleInputEmail1" class="form-label">First name</label>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="mb-3 w-100">
              <label for="exampleInputEmail1" class="form-label">Last name</label>
              <input
                type="text"
                class="form-control"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>
            <div class="mb-3 w-100">
              <label for="exampleInputEmail1" class="form-label">Email</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" class="btn btn-primary mb-4">Update</button>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.delete {
  border: 1px solid #3a8dec;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
}
.delete i {
  font-size: 18px;
  padding-inline: 2px;
  font-weight: bolder;
}
.teachers {
  font-size: 1.5rem;
  margin-block: 2rem 1rem;
}
button[type='button'] {
  font-size: 15px;
}

@media (min-width: 1024px) {
}
</style>
