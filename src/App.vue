<script setup>
const pageTitle = `Bill Splitter`;
</script>

<template>
  <h1 id="pageTitle">{{ pageTitle }}</h1>
  <article class="card">
    <div class="row">
      <div id="billForm" class="col">
        <label class="input">
          Bill
          <input type="number" />
        </label>
        <div>
          <div id="tipSelectorTitle">Tip %</div>
          <div id="tipSelector" class="row">
            <div class="col">
              <button>5%</button>
            </div>
            <div class="col">
              <button>10%</button>
            </div>
            <div class="col">
              <button class="active">15%</button>
            </div>
            <div class="col">
              <button>20%</button>
            </div>
          </div>
        </div>
        <label class="input">
          Number of People
          <input type="number" />
        </label>
      </div>
      <div class="col">
        <div id="resultsContainer" class="card dark">
          <div id="outputValuesContainer">
            <div>
              <div class="outputLabel">Tip Amount <small>/ person</small></div>
              <div class="outputValue">123.00€</div>
            </div>
            <div>
              <div class="outputLabel">Total <small>/ person</small></div>
              <div class="outputValue">250.99€</div>
            </div>
          </div>
          <button id="resetButton">Reset</button>
        </div>
      </div>
    </div>
  </article>
</template>
