<template>

    <base-dialog v-if="this.inputIsInvalid" title="Invalid Input" @close="confirmErrror">
        <template #default>
            <p>Unfortunatly one input field is invalid</p>
            <p>Please check all inputs are not empty</p>
        </template>
        <template #actions>
            <base-button @click="confirmErrror">Okay</base-button>
        </template>
    </base-dialog>

    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" ref="titleInput">
            </div>

            <div class="form-control">
                <label for="description">Description</label>
                <textarea id="description" name="description" rows="3" ref="descriptionInput"></textarea>
            </div>

            <div class="form-control">
                <label for="link">Link</label>
                <input type="url" name="link" id="link" ref="linkInput">
            </div>

            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
    export default{
  components: { BaseButton },

        inject : ['AddResource'],

        data(){
            return {
                inputIsInvalid: false
            }
        },

        methods:{
            submitData()
            {
                const enterdTitle = this.$refs.titleInput.value;
                const enterdDesc  = this.$refs.descriptionInput.value;
                const enterLink   = this.$refs.linkInput.value;

               if(enterdTitle.trim() === '' || enterdDesc.trim() === '' || enterLink.trim() === '')
               {
                this.inputIsInvalid = true;
                return ;
               }
                this.AddResource(enterdTitle,enterdDesc,enterLink)
            },
            confirmErrror()
            {
                this.inputIsInvalid = false;
            }
        }
    }
</script>

<style scoped>
    label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
    }

    input,
    textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
    }

    .form-control {
    margin: 1rem 0;
    }
</style>