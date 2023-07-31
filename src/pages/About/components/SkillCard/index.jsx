import PropTypes from "prop-types";

const SkillCard = ({ icon, text}) => {
  return (
    <div className="border-4 max-w-xs w-full border-blue p-6 flex flex-col gap-4 items-center md:mx-0">
      <img src={icon} className="h-16" />
      <p className="text-blue">{text}</p>
    </div>
  );
};

SkillCard.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default SkillCard;
