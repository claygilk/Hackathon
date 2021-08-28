<template>
  <div class="modal-backdrop">
      <div class="modal">
          <h1>Game Over</h1>
          <form>
            <label for="initals">ENTER YOUR INITIALS</label>
            <div>
                <input id="initials" type="text" maxlength="3" placeholder="AAA">
            </div>
            <button id="done" @click.prevent="close">DONE</button>
          </form>
      </div>
  </div>
</template>

<script>
export default {
name: 'GameOver',
    methods: {
      close() {
        this.$emit('close');
      },
    }
}
</script>


<style scoped>
    button{
        border: none;
        background-color: #030B12;
        color:#ffc438;
        font-size: 1.5em;


    }

    input{
        color:#ffc438;
        background-color: #030B12;
        border: none;
        font-size: 1.5em;
        margin-bottom: 20px;
        margin-top: 20px;
        width: 4em;
        text-align: center;
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
</style>