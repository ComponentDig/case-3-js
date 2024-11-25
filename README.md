Exempel kod 

@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap");

 
* {
  font-family: 'Poppins', sans-serif;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  line-height: 1;
  letter-spacing: 0.5px;
  color: #2a2a2a;
}
 
body {
  background-color: #e8f0f5;
}
 
img {
  max-width: 100%;
}
 
ul {
  list-style: none;
  display: flex;
  justify-content: center;
}
 
li {
  margin: 5px;
}
 
h1, h2, h3, h4, h5, h6, a {
  color: #4C83A8;
  padding: 5px;
}
 
.read-more {
  margin: 5px;
}
 
h1 {
  font-size: 4rem;
}
 
h2 {
  text-transform: uppercase;
  font-weight: 300;
  font-size: 1.5rem;
  margin: 5px;
}
 
h3 {
  text-transform: uppercase;
  font-size: 2rem;
  padding: 10px;
}
 
header {
  background-color: white;
  padding: 10px;
}
 
header .container {
  justify-content: space-between;
  align-items: center;
}
 
.logotype{
  max-width: 6rem;
}
 
.logotype img {
  max-width: 100%;
}
 
.container {
  max-width: 1130px;
  margin: 0 auto;
  display: flex;
}
 
.hero-section {
  background-color: #4C83A8;
}
 
.hero-section .container {
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 15px;
}
 
.hero-section h1, .hero-section h2 {
  color: #A9CBE1;
  padding: 20px 0;
}
 
.hero-section button {
  text-transform: uppercase;
  border: none;
  color: #4C83A8;
  background-color: #A9CBE1;
  font-size: 1.25rem;
  border-radius: 40rem;
  padding: 10px;
}
 
main {
  flex-basis: 70%;
}
 
article {
  border-bottom: 1px solid #A9CBE1;
  word-spacing: 0.1rem;
  padding-bottom: 35px;
}
 
article .meta-data {
  color: #a5aaad;
  padding: 2px 10px 30px;
}
 
article .intro {
  font-weight: bold;
  padding: 10px;
  line-height: 1.1rem;
}
 
article .article-paragraph {
  padding: 10px;
  line-height: 1.1rem;
}
 
aside {
  background-color: #A9CBE1;
  flex-basis: 30%;
  padding: 15px 10px;
}
 
aside ul {
  flex-direction: column;
  padding: 10px 0;
}
 
.signup-form input {
  border: none;
  min-width: 100%;
  color: #4C83A8;
  font-size: 16px;
  background-color: #e8f0f5;
  padding: 3px;
  margin: 10px 0;
}
 
.signup-form button {
  background-color: #4C83A8;
  color: white;
  border: none;
  box-shadow: none;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 99px;
  padding: 10px
}
 
footer {
  background-color: #4C83A8;
  padding: 25px;
}
 
footer .container {
  align-items: center;
  justify-content: center;
  color: #A9CBE1;
}
 