<template>
<div id="app">
    <v-app class="hgt">
        
        

        <v-navigation-drawer permanent>
            <v-flex>
                <v-card>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales</div>
                        </div>
                    </v-card-title>

                </v-card>

            </v-flex>
            <div class="sticky">
                <v-card-actions>
                    <v-btn flat color="orange">Share</v-btn>
                    <v-btn flat color="orange">Explore</v-btn>
                </v-card-actions>
            </div>
            <v-divider></v-divider>
            <v-list class="pt-0">

                <v-expansion-panel focusable>

                    <v-expansion-panel-content v-for="(item,i) in items" :key="i" class="grey lighten-3">
                        <div slot="header">
                            <v-icon class="mr-4">{{item.icon}}</v-icon>{{item.title}}</div>
                        <v-expansion-panel>
                            <v-expansion-panel-content v-for="(sitem,j) in item.smenu1" :key="j" class="grey lighten-2">
                                <div slot="header">
                                    <v-icon class="mr-4">{{sitem.icon}}</v-icon>{{sitem.title}}</div>
                                <v-expansion-panel>
                                    <v-expansion-panel-content v-for="(ssitem,k) in sitem.smenu2" :key="k" expand-icon="" class="grey lighten-1">
                                        <div slot="header">
                                            <v-icon class="mr-4">{{ssitem.icon}}</v-icon>{{ssitem.title}}</div>
                                    </v-expansion-panel-content>

                                </v-expansion-panel>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-list>
        </v-navigation-drawer>
    </v-app>
</div>
</template>
<script>
      export default {
    data() {
            return {
                items: [
                    {
                        title: "Parent 1",
                        icon: "dashboard",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 2",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 3",
                        icon: "dashboard",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 5",
                        icon: "dashboard",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                    {
                        title: "Parent 4",
                        icon: "question_answer",
                        smenu1: [
                            {
                                title: "Child 1",
                                icon: "question_answer",
                                smenu2: [
                                    { title: "Grandchild 1", icon: "question_answer" },
                                    { title: "Grandchild 2", icon: "question_answer" }
                                ]
                            },
                            { title: "Child 2", icon: "question_answer" }
                        ]
                    },
                ],
                right: null
            };
        }
      }

</script>
<style scoped>
.hgt{
  height: 20vh;
}

.hgt::-webkit-scrollbar{
  width: 2px;
}
.sticky{
  background: yellow;
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>