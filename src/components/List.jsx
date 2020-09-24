import React from 'react';

const List = ({ project }) => {
    return (
        <div className='card'>
            <h1 className='title-project'>{project.name}</h1>
            <img className='image' src={project.img} alt='project logo' />
            <p className='description'>{project.description}</p>
            {project.user && <span className='user'>{project.user}</span>}
            <h2 className='title-tools'>Herramientas utilizadas</h2>
            <h3 className='tools'>{project.tools}</h3>
            {project.server && (
                <>
                    <h2 className='title-tools'>Servidor</h2>
                    <h3 className='tools'>{project.server}</h3>
                </>
            )}

            <div className='buttons'>
                <div>
                    <h2 className='title-code'>Sitio web y Codigo</h2>
                    <div className='container-link'>
                    <a className='link' href={project.url}>
                        visitar
                    </a>
                        {project.back && (
                            <a className='link-code' href={project.back}>
                                Ver Back
                            </a>
                        )}
        
                        {project.front && (
                            <a className='link-code' href={project.front}>
                                Ver front
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;
