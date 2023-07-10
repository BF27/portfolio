import icon from "../../../../assets/html.svg"

const SkillCard = ({icon, text, title}) => {
  return (
    <div className="border-4 border-blue md:w-80 p-6 flex flex-col gap-4 items-center  mx-4 md:mx-0">
      <img src={icon} className="h-16"/>
        <p className="text-blue">{text}</p>
    </div>
  )
}

export default SkillCard
