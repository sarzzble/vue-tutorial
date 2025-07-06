<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{name: 'job-details', params: { id: job.id}}"> <!-- id prop olarak geçiliyor -->
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
    data(){
        return {
            jobs: [
                {id: 1, title: "UX Designer", details: "Design user experiences for web and mobile applications."},
                {id: 2, title: "Frontend Developer", details: "Develop user interfaces using HTML, CSS, and JavaScript."},
                {id: 3, title: "Backend Developer", details: "Build server-side applications and APIs."},
            ]
        }
    }
}
</script>

<style>
  .job h2{
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;   
  }
  .job h2:hover {
    background: #ddd;
  }
  .job a{
    text-decoration: none;
  }
</style>