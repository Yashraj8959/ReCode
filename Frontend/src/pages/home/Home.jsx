import React, {useEffect} from 'react';
import axios from 'axios';



const Home = () => {
    const [projects, setProjects] = React.useState([]);
    useEffect(() => {
        axios.get('http://localhost:3030/v1/api/projects/list')
        .then((response) => {
        setProjects(response.data)
        // console.log(response.data)   
        })
        .catch((error) => {
        console.log(error)
        })
    }, [])
  return (
    <main>
        <section>
            <div className="projects">
                {/* Project list goes here */}
                {
                    projects.map((project) => {
                        return (
                            <div className="project">
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    </main>
  )
}

export default Home
