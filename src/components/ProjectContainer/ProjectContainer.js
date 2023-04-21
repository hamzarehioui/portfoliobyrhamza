import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import './ProjectContainer.css'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel'
import 'pure-react-carousel/dist/react-carousel.es.css'

const ProjectContainer = ({ project }) => {
  const handleClick = (event) => {
    const modal = document.getElementById('myModal')

    const modalImg = document.getElementById('img01')
    modal.style.display = 'block'
    modalImg.src = event.target.src
  }

  return (
    <div className='project'>
      {project.images && (
        <CarouselProvider
          naturalSlideWidth={300}
          naturalSlideHeight={200}
          style={{ marginLeft: -32, marginTop: -32, marginRight: -32 }}
          totalSlides={project.images.length}
        >
          <Slider>
            {project.images.map((img, i) => (
              <Slide key={img} index={i}>
                <img
                  id='myImg'
                  src={`${process.env.PUBLIC_URL}${img}`}
                  alt=''
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    imageResolution: 'from-image',
                  }}
                  onClick={handleClick}
                  onKeyDown={() => {}}
                  role='presentation'
                />
              </Slide>
            ))}
          </Slider>

          <div
            style={{
              flex: 1,
              flexDirection: 'row',
              paddingTop: 12,
              paddingBottom: 12,
              paddingRight: 32,
              paddingLeft: 32,
            }}
          >
            <ButtonBack style={{ textAlign: 'left', width: '50%' }}>
              Back
            </ButtonBack>
            <ButtonNext style={{ textAlign: 'right', width: '50%' }}>
              Next
            </ButtonNext>
          </div>
        </CarouselProvider>
      )}

      <h3>{project.name}</h3>

      <p className='project__description'>{project.description}</p>
      {project.stack && (
        <ul className='project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}

      {/* {project.sourceCode && (
        <a
          //href={project.sourceCode}
          aria-label='source code'
          className='link link--icon'
        >
          <GitHubIcon />
        </a>
      )}

      {project.livePreview && (
        <a
          //href={project.livePreview}
          aria-label='live preview'
          className='link link--icon'
        >
          <LaunchIcon />
        </a>
      )} */}
    </div>
  )
}

export default ProjectContainer
