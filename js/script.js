// import data from '../data/users.json';
let data = JSON.parse();

function SocialMedia(){
    return (
        <ul>
            <li>
                <a href="#">
                    <i className="fa-brands fa-facebook-f"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-brands fa-github"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-brands fa-linkedin-in"></i>
                </a>
            </li>
            <li>
                <a href="#">
                    <i className="fa-solid fa-envelope"></i>
                </a>
            </li>
        </ul>
    );
}

function PageMenu(){
    return (
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    );
}

function MobileMenu(){
    return (
        <details>
            <summary className="fa-solid fa-bars"></summary>
            <PageMenu/>
        </details>
    );
}

function NavigationMenu(){
    return (
        <nav>
            <article>
                <div>
                    <i className="fa-solid fa-fan"></i>
                </div>
                <h3>
                    FLEX
                </h3>
            </article>
            <PageMenu/>
            <MobileMenu/>
        </nav>
    );
}

function HeaderPage(){
    return (
        <header>
            <section>
                <SocialMedia/>
                <NavigationMenu/>
                <article>
                <h2>
                    DIGITAL MARKETING
                </h2>
                <h5>
                    MORE VISITORS TO YOUR WEBSITE
                </h5>
                <a href="#">
                    LET US DESIGN
                </a>
            </article>
            </section>
        </header>
    );
}

function TitleRow(lucas){
    return (
        <article>
            <h2>
                {lucas.title}
            </h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </article>
    );
}

function ServicesContent(props){
    return (
        <div>
            <i className={props.className}></i>
            <h4>
                {props.title}
            </h4>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, tempore.
            </p>
        </div>
    );
}

function ServicesRow(){
    return(
        <section className="row services" id="services">
            <TitleRow title="Services"/>
            <section>
                <ServicesContent
                    title="HTML5 CODING"
                    className="fa-regular fa-file-code"
                />
                <ServicesContent
                    title="OUR SUPPORT"
                    className="fa-regular fa-paper-plane"
                />
                <ServicesContent
                    title="OUR DESIGN"
                    className="fa-solid fa-building-columns"
                />
                <ServicesContent
                    title="GO FOR MOBILE"
                    className="fa-solid fa-flask"
                />
            </section>
        </section>
    );
}

function PortfolioPicture(props){
    return (
        <figure>
            <img src={props.src} alt={props.alt}/>
            <figcaption>
                <h5>{props.title}</h5>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
                <a href="#">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </a>
            </figcaption>
        </figure>
    );
}

const picList = [
    {
        "url": "/img/pic-01.jpg",
        "alt": "Pic-01",
        "title": "new walk"
    },
    {
        "url": "/img/pic-02.jpg",
        "alt": "Pic-02",
        "title": "new boat"
    },
    {
        "url": "/img/pic-03.jpg",
        "alt": "Pic-03",
        "title": "Big City"
    },
    {
        "url": "/img/pic-04.jpg",
        "alt": "Pic-04",
        "title": "gray street"
    },
    {
        "url": "/img/pic-05.jpg",
        "alt": "Pic-05",
        "title": "office"
    },
    {
        "url": "/img/pic-06.jpg",
        "alt": "Pic-06",
        "title":"new environment"
    },
    {
        "url": "/img/pic-07.jpg",
        "alt": "Pic-07",
        "title":"venice"
    },
    {
        "url": "/img/pic-08.jpg",
        "alt": "Pic-08",
        "title": "train trail"
    },
];

function PortfolioRow(){
    return (
        <section className="row portfolio" id="portfolio">
            <TitleRow title="Portfolio"/>
            <section>
                {
                    picList.map(
                        (picture) => (
                            <PortfolioPicture
                                title={picture.title}
                                alt={picture.alt}
                                src={picture.url}
                                key={picture.alt}
                            />
                        )
                    )
                }
            </section>
        </section>
    );
}

const teamMembers = [
    {
        "url": "/img/pic-17.jpg",
        "alt":"Person-17",
        "name": "CINDY",
        "position":"Developer"
    },
    {
        "url": "/img/pic-16.jpg",
        "alt":"Person-16",
        "name": "JIM",
        "position":"Salesman"
    },
    {
        "url": "/img/pic-15.jpg",
        "alt":"Person-15",
        "name": "KEVIN",
        "position":"Accountant"
    },
    {
        "url": "/img/pic-14.jpg",
        "alt":"Person-14",
        "name": "MICHAEL",
        "position":"Manager"
    }
];

function GalleryTeam(props){
    return(
        <figure>
            <img src={props.src} alt={props.alt}/>
            <figcaption>
                <h4>{props.name}</h4>
                <small>{props.position}</small>
                <ul>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                    </li>
                </ul>
            </figcaption>
        </figure>
    );
}

function TeamSkills() {
    return (
        <section className="skills" id="skills">
            <article>
                <h3>Design Skills</h3>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </article>
            <section>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae sed, odio eius, velit quibusdam nihil officia iusto doloremque suscipit alias doloribus. Laboriosam earum obcaecati placeat amet dicta velit deleniti totam error! Voluptatibus veniam placeat porro excepturi unde maiores necessitatibus quisquam quidem? Saepe nam aut laborum?
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis expedita modi assumenda possimus! Dolores, minus maiores fuga sunt cupiditate consequatur, eveniet quisquam voluptas dolorum natus suscipit dignissimos recusandae enim tempora unde? Fugiat perferendis dicta id magni. Totam corrupti, quisquam facilis vel possimus non aliquid perspiciatis eum consequatur quaerat itaque eligendi.
                    </p>
                </div>
                <ul>
                    <li>
                        <h6>
                            <small>
                                photoshop 90%
                            </small>
                        </h6>
                    </li>
                    <li>
                        <h6>
                            <small>
                                HTML CSS 80%
                            </small>
                        </h6>
                    </li>
                    <li>
                        <h6>
                            <small>
                                development 70%
                            </small>
                        </h6>
                    </li>
                    <li>
                        <h6>
                            <small>
                                marketing 80%
                            </small>
                        </h6>
                    </li>
                </ul>
            </section>
        </section>
    );
}

function TeamRow(){
    return(
        <section className="row team" id="team">
            <TitleRow
                title="Our Team"
            />
            <section>
                <article className="team-gallery">
                    {
                        teamMembers.map(
                            (member) => (
                                <GalleryTeam
                                    key={member.name}
                                    position={member.position}
                                    name={member.name}
                                    alt={member.alt}
                                    src={member.url}
                                />
                            )
                        )
                    }
                </article>
                <TeamSkills/>
            </section>     
        </section>
    );
}

function ContactRow(){
    return(
        <section className="row contact" id="contact">
            
        </section>
    );
}

function FooterRow(){
    return(
        <footer>
            <p>
                Copyright &copy; 2030 Company Name. Design: Flex Design
            </p>
            <a href="#">
                BACK TO TOP
            </a>
        </footer>
    );
}

function MainContent() {
    
    return (
        <main>
            <ServicesRow/>
            <PortfolioRow/>
            <TeamRow/>
            <ContactRow/>
            <FooterRow/>
        </main>
    );
}

/*
    Where I am going to place all my elements blocks
*/
function App(){
    return (
        <React.Fragment>
            <HeaderPage/>
            <MainContent/>
        </React.Fragment>
    );
}

// ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

const rootHtml = ReactDOM.createRoot(
    document.getElementById("root")
);
rootHtml.render(<App/>);