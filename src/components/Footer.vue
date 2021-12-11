<template>
  <footer class="py-5">
    <div class="container footer-content mt-3">
      <div class="row">
        <div class="footer-left col-md-9">
          <router-link to="/" class="logo">
            <img src="../assets/img/logo.png" />
          </router-link>
          <pre>
            本網站以推廣台灣籃球為理念創作
            對於近期籃壇發展感到興奮與期待
            期許鼓勵球迷促成籃球文化的建立
            進而讓台灣籃球躍上國際
          </pre>
        </div>
        <div class="footer-right col-md-3">
          <p>相關連結</p>
          <div class="footer-icon">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/PLEAGUE.official"
                  target="_blank"
                  ><font-awesome-icon :icon="['fab', 'facebook-square']"
                /></a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/p.league.official/?fbclid=IwAR0N6N2QygJvYA53GmHf6D9aPG4gpik4bIfUot5WNij0rWmOkJe8EiqaPBk"
                  target="_blank"
                  ><font-awesome-icon :icon="['fab', 'instagram']"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="footer-copyright">
          <p class="text-center">
            © Copyright 2021 TB Inc. 本站僅供個人使用 無商業用途
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
