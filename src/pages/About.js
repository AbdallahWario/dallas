function About() {
  return (
    <main>
      <div className="container" style={{ marginTop: "6rem" }}>
        <div className="about">
          <div className="rawz" style={{ display: "flex" }}>
            <div className="top">
              {/* <img alt="" src="https://i.ibb.co/KFBZ2Lwwe3/profile.jpg" className="about-img" /> */}
              <div className="about-social-media mt-5">
               
                   <a
                rel="noreferrer"
                  target="_blank"
                  href="https://twitter.com/isiolotimes"
                  className="about-links"
                >
                  <i className="fab fa-twitter"></i> Twitter
                </a>
              </div>
            </div>
            <div className="right">
              

              <p>
                Email: info@IsioloTimes.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
