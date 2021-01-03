<template>
  <base-card>
    <base-button @click="setSelectedTab('stored-resources')" :mode="storedResourceButtonMode">
      Stored Resources
    </base-button>
    <base-button @click="setSelectedTab('add-resource')" :mode="addResourceButtonMode">Add Resource</base-button>
  </base-card>
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
import StoredResources from "@/components/learning-resources/StoredResources";
import AddResource from "@/components/learning-resources/AddResource"

export default {
  components: {
    BaseCard,
    StoredResources,
    AddResource,
  },
  data() {
    return {
      selectedTab: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'official-guide',
          description: 'the official Vue js documentation.',
          link: 'https://vuejs.org/'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to google',
          link: 'https://google.com/'
        },
      ]
    }
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
    }
  },
  computed: {
    storedResourceButtonMode() {
      return this.selectedTab === 'stored-resources' ? null : 'flat'
    },
    addResourceButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat'
    }
  },
  methods: {
    setSelectedTab(tab) {
      this.selectedTab = tab
    },
    addResource(title, description, url) {
      const newResource = {
        id: new Date().toISOString(),
        title: title,
        description: description,
        link: url
      }
      this.storedResources.unshift(newResource)
      this.selectedTab = 'stored-resources'
    },
    // eslint-disable-next-line no-unused-vars
    deleteResource(resourceId) {
      const resourceIndex = this.storedResources.findIndex(resource => resource.id)
      this.storedResources.splice(resourceIndex, 1)
      console.log(this.storedResources)
    }
  }
}
</script>