<template>
    <div class="container-fluid">
      <h1>
        Explore University of <br>
        <span class="typed-text">{{ typeValue }}</span>
        <span class="blinking-cursor">|</span>
        <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
      </h1>
    </div>
</template>
  
<script>
export default {
name: "typeWiriter",
data: () => {
    return {
    typeValue: "",
    typeStatus: false,
    displayTextArray: ["St. Gallen", "Madrid", "London"],
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
    if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(
        this.charIndex
        );
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
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
        0,
        this.charIndex - 1
        );
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
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(12, 12, 12);
}
h1 {
    font-size: 6rem;
    font-weight: normal;
    color: white;
}
.typed-text {
    color: #6060db;
}

/* Cursor blinking CSS Starts... */
.blinking-cursor {
font-size: 6rem;
color: white;
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
    color: white;
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
    color: white;
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
    color: white;
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
    color: white;
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
    color: white;
}
}
/* Cursor blinking CSS Ends... */
</style>