<script setup lang="ts">

import { OpenAI } from "openai";
const openai = new OpenAI({ apiKey: process.env.NUXT_OPEN_AI_SECRET_KEY });

// Define example message
const messages = [
    {
        role: "user",
        content: "Generate a list of fun and interesting questions for a quiz",
    },
];

// Define the function to generate quiz questions
const functions = [
    {
        name: "generateQuiz",
        description: "Generate a list of quiz questions.",
        parameters: {
            type: "object",
            properties: {
                questions: {
                    type: "array",
                    description: "A list of questions for a quiz",
                    items: {
                        type: "object",
                        properties: {
                            question: {
                                type: "string",
                                description: "The question to be asked",
                            },
                            answer: {
                                type: "string",
                                description: "The answer to the question",
                            },
                        },
                    },
                },
            },
        },
    },
];

// Make the API request with function calling
const res = await openai.chat.completions.create({
    // Use "gpt-3.5-turbo-0613" or "gpt-4-0613" models for function calling
    model: "gpt-3.5-turbo-0613",
    functions,
    // Force the result to be a function call
    function_call: { name: "generateQuiz" },
    messages,
});

// Extract the function arguments from the API response and parse them
console.log(res);


const fileRef = ref<{ input: HTMLInputElement }>()

const state = reactive({
    name: 'Christopher A. Smith',
    jobtitle: 'President',
    avatar: '',
    bio: '',
    title: '',
    content: '',
    seo_title: '',
    seo_description: '',
})

const toast = useToast()

function validate(state: any): FormError[] {
    const errors = []
    if (!state.name) errors.push({ path: 'name', message: 'Please enter your name.' })
    return errors
}

function onFileChange(e: Event) {
    const input = e.target as HTMLInputElement

    if (!input.files?.length) {
        return
    }

    state.avatar = URL.createObjectURL(input.files[0])
}

function onFileClick() {
    fileRef.value?.input.click()
}

async function onSubmit(event: FormSubmitEvent<any>) {
    // Do something with data
    console.log(event.data)

    toast.add({ title: 'Profile updated', icon: 'i-heroicons-check-circle' })
}
</script>

<template>
    <UDashboardPanelContent class="pb-24">
        
        <UForm :state="state" :validate="validate" :validate-on="['submit']" >
            
            <!--
            <UDashboardSection title="Author Profile"
                description="This information will be displayed publicly so be careful what you share.">

                <UFormGroup name="name" label="Name"
                    description="Will appear on receipts, invoices, and other communication." required
                    class="grid grid-cols-2 gap-2 items-center" :ui="{ container: '' }">
                    <UInput v-model="state.name" autocomplete="off" icon="i-heroicons-user" size="md" />
                </UFormGroup>

                <UFormGroup name="jobtitle" label="Job Title"
                    description="Will appear on receipts, invoices, and other communication." required
                    class="grid grid-cols-2 gap-2 items-center" :ui="{ container: '' }">
                    <UInput v-model="state.jobtitle" autocomplete="off" size="md" />
                </UFormGroup>

                <UFormGroup name="avatar" label="Image" class="grid grid-cols-2 gap-2" help="JPG, GIF or PNG. 1MB Max."
                    :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }">
                    <UAvatar :src="state.avatar" :alt="state.name" size="lg" />
                    <UButton label="Choose" color="white" size="md" @click="onFileClick" />
                    <UInput ref="fileRef" type="file" class="hidden" accept=".jpg, .jpeg, .png, .gif"
                        @change="onFileChange" />
                </UFormGroup>

                <UFormGroup name="bio" label="Biography" description="Brief description for your profile."
                    class="grid grid-cols-2 gap-2" :ui="{ container: '' }">
                    <UTextarea v-model="state.bio" :rows="5" autoresize size="md" />
                </UFormGroup>

            </UDashboardSection>

            <UDivider class="mb-4" />

            -->

            <UDashboardSection 
                title="Content" 
                description="Use this tool to prepare content for publishing.">

                <UFormGroup name="title" label="Title"
                    description="The title of the article." required
                    class="grid grid-cols-2 gap-2 items-center" :ui="{ container: '' }">
                    <UInput v-model="state.title" autocomplete="off" size="md" />
                </UFormGroup>

                <UFormGroup name="content" label="Article" 
                    description="The content of the article." required
                    class="grid grid-cols-2 gap-2" :ui="{ container: '' }">
                    <UTextarea v-model="state.content" :rows="10" autoresize size="md" />
                </UFormGroup>

            </UDashboardSection>

            <UDivider class="mb-4" />

            <UDashboardSection title="Process" description="Process the content and prepare for distribution">
                <template #links>
                    <UButton type="submit" label="Process" color="primary" />
                </template>
            </UDashboardSection>

            <UDivider class="mb-4" />

            <UDashboardSection 
                title="Search Engine Optimization" 
                description="Recommended information for search engines.">

                <UFormGroup name="seo_title" label="Meta Title"
                    description="Content title for search engines."
                    class="grid grid-cols-2 gap-2 items-center" :ui="{ container: '' }">
                    <UInput v-model="state.seo_title" autocomplete="off" size="md" />
                </UFormGroup>

                <UFormGroup name="seo_description" label="Meta Description" 
                    description="Content description for search engines."
                    class="grid grid-cols-2 gap-2" :ui="{ container: '' }">
                    <UTextarea v-model="state.seo_description" :rows="5" autoresize size="md" />
                </UFormGroup>

            </UDashboardSection>

        </UForm>

        <UDivider class="mb-4" />

    </UDashboardPanelContent>
</template>