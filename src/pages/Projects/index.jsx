import { useEffect } from 'react';
import Header from '../../components/Header'

const Projects = ({changePage}) => {

  useEffect(() => {
    changePage("projects");
  },[]);

  return (
    <Header />
  )
}

export default Projects
