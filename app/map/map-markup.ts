/* Map markup extracted from public/map-standalone.html (interactions wired in MapExplorer). */
export const MAP_MARKUP = `
<div class="map-wrap-outer">
  <div class="map-container">
    <div class="map-body">
      <div class="map-wrap" id="mapWrap">
        <div class="legend-toggle">
          <button class="legend-btn" data-legend="1">☰ Legend</button>
          <div class="legend-panel" id="legendPanel">
            <h4>Map Features</h4>
            <div class="legend-row"><div class="legend-dot" style="background:#5ab2ee;border:1.5px solid #5ab2ee"></div>Primary tributary (lake entry)</div>
            <div class="legend-row"><div class="legend-line" style="background:#2a6898"></div>Secondary tributary / upstream</div>
            <div class="legend-row"><div class="legend-dot" style="background:#0a2848;border:1.5px solid #3a7acc;width:6px;height:6px"></div>Confluence point</div>
            <div class="legend-sep"></div>
            <h4>Survey Status</h4>
            <div class="legend-row"><span style="color:#6ee7b7;font-weight:700;width:14px;text-align:center">●</span>Adults confirmed (recent)</div>
            <div class="legend-row"><span style="color:#fca5a5;font-weight:700;width:14px;text-align:center">●</span>None observed / concern</div>
            <div class="legend-sep"></div>
            <h4>Other</h4>
            <div class="legend-row"><div class="legend-sq" style="background:#f59e0b"></div>USGS gauge station</div>
            <div class="legend-row"><div class="legend-dot" style="background:#d8b830;border:1px solid #ead848;width:6px;height:6px"></div>Town / community</div>
            <div class="legend-row"><div class="legend-dot" style="background:#071e30;border:1.5px dashed #1e4a6b;width:6px;height:6px"></div>Isolated water body</div>
            <div class="legend-sep"></div>
            <div style="font-size:8px;color:#7fa3bd;line-height:1.5">Click any creek or lake zone for details. Scroll or pinch to zoom. Drag to pan.</div>
          </div>
        </div>
        <div class="zoom-controls">
          <button class="zoom-btn" data-zoom="1.3" title="Zoom in">+</button>
          <button class="zoom-btn" data-zoom="0.77" title="Zoom out">−</button>
          <button class="zoom-btn" data-zoom="reset" title="Reset" style="font-size:11px">⟲</button>
        </div>

<svg id="map" viewBox="0 0 700 555" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet" role="img" aria-label="Schematic map of Clear Lake and its tributary creeks; use the list and tabs below to explore each location.">
<defs>
  <radialGradient id="wg" cx="40%" cy="40%" r="65%">
    <stop offset="0%" stop-color="#0d3a5a"/>
    <stop offset="100%" stop-color="#071e30"/>
  </radialGradient>
  <filter id="lakeGlow">
    <feGaussianBlur stdDeviation="3" result="blur"/>
    <feComposite in="SourceGraphic" in2="blur" operator="over"/>
  </filter>
</defs>

<!-- Background -->
<rect width="700" height="555" fill="#0b1508"/>

<!-- Terrain / land fill patches -->
<path d="M0,0 L195,0 L178,55 Q150,74 118,68 Q86,52 56,60 Q26,68 0,62Z" fill="#121e0a" opacity=".95"/>
<path d="M310,0 L700,0 L700,130 Q668,120 635,112 Q598,100 562,110 Q525,120 495,106 Q462,92 435,98 Q408,105 385,90 Q362,76 342,70 Q324,56 310,40Z" fill="#131e0a" opacity=".9"/>
<path d="M630,248 L700,228 L700,400 Q678,390 658,370 Q644,350 650,328 Q655,308 645,285 Q635,265 638,250 Q639,248 630,248Z" fill="#111808" opacity=".9"/>
<!-- SW land -->
<path d="M0,340 Q48,328 100,330 Q148,330 196,338 Q240,344 260,356 Q270,365 265,386 Q258,405 238,416 Q208,426 168,430 Q118,434 72,430 Q28,424 0,416Z" fill="#161e08" opacity=".85"/>
<path d="M100,416 Q148,410 200,410 Q250,408 295,416 Q335,423 360,442 Q378,454 375,475 L375,555 L0,555 L0,416Z" fill="#131808" opacity=".8"/>
<!-- SE land -->
<path d="M520,410 Q558,398 598,402 Q635,406 662,392 L700,398 L700,555 L475,555 Q472,530 480,508 Q490,485 505,485 Q518,468 520,445 Q522,425 520,415Z" fill="#111508" opacity=".9"/>
<!-- West shore land -->
<path d="M0,155 Q72,168 108,202 Q118,235 115,278 Q112,315 100,348 Q82,368 58,360 Q28,345 0,358Z" fill="#131e0a"/>

<!-- Mt. Konocti -->
<ellipse cx="220" cy="445" rx="52" ry="26" fill="#181408" opacity=".95"/>
<text x="220" y="449" text-anchor="middle" font-size="9" fill="#8a7a55" font-style="italic" opacity=".9" font-weight="500" pointer-events="none">Mt. Konocti</text>

<!-- Anderson Marsh -->
<ellipse cx="490" cy="468" rx="22" ry="10" fill="#0e1c08" opacity=".85"/>
<text x="490" y="470" text-anchor="middle" font-size="7" fill="#6a8470" font-style="italic" opacity=".9" pointer-events="none">Anderson Marsh</text>

<!-- Blue Lakes -->
<ellipse cx="60" cy="22" rx="14" ry="7" fill="#071e30" stroke="#184858" stroke-width="1" opacity=".8"/>
<text x="60" y="24" text-anchor="middle" font-size="6" fill="#1a4858">Blue Lakes</text>

<!-- ============================================================ -->
<!-- ACCURATE CLEAR LAKE SHAPE FROM GEOJSON (id=197, ~39,854 ac) -->
<!-- Coordinate space: lon -122.930 to -122.620, lat 38.900 to 39.140 -->
<!-- SVG 700x555, simplified with RDP epsilon=1.2 (566 pts) -->
<!-- ============================================================ -->
<path id="mzone-lake" class="mzn" data-z="lake"
  d="M 138.8,39.1 L 134.8,39.1 L 128.6,47.3 L 123.1,47.4 L 122.5,52.2 L 117.2,55.7 L 109.0,48.4 L 103.2,50.0 L 101.6,52.8 L 100.3,49.9 L 98.1,50.4 L 98.3,56.4 L 84.6,68.1 L 83.5,73.7 L 78.1,78.6 L 80.9,81.5 L 68.2,81.5 L 77.0,83.1 L 69.9,84.9 L 75.7,85.2 L 71.0,85.9 L 72.9,87.0 L 68.6,87.0 L 71.8,87.9 L 68.5,90.9 L 70.4,97.1 L 65.8,107.0 L 67.5,108.5 L 63.1,109.0 L 63.8,113.2 L 60.8,116.2 L 63.0,122.0 L 67.5,122.8 L 69.6,126.0 L 66.4,124.3 L 62.6,125.2 L 59.4,131.2 L 60.4,135.4 L 55.8,137.4 L 55.2,140.9 L 49.7,141.6 L 36.3,157.8 L 40.4,163.1 L 36.9,175.9 L 39.3,180.8 L 39.1,190.0 L 37.3,194.9 L 32.3,196.4 L 33.0,198.9 L 37.3,201.6 L 36.5,204.8 L 39.2,209.3 L 36.1,211.4 L 36.4,214.4 L 37.6,212.5 L 38.0,225.9 L 42.1,230.0 L 39.7,229.8 L 40.7,231.3 L 36.6,232.6 L 37.1,236.6 L 39.0,236.1 L 36.7,238.8 L 40.4,241.0 L 39.3,243.4 L 37.2,243.2 L 39.7,244.0 L 38.0,245.9 L 39.0,254.8 L 36.9,254.6 L 36.5,249.7 L 33.3,249.7 L 35.7,250.5 L 33.0,252.2 L 36.2,254.6 L 34.7,255.7 L 33.0,254.0 L 34.2,260.9 L 36.2,256.2 L 38.9,261.5 L 37.6,255.6 L 42.7,259.5 L 41.2,261.9 L 47.1,259.6 L 50.1,260.6 L 52.7,257.5 L 57.6,258.3 L 60.3,255.8 L 62.9,259.5 L 58.4,263.4 L 60.4,266.7 L 68.1,265.2 L 69.7,268.9 L 74.5,269.6 L 76.5,266.5 L 80.6,266.5 L 78.0,263.6 L 82.6,263.3 L 92.3,271.2 L 92.5,273.4 L 95.9,273.1 L 93.6,267.5 L 98.8,260.4 L 101.7,262.1 L 101.8,267.1 L 105.6,266.8 L 105.2,264.0 L 104.2,266.6 L 102.3,266.4 L 102.3,261.4 L 107.3,262.2 L 108.8,256.7 L 110.2,266.9 L 111.0,260.7 L 113.2,260.7 L 113.8,272.0 L 113.9,261.0 L 117.8,261.7 L 116.7,268.8 L 118.0,262.9 L 122.3,264.0 L 123.0,261.9 L 118.4,261.0 L 117.6,259.2 L 112.7,259.3 L 118.4,253.2 L 121.2,256.0 L 121.0,253.6 L 124.4,255.9 L 132.5,255.5 L 140.3,258.2 L 142.7,260.9 L 146.4,261.0 L 149.4,258.8 L 149.3,264.5 L 152.9,269.5 L 149.8,263.6 L 150.5,261.1 L 150.5,263.0 L 152.5,261.8 L 152.6,259.5 L 150.9,258.5 L 150.6,260.6 L 150.9,258.0 L 148.2,256.0 L 151.9,258.2 L 155.0,257.7 L 157.5,252.1 L 160.4,251.7 L 161.0,248.1 L 157.4,245.8 L 158.1,243.6 L 164.0,247.5 L 165.2,251.5 L 165.9,255.0 L 163.9,260.3 L 165.0,272.0 L 166.8,272.3 L 165.6,265.6 L 174.3,265.1 L 165.0,264.5 L 164.8,257.6 L 166.2,262.1 L 169.5,262.9 L 173.8,262.6 L 174.0,259.7 L 176.3,260.8 L 178.1,258.5 L 176.4,267.7 L 178.8,258.9 L 179.8,261.1 L 185.0,260.2 L 180.7,258.6 L 185.5,255.2 L 186.3,261.0 L 187.2,254.7 L 189.3,256.9 L 206.8,259.4 L 207.3,271.4 L 207.6,259.5 L 210.2,258.6 L 211.5,253.6 L 215.7,252.0 L 216.9,253.6 L 214.9,256.6 L 214.9,261.9 L 229.4,268.6 L 234.3,267.7 L 238.6,269.9 L 238.8,272.4 L 239.7,270.2 L 246.2,269.1 L 249.5,265.0 L 251.8,267.2 L 250.1,269.8 L 255.0,273.5 L 259.7,269.8 L 263.5,271.1 L 262.7,272.4 L 266.1,271.6 L 260.3,283.0 L 263.6,278.9 L 266.6,278.5 L 264.7,277.4 L 267.1,274.4 L 276.4,280.2 L 282.7,279.8 L 275.8,283.8 L 267.4,279.0 L 268.3,281.4 L 275.7,284.5 L 285.2,278.9 L 283.7,283.3 L 285.8,288.5 L 278.2,291.5 L 277.6,296.3 L 279.8,299.7 L 289.8,303.2 L 297.6,316.6 L 303.0,318.8 L 321.7,314.5 L 324.3,310.9 L 320.1,305.4 L 324.0,303.7 L 327.3,305.8 L 332.8,304.4 L 337.2,302.2 L 338.4,298.4 L 342.0,296.4 L 347.5,296.9 L 351.5,300.4 L 360.1,300.5 L 364.1,306.9 L 370.0,310.4 L 379.3,310.8 L 384.7,306.8 L 387.0,302.0 L 382.0,294.8 L 385.6,289.4 L 386.5,275.3 L 379.5,270.6 L 380.4,266.2 L 410.1,263.1 L 405.7,273.6 L 397.6,273.6 L 398.3,275.0 L 408.8,275.9 L 408.6,271.0 L 413.9,277.3 L 411.3,280.5 L 407.4,278.5 L 404.1,282.1 L 407.1,293.1 L 403.6,300.5 L 402.5,310.3 L 406.2,324.8 L 405.0,329.1 L 413.0,337.7 L 420.4,337.3 L 425.1,344.7 L 426.9,344.4 L 426.4,352.6 L 435.9,356.0 L 439.1,361.0 L 446.4,366.2 L 433.9,369.4 L 432.0,376.3 L 424.6,383.2 L 426.0,391.1 L 439.2,394.3 L 437.5,400.2 L 439.9,404.8 L 451.7,410.3 L 457.4,407.2 L 462.7,407.2 L 474.7,414.9 L 479.9,409.6 L 484.0,401.0 L 495.8,398.8 L 499.5,402.2 L 509.6,406.2 L 511.2,412.2 L 514.1,414.4 L 513.0,419.0 L 518.2,421.1 L 526.5,428.5 L 525.5,433.9 L 531.0,434.9 L 529.8,438.4 L 531.2,441.3 L 543.3,442.7 L 543.8,437.8 L 547.9,435.7 L 546.9,442.7 L 549.8,445.2 L 563.9,449.2 L 572.4,445.3 L 571.8,446.5 L 574.7,445.9 L 576.5,450.6 L 585.5,454.1 L 589.1,452.9 L 592.2,447.7 L 609.2,443.3 L 612.4,439.2 L 619.7,435.0 L 626.6,439.9 L 630.0,449.4 L 625.7,453.6 L 623.2,462.6 L 631.1,462.3 L 641.8,469.7 L 637.6,488.6 L 644.9,498.4 L 643.8,500.9 L 645.3,503.9 L 647.9,506.7 L 650.9,505.0 L 650.0,502.3 L 646.7,502.5 L 647.3,498.7 L 644.3,495.4 L 645.7,494.5 L 652.9,496.6 L 649.7,496.8 L 652.7,498.3 L 652.1,502.5 L 653.5,503.3 L 655.6,500.3 L 659.0,500.2 L 653.3,494.6 L 643.6,494.3 L 640.3,487.0 L 646.9,488.1 L 651.4,486.7 L 651.8,484.3 L 656.0,484.2 L 654.3,477.9 L 649.5,474.7 L 648.9,471.4 L 660.1,471.3 L 663.9,465.1 L 662.3,463.9 L 664.5,461.8 L 663.5,459.0 L 666.8,457.9 L 666.8,455.2 L 665.1,454.8 L 667.5,453.2 L 665.0,453.2 L 663.9,445.8 L 662.2,443.4 L 660.7,444.3 L 660.6,441.7 L 650.6,438.3 L 645.0,431.5 L 636.4,427.8 L 632.0,420.9 L 632.3,416.1 L 626.3,413.2 L 630.4,410.3 L 630.7,404.1 L 625.0,404.4 L 617.9,397.5 L 612.3,398.6 L 611.2,395.1 L 608.8,399.2 L 603.6,397.9 L 598.1,391.3 L 591.0,388.6 L 588.4,389.5 L 590.0,389.4 L 589.1,392.3 L 586.4,391.9 L 577.1,383.8 L 558.0,376.0 L 553.2,376.6 L 550.6,380.0 L 552.8,376.4 L 552.5,372.7 L 542.5,367.7 L 540.9,368.2 L 541.6,370.5 L 538.6,371.6 L 534.7,370.9 L 533.8,368.9 L 529.9,369.5 L 523.3,377.8 L 520.3,374.7 L 523.9,367.6 L 522.0,363.2 L 526.1,359.6 L 529.1,352.3 L 523.6,344.0 L 516.0,341.8 L 513.7,342.9 L 517.7,343.4 L 516.6,344.7 L 510.7,342.8 L 508.2,340.1 L 507.3,334.9 L 503.0,332.4 L 504.2,329.0 L 502.8,325.9 L 497.6,326.2 L 489.8,323.2 L 478.6,314.3 L 469.1,314.0 L 465.1,316.8 L 461.8,313.5 L 453.2,310.8 L 447.8,305.0 L 459.7,305.7 L 467.7,303.6 L 470.3,304.8 L 472.6,309.8 L 484.7,308.6 L 503.9,315.2 L 517.8,315.9 L 521.7,318.9 L 518.7,320.4 L 519.7,323.4 L 525.4,326.3 L 528.7,325.5 L 531.5,328.5 L 546.7,325.1 L 557.9,327.3 L 564.7,325.4 L 570.7,326.4 L 573.8,324.1 L 582.9,325.7 L 586.7,319.1 L 584.2,311.7 L 577.6,303.4 L 579.2,301.1 L 586.2,300.6 L 590.6,297.3 L 609.5,294.2 L 611.4,288.9 L 606.5,287.1 L 609.2,285.8 L 606.3,284.5 L 609.0,280.7 L 615.9,268.3 L 609.5,266.1 L 616.6,269.8 L 609.0,280.7 L 602.3,269.3 L 597.6,271.1 L 594.5,276.2 L 578.5,269.4 L 585.7,264.2 L 579.1,267.2 L 574.3,277.2 L 557.5,276.0 L 533.6,278.3 L 497.1,276.4 L 480.5,273.6 L 469.1,268.1 L 452.7,264.9 L 449.9,266.2 L 447.5,267.4 L 420.3,246.4 L 412.9,233.9 L 405.4,226.2 L 402.4,225.8 L 380.2,233.0 L 374.2,237.3 L 363.9,236.7 L 342.5,221.6 L 341.3,219.7 L 343.1,214.1 L 332.6,198.4 L 336.2,187.0 L 327.7,173.8 L 333.6,158.1 L 331.0,146.5 L 318.8,139.2 L 312.8,131.2 L 306.7,122.5 L 295.6,111.1 L 285.4,102.2 L 272.7,84.8 L 261.3,81.5 L 250.1,71.9 L 238.7,58.9 L 195.5,43.8 L 186.3,44.0 L 177.8,41.3 L 166.0,45.0 L 151.3,45.1 L 140.2,41.9 L 138.8,39.1 Z"
  fill="url(#wg)" stroke="#1e4a6b" stroke-width="1.2"
  data-zone="lake"/>

<!-- Soda Bay indent label -->
<text x="285" y="318" text-anchor="middle" font-size="8" fill="#4a9ec8" font-style="italic" opacity=".8" font-weight="500" pointer-events="none">Soda Bay</text>

<!-- =============================== -->
<!-- BORAX LAKE (accurate, id=51)    -->
<!-- =============================== -->
<ellipse id="borax-bg" cx="576" cy="358" rx="24" ry="14" fill="#071e30" stroke="#184858" stroke-width="1" opacity=".7"/>
<path id="borax-geo"
  d="M 595.9,360.5 L 595.1,358.7 L 584.4,356.5 L 583.5,351.3 L 580.2,351.1 L 574.5,345.6 L 565.3,345.5 L 562.2,346.9 L 555.4,344.4 L 552.9,347.6 L 563.0,354.4 L 573.0,358.0 L 576.8,365.6 L 581.1,368.2 L 589.5,369.5 L 591.3,371.5 L 591.3,373.5 L 597.1,368.0 L 599.3,367.7 L 595.6,364.6 L 595.9,360.5 Z"
  fill="#081c30" stroke="#1a4858" stroke-width="1"/>
<text x="576" y="362" text-anchor="middle" font-size="6.5" fill="#1a4858">Borax L.</text>

<!-- =============================== -->
<!-- THURSTON LAKE (accurate, id=193) -->
<!-- =============================== -->
<path id="mzone-thurston" class="mzn" data-z="thurston"
  d="M 572.8,479.5 L 567.5,478.1 L 565.1,472.8 L 561.2,469.7 L 557.7,468.7 L 550.3,468.5 L 551.8,468.8 L 550.2,471.9 L 548.7,472.2 L 548.8,474.4 L 546.5,475.8 L 548.0,477.4 L 556.0,479.1 L 555.9,482.6 L 558.4,481.8 L 557.8,484.7 L 568.4,487.0 L 577.5,490.8 L 586.3,500.5 L 590.2,498.8 L 596.6,490.0 L 598.0,485.5 L 600.2,483.7 L 599.5,481.1 L 594.5,478.6 L 582.4,478.3 L 572.8,479.5 Z"
  fill="#071e30" stroke="#1e4a6b" stroke-width="1.2" stroke-dasharray="3,2"
  data-zone="thurston"/>
<text x="573" y="483" text-anchor="middle" font-size="7.5" fill="#3a7aaa">Thurston L.</text>

<!-- ============================== -->
<!-- ARM LABELS (accurately placed) -->
<!-- ============================== -->
<!-- Upper Arm: NW lobe of lake, centered ~(149,91) -->
<text x="135" y="115" text-anchor="middle" font-size="12" fill="#4a9ec8" font-style="italic" opacity=".9" font-weight="500" letter-spacing=".8" pointer-events="none">Upper Arm</text>

<!-- Main body central label -->
<text x="310" y="215" text-anchor="middle" font-size="11" fill="#4a9ec8" font-style="italic" opacity=".85" font-weight="500" letter-spacing=".5" pointer-events="none">Main Lake</text>

<!-- Oaks Arm: east-central, ~(500,310) -->
<text x="496" y="302" text-anchor="middle" font-size="11" fill="#4a9ec8" font-style="italic" opacity=".9" font-weight="500" letter-spacing=".5" pointer-events="none">Oaks Arm</text>

<!-- Lower Arm: SE lobe, ~(605,441) -->
<text x="610" y="435" text-anchor="middle" font-size="10" fill="#4a9ec8" font-style="italic" opacity=".85" font-weight="500" letter-spacing=".5" pointer-events="none">Lower Arm</text>

<!-- ============================================== -->
<!-- CREEK GEOMETRIES FROM LAKE CO. GIS GEOJSON     -->
<!-- Source: Creeks_geojson.txt (Web Mercator)      -->
<!-- Reprojected to WGS84, simplified with RDP      -->
<!-- ============================================== -->

<!-- === SECONDARY TRIBUTARIES (upstream feeders) === -->
<g id="mck-middle_cr" data-creek="scotts_sys">
  <path class="msk" d="M 63.0,11.1 L 62.3,8.6 L 58.3,4.3 L 53.4,-8.1 L 47.8,-12.8 M 34.6,-27.2 L 39.2,-19.1 L 43.8,-15.0 L 49.9,-12.6 L 53.9,-8.7 L 59.3,4.3 L 63.7,10.9 M 38.4,-19.3 L 34.6,-27.2 M 47.8,-12.8 L 43.4,-14.6 L 39.2,-18.2 M 36.7,-44.9 L 35.5,-46.2 M 34.6,-27.2 L 33.1,-32.4 L 33.9,-38.1 L 36.7,-44.9" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>
<g id="mck-clover" data-creek="scotts_sys">
  <path class="msk" d="M 155.7,-46.1 L 161.0,-39.2 M 36.7,-44.9 L 37.5,-46.2 M 243.6,-44.7 L 245.3,-45.8 L 251.8,-45.2 L 253.6,-46.2 M 230.8,-46.2 L 233.5,-45.1 L 237.0,-45.8 L 239.7,-44.3 L 243.6,-44.7 M 196.7,-42.6 L 199.4,-43.8 L 206.0,-43.5 L 211.8,-46.2 M 161.0,-39.2 L 163.1,-38.8 L 163.3,-37.7 L 170.5,-36.8 L 173.1,-39.3 L 183.9,-41.3 M 183.9,-41.3 L 186.2,-41.7 L 190.5,-39.7 L 192.5,-41.2 L 194.7,-41.0 M 194.7,-41.0 L 196.7,-42.6" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>
<g id="mck-thompson" data-creek="thompson">
  <path class="msk" d="M 82.2,309.9 L 80.7,306.5 L 80.6,299.7 L 76.6,297.5 L 73.1,292.5 L 75.5,285.7 L 79.3,283.5 L 79.6,281.2 L 84.2,280.4 M 88.1,375.9 L 93.1,369.3 L 93.3,363.3 M 96.2,363.4 L 93.3,363.3 M 74.4,313.2 L 80.7,313.2 L 80.8,318.8 L 78.1,323.9 M 82.3,334.5 L 88.9,347.2 L 96.3,351.3 L 96.2,363.4 M 78.1,323.9 L 82.8,330.6 L 82.3,334.5" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>
<g id="mck-hill" data-creek="hill">
  <path class="msk" d="M 162.0,396.6 L 165.2,397.0 L 166.8,398.6 L 168.0,401.6 L 166.7,402.2 L 167.4,407.0 L 168.8,408.6 L 163.5,413.7 L 162.8,413.1 L 158.9,416.0 L 156.8,419.7 L 156.3,424.6 L 154.8,425.5 L 155.5,426.4 L 153.6,426.2 L 151.5,428.5 L 152.1,430.2 L 151.0,430.4 L 150.5,433.0 L 144.1,437.4 M 148.9,348.0 L 153.7,348.5 L 155.1,353.5 L 153.3,363.7 L 150.3,368.4 L 150.8,373.5 L 152.2,375.0 M 152.2,375.0 L 149.0,381.4 L 152.9,385.2 M 152.9,385.2 L 154.6,387.6 L 158.0,388.7 L 158.2,391.7 L 160.3,394.4 L 159.7,395.7 L 162.0,396.6" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>
<g id="mck-highland" data-creek="highland">
  <path class="msk" d="M 79.5,435.6 L 77.0,436.3 L 72.6,441.2 L 61.0,444.3 L 59.0,447.5 M 39.0,479.1 L 34.9,480.8 L 30.2,479.4 M 30.2,479.4 L 28.4,479.9 L 26.2,484.6 L 19.2,485.8 M 19.2,485.8 L 15.2,485.4 L 12.5,483.1 L 6.3,485.7 M 6.3,485.7 L 0.2,481.3 L -7.9,478.6 L -12.5,472.3 M -28.7,465.3 L -38.2,461.2 L -39.8,459.0 L -39.8,454.9 L -41.4,454.8 M 48.2,470.7 L 45.7,473.3 L 41.9,474.6 L 41.9,476.8 L 39.0,479.1 M -45.1,422.9 L -43.0,421.5 L -28.9,421.1 L -17.0,428.8 L -11.5,430.5 M 50.0,467.0 L 48.2,470.7 M -12.5,472.3 L -13.5,470.3 L -16.1,470.6 L -17.8,468.8 L -24.7,467.9 L -26.8,464.9 L -28.7,465.3 M -41.4,454.8 L -42.3,455.1 M -42.3,455.1 L -42.8,454.0 L -45.2,454.6" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>
<g id="mck-copsey" data-creek="seigler_sys">
  <path class="msk" d="M 728.3,595.7 L 727.9,596.8 L 717.4,601.1 M 745.1,592.0 L 740.0,594.9 L 738.2,593.4 L 734.5,596.0 L 731.4,594.8 L 728.3,595.7" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>
<g id="mck-perini" data-creek="seigler_sys">
  <path class="msk" d="M 650.2,585.5 L 650.5,588.7 L 652.6,589.9 M 652.6,589.9 L 658.0,591.6 L 661.4,596.8 M 656.8,547.1 L 656.7,550.3 L 655.0,551.6 L 656.1,558.8 L 657.6,559.7 L 658.4,563.3 L 661.7,564.9 L 662.0,567.3 L 664.7,570.2 M 664.7,570.2 L 661.0,577.4 L 652.8,579.8 L 652.0,585.9" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>
<g id="mck-clayton" data-creek="seigler_sys">
  <path class="msk" d="M 725.1,578.2 L 717.6,582.4 L 704.8,580.3 M 745.0,555.4 L 738.6,558.2 L 736.4,562.2 L 734.7,562.9 L 735.1,565.0 M 735.1,565.0 L 735.5,566.5 L 733.0,567.6 L 735.4,574.5 L 731.0,578.1" stroke="#2a6898" stroke-width="1.5" fill="none"/>
</g>

<!-- === PRIMARY TRIBUTARIES (lake entry) === -->
<g id="mck-scotts" data-creek="rodman">
  <path class="mpk" d="M -45.1,185.5 L -41.0,182.2 L -43.6,178.9 L -39.8,174.2 L -39.4,171.3 L -34.0,168.2 L -34.6,164.3 L -26.1,158.5 L -27.8,147.6 L -30.9,138.1 L -27.5,129.3 L -28.3,124.8 L -39.1,116.1 M -43.7,-40.4 L -45.1,-42.4 M 9.5,-38.2 L 9.0,-35.6 L 7.5,-34.6 L -7.8,-34.9 L -11.5,-41.1 L -15.2,-42.0 L -23.2,-34.4 L -28.4,-34.1 L -31.6,-37.2 L -38.9,-39.8 L -42.6,-39.2 L -43.7,-40.4 M 14.9,-45.3 L 17.9,-46.2 L 20.1,-45.0 L 19.7,-42.9 L 22.2,-39.9 L 23.2,-35.5 L 26.9,-32.1 L 27.7,-27.3 L 35.2,-19.3 L 38.4,-19.3 M -39.1,116.1 L -42.6,112.8 L -45.1,112.3 M 39.2,-18.2 L 34.5,-19.0 L 27.4,-26.6 L 26.0,-32.2 L 21.6,-36.8 L 22.2,-38.5 L 19.6,-41.8 L 19.6,-44.8 L 18.5,-45.7 L 15.4,-45.2 L 13.9,-39.9 L 9.5,-38.2 M 9.5,-38.2 L 9.1,-39.1 L 13.5,-40.1 L 14.9,-45.3" stroke="#3a7acc" stroke-width="2.2" fill="none"/>
  <circle class="mcd mpl" cx="151" cy="44" r="5.5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<g id="mck-lyons" data-creek="lyons">
  <path class="mpk" d="M 36.0,69.0 L 29.4,67.5 L 27.3,69.7 L 20.3,71.0 L 17.0,69.6 L 16.3,66.4 L 14.6,65.0 L 9.3,63.3 L 9.1,61.9 L 2.3,61.5 L -5.9,55.6 L -9.0,56.8 L -8.8,55.6 L -11.5,55.8 L -16.6,52.4 L -21.6,53.2 L -31.0,52.2 L -35.7,48.7 L -40.1,43.1 M 80.3,80.4 L 62.0,77.0 L 59.1,72.3 L 60.4,70.6 L 57.0,68.3 L 53.4,68.1 L 49.8,69.6 L 44.7,66.4 L 41.3,66.7 M 41.3,66.7 L 36.0,69.0" stroke="#3a7acc" stroke-width="1.8" fill="none"/>
  <circle class="mcd mpl" cx="80.3" cy="80.4" r="5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<!-- Lucerne Creek, from unnamed seasonal creek features in GeoJSON -->
<g id="mck-lucerne" data-creek="lucerne">
  <path class="mpk" d="M 399.3,117.2 L 395.4,116.7 L 389.1,119.0 L 379.5,117.9 L 374.2,120.0 L 367.2,119.5 L 364.6,121.1 M 309.7,111.5 L 309.4,106.7 L 310.3,104.5 L 312.1,103.5 L 318.8,101.8 L 320.6,99.8 L 322.9,99.9 L 323.8,98.6 L 325.2,98.7 L 325.3,97.7 L 332.8,95.8 L 336.4,96.1 L 339.6,94.1 L 339.9,92.7 L 343.2,91.2 L 345.7,92.3 L 347.8,90.6 L 356.9,88.9 L 357.5,89.9 L 360.3,90.6 L 364.2,89.8 L 367.1,86.9 L 372.2,84.9 L 373.3,83.8 L 373.4,79.5 L 379.6,75.7 M 358.2,102.9 L 361.0,102.5 L 368.1,104.5 L 377.1,100.6 L 383.6,95.0 L 387.2,94.2 L 391.2,95.3 L 392.3,94.8 M 373.2,115.0 L 375.0,113.2 L 382.6,111.1 L 383.7,108.6 L 391.4,104.0 M 381.8,127.6 L 383.4,125.7 L 392.0,122.6 L 397.8,123.1 M 419.0,115.8 L 414.0,113.1 L 406.8,112.4 M 420.3,115.2 L 421.5,115.7 L 421.4,117.2 L 426.5,120.0 L 427.0,122.5 L 428.6,122.5 L 429.1,125.8 M 437.5,121.7 L 433.7,117.3 L 434.0,115.1 L 431.4,109.8 L 431.9,106.7 L 428.8,104.2 L 428.5,102.8 M 372.2,93.9 L 376.2,94.5 L 382.1,93.6 L 385.8,90.7 L 389.4,89.3 M 432.3,99.5 L 428.2,99.2 L 425.0,96.8 L 421.3,95.6 L 409.2,99.5 L 402.4,97.6 L 396.4,94.1 M 432.3,99.5 L 429.2,101.3 L 428.5,102.8 M 428.5,102.8 L 427.6,105.0 L 422.5,107.1 L 420.3,115.2 M 419.0,115.8 L 416.1,118.0 L 413.4,122.5 L 415.6,126.9 L 417.8,128.3 M 364.6,121.1 L 370.8,126.8 L 376.5,128.5 L 381.8,127.6 M 373.2,115.0 L 380.1,113.8 L 385.0,114.0 L 393.7,109.8 L 398.5,109.5 M 313.1,129.6 L 318.4,127.6 L 319.6,122.9 L 327.8,120.5 L 328.2,119.1 L 331.4,118.2 L 341.1,118.5 L 343.9,119.1 L 345.5,120.7 L 348.8,119.7 L 352.6,120.8 L 356.0,120.9 L 356.9,120.1 L 363.0,120.6 M 363.0,120.6 L 368.4,116.2 L 373.2,115.0 M 381.8,85.0 L 377.4,87.1 L 374.0,90.4 L 372.2,93.9 M 372.2,93.9 L 369.5,94.5 L 369.4,96.0 L 366.3,97.4 L 362.4,96.8 L 358.2,102.9 M 339.8,108.1 L 337.5,108.3 L 337.2,109.8 L 332.9,112.6 L 328.2,112.4 L 325.6,113.4 L 321.5,112.7 L 316.3,115.2 L 314.3,115.1 L 309.7,111.5 M 363.0,120.6 L 364.6,121.1 M 358.2,102.9 L 350.7,105.8 L 349.3,105.2 L 346.5,107.2 L 340.4,107.8 M 420.3,115.2 L 419.0,115.8" stroke="#2e6ec0" stroke-width="1.8" fill="none"/>
  <circle class="mcd mpl" cx="313.1" cy="129.6" r="5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<g id="mck-morrison" data-creek="morrison">
  <path class="mpk" d="M 334.0,78.6 L 354.5,74.8 L 360.1,71.1 L 362.1,67.7 L 365.6,66.9 M 326.0,80.7 L 331.4,78.3 L 334.0,78.6 M 321.2,85.7 L 322.2,84.8 L 321.6,83.3 L 325.1,82.2 L 326.0,80.7 M 312.2,88.6 L 316.2,89.3 L 320.2,88.0 L 321.2,85.7 M 286.0,102.4 L 292.6,101.6 L 296.9,98.8 L 302.4,98.9 M 302.4,98.9 L 307.1,98.5 L 307.9,93.9 L 312.2,88.6" stroke="#3a7acc" stroke-width="2.0" fill="none"/>
  <circle class="mcd mpl" cx="291" cy="102" r="5.5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<g id="mck-forbes" data-creek="forbes">
  <path class="mpk" d="M 39.6,229.9 L 37.0,228.6 L 28.8,229.6 L 27.0,228.7 L 26.9,227.3 L 25.3,227.6 L 24.9,229.5 L 20.7,232.5 L 22.1,236.6 L 20.3,238.8 L 16.6,239.7 L 12.9,243.0 L 8.4,243.9 L 4.7,243.1 L 0.5,239.4 L -10.5,238.6 L -21.3,239.6 L -24.7,236.3 L -24.4,233.8 L -27.5,231.9 M -27.5,231.9 L -29.6,230.1 L -32.2,231.3 L -39.3,230.1 L -42.4,231.2 L -45.1,229.7" stroke="#3a7acc" stroke-width="2.5" fill="none"/>
  <circle class="mcd mpl" cx="26.9" cy="227.3" r="6" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.4"/>
</g>
<g id="mck-manning" data-creek="manning">
  <path class="mpk" d="M -45.1,330.5 L -44.7,330.7 M 44.8,261.4 L 48.0,275.5 L 51.0,279.1 L 51.3,281.7 M 51.3,281.7 L 54.9,286.8 L 56.1,291.3 M 56.1,291.3 L 57.4,293.1 L 63.1,293.9 L 70.2,300.5 L 73.8,305.7 L 74.4,313.2 M 74.4,313.2 L 71.5,313.3 L 67.3,318.1 L 62.7,316.9 L 63.4,318.7 L 62.3,320.5 L 57.5,322.5 L 56.6,324.5 L 51.7,325.2 L 51.0,327.5 L 48.8,325.9 L 47.4,326.9 L 45.4,326.0 L 42.1,328.0 L 35.5,326.4 L 31.7,328.6 L 27.1,333.6 L 24.3,333.3 L 21.7,335.6 L 15.3,333.4 L 10.1,335.2 L 9.4,336.8 L 6.6,337.5 L 5.6,339.6 L 3.7,339.6 M 3.7,339.6 L 1.0,339.1 L -0.7,337.2 L -0.9,334.5 L -2.6,334.3 M -2.6,334.3 L -9.5,335.0 L -11.6,333.0 M -16.6,331.3 L -18.4,332.7 L -20.6,332.3 L -23.8,335.0 L -24.7,333.7 L -29.8,333.0 L -31.2,334.6 L -36.1,334.7 L -40.9,330.4 L -44.7,330.7 M -44.7,330.7 L -44.1,331.5 L -45.1,331.9 M -11.6,333.0 L -16.6,331.3" stroke="#3a7acc" stroke-width="2.2" fill="none"/>
  <circle class="mcd mpl" cx="44.8" cy="261.4" r="5.5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<g id="mck-rumsey" data-creek="rumsey">
  <path class="mpk" d="M 98.7,313.0 L 98.2,308.4 L 92.1,305.0 L 89.9,301.2 L 90.9,290.3 L 83.6,282.5 L 83.9,278.9 L 85.3,277.8 L 84.0,269.9 L 87.1,268.3" stroke="#2e6ec0" stroke-width="1.8" fill="none"/>
  <circle class="mcd mpl" cx="87.1" cy="268.3" r="5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<g id="mck-adobe" data-creek="adobe">
  <path class="mpk" d="M 115.4,599.3 L 116.3,595.9 L 115.3,588.2 L 109.6,586.8 L 107.6,584.1 L 106.4,580.2 L 102.9,577.5 L 103.3,572.3 L 101.2,568.6 M 101.2,568.6 L 101.2,568.1 M 109.4,561.0 L 103.0,564.8 L 101.2,568.1 M 108.9,558.1 L 109.4,561.0 M 119.0,521.5 L 119.2,522.7 L 126.8,526.1 L 126.4,529.0 L 128.3,529.3 L 128.1,531.1 L 132.0,534.5 L 132.9,541.3 L 123.6,544.8 L 121.1,547.8 L 121.8,549.5 L 118.6,553.2 L 115.4,552.8 L 113.2,555.1 L 111.0,555.3 L 108.9,558.1 M 88.0,460.9 L 88.5,462.3 L 92.7,462.3 L 101.9,469.9 L 106.6,470.3 L 104.1,472.1 L 102.7,475.3 L 107.1,479.3 L 111.4,481.2 L 114.2,487.0 L 114.1,489.6 L 111.4,492.9 L 112.4,494.3 L 110.6,496.8 M 110.6,496.8 L 116.2,503.4 L 115.8,505.4 L 117.8,507.6 L 116.6,510.3 L 117.9,512.0 L 116.2,515.6 L 120.4,517.6 L 119.0,521.5 M 79.5,435.6 L 80.9,437.0 L 79.9,439.5 L 82.1,445.6 L 84.2,446.8 L 86.3,457.0 M 121.4,255.9 L 129.1,262.7 L 129.0,269.2 L 130.9,278.0 L 129.9,284.1 L 130.6,286.3 L 136.1,291.4 L 136.2,293.4 L 132.1,296.0 L 131.0,300.3 L 132.7,306.5 L 126.2,318.6 L 120.2,323.2 L 118.0,326.8 L 119.6,331.5 L 119.0,336.3 L 115.4,343.2 L 118.9,345.9 L 120.7,355.0 L 115.8,360.8 L 115.7,370.3 L 111.3,374.2 L 113.3,379.0 L 105.7,388.9 L 106.0,392.1 L 103.9,398.5 L 97.2,402.1 L 91.1,407.6 L 88.4,421.5 M 86.9,426.7 L 84.5,430.9 L 79.5,435.6 M 88.4,421.5 L 86.9,426.7" stroke="#3a7acc" stroke-width="2.5" fill="none"/>
  <circle class="mcd mpl" cx="121.4" cy="255.9" r="6" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.4"/>
</g>
<g id="mck-mcgaugh" data-creek="mcgaugh">
  <path class="mpk" d="M 144.7,352.9 L 143.6,354.2 L 143.0,366.0 L 136.5,370.9 L 135.3,374.8 M 153.4,269.0 L 155.3,272.3 L 154.9,275.0 L 153.8,275.3 L 153.1,273.2 L 150.1,276.2 L 153.9,276.3 L 155.2,277.8 L 152.5,282.4 L 154.6,294.3 L 152.5,295.0 L 148.5,299.5 L 151.8,305.2 L 150.7,311.5 L 154.9,315.9 M 148.9,348.0 L 148.6,352.6 L 144.7,352.9 M 157.8,329.0 L 158.9,328.2 L 159.4,322.6 L 157.8,318.7 L 154.9,315.9 M 157.8,329.0 L 155.8,332.0 L 154.5,339.7 L 148.9,348.0 M 154.9,315.9 L 153.5,318.3 L 157.8,329.0" stroke="#2e6ec0" stroke-width="1.8" fill="none"/>
  <circle class="mcd mpl" cx="153.4" cy="269.0" r="5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<g id="mck-kelsey" data-creek="kelsey">
  <path class="mpk" d="M 191.9,588.1 L 193.9,590.3 L 195.7,588.7 L 198.1,590.4 M 198.1,590.4 L 201.8,590.7 L 202.6,589.1 L 205.3,588.9 L 210.7,592.2 L 216.9,592.3 L 217.6,595.4 L 219.2,596.1 M 219.2,596.1 L 230.4,594.4 M 230.4,594.4 L 237.3,590.2 L 242.0,589.8 L 246.0,587.2 L 255.7,590.2 L 261.2,588.5 L 266.0,588.6 L 267.3,590.5 L 270.7,590.4 L 274.5,592.8 L 277.0,592.3 L 284.7,595.4 L 289.6,595.6 L 290.7,597.1 L 289.9,599.2 L 291.7,601.1 M 186.1,583.2 L 187.6,585.6 L 191.9,588.1 M 169.6,575.9 L 174.3,576.8 L 178.9,582.8 L 186.1,583.2 M 175.3,542.8 L 177.2,544.3 L 176.9,546.1 L 168.6,551.3 L 169.5,555.8 L 168.3,560.9 M 164.4,534.4 L 163.9,538.2 L 165.0,539.5 L 175.3,542.8 M 186.1,463.8 L 182.7,467.0 L 182.2,472.0 L 191.0,479.2 L 195.1,480.2 L 196.1,482.4 L 194.6,492.8 L 190.2,498.4 L 186.0,500.5 L 186.7,503.9 M 203.5,444.2 L 201.8,447.5 L 191.6,450.1 L 191.1,456.0 L 189.3,459.3 L 190.8,461.6 L 188.8,463.8 L 186.1,463.8 M 261.1,271.2 L 258.8,274.3 L 257.7,280.4 L 254.7,284.8 L 247.5,285.1 L 242.9,287.9 L 237.7,287.1 L 233.9,292.2 L 225.5,294.2 L 224.3,298.7 L 214.3,298.1 L 206.3,302.2 L 204.8,306.2 L 199.6,306.5 L 197.1,308.6 L 196.8,313.7 L 193.8,319.2 L 195.4,327.1 L 193.4,332.8 L 193.7,339.7 L 192.6,342.0 L 195.9,349.6 L 194.8,351.0 L 196.3,354.5 L 194.4,365.1 L 197.7,375.3 L 202.0,376.3 L 203.1,379.5 L 208.8,381.8 L 212.2,391.6 L 212.4,398.3 L 214.2,402.6 L 213.2,408.2 L 215.0,411.6 L 213.0,419.7 L 215.4,424.6 L 209.9,431.0 M 209.9,431.0 L 207.9,434.7 L 207.1,440.6 L 203.5,444.2 M 168.3,560.9 L 169.1,564.9 L 165.5,568.4 L 165.1,571.4 L 165.9,573.4 L 169.6,575.9 M 186.7,503.9 L 185.7,506.1 L 180.0,506.6 L 178.0,508.0 L 174.2,515.7 L 175.1,519.8 L 170.8,521.2 L 164.4,534.4" stroke="#4a8ae0" stroke-width="3.5" fill="none"/>
  <circle class="mcd mpl" cx="261.1" cy="271.2" r="7" fill="#1a5a98" stroke="#70c0f8" stroke-width="1.8"/>
</g>
<g id="mck-cole" data-creek="cole">
  <path class="mpk" d="M 466.6,597.0 L 464.4,600.2 M 449.5,579.4 L 451.7,579.4 L 454.5,581.5 L 455.6,585.5 L 460.9,591.6 M 460.9,591.6 L 462.1,592.9 L 464.1,592.4 L 466.6,597.0 M 389.0,541.0 L 392.4,543.0 L 392.8,544.5 L 397.5,546.2 L 399.7,549.3 L 430.1,563.7 L 431.8,566.2 L 443.2,573.2 L 443.9,577.0 L 448.3,578.9 M 300.6,517.8 L 308.7,520.3 L 313.3,520.0 L 321.7,526.0 L 327.3,522.9 L 328.4,524.0 L 336.1,524.7 L 338.5,528.8 L 340.6,528.7 L 354.8,536.4 L 363.0,535.2 L 369.7,537.6 L 376.1,538.2 L 381.1,536.4 L 386.2,538.4 L 389.0,541.0 M 258.7,456.9 L 265.8,459.3 L 267.3,462.5 L 271.8,466.1 L 271.3,469.6 L 274.3,473.0 L 275.6,472.9 L 277.8,480.4 L 281.3,485.3 L 282.2,488.3 L 280.7,490.0 L 281.9,490.8 L 281.0,492.6 L 284.9,497.7 L 283.9,498.9 L 284.5,500.3 L 290.0,506.3 L 291.6,505.8 L 293.2,507.1 L 293.9,509.6 L 296.8,511.4 L 295.9,514.3 L 299.8,515.7 L 300.6,517.8 M 245.9,454.4 L 252.8,457.7 L 255.4,455.9 L 258.7,456.9 M 261.4,329.5 L 264.8,330.4 L 264.2,348.0 L 266.7,351.9 L 258.8,356.8 L 255.7,357.7 L 249.2,357.1 L 248.2,358.5 L 238.7,361.4 L 231.8,365.7 L 226.6,366.3 L 224.5,371.5 L 224.4,372.8 L 231.7,374.4 L 229.9,375.9 L 229.8,378.8 L 236.0,388.3 L 235.9,392.0 L 230.6,396.8 L 231.3,399.6 L 229.8,401.4 L 230.7,403.4 L 228.5,405.6 L 232.0,407.6 L 231.5,410.6 L 234.7,411.9 L 237.9,415.3 L 238.1,417.3 L 240.5,419.3 L 240.2,422.1 L 242.5,424.3 L 238.8,428.2 L 242.4,429.7 L 239.2,433.0 L 238.8,438.6 L 240.1,440.8 L 237.6,443.6 L 238.2,445.9 M 238.2,445.9 L 239.6,449.3 L 243.5,451.6 L 244.5,454.3 L 245.9,454.4 M 260.3,283.0 L 258.1,286.9 L 260.5,291.3 L 260.6,296.7 L 256.3,301.2 L 250.4,302.5 L 250.5,305.4 L 249.3,306.8 M 249.3,306.8 L 251.5,309.4 L 251.7,314.6 L 253.7,319.6 L 257.3,323.0 L 259.0,328.9 L 261.4,329.5 M 261.4,329.5 L 268.5,327.8 L 273.8,329.5 L 277.3,332.0 L 278.3,338.2 M 464.4,600.2 L 464.2,601.0" stroke="#3a7acc" stroke-width="2.2" fill="none"/>
  <circle class="mcd mpl" cx="260" cy="283" r="5.5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>
<g id="mck-schindler" data-creek="schindler">
  <path class="mpk" d="M 593.4,273.2 L 598.6,258.1 L 598.7,249.6 L 595.5,244.4 L 595.6,240.5 L 597.2,237.8 L 590.0,232.3 M 590.0,232.3 L 585.7,234.2 L 576.9,233.1 L 573.9,241.9 L 568.7,244.5" stroke="#2e6ec0" stroke-width="2.0" fill="none"/>
  <circle class="mcd mpl" cx="593.4" cy="273.2" r="5.5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.3"/>
</g>
<g id="mck-seigler" data-creek="seigler_sys">
  <path class="mpk" d="M 510.8,596.0 L 518.6,598.0 L 524.8,596.0 L 533.7,601.2 L 576.4,600.9 M 576.4,600.9 L 580.1,600.4 L 582.5,596.7 L 587.4,594.2 L 594.9,593.5 M 594.9,593.5 L 600.4,588.5 L 598.9,584.9 L 597.0,584.1 L 597.3,583.0 M 597.3,583.0 L 597.9,577.7 L 595.8,573.9 L 597.5,572.5 L 597.7,570.1 L 599.7,568.7 L 602.1,569.6 L 605.6,568.7 M 684.3,537.2 L 691.4,538.2 L 698.4,536.6 L 704.8,537.8 L 706.8,534.0 L 712.4,533.4 L 714.4,531.2 L 718.9,530.7 L 722.1,528.5 L 721.0,526.4 L 723.4,522.1 L 723.2,519.4 L 718.6,515.7 L 721.0,513.1 L 717.2,507.9 L 717.7,504.6 L 716.3,501.8 L 717.9,496.3 M 656.8,547.1 L 657.4,542.7 M 657.4,542.7 L 657.9,540.3 L 662.7,538.6 L 668.5,541.3 M 640.1,560.3 L 648.5,557.2 L 651.1,550.0 L 655.0,549.0 L 656.8,547.1 M 605.6,568.7 L 609.7,569.5 L 613.1,567.7 L 616.3,568.2 L 617.3,566.2 L 620.4,568.7 L 623.5,568.7 L 628.7,565.7 L 631.6,566.2 L 640.1,560.3 M 668.5,541.3 L 671.8,538.9 L 678.0,540.7 L 681.8,539.5 L 682.0,536.9 L 684.3,537.2" stroke="#2a6898" stroke-width="2.0" fill="none"/>
  <circle class="mcd mpl" cx="663.5" cy="459.0" r="5.5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.2"/>
</g>

<!-- Rodman Slough confluence marker (where Scotts etc. enter the lake) -->
<g id="mck-rodman" data-creek="rodman">
  <circle class="mcd mpl" cx="151" cy="44" r="7" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.5"/>
</g>

<!-- Cache Creek (lake OUTFLOW) -->
<path d="M 673.8,481.0 L 676.3,480.5 L 679.7,484.5 L 684.8,486.4 L 680.5,483.9 L 679.7,482.1 L 686.6,484.1 L 685.7,486.6 L 687.3,487.3 L 688.9,485.1 L 688.5,487.7 L 690.0,488.4 L 691.3,486.2 L 690.9,489.0 L 698.4,491.2 L 700.3,494.1 L 714.8,496.6 L 724.2,495.1 L 728.3,499.8 L 729.9,499.8 L 729.8,498.6 L 733.1,503.4 L 740.7,504.3 L 745.1,507.4 M 717.9,496.3 L 711.4,496.8 L 706.9,499.4 L 707.0,496.6 L 705.5,496.2 L 703.6,498.6 L 700.8,498.7 L 699.4,496.8 L 702.9,494.9 L 699.8,494.8 L 698.2,492.0 L 696.3,491.5 L 695.7,495.1 L 692.6,495.1 L 692.4,491.1 L 689.4,489.0 L 685.9,490.7 L 683.5,488.4 L 683.5,486.9 L 680.5,485.5 L 674.6,490.4 L 678.9,485.4 L 675.8,481.5 L 662.8,482.0 L 660.6,484.2 L 656.0,484.2 M 745.2,508.4 L 740.4,504.9 L 737.3,505.2 L 731.8,503.4 L 730.4,500.8 L 727.0,499.9 L 723.9,495.8 L 717.9,496.3 M 655.5,482.4 L 660.0,482.5 L 662.4,480.0 L 673.8,481.0" stroke="#0e4870" stroke-width="3" fill="none" opacity=".6" stroke-linecap="round"/>

<!-- ============================== -->
<!-- CREEK LABELS                   -->
<!-- ============================== -->
<!-- North shore -->
<text x="153" y="37" font-size="7" fill="#4a8ae0" font-weight="600">Rodman Slough</text>
<!-- NW watershed tributaries -->
<text x="2" y="62" font-size="7.5" fill="#4a8ae0" font-weight="600">Scotts Cr.</text>
<text x="84" y="92" font-size="7" fill="#4a8ae0">Lyons Cr.</text>
<!-- NE upper arm -->
<text x="294" y="96" font-size="7.5" fill="#5ab2ee" font-weight="700">Morrison Cr.</text>
<text x="318" y="124" font-size="7.5" fill="#5ab2ee" font-weight="700">Lucerne Cr.</text>

<!-- West shore -->
<text x="2" y="218" font-size="8" fill="#5ab2ee" font-weight="700">Forbes Cr.</text>
<!-- South shore: labels offset below the shore edge -->
<text x="2" y="370" font-size="7.5" fill="#5ab2ee" font-weight="700">Manning Cr.</text>
<text x="2" y="388" font-size="7" fill="#5ab2ee" font-weight="700">Rumsey Slough</text>
<text x="40" y="445" font-size="7.5" fill="#5ab2ee" font-weight="700">Adobe Cr.</text>
<text x="82" y="440" font-size="7" fill="#5ab2ee" font-weight="700">McGaugh Sl.</text>
<text x="178" y="450" font-size="8" fill="#70c0f8" font-weight="700">Kelsey Cr.</text>
<text x="216" y="450" font-size="7.5" fill="#5ab2ee" font-weight="700">Cole Cr.</text>
<!-- Secondary upstream tributaries -->
<text x="82" y="352" font-size="7" fill="#3a7acc">Thompson Cr.</text>
<text x="202" y="358" font-size="7" fill="#3a7acc">Hill Cr.</text>
<text x="78" y="472" font-size="7" fill="#3a7acc">Highland Cr.</text>
<!-- East / Lower arm -->
<text x="600" y="268" font-size="7.5" fill="#5ab2ee" font-weight="700">Schindler Cr.</text>
<text x="616" y="393" font-size="7.5" fill="#5ab2ee" font-weight="700">Burns Valley Cr.</text>
<text x="668" y="454" font-size="7" fill="#3a7acc">Seigler Cyn.</text>
<text x="695" y="472" text-anchor="end" font-size="7" fill="#3a7acc">Copsey Cr.</text>
<text x="636" y="510" font-size="7" fill="#4a8ae0">Cache Cr. →</text>

<!-- ============================== -->
<!-- USGS GAUGE: Lakeport pier    -->
<!-- lon -122.916, lat 39.043      -->
<!-- SVG: (32, 224)                -->
<!-- ============================== -->
<rect x="42" y="219" width="9" height="9" fill="#f59e0b" rx="1.5" style="cursor:pointer" data-zone="usgs"/>
<text x="54" y="227" font-size="7" fill="#f59e0b">USGS Gauge</text>

<!-- ============================== -->
<!-- TOWN DOTS & LABELS            -->
<!-- ============================== -->
<!-- Nice: N shore of Upper Arm -->
<circle cx="172" cy="37" r="4" fill="#d8b830" stroke="#ead848" stroke-width="1.2" class="mcity" style="cursor:pointer" data-city="nice"/>
<text x="172" y="29" text-anchor="middle" font-size="9.5" fill="#d8b830" font-weight="600" pointer-events="none">Nice</text>

<!-- Lakeport: city dot, offset NW to avoid Forbes Creek overlap -->
<circle cx="20" cy="217" r="4.5" fill="#d8b830" stroke="#ead848" stroke-width="1.2" class="mcity" style="cursor:pointer" data-city="lakeport"/>
<text x="20" y="209" text-anchor="middle" font-size="9.5" fill="#d8b830" font-weight="600" pointer-events="none">Lakeport</text>

<!-- Lucerne: NE shore town -->
<circle cx="364" cy="125" r="3.5" fill="#d8b830" stroke="#ead848" stroke-width="1.2" class="mcity" style="cursor:pointer" data-city="lucerne_town"/>
<text x="364" y="118" text-anchor="middle" font-size="8.5" fill="#d8b830" font-weight="600" pointer-events="none">Lucerne</text>

<!-- Clearlake Oaks: lat 39.0263 lon -122.6719, NE end of Oaks Arm -->
<circle cx="582.8" cy="262.9" r="4.5" fill="#d8b830" stroke="#ead848" stroke-width="1.2" class="mcity" style="cursor:pointer" data-city="clearlake_oaks"/>
<text x="582.8" y="254.89999999999998" text-anchor="middle" font-size="9" fill="#d8b830" font-weight="600" pointer-events="none">Clearlake Oaks</text>

<!-- Kelseyville: inland S of lake -->
<circle cx="210" cy="395" r="4" fill="#d8b830" stroke="#ead848" stroke-width="1.2" class="mcity" style="cursor:pointer" data-city="kelseyville"/>
<text x="210" y="408" text-anchor="middle" font-size="9" fill="#d8b830" font-weight="600" pointer-events="none">Kelseyville</text>

<!-- City of Clearlake: SE shore -->
<circle cx="682" cy="421" r="4" fill="#d8b830" stroke="#ead848" stroke-width="1.2" class="mcity" style="cursor:pointer" data-city="clearlake_city"/>
<text x="682" y="412" text-anchor="middle" font-size="9" fill="#d8b830" font-weight="600" pointer-events="none">Clearlake</text>

<!-- ============================== -->
<!-- COMPASS + MINI-LEGEND          -->
<!-- ============================== -->
<g transform="translate(668,32)">
  <circle r="17" fill="#050e18" stroke="#1a3040" stroke-width="1"/>
  <text x="0" y="-4" text-anchor="middle" font-size="9" fill="#3a6080" font-weight="700">N</text>
  <path d="M0,-12 L0,-2" stroke="#7ec8e3" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M0,12 L0,2" stroke="#2a4060" stroke-width="1"/>
  <path d="M-12,0 L-2,0" stroke="#2a4060" stroke-width="1"/>
  <path d="M12,0 L2,0" stroke="#2a4060" stroke-width="1"/>
  <text x="0" y="19" text-anchor="middle" font-size="6" fill="#2a4060">S</text>
  <text x="-19" y="3" text-anchor="middle" font-size="6" fill="#2a4060">W</text>
  <text x="19" y="3" text-anchor="middle" font-size="6" fill="#2a4060">E</text>
</g>

<rect x="528" y="10" width="128" height="68" rx="5" fill="#040c18" opacity=".92"/>
<text x="536" y="24" font-size="7.5" fill="#2a5070" font-weight="700">CLICK ZONES &amp; CREEKS</text>
<circle cx="537" cy="35" r="5" fill="#1a5a98" stroke="#5ab2ee" stroke-width="1.3" class="mpl"/><text x="546" y="39" font-size="7.5" fill="#5ab2ee">Primary trib (lake entry)</text>
<line x1="531" y1="50" x2="545" y2="50" stroke="#2a6898" stroke-width="1.8" stroke-linecap="round"/><text x="549" y="54" font-size="7" fill="#3a7acc">Secondary tributary</text>
<circle cx="537" cy="65" r="3" fill="#0a2848" stroke="#3a7acc" stroke-width="1"/><text x="544" y="68" font-size="7" fill="#3a7acc">Confluence point</text>
</svg>

      </div>
      <div class="mpanel">
        <div class="mtabs">
          <div class="mtab on" data-tab="survey">Survey Data</div>
          <div class="mtab" data-tab="zone">Zone/Creek</div>
          <div class="mtab" data-tab="threats">Threats</div>
        </div>
        <div style="padding:8px 11px 0;flex-shrink:0"><input id="creekSearch" placeholder="Search creeks…" style="width:100%;padding:6px 10px;border-radius:8px;border:1px solid #1e3a52;background:#050e18;color:#7ec8e3;font-size:10px;outline:none"></div>
        <div class="mpane on" id="mpane-survey">
          <div class="msh">USGS GILLNET: LAKE ABUNDANCE</div>
          <div class="mcard"><h3>Relative Abundance 2017 to 2022</h3>
            <div class="mbr"><span class="mbl">2017</span><div class="mbt"><div class="mbf" style="width:100%;background:#7ec8e3"></div></div><span class="mbc" style="color:#7ec8e3">Baseline</span></div>
            <div class="mbr"><span class="mbl">2019</span><div class="mbt"><div class="mbf" style="width:55%;background:#a0c8d8"></div></div><span class="mbc" style="color:#a0c8d8">~55%</span></div>
            <div class="mbr"><span class="mbl">2021</span><div class="mbt"><div class="mbf" style="width:14%;background:#d06040"></div></div><span class="mbc" style="color:#d06040">~14%</span></div>
            <div class="mbr"><span class="mbl">2022</span><div class="mbt"><div class="mbf" style="width:4%;background:#c03030"></div></div><span class="mbc" style="color:#fca5a5">~4%</span></div>
            <p style="color:#fca5a5;font-size:9.5px;margin-top:4px">⚠ 96% decline 2017 to 2022 · ~100-fold decline overall</p>
          </div>
          <div class="msh">CDFW VISUAL SURVEYS (2013 to 2025)</div>
          <div class="mcard"><h3>Annual Spawner Totals</h3>
            <div class="myr-row"><span class="myr-label">2025</span><div class="myr-bar"><div class="myr-fill" style="width:62%;background:#7ec8e3"></div></div><span class="myr-val" style="color:#7ec8e3">1,567</span></div>
            <div class="myr-row"><span class="myr-label">2024</span><div class="myr-bar"><div class="myr-fill" style="width:41%;background:#7ec8e3"></div></div><span class="myr-val" style="color:#7ec8e3">1,042</span></div>
            <div class="myr-row"><span class="myr-label">2023</span><div class="myr-bar"><div class="myr-fill" style="width:100%;background:#6ee7b7"></div></div><span class="myr-val" style="color:#6ee7b7">2,548★</span></div>
            <div class="myr-row"><span class="myr-label">2022</span><div class="myr-bar"><div class="myr-fill" style="width:12%;background:#d08040"></div></div><span class="myr-val" style="color:#d08040">306</span></div>
            <div class="myr-row"><span class="myr-label">2021</span><div class="myr-bar"><div class="myr-fill" style="width:5%;background:#c03030"></div></div><span class="myr-val" style="color:#fca5a5">120</span></div>
            <div class="myr-row"><span class="myr-label">2020</span><div class="myr-bar"><div class="myr-fill" style="width:66%;background:#7ec8e3"></div></div><span class="myr-val" style="color:#7ec8e3">1,672</span></div>
            <div class="myr-row"><span class="myr-label">2019</span><div class="myr-bar"><div class="myr-fill" style="width:24%;background:#a0b8c8"></div></div><span class="myr-val" style="color:#a0b8c8">612</span></div>
            <div class="myr-row"><span class="myr-label">2018</span><div class="myr-bar"><div class="myr-fill" style="width:45%;background:#7ec8e3"></div></div><span class="myr-val" style="color:#7ec8e3">1,153</span></div>
            <div class="myr-row"><span class="myr-label">2017</span><div class="myr-bar"><div class="myr-fill" style="width:20%;background:#a0b8c8"></div></div><span class="myr-val" style="color:#a0b8c8">517</span></div>
            <div class="myr-row"><span class="myr-label">2016</span><div class="myr-bar"><div class="myr-fill" style="width:27%;background:#a0b8c8"></div></div><span class="myr-val" style="color:#a0b8c8">693</span></div>
            <div class="myr-row"><span class="myr-label">2014</span><div class="myr-bar"><div class="myr-fill" style="width:44%;background:#7ec8e3"></div></div><span class="myr-val" style="color:#7ec8e3">1,119</span></div>
            <div class="myr-row"><span class="myr-label">2013</span><div class="myr-bar"><div class="myr-fill" style="width:20%;background:#c03030"></div></div><span class="myr-val" style="color:#fca5a5">&lt;500</span></div>
            <p style="color:#7fa3bd;font-size:9px;margin-top:5px">★ Record. 11-yr avg: 1,032.</p>
          </div>
          <div class="msh">LAKE COUNTY WPD + COMMUNITY SCIENCE</div>
          <div class="mcard"><h3>WPD 2024: 10 Tributaries</h3>
            <div class="mdr"><span class="mdl">Copsey Cr.</span><span class="mdv mdg">Adults Mar to May</span></div>
            <div class="mdr"><span class="mdl">Forbes Cr.</span><span class="mdv mdg">Adults Apr 18</span></div>
            <div class="mdr"><span class="mdl">Hendricks Cr.</span><span class="mdv mdg">Adults Apr 2</span></div>
            <div class="mdr"><span class="mdl">Burns Valley</span><span class="mdv mdg">~4,000 juveniles</span></div>
            <div class="mdr"><span class="mdl">Total larvae YOY</span><span class="mdv">4,554</span></div>
            <div class="mdr"><span class="mdl">Seigler Canyon</span><span class="mdv mdw">None (~2004)</span></div>
          </div>
        </div>
        <div class="mpane" id="mpane-zone"><div id="mzone-disp"><div class="mph"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l2.5 2.5"/></svg><p style="font-size:10.5px;margin-top:7px;color:#7fa3bd">Click any lake zone or creek to load info.</p></div></div></div>
        <div class="mpane" id="mpane-threats">
          <div class="mcard"><h3>Spawning Habitat Loss</h3><span class="mtag mtw">Critical</span><p style="margin-top:5px">Tributaries run dry before juveniles emigrate. 9 documented barriers. Big Valley groundwater pumping under CA State Water Board reporting orders (Jan 2024).</p></div>
          <div class="mcard"><h3>Invasive Species</h3><span class="mtag mtw">High</span><p style="margin-top:5px">~20 introduced species. Bass and catfish prey on juveniles; carp and goldfish consume hitch eggs.</p></div>
          <div class="mcard"><h3>Climate Change</h3><span class="mtag mtw">Critical</span><p style="margin-top:5px">Dr. Peter Moyle (UC Davis): hitch is "extremely likely to be driven to extinction by 2100." Three consecutive drought years caused near-complete spawning failure.</p></div>
          <div class="mcard"><h3>Harmful Algal Blooms</h3><span class="mtag mtw">High</span><p style="margin-top:5px">Severe annual cyanobacterial blooms crash dissolved oxygen and devastate juvenile fish survival.</p></div>
          <div class="mcard"><h3>Legal Timeline</h3><span class="mtag mtd">Status</span>
            <div class="mdr" style="margin-top:5px"><span class="mdl">CA Threatened listing</span><span class="mdv">2014</span></div>
            <div class="mdr"><span class="mdl">Lake Co. emergency</span><span class="mdv mdw">Feb 2023</span></div>
            <div class="mdr"><span class="mdl">Federal ESA proposed</span><span class="mdv mdw">Jan 2025</span></div>
          </div>
        </div>
        <div class="msrc"><a href="https://www.usgs.gov/centers/california-water-science-center" target="_blank">USGS CAWSC</a> · <a href="https://pubs.usgs.gov/publication/ofr20251018" target="_blank">OFR 2025-1018</a> · <a href="https://www.lakecountyca.gov/1450/Clear-Lake-Hitch" target="_blank">Lake Co. WPD</a> · <span style="color:#6a8aa0">GeoJSON: Lake Co. GIS</span></div>
      </div>
    </div>
  </div>
</div>
`
