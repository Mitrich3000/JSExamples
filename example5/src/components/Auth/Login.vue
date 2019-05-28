<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center row wrap>
            <v-flex xs12 text-md-center>
                <h1>Страница входа</h1>
            </v-flex>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Форма входа</v-toolbar-title>
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
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                                type="submit"
                                @click="onSubmit"
                                color="primary"
                                :disabled='!valid'
                        >Вход
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
  import authAPI from './auth';

  export default {
    data: () => ({
      drawer: null,
      login: '',
      password: '',
      valid: false,
      loginRules: [
        v => !!v || 'Требуется ввести логин',
        v => v.length <= 10 || 'Логин должен быть меньше 10 символов',
      ],
      passwordRules: [
        v => !!v || 'Требуется ввести пароль',
        v => v.length >= 6 || 'Логин должен быть не меньше 6 символов',
      ],
    }),
    methods: {
      onSubmit() {
        if (this.$refs.form.validate()) {
          const user = {
            login: this.login,
            password: this.password,
          };
          console.log(user);
          authAPI.login(this.login, this.password)
            .then(() => this.$router.push('/users/1'))
            .catch(() => {
              this.error = true;
            });
        }
      },
    },

    props: {
      source: String,
    },
  };
</script>
