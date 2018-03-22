<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer fixed :clipped="$vuetify.breakpoint.mdAndUp" app v-model="drawer" class="scroll grey lighten-3">
        <div class="sticky">
          <v-container fluid align-baselined style="padding: 5% 0;" class="blue-grey lighten-1">
            <v-layout row wrap text-xs-left>
              <v-flex lg12 xs12>
                <h3 class="pt-1 pb-1 nav-text">
                  harry porter
                </h3>
              </v-flex>

            </v-layout>
            <v-layout row wrap text-xs-left>
              <v-flex lg12 xs12>
                <h3 class="pt-1 pb-1 nav-text">
                  {{ reg }}
                </h3>
              </v-flex>

            </v-layout>
          </v-container>
          <!-- <hr> -->
          <v-container style="padding: 3% 0;">
            <v-layout row>

              <v-flex lg4 xs4 v-for="(icon,i) in icons" :key="i">
                <v-btn small block fab flat depressed class="center" color="white">
                  <v-icon medium>{{ icon }}</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>

          </v-container>
        </div>
        <v-divider></v-divider>

        <v-list dense>
          <v-expansion-panel focusable expand>

            <v-expansion-panel-content v-for="(item,i) in items" :key="i" class="grey lighten-3">
              <div slot="header">
                <v-icon class="mr-4" small>{{item.icon}}</v-icon>{{item.title}}</div>

              <div class="grey lighten-2">
                <v-expansion-panel class="shift">
                  <v-expansion-panel-content v-for="(sitem,j) in item.smenu1" :key="j" class="grey lighten-2" hide-actions>
                    <div slot="header">
                      <v-icon class="mr-4" small>{{sitem.icon}}</v-icon>{{sitem.title}}</div>

                  </v-expansion-panel-content>
                </v-expansion-panel>
              </div>
            </v-expansion-panel-content>
          </v-expansion-panel>

        </v-list>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="blue-grey darken-2" dark app :clipped-left="$vuetify.breakpoint.mdAndUp" fixed>
        <v-toolbar-title style="width: 100px" class="ml-0 pl-0">
          <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
          <span class="hidden-sm-and-down">{{ logo }}</span>
        </v-toolbar-title>
      </v-toolbar>



    </v-app>
  </div>

</template>

<script>
  export default {
    data: () => ({
      name: "Harry Porter",
      logo: "logo",

      drawer: null,
      icons: [
        "date_range",
        "event",
        "power_settings_new"
      ],
      reg: "RA16111000031",
      items: [{
          title: "PROFILE",
          icon: "dashboard",
          smenu1: [{
              title: "GENERAL",
              icon: "question_answer"
            },
            {
              title: "HOSTELS",
              icon: "question_answer"
            },
            {
              title: "TRANSPORT",
              icon: "question_answer"
            },
            {
              title: "PROFILE UPDATE",
              icon: "question_answer"
            }
          ]
        },
        {
          title: "ACADEMIC",
          icon: "question_answer",
          smenu1: [{
              title: "ATTENDANCE",
              icon: "question_answer"
            },
            {
              title: "CREDIT/MARKS",
              icon: "question_answer"
            },
            {
              title: "ARREAR",
              icon: "question_answer"
            },
            {
              title: "PERFORMANCE",
              icon: "question_answer"
            },
            {
              title: "SYLLABUS",
              icon: "question_answer"
            }
          ]
        },
        {
          title: "FINANCIAL DETAILS",
          icon: "question_answer",
          smenu1: [{
              title: "FEE STRUCTURE",
              icon: "question_answer"
            },
            {
              title: "FEE PAID",
              icon: "question_answer"
            },
            {
              title: "FEE DUE",
              icon: "question_answer"
            }
          ]
        },
        {
          title: "DEFAULTERS",
          icon: "question_answer",
          smenu1: [{
              title: "MALPRACTICE",
              icon: "question_answer"
            },
            {
              title: "DETENTION",
              icon: "question_answer"
            },
            {
              title: "MISBEHAVIOUR",
              icon: "question_answer"
            }
          ]
        },
        {
          title: "FEEDBACK",
          icon: "dashboard"
        }
      ],
      right: null
    }),
    props: {
      source: String
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #app {
    margin-left: 0;

    position: absolute;
    /* width: 20%; */
  }

  .nav-text {
    letter-spacing: 0.2em;
    margin-left: 20px;
    text-transform: uppercase;
    color: white;
  }

  /* .name-reg{
     background: #546E7A
  }  */

  .shift {
    padding-left: 10px;
    margin-left: 0;
  }

  .scroll::-webkit-scrollbar {
    /* width: 2px!important; */
    display: none !important;

  }

  .center {
    margin: 0 auto;
    margin-top: 5px;
  }

  .sticky {
    background: #455A64;
    position: sticky;
    top: 0;
    z-index: 999;
    width: 100%;
    /* border-bottom: 1px solid black; */
    padding: 0px;
    margin: 0;

  }

</style>
