<template>
  <div class="home">
    <div class="head"></div>
    <header>
      <img src="../assets/Logo.png" alt="" srcset="">
    </header>
    <div class="body">
      <div class="backgrond">
        <h1>
          Welcome to <br>
          Business Analytics Online
        </h1>
      </div>
       <VueLogin/>
      <div class="info">
        <p>
          <span>Business Analytics</span>  — a new, convenient tool for managing and forecasting your business <br> 
          performance, which will help analyze your own finances and cash flows, visualize your <br>
          reporting, business processes, KPI's
        </p>
        <div>
          <img src="../assets/Vector.png" alt="" srcset="">
          <span>Interactive Reporting</span>
          <p>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), <br> 
            E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more <br> 
            systems that reflect different aspects of business activities.</p>
        </div>
        <div>
          <img src="../assets/Vector.png" alt="" srcset="">
          <span>Automated data updates</span>
          <p>The application automatically updates and <br> 
            structures the data in just 60 seconds, saving you time and money.</p>
        </div>
        <div>
          <img src="../assets/Vector.png" alt="" srcset="">
          <span>Data Security</span>
          <p>The Bank guarantees the safety of your personal data, ensuring their integrity and confidentiality.</p>
        </div>
      </div>
    </div>
    <footer>
      <div class="footNav">
        <img src="../assets/Logo.png" alt="" srcset="">
        <nav>
          <a href="">Terms & Conditions</a>
          <a href="">Privacy</a>
          <a href="">Notice at Collection</a>
          <a href="">CA Privacy Hub</a>
          <a href="">Contact Us</a>
          <a href="">Sitemap</a>
        </nav>
      </div>
      <p>
Copyright © 2020 Citigroup Inc. Citibank, N.A. Member FDIC. Equal Opportunity Lender.</p>
    </footer>
   
  </div>
</template>

<script>
// @ is an alias to /src
import VueLogin from '@/components/VueLogin.vue'

export default {
  name: 'HomeView',
  components: {
    VueLogin
  }
}
</script>
