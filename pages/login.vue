<template>
    <v-container fluid class="bg-primary">
        <v-row justify="center" align="center">
            <v-col cols="12" sm="8" md="4">
                <v-card class="pa-8">
                    <v-card-title class="headline text-center pt-5 font-weight-bold text-h5">Selamat
                        Datang</v-card-title>
                    <div class="text-center text-grey-lighten-1 text-caption px-2">Masukkan email dan password anda
                        untuk
                        mengakses akun
                        anda</div>
                    <v-card-text>
                        <v-form @submit.prevent="handleSubmit()">
                            <v-text-field variant="solo" id="email" v-model="form.email" name="Email"
                                placeholder="Email*" prepend-inner-icon="mdi-email"
                                @keyup.enter.native="handleSubmit()"></v-text-field>
                            <v-text-field variant="solo" id="password" v-model="form.password" name="Password"
                                prepend-inner-icon="mdi-lock" :append-icon="passwordType ? 'mdi-eye' : 'mdi-eye-off'"
                                :type="passwordType ? 'text' : 'password'" placeholder="Password*"
                                @click:append="passwordType = !passwordType"
                                @keyup.enter.native="handleSubmit()"></v-text-field>
                            <v-btn type="submit" color="primary" @click="login" block class="py-6">Login</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
const router = useRouter()

definePageMeta({
    layout: 'blank'
})

const form = reactive({
    email: '',
    password: ''
})

const handleSubmit = () => {
    router.push('/')
}

const passwordType = ref(false)




</script>

<style scoped>
.v-container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.v-card {
    border-radius: 10px;
}
</style>