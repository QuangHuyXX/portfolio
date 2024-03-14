import './App.css';
import Box from '@mui/material/Box'
import github from './assest/github.png'
import linkedin from './assest/linkedin.png'
import graduation from './assest/graduation-cap.png'
import cv from './assest/cv.jpg'
import cv2 from './assest/cv2.jpg'
import mail from './assest/mail.png'
import facebook from './assest/facebook.png'
import projects from './fakeData';
import { Grid, Link, List, ListItem, Typography } from '@mui/material';
function scrollToContact() {
  var contactElement = document.getElementById("contact");
  contactElement.scrollIntoView({ behavior: "smooth" });
}
function downloadCV() {
  var cvUrl = "https://docs.google.com/uc?export=download&id=1RHM0AHlG9REOKWJkxQ-IS8Q0xnO_t7z7";
  var link = document.createElement("a");
  link.href = cvUrl;
  link.download = "CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
function App() {
  return (
    <Box className="App">
      <Box className="header">
        <Box className="logo">IIDemoX</Box>
        <List className="nav-links">
          <ListItem><Link className="link" href="#about">About</Link></ListItem>
          <ListItem><Link className="link" href="#skill">Skill</Link></ListItem>
          <ListItem><Link className="link" href="#projects">Projects</Link></ListItem>
          <ListItem><Link className="link" href="#contact">Contact</Link></ListItem>
        </List>
      </Box>
      <Box className="profile">
        <img src={cv} className="App-logo" alt="logo" />
        <Box className="profile-content">
          <Typography className="profile-introduction">Hello, I'm</Typography>
          <Typography className="profile-name">Quang Huy</Typography>
          <Typography className="profile-title">Front-End Developer</Typography>
          <Box className="wrap-button">
            <button onClick={downloadCV} className="download_cv" >Download CV</button>
            <button onClick={scrollToContact} className="contact_info" >Contact Info</button>
          </Box>
          <Link className="link" href="https://github.com/QuangHuyXX"><img src={github} className="github" alt="logo" /></Link>
          <Link className="link" href="https://www.facebook.com/IIDemoX"><img src={facebook} className="facebook" alt="logo" /></Link>
        </Box>
      </Box>
      <Box id="about" className="break-content" sx={{ textAlign: "center", marginTop: "150px" }}>
        <Typography variant='p' sx={{ fontSize: "1.2rem" }} className="break-introduction">Get To Know More</Typography>
        <Typography variant='h1' sx={{ fontSize: "3rem", fontWeight: "bold" }} className="break-title">About Me</Typography>
      </Box>
      <Box className="about">
        <img src={cv2} className="about-me_img" alt="logo" />
        <Box className="about-content">
          <Box className="about-info">
            <img src={graduation} className="linkedin" alt="logo" />
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }} className="education">Education</Typography>
            <Typography sx={{ fontSize: "1.5rem" }} className="school">Student of Nong Lam University</Typography>
            <Typography sx={{ opacity: "60%", fontSize: "1.2rem", padding: "7px" }} className="faculty">Information Technology </Typography>
          </Box>
          <Box className="about-description" sx={{ marginTop: "2rem" }}>
            <Typography sx={{ fontSize: "1.2rem", textAlign: "left" }} className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum eros et nisi ultricies, in dapibus nunc aliquet. Ut auctor, odio vel bibendum placerat, nulla mauris pretium nisi, ac dapibus nulla arcu nec ligula. Quisque tincidunt, risus quis mattis sodales, quam risus iaculis leo, vel sollicitudin lacus ipsum sed dui. Vivamus sit amet ipsum id mauris convallis hendrerit.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box id="skills" className="break-content" sx={{ textAlign: "center", marginTop: "150px" }}>
        <Typography variant='p' sx={{ fontSize: "1.2rem" }} className="break-introduction">Explore My</Typography>
        <Typography variant='h1' sx={{ fontSize: "3rem", fontWeight: "bold" }} className="break-title">Skills</Typography>
      </Box>
      <Box className="experience">
      </Box>
      <Box id="projects" className="break-content" sx={{ textAlign: "center", marginTop: "150px", marginBottom: "50px" }}>
        <Typography variant='p' sx={{ fontSize: "1.2rem" }} className="break-introduction">Browse My Recent</Typography>
        <Typography variant='h1' sx={{ fontSize: "3rem", fontWeight: "bold" }} className="break-title">Projects</Typography>
      </Box>
      <Box>
        <Grid container spacing={2}>
          {projects.map((project, index) => (
            <Grid item key={index} xs={12} sm={6} md={6} lg={6}>
              <Box className="projects" sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
                <Box className="projects-content">
                  <img src={project?.imageSrc} className="img-project" alt={`Project ${index}`} />
                  <Typography sx={{ fontSize: "1.5rem", fontWeight: "bold", padding: "10px" }} className="project-name">{project?.projectName}</Typography>
                  <Typography sx={{ fontSize: "1.2rem" }} className="project-description">{project?.projectDescription}</Typography>
                  <a href={project?.github}><img src={github} className="github" alt="GitHub logo" /></a>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box id="contact" className="break-content" sx={{ textAlign: "center", marginTop: "150px", marginBottom: "50px" }}>
        <Typography variant='p' sx={{ fontSize: "1.2rem" }} className="break-introduction">Get In Touch</Typography>
        <Typography variant='h1' sx={{ fontSize: "3rem", fontWeight: "bold" }} className="break-title">Contact Me</Typography>
      </Box>
      <Box className="contact">
        <Box className="contact-container">
          <Box className="contact-email"> <img src={mail} className="mail" alt="logo" /> quanghuyxdemo@gmail.com</Box>
          <Box className="contact-linkedln "> <img src={linkedin} className="linkedin" alt="logo" /> Linkedln</Box>
        </Box>
      </Box>
      <Box className="footer">
        <List className="nav-links">
          <ListItem><Link className="link" href="#about">About</Link></ListItem>
          <ListItem><Link className="link" href="#skill">Skill</Link></ListItem>
          <ListItem><Link className="link" href="#projects">Projects</Link></ListItem>
          <ListItem><Link className="link" href="#contact">Contact</Link></ListItem>
        </List> </Box>
    </Box >
  );
}
export default App;
