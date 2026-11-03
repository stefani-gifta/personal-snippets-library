/* ==========================================================================
   @name    Noise / grain background (JS injector)
   @type    effect
   @tags    background, noise, grain, svg, feTurbulence, js
   @desc    Appends the grain SVG to <body>; pairs with noise-background.css
   @needs   noise-background.css
   @vars    none
   @usage   Include after <body> exists (defer, or end of body)
   @source  https://grainy-gradients.vercel.app/
   ========================================================================== */

/* viewBox 100 = 1 unit is 1% of screen
   (original used jQuery: $('body').append(...); this is the vanilla version) */
document.body.insertAdjacentHTML('beforeend', `
  <svg id="noise"
    viewBox='0 0 100 100'
    preserveAspectRatio='none'
    xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
      <feTurbulence
        type='fractalNoise'
        baseFrequency='10'
        numOctaves='1'
        stitchTiles='stitch'/>
    </filter>
    <rect width='100vw' height='100vh' opacity='0.25' filter='url(#noiseFilter)'/>
  </svg>
`);

/* the jQuery version
$('body').append(`
  <!-- from https://grainy-gradients.vercel.app/ -->
  <svg id="noise"
    viewBox='0 0 100 100'
    preserveAspectRatio='none'
    xmlns='http://www.w3.org/2000/svg'>
    <filter id='noiseFilter'>
      <feTurbulence 
        type='fractalNoise' 
        baseFrequency='10' 
        numOctaves='1' 
        stitchTiles='stitch'/>
    </filter>
    <rect width='100vw' height='100vh' opacity='0.25' filter='url(#noiseFilter)'/>
    // viewbox 100 = 1 unit is 1% of screen
  </svg>
`);
*/