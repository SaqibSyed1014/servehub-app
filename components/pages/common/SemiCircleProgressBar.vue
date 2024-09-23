<script setup lang="ts">
import { ref } from 'vue';

const gaugeRadius = 65;
const startingY = 70;
const startingX = 10;

const percentage = ref(40);
const color = ref('#087443');

const percentageInRadians = (percentage) => {
  return percentage * (Math.PI / 100);
};

const setGaugePathValue = (gaugeElement) => {
  const zeroBasedY = gaugeRadius * Math.sin(percentageInRadians(percentage.value));
  const y = -zeroBasedY + startingY;
  const zeroBasedX = gaugeRadius * Math.cos(percentageInRadians(percentage.value));
  const x = -zeroBasedX + gaugeRadius + startingX;

  const pathData = `M ${startingX} ${startingY}
                   A ${gaugeRadius} ${gaugeRadius} 0 0 1 ${x} ${y}
                   `;

  gaugeElement.innerHTML = `<path d="${pathData}" stroke="${color.value}" stroke-width="20" stroke-linecap="round" style="transform: translateY(10px)" />`;
};

const percentageChangedEvent = (newPercentage) => {
  percentage.value = Math.min(Math.max(newPercentage, 0), 100);
  setGaugePathValue(document.getElementById('svg-graph-meter-value'));
};

function initialGaugeSetup() {
  percentageChangedEvent(percentage.value);
}

onMounted(() => {
  initialGaugeSetup()
})
</script>

<template>
  <div class="svg-gauge svg-gauge__container gauge-container">
    <div class="svg-gauge__paths">
      <svg width="160" height="120" xmlns="http://www.w3.org/2000/svg">
        <path d="M 10 70
           A 65 65 0 1 1 140 70
           " stroke="#EAECF0" stroke-width="20" stroke-linecap="round" style="transform: translateY(10px)" />
        <g id="svg-graph-meter-value">
        </g>
      </svg>
    </div>
    <p class="text-2xl font-semibold absolute bottom-0 left-1/2 -translate-x-1/2">{{ percentage }}%</p>
  </div>
</template>

<style lang="postcss">

/* ------ Default Style ---------- */
.gauge-container {
  width: 150px;
  height: 80px;
  display: block;
  border-radius: 3px;
  position: relative;
}

.wrapper {
  height: 100px;
  float: left;
  margin: 7px;
  overflow: hidden;
}
.wrapper > .gauge-container {
  margin: 0;
}

/* SVG Path implementation */

.progress__background {
    height: 80px;
    background-color: #EAECF0;
  }

.svg-gauge__container {
    position: relative;
    height: 90px;
  display: flex;
  align-items: center;
  }
  .svg-gauge__paths {
    height: 80px;
  }
    .svg-gauge__paths svg {
      fill: transparent;
    }
    .svg-gauge__paths svg path {
      transition: 0.3s;
    }
</style>
