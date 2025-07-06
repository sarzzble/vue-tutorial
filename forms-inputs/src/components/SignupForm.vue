<template>
  <!-- prevent default form submission (prevent page reload) -->
  <form @submit.prevent="handleSubmit"> 
    <label>Email:</label>
    <input type="email" v-model="email" required />

    <label>Password:</label>
    <input type="password" v-model="password" required />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
    </select>

    <label>Skills:</label>
    <input type="text" v-model="tempSkill" @keyup="addSkill" />
    <div v-for="skill in skills" :key="skill" @click="deleteSkill" class="pill">
      <span @click="deleteSkill(skill)">{{ skill }}</span>
    </div>

    <div class="terms">
      <input type="checkbox" v-model="terms" required />
      <label>Accept terms and conditions</label>
    </div>

    <div class="submit">
      <button>Create an account</button>
    </div>

    <!-- <div>
      <input type="checkbox" value="shaun" v-model="names" />
      <label>Shaun</label>
    </div>
    <div>
      <input type="checkbox" value="yoshi" v-model="names" />
      <label>Yoshi</label>
    </div>
    <div>
      <input type="checkbox" value="mario" v-model="names" />
      <label>Mario</label>
    </div> -->
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms Accepted: {{ terms }}</p>
  <!-- <p>Selected Names: {{ names.join(', ') }}</p> -->
</template>

<script>
export default {
    data(){
        return {
            email: '',
            password: '',
            role: "designer", // Default role,
            terms: false, // Default unchecked
            // names: [], // Array to hold selected names
            tempSkill: "",
            skills: [], // Array to hold skills
            passwordError: "",
        }
    },
    methods: {
      addSkill(e){
        if(e.key === "," && this.tempSkill){
          if(!this.skills.includes(this.tempSkill.replace(/,/g, "").trim())){
            this.skills.push(this.tempSkill.replace(/,/g, "").trim());
          }
          this.tempSkill = ""; 
        }
      },
      deleteSkill(skill){
        this.skills = this.skills.filter(s => s !== skill);
      },
      handleSubmit(){
        /* e.preventDefault(); // Prevent default form submission (prevent page reload) */

        /* validate password */
        this.passwordError = this.password.length > 5 ? "" : "Password must be at least 6 characters long";

        if(!this.passwordError) {
          console.log("email: ", this.email);
          console.log("password: ", this.password);
          console.log("role: ", this.role); 
          console.log("skills: ", this.skills);
          console.log("terms accepted: ", this.terms);
        }
      }
    }
}
</script>

<style>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
    border-radius: 10px;
  }
  label {
    color: #aaa;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: 0.6em;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  .pill {
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: #eee;
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: #777;
    cursor: pointer;
  }
  button{
    background: #0b6dff;
    border: 0;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 20px;
    cursor: pointer;
  }
  .submit{
    text-align: center; 
  }
  .error{
    color: #ff0062;
    margin-top: 10px;
    font-size: 0.8em;
    font-weight: bold;
  }
</style>