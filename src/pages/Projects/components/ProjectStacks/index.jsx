const ProjectStacks = ({stacks}) => {
  return (
    <div className="flex flex-wrap w-full gap-3 text-blue font-fontBody">
      {stacks.map((stack, i) => (<span key={i} className="bg-blue text-light-bg px-2 py-1 rounded">{stack}</span>))}
      </div>
  )
}

export default ProjectStacks
