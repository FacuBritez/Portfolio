import imgHtml from "../../Assets/skills-iconos/html.png";
import imgCss from "../../Assets/skills-iconos/css.png";
import imgBs from "../../Assets/skills-iconos/bootstrap.png";
import imgSass from "../../Assets/skills-iconos/sass.png";
import imgJs from "../../Assets/skills-iconos/javascript.png";
import imgTs from "../../Assets/skills-iconos/typescript.png";
import imgAngular from "../../Assets/skills-iconos/angular.png";
import imgReact from "../../Assets/skills-iconos/react.png";
import imgNode from "../../Assets/skills-iconos/node.png";
import imgGit from "../../Assets/skills-iconos/git.png";
import imgCSharp from "../../Assets/skills-iconos/csharp.png";
import imgUnity from "../../Assets/skills-iconos/unity.png";

const SkillSass = () => {
  return (
    <div className="skill">
      <img src={imgSass} alt="Sass" />
      <span>Sass</span>
    </div>
  );
};

const SkillHtml = () => {
  return (
    <div className="skill">
      <img src={imgHtml} alt="HTML" />
      <span>HTML</span>
    </div>
  );
};

const SkillCss = () => {
  return (
    <div className="skill">
      <img src={imgCss} alt="CSS" />
      <span>CSS</span>
    </div>
  );
};

const SkillBs = () => {
  return (
    <div className="skill">
      <img src={imgBs} alt="Bootstrap" />
      <span>Bootstrap</span>
    </div>
  );
};

const SkillJs = () => {
  return (
    <div className="skill">
      <img src={imgJs} alt="JavaScript" />
      <span>JavaScript</span>
    </div>
  );
};

const SkillTs = () => {
  return (
    <div className="skill">
      <img src={imgTs} alt="TypeScript" />
      <span>TypeScript</span>
    </div>
  );
};

const SkillAngular = () => {
  return (
    <div className="skill">
      <img src={imgAngular} alt="Angular" />
      <span>Angular</span>
    </div>
  );
};


const SkillReact = () => {
  return (
    <div className="skill">
      <img src={imgReact} alt="React"/>
      <span>React</span>
    </div>
  );
};

const SkillNode = () => {
  return (
    <div className="skill">
      <img src={imgNode} alt="Node.js" />
      <span>Node.js</span>
    </div>
  );
};

const SkillGit = () => {
  return (
    <div className="skill">
      <img src={imgGit} alt="Git" />
      <span>Git</span>
    </div>
  );
};

const SkillCSharp = () => {
  return (
    <div className="skill">
      <img src={imgCSharp} alt="C#" />
      <span>C#</span>
    </div>
  );
};

const SkillUnity = () => {
  return (
    <div className="skill">
      <img src={imgUnity} alt="Unity" />
      <span>Unity</span>
    </div>
  );
};


export const Skills = {
  SkillHtml,
  SkillCss,
  SkillBs,
  SkillSass,
  SkillJs,
  SkillTs,
  SkillAngular,
  SkillReact,
  SkillNode,
  SkillGit,
  SkillCSharp,
  SkillUnity,
};
