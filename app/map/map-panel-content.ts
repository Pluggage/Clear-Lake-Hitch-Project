/* Survey and threats panel content for the interactive map. */
export const SURVEY_HTML = `
<div class="msh">USGS GILLNET: LAKE ABUNDANCE</div>
          <div class="mcard"><h3>Relative Abundance 2017 to 2022</h3>
            <div class="mbr"><span class="mbl">2017</span><div class="mbt"><div class="mbf" style="width:100%;background:#7ec8e3"></div></div><span class="mbc" style="color:#7ec8e3">Baseline</span></div>
            <div class="mbr"><span class="mbl">2019</span><div class="mbt"><div class="mbf" style="width:55%;background:#a0c8d8"></div></div><span class="mbc" style="color:#a0c8d8">~55%</span></div>
            <div class="mbr"><span class="mbl">2021</span><div class="mbt"><div class="mbf" style="width:14%;background:#d06040"></div></div><span class="mbc" style="color:#d06040">~14%</span></div>
            <div class="mbr"><span class="mbl">2022</span><div class="mbt"><div class="mbf" style="width:4%;background:#c03030"></div></div><span class="mbc" style="color:#fca5a5">~4%</span></div>
            <p style="color:#fca5a5;font-size:12px;margin-top:4px">⚠ 96% decline 2017 to 2022 · ~100-fold decline overall</p>
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
            <p style="color:#7fa3bd;font-size:12px;margin-top:5px">★ Record. 11-yr avg: 1,032.</p>
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
`

export const THREATS_HTML = `
<div class="mcard"><h3>Spawning Habitat Loss</h3><span class="mtag mtw">Critical</span><p style="margin-top:5px">Tributaries run dry before juveniles emigrate. 9 documented barriers. Big Valley groundwater pumping under CA State Water Board reporting orders (Jan 2024).</p></div>
          <div class="mcard"><h3>Invasive Species</h3><span class="mtag mtw">High</span><p style="margin-top:5px">~20 introduced species. Bass and catfish prey on juveniles; carp and goldfish consume hitch eggs.</p></div>
          <div class="mcard"><h3>Climate Change</h3><span class="mtag mtw">Critical</span><p style="margin-top:5px">Dr. Peter Moyle (UC Davis): hitch is "extremely likely to be driven to extinction by 2100." Three consecutive drought years caused near-complete spawning failure.</p></div>
          <div class="mcard"><h3>Harmful Algal Blooms</h3><span class="mtag mtw">High</span><p style="margin-top:5px">Severe annual cyanobacterial blooms crash dissolved oxygen and devastate juvenile fish survival.</p></div>
          <div class="mcard"><h3>Legal Timeline</h3><span class="mtag mtd">Status</span>
            <div class="mdr" style="margin-top:5px"><span class="mdl">CA Threatened listing</span><span class="mdv">2014</span></div>
            <div class="mdr"><span class="mdl">Lake Co. emergency</span><span class="mdv mdw">Feb 2023</span></div>
            <div class="mdr"><span class="mdl">Federal ESA proposed</span><span class="mdv mdw">Jan 2025</span></div>
          </div>
`
