import { useState, useEffect } from 'react'

import Container from '../structure/container'
import Icon from '../utils/icon.util'

import css from '../../styles/structure/footer.module.scss'

import content from '../../content/footer.json'

export default function Footer() {
	return (
		<footer className={css.container}>
			<Container spacing={['verticalXXLrg', 'bottomLrg']}>
				<section className={`${css.sections} w-full justify-end`}>
					<ul className={css.social}>
						<li><h4>Social</h4></li>
						<li className={css.socialList}>
							{
								content.social.map(({ url, icon }, index) => {
									return (
										<a key={index} href={url} rel="noreferrer" target="_blank"><Icon icon={icon} width={32} /></a>
									)
								})
							}
						</li>
					</ul>
				</section>
			</Container>
			<canvas id="gradient-canvas" className={''} data-transition-in ></canvas>
		</footer>
	)
}
