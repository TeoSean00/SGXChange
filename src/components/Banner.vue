<template>
  <div class="container">
    <div class="row">
      <h1>
        Explore University of <br />
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>

    <div class="row mx-auto text-center">
      <div class="col-6" align="center">
        <router-link to="/ModuleMappingPage" id="seeUni">
          <button class="btn">Module Mapping</button>
        </router-link>
      </div>
      <div class="col-6 text-center" align="center">
        <router-link to="/UniversityPage" id="seeUni">
          <button class="btn">Browse Universities</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "typeWiriter",
  data: () => {
    return {
      typeValue: "",
      typeStatus: false,
      displayTextArray: ["St Gallen", "Madrid", "London"],
      typingSpeed: 100,
      erasingSpeed: 100,
      newTextDelay: 2000,
      displayTextArrayIndex: 0,
      charIndex: 0,
    };
  },
  props: {},
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
  methods: {
    typeText() {
      if (
        this.charIndex <
        this.displayTextArray[this.displayTextArrayIndex].length
      ) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[
          this.displayTextArrayIndex
        ].charAt(this.charIndex);
        this.charIndex += 1;
        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue = this.displayTextArray[
          this.displayTextArrayIndex
        ].substring(0, this.charIndex - 1);
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.displayTextArrayIndex += 1;
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0;
        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-fluid {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  margin-top: 160px;
}
h1 {
  font-size: 6rem;
  font-weight: normal;
  color: rgb(0, 0, 0);
}
.typed-text {
  color: #6060db;
}

.btn {
  transition: all 0.2s;
  background-color: #f5f5f5;
  border-radius: 2px;
  border-color: black;
  font-size: 16px;
  border-radius: 5px;
  padding-left: 80px;
  padding-right: 80px;
  color: black;
  font-weight: 500;
  margin-top: 50px;
}

.btn:hover {
  background-color: #9191ec;
  border-color: #9191ec;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

/* Cursor blinking CSS Starts... */
.blinking-cursor {
  font-size: 6rem;
  color: rgb(0, 0, 0);
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from {
    color: transparent;
  }
  to {
    color: transparent;
  }
  50% {
    color: rgb(0, 0, 0);
  }
}
@-moz-keyframes blink {
  from {
    color: transparent;
  }
  to {
    color: transparent;
  }
  50% {
    color: rgb(0, 0, 0);
  }
}
@-webkit-keyframes blink {
  from {
    color: transparent;
  }
  to {
    color: transparent;
  }
  50% {
    color: rgb(0, 0, 0);
  }
}
@-ms-keyframes blink {
  from {
    color: transparent;
  }
  to {
    color: transparent;
  }
  50% {
    color: rgb(0, 0, 0);
  }
}
@-o-keyframes blink {
  from {
    color: transparent;
  }
  to {
    color: transparent;
  }
  50% {
    color: rgb(0, 0, 0);
  }
}
/* Cursor blinking CSS Ends... */
</style>
