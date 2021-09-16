// Biblio graph
// https://www.chartjs.org/

window.function = function (config, width, height) {
  // data
  config = config.value ?? "";
  width = width.value ?? "100";
  height = height.value ?? "80";

  if (config == "") return;

  let ht = `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Glide Yes-Code</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-datalabels@0.7.0/dist/chartjs-plugin-datalabels.min.js"></script>
  </head>
  <body>
  <div class="chart-container" style="position: relative; height:${height}vh; width:${width}vw; left:50%; transform: translatex(-50%)">
  <canvas id="gr1"></canvas>
</div>
    <script>
    let config = ${config}
  
    var canv = document.getElementById('gr1');
    var ctx = canv.getContext('2d');
    let graph1 = new Chart(ctx, config);
    </script>
  </body>
</html>`;

  let enc = encodeURIComponent(ht);
  let uri = `data:text/html;charset=utf-8,${enc}`;
  return uri;
};
