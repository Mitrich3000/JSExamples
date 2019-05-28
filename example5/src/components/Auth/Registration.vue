<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center wrap>
            <v-flex xs12 text-md-center>
                <h1>Страница регистрации</h1>
            </v-flex>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Форма регистрации</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field
                                    prepend-icon="person"
                                    name="login"
                                    label="Логин"
                                    type="text"
                                    v-model="login"
                                    :rules="loginRules"
                            ></v-text-field>
                            <v-text-field
                                    id="password"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    :counter="6"
                                    v-model="password"
                                    :rules="passwordRules"
                            ></v-text-field>
                            <v-text-field
                                    id="confirm-password"
                                    prepend-icon="lock"
                                    name="confirm-password"
                                    label="Подтвердите пароль"
                                    type="password"
                                    :counter="6"
                                    v-model="confirmPassword"
                                    :rules="confirmPasswordRules"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                type="submit"
                                @click="onSubmit"
                                color="primary"
                                :disabled='!valid'
                        >Создать аккаунт
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      drawer: null,
      login: '',
      password: '',
      confirmPassword: '',
      valid: false,
      loginRules: [
        v => !!v || 'Требуется ввести логин',
        v => v.length <= 10 || 'Логин должен быть меньше 10 символов',
      ],
      passwordRules: [
        v => !!v || 'Требуется ввести пароль',
        v => v.length >= 6 || 'Пароль должен быть не меньше 6 символов',
      ],
      confirmPasswordRules: [
        v => !!v || 'Требуется ввести пароль',
        v => v === this.password || 'Пароль должен совпадать',
      ],
    }),
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            login: this.login,
            password: this.password,
            confirmPassword: this.confirmPassword,
          };
          console.log(user);
        }
      },
    },

    props: {
      source: String,
    },
  };
</script>
