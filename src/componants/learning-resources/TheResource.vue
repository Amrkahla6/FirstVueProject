<template>
    <base-card>
        <base-button @click="setSeletedTab('stored-resources')" :mode="storedRestButtonMood">Stored Resources</base-button>
        <base-button @click="setSeletedTab('add-resource')"     :mode="AddRestButtonMood">Add Resource</base-button>
    </base-card>

    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
   
</template>

<script>

    import StoredResources from './StoredResources.vue';
    import AddResource     from './AddResource.vue';

    export default {
        components : {
            StoredResources,
            AddResource
        },
        data(){
            return{
                selectedTab: 'stored-resources',
                storedResources : [
                        {
                            id    : 'official-guide',
                            title : 'Official Guide',
                            description : 'The official vue.js documentation.',
                            link  : 'https://vuejs.org/'
                        },
                        {
                            id    : 'google',
                            title : 'Google',
                            description : 'Learn to google.',
                            link  : 'https://www.google.com/'
                        },
                    ]
            }
        },provide(){
            return {
                resources : this.storedResources,
                AddResource : this.AddResource,
                deleteResource : this.RemoveResource
            }
        },computed:{
            storedRestButtonMood()
            {
                return this.selectedTab =='stored-resources' ? null : 'flat';
            },AddRestButtonMood()
            {
                return this.selectedTab =='add-resource'     ? null : 'flat'
            }
        },methods:{
            setSeletedTab(tab)
            {
                this.selectedTab = tab;
            },AddResource(title,description,link){

                const newResource = {
                    id : new Date().toISOString(),
                    title : title,
                    description : description,
                    link: link
                };

                this.storedResources.unshift(newResource);
                this.selectedTab = 'stored-resources';

            },RemoveResource(resourceId){
               const resIndex = this.storedResources.findIndex( res => res.id ===  resourceId);

               this.storedResources.splice(resIndex,1)
            }
        }
    }
</script>