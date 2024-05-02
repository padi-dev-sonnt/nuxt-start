<template>
  <div class="login-page-wrapper">

    <img class="brand-buddies-logo"
         src="./src/asset/images/brand-buddies.png"/>

    <div class="form">
      <div class="login-title">
        <p class="top-line">
          BrandBuddies
        </p>
        <p>
          にログインする
        </p>
      </div>

      <div class="input-container">
        <div class="input-label">
          メールアドレス
        </div>
        
        <div class="input-field">
          
        </div>

        <div class="input-label password-label">
          パスワード
        </div>

        <div class="input-field">

        </div>

        <div class="text-link"
             @click="handleForgotPassword()">
          Forgot password?
        </div>

        <div class="remember-password-row">
          <div class="checkbox"
               @click="handleRememberPassword()"/>
          Remember password?
        </div>

        <div class="button-login"
             @click="handleLogin()">
          Log in
        </div>

        <div class="element-out-of-box">
          <div class="regist-suggestion">
            Dont have an account?
          </div>
          <div class="sign-up-btn"
               @click="handleSignUp()">
            Sign Up
          </div>
        </div>
      </div>
    </div>

    <div class="login-page">
      <img class="background-image"
           src="./src/asset/images/background.jpg"/>
    </div>
  </div>
</template>

<script setup>
  function handleForgotPassword() {
    console.log('get into fn handleForgotPassword() ')
    //  TODO: what expected
  }

  function handleRememberPassword() {
    console.log('get into fn handleRememberPassword() ')
    //  TODO: what expected

  }

  function handleLogin() {
    console.log('get into fn handleLogin() ')
  //  TODO: call api login here
  //  TODO: if pass through redict to where
  }

  function handleSignUp() {
    console.log('get into fn handleSignUp() ')
  //  TODO: what expected (go other route ? )
  }
</script>

<style lang="scss" scoped>

.login-page-wrapper {
  width: 100%;
  height: 100vh;
  text-align: -webkit-center;
  margin: -8px;
  --text-color: #161823;
  --button-primary: #169BC5;
  --global-font: 'exo 2';
  font-family: var(--global-font);

  .brand-buddies-logo {
    margin-top: 5.25rem;
    position: sticky;
    z-index: 10;
  }

  .form {
    background: white;
    margin-top: 2.0625rem;
    position: sticky;
    z-index: 10;
    border-radius: 10px;
    box-shadow: 0 0 20px 0 #44667E26;
    width: 440px;
    height: 480px;

    .input-container {
      width: 360px;
      height: 400px;
      text-align: left;
      .input-label {
        color: var(--text-color);
        margin-top: 1.625rem;
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 0.875rem;
      }
      .input-field {
        height: 50px;
        border: 1px solid #B5B5B5;
        border-radius: 5px;
        line-height: 50px;
        margin-top: 0.5rem;
      }
      .password-label {
        margin-top: 1.375rem;
      }

      .remember-password-row {
        display: flex;
        margin-top: 1.5rem;
        .checkbox {
          margin-right: 0.5rem;
          width: 16px;
          height: 16px;
          border: 1px solid #777;
          border-radius: 4px;
        }
      }

      .button-login {
        margin-top: 2.3125rem;
        cursor: pointer;
        color: white;
        border-radius: 0.625rem;
        height: 3.125rem;
        width: 12.5rem;
        background: var(--button-primary);
        text-align: center;
        font-weight: 700;
        line-height: 3.125rem;
        left: 50%;
        font-size: 1.125rem;
        transform: translateX(-50%);
        position: relative;
      }

      .element-out-of-box {
        margin-top: 3.0625rem;
        height: 0.6875rem;
        line-height: 0.6875rem;
        width: 14.875rem;
        left: 50%;
        transform: translateX(-50%);
        position: relative;
        font-size: 1rem;
        display: flex;
        justify-content: space-between;

        .regist-suggestion {
          color: #757575;
          font-weight: 400;
          width: fit-content;
        }
        .sign-up-btn {
          color: #006F98;
          font-weight: 700;
          cursor: pointer;
          width: fit-content;
        }
      }

      .text-link {
        color: #00A2FF;
        height: 0.625rem;
        line-height: 0.625rem;
        font-size: 0.875rem;
        font-weight: 400;
        margin-top: 1rem;
        cursor: pointer;
        width: fit-content;
      }
    }

    .login-title {
      display: inline-block;
      margin-top: 2.6875rem;
      color: #2876B0;
      font-size: 2rem;
      font-weight: 700;
      height: 3.75rem;

      .top-line {
        letter-spacing: 0.05rem;
        margin-top: -0.6875rem;
      }

      p {
        margin: 0;
        line-height: 2.125rem;
      }
    }
  }

  .login-page {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100vh;
    text-align: -webkit-center;
    background-color: #D6F3FF;

    .background-image {
      opacity: 0.5;
      top: 0;
      position: sticky;
      z-index: 1;
      object-fit: cover;
      height: inherit;
      width: inherit;
    }
  }
}
</style>