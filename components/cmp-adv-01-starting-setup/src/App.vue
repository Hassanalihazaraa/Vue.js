<template>
  <div>
    <!-- either Pascal-case or kebab-case on the component tags eg: <TheHeader /> -->
    <the-header></the-header>
    <!--    <badge-list></badge-list>
        <user-info
            :full-name="activeUser.name"
            :info-text="activeUser.description"
            :role="activeUser.role"
        ></user-info>
        <course-goal #default="slotProps">
          <h2>{{ slotProps.item }}</h2>
          <p>{{ slotProps['another-props'] }}</p>
        </course-goal>-->
    <button @click="setSelectedComponent('active-goals')">Active Goals</button>
    <button @click="setSelectedComponent('manage-goals')">Manage Goals</button>
    <!--    <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
        <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>-->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';
/*import UserInfo from './components/UserInfo.vue';
import BadgeList from './components/BadgeList.vue';
import CourseGoal from "@/components/CourseGoal";*/
import ActiveGoals from "@/components/ActiveGoals";
import ManageGoals from "@/components/ManageGoals";


export default {
  components: {
    // either this kebab-case
    //'the-header': TheHeader,
    //or Pascal-case
    //TheHeader: TheHeader
    TheHeader,
    /*BadgeList,
    UserInfo,
    CourseGoal,*/
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Maximilian Schwarzmüller',
        description: 'Site owner and admin',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>