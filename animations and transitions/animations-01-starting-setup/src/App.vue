<template>

  <router-view v-slot="slotProps">
    <transition name="toggle-button" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>
</template>

<script>
export default {
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      isParagraphVisible: false,
      areUsersVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = true
    },
    toggleParagraph() {
      this.isParagraphVisible = !this.isParagraphVisible
    },
    showUsers() {
      this.areUsersVisible = true
    },
    hideUsers() {
      this.areUsersVisible = false
    },
    beforeEnter(element) {
      console.log(element)
      element.style.opacity = 0
    },
    beforeLeave(element) {
      console.log(element)
      element.style.opacity = 1
    },
    enter(element, done) {
      console.log('enter' + '\n' + element)
      let round = 1
      this.enterInterval = setInterval(() => {
        element.style.opacity = round * 0.01
        round++
        if (round > 100) {
          clearInterval(this.enterInterval)
          done()
        }
      }, 20)
    },
    afterEnter(element) {
      console.log('after enter' + '\n' + element)
    },
    leave(element, done) {
      console.log('leave' + '\n' + element)
      let round = 1
      this.leaveInterval = setInterval(() => {
        element.style.opacity = 1 - round * 0.01
        round++
        if (round > 100) {
          clearInterval(this.leaveInterval)
          done()
        }
      }, 20)
    },
    afterLeave(element) {
      console.log('after leave' + '\n' + element)
    },
    enterCancelled(element) {
      console.log('enter cancelled' + '\n' + element)
      clearInterval(this.enterInterval)
    },
    leaveCancelled(element) {
      console.log('leave cancelled' + '\n' + element)
      clearInterval(this.leaveInterval)
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}

.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /*transition: transform 0.3s ease-out;*/
}

.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.animate {
  /*transform: translate(-150px);*/
  animation: slide-scale 0.3s ease-out forwards;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150) scale(1);
  }
}

.toggle-button-enter-from,
.toggle-button-leave-to {
  opacity: 0;

}

.toggle-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.toggle-button-leave-active {
  transition: opacity 0.3s ease-in;
}

.toggle-button-enter-to,
.toggle-button-leave-from {
  opacity: 1;
}

.route-enter-active {
  animation: slide-scale 0.4s ease-out;
}

.route-leave-active {
  animation: slide-scale 0.4s ease-in;
}
</style>