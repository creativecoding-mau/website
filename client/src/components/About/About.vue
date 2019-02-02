<template>
<div>
    
    <v-container text-xs-center class="aboutContainer">
    <v-layout row wrap>
      <v-flex xs12>
        <main>
        <section>
            <h2>Welcome to the website for the Creative Coding student group at Malmö University!</h2>
            <p>
                This group was started in 2018 by a couple of Information Architecture students as a way to get better at coding and to get some experience developing projects as groups.
                The only requirements for joining our group is that you are a student at Malmö University. Click the Profile tab, register a new account, sign in with your account and then authentiacte with your email and you are in! Note that you have to edit your profile in order to be shown in the Members tab.
                Our different means of communication can be found under the Contact tab. Many of our members are available in the Discord channel so if you ever require help that is where to look!    
            </p>
        </section>
        </main>
      </v-flex>
    </v-layout>
  </v-container> 
    
</div>
    
</template>

<script>
export default {};
</script>

<style scoped >
p {
  margin: 0 auto;
  height: 100%;
  width: 65%;
  padding-top: 10px;
  padding-bottom: 20px;
  font-size: 20px;
}
.aboutContainer {
    min-width: 100%;
    background: linear-gradient(to bottom,  rgba(255,61,37,.9) 50%, rgba(255, 99, 72, .9));
    -webkit-clip-path: polygon(0 0, 100% 11%, 100% 100%, 0 89%);
    clip-path: polygon(0 0, 100% 11%, 100% 100%, 0 89%);
    padding-right: 0;
    padding-left: 0;
    min-height: 300px;
}
section {
    width: 75%;
    margin: 0 auto;
}
h2 {
    padding-top: 50px;
}
</style>
