import React from "react";

interface SkillProps {
  badgeUrl: string;
  style?: any;
}

const SkillTitle = ({ badgeUrl, style }: SkillProps) => {
  return (
    <code>
      <img className="skills-badge" src={badgeUrl} style={style} />
    </code>
  );
};

export default SkillTitle;
