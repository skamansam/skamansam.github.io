
<div class="waves-animation h-94 pt-56 bg-gradient-to-r from-tertiaryBg">
  <!-- Stolen from https://github.com/SayanBarcha/Simple-Waves-->
  <svg class="waves relative bottom-0 w-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
    <defs>
      <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
    </defs>
    <g class="parallax">
      <use xlink:href="#gentle-wave" x="48" y="0"/>
      <use xlink:href="#gentle-wave" x="48" y="3"/>
      <use xlink:href="#gentle-wave" x="48" y="5"/>
      <use xlink:href="#gentle-wave" x="48" y="7"/>
    </g>
  </svg>
</div>

<style>
.waves {
  height:15vh;
  margin-bottom:-7px;
  min-height:100px;
  max-height:150px;
}
.parallax > use {
  animation: move-forever 25s cubic-bezier(.55,.5,.45,.5)     infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 9s;
  fill: rgba(var(--color-primaryBgRGB),0.7);
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 12s;
  fill: rgba(var(--color-primaryBgRGB),0.5);
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 115s;
  fill: rgba(var(--color-primaryBgRGB),0.3);
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 22s;
  fill: rgba(var(--color-primaryBgRGB),1.0);
}
@keyframes move-forever {
  0% {
   transform: translate3d(-90px,0,0);
  }
  100% {
    transform: translate3d(85px,0,0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .waves {
    height:40px;
    min-height:40px;
  }
}
</style>