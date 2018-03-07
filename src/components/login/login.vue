<template>
  <v-app>
    <div class="main">
      <v-toolbar>
        <v-avatar class="teal">
          <span class="white--text headline">S</span>
        </v-avatar>
        <v-toolbar-title>UNIVERSITY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn flat>Documentation</v-btn>
        </v-toolbar-items>
      </v-toolbar>

      <v-container fluid fill-height style="margin-top:100px;">
        <v-layout row wrap class="text-lg-center">
          <v-flex lg6 offset-lg3>

            <v-card>
              <v-layout>
                <v-flex lg5>
                  <!-- left-side -->
                  <div style="background-color:lightyellow;height:100%">

                    <div class="student_name">
                      <i class="material-icons" style="font-size:38px;padding:2px">account_circle</i>
                      <span>STUDENT</span>
                    </div>
                    <div class="login_area">
                      <span>LOG IN</span>
                    </div>
                    <div class="reset_password">
                      <a href="#"> Reset your Account Password</a>
                    </div>
                  </div>

                </v-flex>

                <v-flex lg7>
                  <!-- right side -->
                  <div style="background-color:#EAFDFD;">
                    <v-card-text>
                      <v-form v-model="valid" method="post" action="/something" id="nativeForm">

                        <div class="user_login text-xs-left">
                          <v-text-field prepend-icon="person" name="login" label="User-Email" type="login" v-model="email" :rules="emailRules" class="useremail"></v-text-field>
                          <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password" v-model="password" :rules="passwordRules"></v-text-field>
                        </div>
                      </v-form>

                    </v-card-text>

                    <v-card-actions>
                      <div class="login_button">
                        <v-btn class="button" @click="submit" :disabled="!valid">Log in</v-btn>


                        <!-- <button type="submit" value="Login">login</button> -->
                      </div>
                    </v-card-actions>


                  </div>

                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
  </v-app>
</template>
<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        valid: false,

        emailRules: [v => !!v || '*User-Email is required',
          (v) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'User-Email must be valid'
        ],
        passwordRules: [v => !!v || '*Password is required'],



      }
    },
    methods: {
      submit() {
        nativeForm.submit()
      }
    },
    computed: {
      valid: function () {
        return this.name != '' && this.email != ''
      }
    }
  }

</script>
<style scoped>
  .student_name {
    font-family: Roboto;
    font-size: 33px;
    font-weight: 100;
    padding: 15px;
    border-bottom: 1px solid #999797;
  }

  .login_area {
    padding: 10px;
    font-family: Roboto;
    font-size: 33px;
    font-weight: 100;
  }

  .reset_password {
    font-family: Roboto;
    font-size: 15px;
    font-weight: 400;
    height: 23px;
    margin-top: 128px;
    letter-spacing: 1px;
    padding-left: 5px;
  }

  a {
    text-decoration: none;
  }

  .user_login {
    font-family: roboto;
    font-weight: 400;
    font-size: 15px;
    margin-top: 35px;

  }

  .login_button {

    width: 100%;
    height: 75px;
    padding-top: 15px;
    margin-top: 20px;
    margin-left: -3px;
  }

  .button {
    width: 100%;
    height: 71px;
    border-top: 1px solid #C5C4C4;
    font-size: 25px;
    font-family: roboto;
    font-weight: 400;
    background: #D1F5F1;
    color: #3A3636;
  }

</style>
