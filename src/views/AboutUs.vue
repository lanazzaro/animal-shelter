<template>
  <div>
      <h1>About Us</h1>

      <div id="bottomLine"></div>

      <h3>This Animal Shelter website was created as a part of the following people's final capstone project for their 14 week fullstack Java coding bootcamp at Tech Elevator. It was made over a period of 11 days and 4 sprints from February 6th to February 9th 2023. While working seamlessly together, they each used their skills in backend, database, and frontend coding to create the site you see and navigate before you. Learn more about the team, who they are, and what they worked on to make this final project possible. Click their names to be redirected to their LinkedIn Profiles.</h3>
      
      <div><a href="https://www.linkedin.com/in/giovamarino/"> Giovanni Marino: </a> Together with Collin he created the inital classes and models needed in the backend for Pets, Volunteer, and User. The two also made the backend functionalities for 1st time login, volunteer directory, volunteer application, and connection to the database. A CSS wizard, he took the barebones layouts of all the pages and fine tuned them until they came together as a sleek, modern, and eye catching site. When he isn't jamming out on his guitar and playing music he kicks back and relaxes with video games.</div>

    <div><a href="https://www.linkedin.com/in/laura-nazzaro/"> Laura Nazzaro: </a> As an avid lover of planning and spreadsheets, she spearheaded the wireboard and design plan for the project, as well as setup the initial databases. She spent her time in the front end creating the volunteer application, view volunteer applications, search applications, adoption form, and view adoption requests, 1st time user login pages and functionalities, but also created the Adoption classes and models in the backend. When she isn't in front of a computer she enjoys reading, archery, and playing ttrpg games with her friends.</div>

    <div><a href="https://www.linkedin.com/in/collinoconner/"> Collin O'Conner: </a> Together with Giovanni he created the inital classes and models needed in the backend for Pets, Volunteer, and User. The two also made the backend functionalities for 1st time login, volunteer directory, volunteer application, and connection to the database. Having a knack for creating solid foundations for people to build upon, he did the backend portion of making it possible to add and view multiple photos for each pet, as well as implement the email function for volunteers who are accepted or declined. Beyond the realm of coding, he spends his time playing tennis, settling down with his favorite tv shows and movies, and playing video games.</div>

    <div><a href="https://www.linkedin.com/in/stacymthompson243/"> Stacy Thompson: </a> As a pet lover herself, she focused on the frontend, going above and beyond to create the browse pets, pet search, individual pet listing page, and volunteer directory. She also implemented the ability to upload multiple photos for each pet and to update each pet listing on the site, contributing her ideas to make everything she worked on have more functionality and professionalism to them. Outside of coding she loves to hike, do yoga, and spend time with her dog.</div>


  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.blurredImg {
  background-image: url(../assets/adoptionApplications.jpg);
  filter: blur(3px);
}

a {
    font-weight: bold ;
}

/* #titleDiv {
  margin: auto;
  backdrop-filter: blur(7px);
  width: 410px;
  border-radius: 7px;
} */

/* h1 {
  margin: 102px 0 10px 0;
  padding: 10px;
  color: rgb(250, 250, 250);
} */

#bottomLine {
  border-bottom: 2px solid #7acaed;
}

h3, div {
  width: 85%;
  margin: auto;
  margin-top: 30px;
  border-collapse: collapse;
}

</style>
