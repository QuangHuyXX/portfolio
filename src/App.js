import './App.css';
import Box from '@mui/material/Box'
import github from './assest/github.png'
import linkedin from './assest/linkedin.png'
import graduation from './assest/graduation-cap.png'
import cv from './assest/cv.jpg'
import cv2 from './assest/cv2.jpg'
import mail from './assest/mail.png'
import facebook from './assest/facebook.png'
import projects from './data/projects';
import skills from './data/skills';
import checked from './assest/checked.png';
import { Grid, Link, List, ListItem, Typography } from '@mui/material';
import cvLink from './data/cv';
function scrollToContact() {
  var contactElement = document.getElementById("contact");
  contactElement.scrollIntoView({ behavior: "smooth" });
}
function downloadCV() {
  const cvUrl = cvLink.length > 0 ? cvLink[0].link : null;
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
          <ListItem><Link className="link" href="#skills">Skills</Link></ListItem>
          <ListItem><Link className="link" href="#projects">Projects</Link></ListItem>
          <ListItem><Link className="link" href="#contact">Contact</Link></ListItem>
        </List>
      </Box>
      <Grid container spacing={1} className="profile">
        <Grid item xs={12} sm={12} md={8} lg={6} className="profile-img">
          <img src={cv} className="App-logo" alt="logo" />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={6} className="profile-content">
          <Typography className="profile-introduction">Hello, I'm</Typography>
          <Typography className="profile-name">Quang Huy</Typography>
          <Typography className="profile-title">Front-End Developer</Typography>
          <Box className="wrap-button">
            <button onClick={downloadCV} className="download_cv" >Download CV</button>
            <button onClick={scrollToContact} className="contact_info" >Contact Info</button>
          </Box>
          <Link className="link" href="https://github.com/QuangHuyXX"><img src={github} className="github" alt="logo" /></Link>
          <Link className="link" href="https://www.facebook.com/IIDemoX"><img src={facebook} className="facebook" alt="logo" /></Link>
        </Grid>
      </Grid>
      <Box id="about" className="break-content" sx={{ textAlign: "center", marginTop: "150px", marginBottom: "50px" }}>
        <Typography variant='p' sx={{ fontSize: "1.2rem" }} className="break-introduction">Get To Know More</Typography>
        <Typography variant='h1' sx={{ fontSize: "3rem", fontWeight: "bold" }} className="break-title">About Me</Typography>
      </Box>
      <Grid container spacing={1} className="about">
        <Grid item xs={12} sm={12} md={4} lg={5} className="about-img">
          <img src={cv2} className="about-me_img" alt="logo" />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={7} className="about-content">
          <Box className="about-info">
            <img src={graduation} className="linkedin" alt="logo" />
            <Typography sx={{ fontWeight: "bold", fontSize: "1.5rem" }} className="education">Education</Typography>
            <Typography sx={{ fontSize: "1.5rem" }} className="school">Student of Nong Lam University</Typography>
            <Typography sx={{ opacity: "60%", fontSize: "1.2rem", padding: "7px" }} className="faculty">Information Technology </Typography>
          </Box>
          <Box className="about-description" sx={{ marginTop: "2rem" }}>
            <Typography sx={{ fontSize: "1.2rem", textAlign: "center" }} className="description">
              Hello, my name is Hoàng Nguyễn Quang Huy, and I'm a 23-year-old programmer who is deeply passionate about creativity and technology. I thrive on the challenges and excitement that programming brings, constantly seeking new ways to innovate and solve problems. My current focus is on accumulating experience and personal growth, as I believe these are crucial steps towards achieving my goals in the tech industry. With a fervent love for coding and a determination to continually develop my skills, I am committed to making meaningful contributions and advancing both personally and professionally in the field of programming. Moreover, I am always ready to connect with people from all walks of life and from around the globe.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box id="skills" className="break-content" sx={{ textAlign: "center", marginTop: "150px", marginBottom: "50px" }}>
        <Typography variant='p' sx={{ fontSize: "1.2rem" }} className="break-introduction">Explore My</Typography>
        <Typography variant='h1' sx={{ fontSize: "3rem", fontWeight: "bold" }} className="break-title">Skills</Typography>
      </Box>
      <Grid container spacing={2} sx={{ width: "50%", margin: "0 auto" }} className="skills">
        {skills.map((skill, index) => (
          <Grid item key={index} xs={12} md={6}>
            <Box className="skills-container" display={'flex'} alignItems={'center'} sx={{ gap: "20px" }}>
              <img src={checked} className="mail" alt="logo" />
              <Box className="skill-content">
                <Typography sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>{skill?.name}</Typography>
                <Typography sx={{ fontSize: "1.2rem", opacity: "60%" }}>{skill?.level}</Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>

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
                  <Box className="wrap-img">
                    <img src={project?.imageSrc} className="img-project" alt={`Project ${index}`} />
                  </Box>
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
      {/* desktop */}
      <Box className="contact">
        <Box className="contact-container">
          <a href='mailto:quanghuyxdemo@gmail.com' className="contact-email"> <img src={mail} className="mail" alt="logo" /> quanghuyxdemo@gmail.com</a>
          <a href='https://www.linkedin.com/in/huy-quang-2a6818193/' className="contact-linkedln "> <img src={linkedin} className="linkedin" alt="logo" /> Linkedln</a>
        </Box>
      </Box>
      {/* mobile */}
      <Box className="contact-mobile">
        <Box className="contact-container">
          <Box className="contact-email"> <img src={mail} className="mail" alt="logo" /> </Box>
          <Box className="contact-linkedln "> <img src={linkedin} className="linkedin" alt="logo" /> </Box>
        </Box>
      </Box>
      <Box className="footer">
        <List className="nav-links">
          <ListItem><Link className="link" href="#about">About</Link></ListItem>
          <ListItem><Link className="link" href="#skills">Skills</Link></ListItem>
          <ListItem><Link className="link" href="#projects">Projects</Link></ListItem>
          <ListItem><Link className="link" href="#contact">Contact</Link></ListItem>
        </List> </Box>
    </Box >
  );
}
export default App;
