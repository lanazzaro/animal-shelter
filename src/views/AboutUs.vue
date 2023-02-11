<template>
  <div class="page">
    <div class="blurredImg"></div>
    <div id="titleDiv">
      <h1>About Us</h1>
    </div>
    <div id="bottomLine"></div>
    <div class="content">
      <h3>
        This Animal Shelter website was created as a part of the following
        people's final capstone project for their 14 week fullstack Java coding
        bootcamp at Tech Elevator. It was made over a period of 11 days and 4
        sprints from January 30th to February 9th 2023. While working seamlessly
        together, they each used their skills in backend, database, and frontend
        coding to create the site you see and navigate before you. Learn more
        about the team, who they are, and what they worked on to make this final
        project possible. Click their names to be redirected to their LinkedIn
        Profiles.
      </h3>
      <div class="developer">
        <div>
          <a href="https://www.linkedin.com/in/giovamarino/">
            <img
              id="linkedInLogo"
              src="../assets/LI-In-Bug.png"
              alt="LinkedInLogo"
            />
            Giovanni Marino:
          </a>
          <p>
            Together with Collin he created the inital classes and models needed
            in the backend for Pets, Volunteer, and User. The two also made the
            backend functionalities for 1st time login, volunteer directory,
            volunteer application, and connection to the database. A CSS wizard,
            he took the barebones layouts of all the pages and fine tuned them
            until they came together as a sleek, modern, and eye catching site.
            When he isn't jamming out on his guitar and playing music he kicks
            back and relaxes with video games.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/giovamarino/">
          <img
            class="devImg"
            src="../devs/giovanni.jpg"
            alt="Giovanni Marino"
          />
        </a>
      </div>
      <div class="developer">
        <div>
          <a href="https://www.linkedin.com/in/laura-nazzaro/">
            <img
              id="linkedInLogo"
              src="../assets/LI-In-Bug.png"
              alt="LinkedInLogo"
            />
            Laura Nazzaro:
          </a>
          <p>
            As an avid lover of planning and spreadsheets, she spearheaded the
            wireboard and design plan for the project, as well as setup the
            initial databases. She spent her time in the front end creating the
            volunteer application, view volunteer applications, search
            applications, adoption form, and view adoption requests, 1st time
            user login pages and functionalities, but also created the Adoption
            classes and models in the backend. When she isn't in front of a
            computer she enjoys reading, archery, and playing ttrpg games with
            her friends.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/laura-nazzaro/">
          <img class="devImg" src="../devs/laura.jpg" alt="Laura Nazzaro" />
        </a>
      </div>
      <div class="developer">
        <div>
          <a href="https://www.linkedin.com/in/collinoconner/">
            <img
              id="linkedInLogo"
              src="../assets/LI-In-Bug.png"
              alt="LinkedInLogo"
            />
            Collin O'Conner:
          </a>
          <p>
            Together with Giovanni he created the inital classes and models
            needed in the backend for Pets, Volunteer, and User. The two also
            made the backend functionalities for 1st time login, volunteer
            directory, volunteer application, and connection to the database.
            Having a knack for creating solid foundations for people to build
            upon, he did the backend portion of making it possible to add and
            view multiple photos for each pet, as well as implement the email
            function for volunteers who are accepted or declined. Beyond the
            realm of coding, he spends his time playing tennis, settling down
            with his favorite tv shows and movies, and playing video games.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/collinoconner/">
          <img class="devImg" src="../devs/collin.jpg" alt="Collin O'Conner" />
        </a>
      </div>
      <div class="developer">
        <div>
          <a href="https://www.linkedin.com/in/stacymthompson243/">
            <img
              id="linkedInLogo"
              src="../assets/LI-In-Bug.png"
              alt="LinkedInLogo"
            />
            Stacy Thompson:
          </a>
          <p>
            As a pet lover herself, she focused on the frontend, going above and
            beyond to create the browse pets, pet search, individual pet listing
            page, and volunteer directory. She also implemented the ability to
            upload multiple photos for each pet and to update each pet listing
            on the site, contributing her ideas to make everything she worked on
            have more functionality and professionalism to them. Outside of
            coding she loves to hike, do yoga, and spend time with her dog.
          </p>
        </div>
        <a href="https://www.linkedin.com/in/stacymthompson243/">
          <img class="devImg" src="../devs/stacy.jpg" alt="Stacy Thompson" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.blurredImg {
  background-image: url(../assets/aboutUs.jpg);
  filter: blur(3px);
}

#titleDiv {
  margin: auto;
  backdrop-filter: blur(7px);
  width: 200px;
  border-radius: 5px;
}

h1 {
  padding: 10px;
  margin: 102px 0 10px 0;
  color: rgb(250, 250, 250);
}

#bottomLine {
  border-bottom: 2px solid #7acaed;
}

.content {
  width: 80%;
  margin: auto;
  margin-top: 30px;
  background-color: white;
  box-shadow: 4px 4px 8px rgb(204, 204, 204, 0.5);
  border-radius: 4px;
  padding: 30px 50px;
}

a {
  font-weight: 800;
  color: #0f4f6a;
}

.page {
  position: absolute;
}


p {
  margin-top: 5px;
}

#linkedInLogo {
  height: 14px;
}

.developer {
  margin-top: 30px;
  display: flex;
}

.devImg {
  border-radius: 50%;
  box-shadow: 2px 4px 4px rgb(160, 160, 160);
}
</style>
