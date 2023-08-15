<template>
  <div class="mt-52">
    <div>
      <h1 class="flex flex-col items-center justify-center">
        Nuxt3 Server & Faker Users API
      </h1>
    </div>
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-sm">Fake Users</h1>
      <input
        type="text"
        class="border border-solid border-black"
        placeholder="Enter number of users"
        @change="handleChange"
        v-model="take"
      />

      <div class="flex mt-4 space-x-4">
        <div class="card" v-for="user in users" :key="user.id">
          <div class="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img :src="user.avatar" :alt="user.name" width="96" />
            </figure>
            <div class="card-body">
              <p class="title is-4">{{ user.name }}</p>
              <p class="subtitle is-7">{{ user.email }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="space-x-4 mt-5">
        <a
          :href="`/api/fake-users?take=${take}`"
          class="p-3 text-white bg-green-400"
          >Nuxt3 Server API Endpoint</a
        >
        <a
          :href="`/fake-users?take=${take}`"
          class="p-3 text-white bg-green-400"
          >Nuxt3 Server Route</a
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const users = ref([]);
const take = ref(3);

const handleChange = () => {
  getUsers(take.value);
};

const getUsers = async (qty) => {
  const data = await $fetch(`/api/fake-users?take=${qty}`);
  users.value = data.users;
};

useFetch(async () => {
  getUsers(take.value);
});
</script>

<style scoped></style>
