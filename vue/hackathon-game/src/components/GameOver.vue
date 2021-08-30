<template>
  <div class="modal-backdrop">
      <div class="modal">
          <h1>Game Over</h1>
          <p>YOUR SCORE: {{this.$store.state.currentScore}}</p>
          <form>
            <label for="initals">ENTER YOUR INITIALS</label>
            <div>
                <input 
                id="initials" 
                type="text" 
                maxlength="3" 
                autocomplete="off"
                v-model="initals"
                onkeypress="return /[a-z]/i.test(event.key)">
            </div>
            <button id="done" class="btn-outline" @click.prevent="close">DONE</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  data() {
    return{
      initals: 'AAA'
    }
  },
  methods: {
    close() {
      this.$store.state.currentUserInitials = this.initals.toUpperCase()
      this.$emit('close', this.initals)
    },
  }
}
</script>


<style scoped>

  .modal > h1{
    color: white;
    font-size: 3em;
  }
  button#done{
    border: none;
    background-color: #030B12;
    color:#ffc438;
    font-size: 2em;
    margin-bottom: 25px;
    margin-top: 0;
  }

  label{
    color: white;
    font-size: 2em;
  }

  input{
    color:#ffc438;
    background-color: #030B12;
    border: none;
    font-size: 2em;
    margin-bottom: 40px;
    margin-top: 40px;
    width: 4em;
    text-align: center;
    text-transform:uppercase;
  }

  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.479);
  }

  .modal {
    background: #030B12;
    box-shadow: 0px 0px 4px 4px #ffc33863;
    border: 3px solid #ffc438;
    display: block;
    width: 500px;
    height: auto;
    position: absolute;
    top: 25%;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    color: #ffc438;
  }

  ::placeholder { 
    color: #ffc438;
    opacity: 1; 
  }

  input:focus{
    outline: none;
  }
</style>