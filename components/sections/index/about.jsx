// Core packages
import Image from 'next/image'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';

// Section general blocks
import SectionTitle from '../../blocks/section.title.block'
import SectionGridBg from '../../blocks/section.grid.block'

// Section specific blocks
import BadgesBlock from '../../blocks/about.badges.block'
import CopyBlock from '../../blocks/about.copy.block'

// Section scss
import about from '../../../styles/sections/index/about.module.scss';

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 * 
 * @returns {jsx} <About />
 */
export default function About() {
	return (
		<Section classProp={about.section}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Conóceme"
					preTitle=""
					subTitle="Con más de 15 años de experiencia en diseño gráfico y dirección de arte, mi pasión es crear historias visuales que conecten con las audiencias y dejen una impresión duradera.

He liderado y colaborado con equipos talentosos, estrechamente con clientes y socios externos para garantizar la ejecución exitosa de estrategias creativas y campañas publicitarias.

Poseo una Maestría en Dirección de Arte y una Licenciatura en Publicidad y con los años me he ido especializando en la creación de logos e identidades visuales que impactan. Mi enfoque es desarrollar soluciones creativas para marcas en diversos sectores."
				/>
				<section className={about.content}>
					<div className={about.image}>
						<img src="/img/SEV_1720.jpg" alt="Molly Yllom" />
						{/* <Image src="/img/family-photo.jpg" width={600} height={800}/> */}
					</div>
					<div className={about.copy} >
						<CopyBlock
							title="Softskills that pay the bills"
							containerClass={about.container}
							iconClass={about.icon}
							icon="ph:ear-light"
							copy="In addition to my design and technical expertise—I also have strong leadership, time management, and multitasking skills—honed through my experience as a business owner / managing partner, husband, and father of two. Outside of work, I enjoy staying active through sports such as hockey and snowboarding. I am confident in my ability to bring passion and value to any project."
						/>
						<BadgesBlock
							title="Reasearch and planning"
							containerClass={about.container}
							list={methods}
							fullContainer="fullContainer"
							block="methods"
							icon="material-symbols:fingerprint"
							copy="One of my favorite aspects of creating is planning the architecture of a project. From Design Systems to Brand Strategy—I enjoy working with the many touch points of user experience."
							//invertedColor="invertedColor"
							headerIcon={`${about.icon}`}
						/>
					</div>
				</section>
			</Container>
		</Section>
	)
}

const methods = [
	{ key: 'planet-moon', name: 'User Research' },
	{ key: 'ic:twotone-qr-code', name: 'Digital Strategy' },
	{ key: 'window', name: 'Design Systems' },
	{ key: 'cubes', name: 'Product Strategy' },
	{ key: 'layer-plus', name: 'Brand Strategy' },
	{ key: 'solar-system', name: 'Operations' },
]