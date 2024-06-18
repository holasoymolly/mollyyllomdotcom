import FeaturedProject from '../../blocks/projects/featured'

// Section structure
import Section from '../../structure/section';
import Container from '../../structure/container';
import SectionTitle from '../../blocks/section.title.block'

import css from '../../../styles/sections/projects/featured.module.scss'
import content from '../../../content/projects/featured.json'

export default function FeaturedProjects() {
    return (
        <>
            <Section classProp={css.hasBg}>
                <Container spacing={'verticalXXXXLrg'} classProp={css.titleContainer}>
                    <div className={css.titleContent}>
                        <div className={css.titleImageContainer}>
                            <img src="/img/SEV_1699 copy.jpg" alt="Imagen de proyecto" className={css.titleImage} />
                        </div>
                        <SectionTitle
                            title={content.title}
                            preTitle=""
                            subTitle={content.subTitle}
                        />
                    </div>
                </Container>
            </Section>
            <Section classProp={css.hasBg}>
                <Container spacing={'verticalXXXXLrg'} classProp={css.projectsContainer}>
                    {content.projects.map((data, index) => (
                        <FeaturedProject content={data} index={index} key={index} />
                    ))}
                </Container>
            </Section>
            <div className={css.bgContainer}>
                <span className={css.orbitalBg}>
                    <span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroLeft} ${css.heroOrbital}`}></span></span>
                    <span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroCenter}`}></span></span>
                    <span className={`${css.bgSection}`}><span className={`${css.bgInner} ${css.heroRight}`}></span></span>
                </span>
                <span className={css.afterGlowBg}></span>
            </div>
        </>
    );
}