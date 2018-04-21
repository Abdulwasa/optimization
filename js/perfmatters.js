/*
Measuring the Critical Rendering Path with Navigation Timing
https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp
*/
function logCRP(){
  var t = window.performance.timing,
    tDom = t.domLoading,
    tDomC = t.domContentLoadedEventStart,
    dcl = tDomC - tDom,
    complete = t.domComplete - tDom,
    stats = document.getElementById("crp-stats");
  stats.innerHTML = 'DCL: ' + dcl + 'ms, onload: ' + complete + 'ms';
}
window.addEventListener("load", logCRP(event));
  
(function(w,g){w['GoogleAnalyticsObject']=g;
w[g]=w[g]||function(){(w[g].q=w[g].q||[]).push(arguments)};w[g].l=1*new Date();})(window,'ga');

// Optional TODO: replace with your Google Analytics profile ID.
ga('create', 'UA-XXXX-Y');
ga('send', 'pageview');
