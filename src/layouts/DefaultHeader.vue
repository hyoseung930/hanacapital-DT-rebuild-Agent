<template>
  <header>
    <nav>
      <h1 class="logo">하나캐피탈</h1>

      <ul class="menulist">
        <li class="on">
          <RouterLink to="#">내구재할부</RouterLink>
        </li>
        <li>
          <RouterLink to="#">할부승계</RouterLink>
        </li>
        <li>
          <RouterLink to="#">채권양수도</RouterLink>
        </li>
        <li>
          <RouterLink to="#">선정산</RouterLink>
        </li>
      </ul>

      <div class="member">
        <div><span class="member-name">김하나</span>님</div>
        <div class="member-bar"></div>
        <div><RouterLink to="#">비밀번호 변경</RouterLink></div>
        <div class="member-bar"></div>
        <div><RouterLink to="#">주소지/연락처 변경</RouterLink></div>
        <div class="member-bar"></div>
        <div><RouterLink to="#">로그아웃</RouterLink></div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
@import '@/assets/scss/layouts/DefaultHeader.scss';
</style>
