import "./page.css"
import Image from "next/image"
import JS from "./img/pngegg.png"
import Earth1 from "./img/earth-1.jpeg"
import React from "./img/react1.svg"
import NextJS from "./img/nextjs.svg"
import Node from "./img/node-js.svg"
import Postman from "./img/postman.svg"
import Vercel from "./img/vercel.svg"
import Github from "./img/github.svg"
import Bootstrap5 from "./img/bootstrap.svg"
import Invoice from "./img/invoice.jpeg"
import Workshop from "./img/workshop.png"
import Fivem from "./img/fivem.png"


export default function Home() {
  return (
    <>
      <>
        {/* ======= Header ======= */}
        <header id="header">
          <div className="d-flex flex-column">
            <div className="profile">
              <Image src={Earth1} width={220} height={120} style={{ borderRadius: "50%", objectFit: "cover" }} />
              <h1 className="text-light">
                <a href="index.html">Virapat Poangmalai&apos;</a>
              </h1>

            </div>
            <nav id="navbar" className="nav-menu navbar">
              <ul>
                <li>
                  <a href="#hero" className="nav-link scrollto active">
                    <i className="bx bx-home" /> <span>Home</span>
                  </a>
                </li>
                <li>
                  <a href="#about" className="nav-link scrollto">
                    <i className="bx bx-user" /> <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="#resume" className="nav-link scrollto">
                    <i className="bx bx-file-blank" /> <span>Resume</span>
                  </a>
                </li>
                <li>
                  <a href="#portfolio" className="nav-link scrollto">
                    <i className="bx bx-book-content" /> <span>Portfolio</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* .nav-menu */}
          </div>
        </header>
        {/* End Header */}

        {/* ======= Hero Section ======= */}
        <section
          id="hero"
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="hero-container" data-aos="fade-in">
            <h1>Virapat Poangmalai</h1>
            <p>
              Im Web Developer
            </p>
          </div>
        </section>
        {/* End Hero */}

        {/* Start #main */}
        <main id="main">
          {/* ======= About Section ======= */}
          <section id="about" className="about">
            <div className="container">
              <div className="section-title">
                <h2>About me :</h2>
                <p>
                  My name is Virapat Poangmalai , You can call me earth . I graduated from Burapha University in  computer science.
                </p>
              </div>
              <div className="row">
                <div className="col-lg-4" data-aos="fade-right" style={{ display: "flex", justifyContent: "center" }}>
                  <Image src={Earth1} width={250} height={350} style={{ objectFit: "cover", margin: "auto" }} />
                </div>
                <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                  <h3>Web Developer :</h3>

                  <div className="row">
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Birthday :</strong> <span>11 May 2001</span>
                        </li>

                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Phone :</strong> <span>095-280-2754</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />
                          <strong>City :</strong>{" "}/<span>Bangkunnon , Bangkok</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-lg-6">
                      <ul>
                        <li>
                          <i className="bi bi-chevron-right" /> <strong>Age:</strong>{" "}
                          <span>22</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Degree :</strong> <span>Bachelor (computer-science)</span>
                        </li>
                        <li>
                          <i className="bi bi-chevron-right" />{" "}
                          <strong>Email:</strong> <span>virapatpoangmalai@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    I want to be the best . I want to improve myself all the time. My goal is to get better at programming. I am ready to dedicate my time to training to become better.
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* End About Section */}

          {/* ======= Facts Section ======= */}
          <section id="facts" className="facts">
            <div className="container">
              <div className="section-title">
                <h2>Tools :</h2>
              </div>
              <div className="row no-gutters">
                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={JS} style={{ width: "200px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>JavaScript / HTML / CSS</strong>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={React} style={{ width: "200px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>React JS</strong>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={NextJS} style={{ width: "180px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>Next JS</strong>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={Node} style={{ width: "200px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>Node JS</strong>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={Postman} style={{ width: "200px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>Postman</strong>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={Vercel} style={{ width: "200px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>Vercel</strong>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={Github} style={{ width: "200px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>Github</strong>
                  </div>
                </div>

                <div
                  className="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
                  data-aos="fade-up"
                  data-aos-delay={100}
                >
                  <div className="count-box" style={{ display: "flex", flexDirection: "column" }}>
                    <Image src={Bootstrap5} style={{ width: "200px", height: "100px" }} />
                    <strong style={{ marginTop: "10px" }}>Bootstrap5</strong>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Facts Section */}

          {/* ======= Resume Section ======= */}
          <section id="resume" className="resume">
            <div className="container">
              <div className="section-title">
                <h2>Resume</h2>
              </div>

              <div className="row">
                <div className="col-lg-6" data-aos="fade-up">
                  <h3 className="resume-title">Education</h3>
                  <div className="resume-item">
                    <h4>Pattanavechsuksa School</h4>
                    <h5>Thai program</h5>
                  </div>
                  <div className="resume-item">
                    <h4>Banchangkarnchanaukulwittiya Scjhool</h4>
                    <h5>Science - Math</h5>
                  </div>
                  <div className="resume-item">
                    <h4>Burapha University</h4>
                    <h5>Computer Science</h5>
                  </div>
                </div>

                <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                  <h3 className="resume-title">Work project</h3>
                  <div className="resume-item">
                    <h4>Linebot generate invoice</h4>
                    <h5>For Saikaew Villa2 at koh samed</h5>
                    <ul>
                      <li>
                        ( Description ) : Description : This project aims to simplify the process of generating
                        invoices and collecting payments allowing for seamless
                        generation even through mobile phones with line chat bot
                      </li>
                      <li>
                        ( Tools ) : Node.js , Line Messaging API , Ngrok , Vercel , Microsoft Word , Google API , Docxtemplater
                      </li>
                      <li>
                        ( Lesson learned ) : How to get requirement from user , How to use Google API / Docxtemplater , How to make my system User-friendly for user
                      </li>
                    </ul>
                  </div>
                  <div className="resume-item">
                    <h4>Workshop POS</h4>
                    <h5>For practice skill</h5>
                    <ul>
                      <li>
                        ( Description ) : This project is designed for practicing various skills related to tasks such as CRUD operations or data
                        management. It involves utilizing different packages to facilitate successful execution of tasks,
                        designing a user interface that is aesthetically pleasing and user-friendly.
                      </li>
                      <li>
                        ( Tools ) : Node.js , React.js , axios , sweetalert2 , express , nodemon , sequelize
                      </li>
                      <li>
                        ( Lesson learned ) : How to CRUD data in database and show for user in front end , How to create folder like a professional , How to design database

                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Resume Section */}


          {/* ======= Portfolio Section ======= */}
          <section id="portfolio" className="portfolio section-bg">
            <div className="container">
              <div className="section-title">
                <h2>Portfolio</h2>
              </div>
              <div id="card-portfolio" className="col-12" style={{ display: "flex", justifyContent: "space-between" }}>
                <div class="card col-12 col-lg-4" style={{ width: "18em", marginTop: "10px" }}>
                  <Image src={Invoice} st style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  <div class="card-body">
                    <h5 class="card-title">Linebot - generate invoice</h5>
                    <p class="card-text">
                      This project aims to simplify the process of generating
                      invoices and collecting payments allowing for seamless
                      generation
                    </p>
                    <a href="https://drive.google.com/file/d/1q7rLn1UvzYoZHy3iAqwPBkqFXPf9ynZv/view" target="_blank" class="btn btn-primary">Read document.pdf</a>
                  </div>
                </div>

                <div class="card col-4" style={{ width: "18em", marginTop: "10px" }}>
                  <Image src={Workshop} st style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  <div class="card-body">
                    <h5 class="card-title">Workshop POS</h5>
                    <p class="card-text">
                      This project is designed for practicing various skills related to tasks such as CRUD operations or data
                      management.
                    </p>
                    <a href="https://drive.google.com/file/d/1qQr9os-D_gqLHzKp1OAX-Hm9R3H1sVBD/view" target="_blank" class="btn btn-primary">Read document.pdf</a>
                  </div>
                </div>

                <div class="card col-4" style={{ width: "18em", marginTop: "10px" }}>
                  <Image src={Fivem} st style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                  <div class="card-body">
                    <h5 class="card-title">DiscordBOT</h5>
                    <p class="card-text">This project was created to reduce the problems of admins.
                      It reduces the chance of losing customers and gives admins more time</p>
                    <a href="https://www.youtube.com/watch?v=JKA8Twl-kJM"
                      target="_blank"
                      class="btn btn-primary">Watch Youtube</a>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* End Portfolio Section */}

        </main>
        {/* End #main */}
        {/* ======= Footer ======= */}

        {/* End  Footer */}
        <a
          href="#"
          className="back-to-top d-flex align-items-center justify-content-center"
        >
          <i className="bi bi-arrow-up-short" />
        </a>
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </>

    </>
  )
}
