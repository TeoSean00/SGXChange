<template>
    <div class="arrow_container">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>
</template>
<script>
export default {
name: "ArrowAnimation",
data: () => {
    return {
    };
},
props: {},
methods: {
},
};
</script>
<style>
.arrow_container {
  position: relative;
  height: 100px;
  display: flex;
  justify-content: center;
  text-align: center;
  color: black;
}
.chevron {
  position: absolute;
  width: 28px;
  height: 8px;
  opacity: 0;
  transform: scale3d(0.5, 0.5, 0.5);
  animation: move 3s ease-out infinite;
  color: black;
}
.chevron:before,
.chevron:after {
  content: ' ';
  position: absolute;
  top: 0;
  height: 100%;
  width: 51%;
  background: black;
;
}

.chevron:before {
  left: 0;
  transform: skew(0deg, 30deg);
}

.chevron:after {
  right: 0;
  width: 50%;
  transform: skew(0deg, -30deg);
}
.chevron:first-child {
  animation: move 3s ease-out 1s infinite;
}

.chevron:nth-child(2) {
  animation: move 3s ease-out 2s infinite;
}
@keyframes pulse {
to {
    opacity: 1;
  }
}
@keyframes move {
  25% {
    opacity: 1;

  }
  33% {
    opacity: 1;
    transform: translateY(30px);
  }
  67% {
    opacity: 1;
    transform: translateY(40px);
  }
  100% {
    opacity: 0;
    transform: translateY(55px) scale3d(0.5, 0.5, 0.5);
  }
}
</style>