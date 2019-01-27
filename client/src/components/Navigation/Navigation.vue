<template>
    <div>
        <ul>
            <router-link to="/" tag="li" active-class="active" exact><a>About</a></router-link>
            <router-link to="/projects" tag="li" active-class="active" ><a>Projects</a></router-link>
            <router-link to="/profile" tag="li" active-class="active" ><a>Profile</a></router-link>
            <router-link to="/members" tag="li" active-class="active" ><a>Members</a></router-link>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    props: ["currentUser"]
}
</script>

<style scoped>
    ul {
        width: 100%;
        display: inline-block;
        background-color: #ff4757;

    }
    li {
        display: inline-block;
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
