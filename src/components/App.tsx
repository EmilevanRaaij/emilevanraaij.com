import React, {Component} from 'react';  

import close from '../img/close.png';

import pf from '../img/pf.jpg';

import Whatsapp from '../img/Whatsapp.png';
import Webpage from '../img/Webpage.png';
import Resume from '../img/Resume.png';
import Mail from '../img/Mail.png';
import Linkedin from '../img/Linkedin.png';
import Github from '../img/Github.png';
import Code from '../img/Code.png';

import vivapilates from '../img/vivapilates.png';
import prinsheerlijkbelegd from '../img/prinsheerlijkbelegd.png';
import vakantiewolfheze from '../img/vakantiewolfheze.png';

import html from '../img/logos/html.png';
import css from '../img/logos/css.png';
import js from '../img/logos/js.png';
import ts from '../img/logos/ts.png';
import py from '../img/logos/py.png';
import cplusplus from '../img/logos/c++.png';
import php from '../img/logos/php.png';
import bootstrap from '../img/logos/bootstrap.png';
import react from '../img/logos/react.png';
import sql from '../img/logos/sql.png';
import wordpress from '../img/logos/wordpress.png';

interface states{
  portfolioOpen: boolean;
  bioOpen: boolean;
  skillsOpen: boolean;
  whatsappOpen: boolean;
  mailOpen: boolean;
  githubOpen: boolean;
  linkedinOpen: boolean;
}

class App extends Component<{}, states>{
  constructor(props:any){
    super(props);
    this.state = {
      portfolioOpen: false,
      bioOpen: false,
      skillsOpen: false,
      whatsappOpen: false,
      mailOpen: false,
      githubOpen: false,
      linkedinOpen: false
    };
  }

  togglePortfolio(open:boolean){
    if(open){
      this.setState({portfolioOpen: true, bioOpen: false, skillsOpen: false});
    }else{
      this.setState({portfolioOpen: false});
    }
  }

  toggleBio(open:boolean){
    if(open){
      this.setState({bioOpen: true, portfolioOpen: false, skillsOpen: false});
    }else{
      this.setState({bioOpen: false});
    }
  }

  toggleSkills(open:boolean){
    if(open){
      this.setState({skillsOpen: true, portfolioOpen: false, bioOpen: false});
    }else{
      this.setState({skillsOpen: false});
    }
  }

  toggleWhatsapp(){
    if(this.state.whatsappOpen){
      this.setState({whatsappOpen: false});
    }else{
      this.setState({whatsappOpen: true});
    }
  }

  toggleMail(){
    if(this.state.mailOpen){
      this.setState({mailOpen: false});
    }else{
      this.setState({mailOpen: true});
    }
  }

  toggleGithub(){
    if(this.state.githubOpen){
      this.setState({githubOpen: false});
    }else{
      this.setState({githubOpen: true});
    }
  }

  toggleLinkedin(){
    if(this.state.linkedinOpen){
      this.setState({linkedinOpen: false});
    }else{
      this.setState({linkedinOpen: true});
    }
  }

  render(){
    if(window.screen.width > 800){
      return (
        <div className="App">
          <div className='hero-text'>
            <h1>Emile van Raaij</h1>
            <h2>Web developer</h2>
          </div>
    
    
    
          <div className={`content-card portfolio ${this.state.portfolioOpen ? 'open':'closed'}`}>
            <button className='close'>
              <img onClick={() => this.togglePortfolio(false)} src={close} alt="" />
            </button>
            <h1>portfolio</h1>
            <div className='portfolio-body'>
              <div className='sites'>
                <a href="https://vivapilates.nl/" className='site'>
                  <img src={vivapilates} alt="" />
                  <h4>vivapilates.nl</h4>
                </a>
                <a href="https://vakantiewolfheze.nl/" className='site'>
                  <img src={vakantiewolfheze} alt="" />
                  <h4>vakantiewolfheze.nl</h4>
                </a>
                <a href="https://prinsheerlijkbelegd.nl/" className='site'>
                  <img src={prinsheerlijkbelegd} alt="" />
                  <h4>prinsheerlijkbelegd.nl</h4>
                </a>
              </div>
            </div>
          </div>
  
          <div className={`content-card bio ${this.state.bioOpen ? 'open':'closed'}`}>
            <button className='close'>
              <img onClick={() => this.toggleBio(false)} src={close} alt="" />
            </button>
            <h1>Over mij</h1>
            <div className='bio-container'>
              <img className='pf' src={pf} alt="" />
              <p>Mijn naam is Emile van Raaij. Ik ben 18 jaar en ik heb net mijn gymnasium afgerond. Binnenkort ga ik werktuigbouwkunde studeren aan de TU Delft. In 2016 heb ik mijn eerste website gemaakt waardoor ik geïnteresseerd ben geraakt in het ontwerpen en programmeren van websites. In eerste instantie maakte ik vooral websites met Wordpress en kort daarna zelf met HTML, CSS en Javascript. Javascript is dan ook de eerste programmeertaal die ik ging leren. Daar kwam dan nog PHP bij om backend functionaliteit toe te voegen aan mijn projecten. Ik heb ook een tijdje met Python desktop programmaatjes gemaakt, vooral ook om het programmeren beter te beheersen. De kennis die ik daarvan had opgedaan kon ik goed gebruiken toen ik terug schakelde naar het ontwikkelen met websites, wat ik ben gaan doen met het framework React. Met mijn recentere websites heb ik vaak de keuze gemaakt om Wordpress of Cockpit CMS als headless content manager te gebruiken. Dat betekent dat de eindapplicatie los staat van de applicatie waar de content ingedeeld wordt. Dit gaf de mogelijkheid om verschillende technologieën te gebruiken voor websites. Af en toe werd een site met traditionele PHP, HTML en CSS gemaakt en andere keren met een modern framework als React. Buiten programmeren zeil ik in mijn vrije tijd veel wedstrijden. Ook ontwerp, bouw en programmeer ik wel eens robots. Hier heb ik ook C++ voor geleerd om Arduino chips mee aan te sturen.</p>
            </div>
          </div>
  
          <div className={`content-card skills ${this.state.skillsOpen ? 'open':'closed'}`}>
            <button className='close'>
              <img onClick={() => this.toggleSkills(false)} src={close} alt="" />
            </button>
            <h1>Skills</h1>
            <div className='skills-body'>
              <div className='skills-grid'>
  
                <div className='skill'>
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>
  
                <div className='skill'>
                  <img src={css} alt="" />
                  <p>css</p>
                </div>
  
                <div className='skill'>
                  <img src={js} alt="" />
                  <p>Javascript</p>
                </div>
  
                <div className='skill'>
                  <img src={ts} alt="" />
                  <p>Typescript</p>
                </div>
  
                <div className='skill'>
                  <img src={py} alt="" />
                  <p>Python</p>
                </div>
  
                <div className='skill'>
                  <img src={cplusplus} alt="" />
                  <p>C++</p>
                </div>
  
                <div className='skill'>
                  <img src={php} alt="" />
                  <p>PHP</p>
                </div>
  
                <div className='skill'>
                  <img src={bootstrap} alt="" />
                  <p>Bootstrap</p>
                </div>
  
                <div className='skill'>
                  <img src={react} alt="" />
                  <p>React</p>
                </div>
  
                <div className='skill'>
                  <img src={sql} alt="" />
                  <p>SQL</p>
                </div>
  
                <div className='skill'>
                  <img src={wordpress} alt="" />
                  <p>Wordpress</p>
                </div>
  
              </div>
            </div>
          </div>
    
          <div className='sideNav'>
            <a href="https://wa.me/31633351193" className='navButton'>
              <img src={Whatsapp} alt="" />
              <h3>06-33351193</h3>
            </a>
    
            <a href="mailto: emilevanraaij@gmail.com" className='navButton'>
              <img src={Mail} alt="" />
              <h3>emilevanraaij@gmail.com</h3>
            </a>
    
            <a href="https://github.com/EmilevanRaaij/" className='navButton'>
              <img src={Github} alt="" />
              <h3>Github</h3>
            </a>
    
            <a href="https://www.linkedin.com/in/emile-van-raaij-504591243/" className='navButton'>
              <img src={Linkedin} alt="" />
              <h3>Linkedin</h3>
            </a>
    
            <button onClick={() => this.togglePortfolio(true)} className='navButton'>
              <img src={Webpage} alt="" />
              <h3>Portfolio</h3>
            </button>
    
            <button onClick={() => this.toggleBio(true)} className='navButton'>
              <img src={Resume} alt="" />
              <h3>Over mij</h3>
            </button>
            
            <button onClick={() => this.toggleSkills(true)} className='navButton'>
              <img src={Code} alt="" />
              <h3>Skills</h3>
            </button>
          </div>
        </div>
      );
    }else{
      return (
        <div className="App">
          <div className='hero-text'>
            <h1>Emile van Raaij</h1>
            <h2>Web developer</h2>
          </div>
    
    
    
          <div className={`content-card portfolio ${this.state.portfolioOpen ? 'open':'closed'}`}>
            <button className='close'>
              <img onClick={() => this.togglePortfolio(false)} src={close} alt="" />
            </button>
            <h1>portfolio</h1>
            <div className='portfolio-body'>
              <div className='sites'>
                <a href="https://vivapilates.nl/" className='site'>
                  <img src={vivapilates} alt="" />
                  <h4>vivapilates.nl</h4>
                </a>
                <a href="https://vakantiewolfheze.nl/" className='site'>
                  <img src={vakantiewolfheze} alt="" />
                  <h4>vakantiewolfheze.nl</h4>
                </a>
                <a href="https://prinsheerlijkbelegd.nl/" className='site'>
                  <img src={prinsheerlijkbelegd} alt="" />
                  <h4>prinsheerlijkbelegd.nl</h4>
                </a>
              </div>
            </div>
          </div>
  
          <div className={`content-card bio ${this.state.bioOpen ? 'open':'closed'}`}>
            <button className='close'>
              <img onClick={() => this.toggleBio(false)} src={close} alt="" />
            </button>
            <h1>Over mij</h1>
            <div className='bio-container'>
              <p>Mijn naam is Emile van Raaij. Ik ben 18 jaar en ik heb net mijn gymnasium afgerond. Binnenkort ga ik werktuigbouwkunde studeren aan de TU Delft. In 2016 heb ik mijn eerste website gemaakt waardoor ik geïnteresseerd ben geraakt in het ontwerpen en programmeren van websites. In eerste instantie maakte ik vooral websites met Wordpress en kort daarna zelf met HTML, CSS en Javascript. Javascript is dan ook de eerste programmeertaal die ik ging leren. Daar kwam dan nog PHP bij om backend functionaliteit toe te voegen aan mijn projecten. Ik heb ook een tijdje met Python desktop programmaatjes gemaakt, vooral ook om het programmeren beter te beheersen. De kennis die ik daarvan had opgedaan kon ik goed gebruiken toen ik terug schakelde naar het ontwikkelen met websites, wat ik ben gaan doen met het framework React. Met mijn recentere websites heb ik vaak de keuze gemaakt om Wordpress of Cockpit CMS als headless content manager te gebruiken. Dat betekent dat de eindapplicatie los staat van de applicatie waar de content ingedeeld wordt. Dit gaf de mogelijkheid om verschillende technologieën te gebruiken voor websites. Af en toe werd een site met traditionele PHP, HTML en CSS gemaakt en andere keren met een modern framework als React. Buiten programmeren zeil ik in mijn vrije tijd veel wedstrijden. Ook ontwerp, bouw en programmeer ik wel eens robots. Hier heb ik ook C++ voor geleerd om Arduino chips mee aan te sturen.</p>
            </div>
          </div>
  
          <div className={`content-card skills ${this.state.skillsOpen ? 'open':'closed'}`}>
            <button className='close'>
              <img onClick={() => this.toggleSkills(false)} src={close} alt="" />
            </button>
            <h1>Skills</h1>
            <div className='skills-body'>
              <div className='skills-grid'>
  
                <div className='skill'>
                  <img src={html} alt="" />
                  <p>HTML</p>
                </div>
  
                <div className='skill'>
                  <img src={css} alt="" />
                  <p>css</p>
                </div>
  
                <div className='skill'>
                  <img src={js} alt="" />
                  <p>Javascript</p>
                </div>
  
                <div className='skill'>
                  <img src={ts} alt="" />
                  <p>Typescript</p>
                </div>
  
                <div className='skill'>
                  <img src={py} alt="" />
                  <p>Python</p>
                </div>
  
                <div className='skill'>
                  <img src={cplusplus} alt="" />
                  <p>C++</p>
                </div>
  
                <div className='skill'>
                  <img src={php} alt="" />
                  <p>PHP</p>
                </div>
  
                <div className='skill'>
                  <img src={bootstrap} alt="" />
                  <p>Bootstrap</p>
                </div>
  
                <div className='skill'>
                  <img src={react} alt="" />
                  <p>React</p>
                </div>
  
                <div className='skill'>
                  <img src={sql} alt="" />
                  <p>SQL</p>
                </div>
  
                <div className='skill'>
                  <img src={wordpress} alt="" />
                  <p>Wordpress</p>
                </div>
  
              </div>
            </div>
          </div>
    
          <div className='sideNav'>
            <div className='mobilenavbutton-wrap'>
              <button onClick={() => this.toggleWhatsapp()} className='mobilenavbutton'>
                <img src={Whatsapp} alt="" />
              </button>
              <a className={` ${this.state.whatsappOpen == true ? "open" : "closed"}`} href="https://wa.me/31633351193">
                <h3>06-33351193</h3>
              </a>
            </div>
            
            <div className='mobilenavbutton-wrap'>
              <button onClick={() => this.toggleMail()} className='mobilenavbutton'>
                <img src={Mail} alt="" />
              </button>
              <a className={` ${this.state.mailOpen == true ? "open" : "closed"}`} href="mailto: emilevanraaij@gmail.com">
                <h3>emilevanraaij@gmail.com</h3>
              </a>
            </div>

            <div className='mobilenavbutton-wrap'>
              <button onClick={() => this.toggleGithub()} className='mobilenavbutton'>
                <img src={Github} alt="" />
              </button>
              <a className={` ${this.state.githubOpen == true ? "open" : "closed"}`} href="https://github.com/EmilevanRaaij/">
                <h3>Github</h3>
              </a>
            </div>

            <div className='mobilenavbutton-wrap'>
              <button onClick={() => this.toggleLinkedin()} className='mobilenavbutton'>
                <img src={Linkedin} alt="" />
              </button>
              <a className={` ${this.state.linkedinOpen == true ? "open" : "closed"}`} href="https://www.linkedin.com/in/emile-van-raaij-504591243/">
                <h3>Linkedin</h3>
              </a>
            </div>
    
            <button onClick={() => this.togglePortfolio(true)} className='navButton'>
              <img src={Webpage} alt="" />
            </button>
    
            <button onClick={() => this.toggleBio(true)} className='navButton'>
              <img src={Resume} alt="" />
            </button>
            
            <button onClick={() => this.toggleSkills(true)} className='navButton'>
              <img src={Code} alt="" />
            </button>
          </div>
        </div>
      );
    }
    
  }
}

export default App;
