import React, { Component } from 'react'
import styles from './index.module.scss'

const menu = [
	{ title: '首页', icon: '', link: '/' },
	{ title: '购物车', icon: '', link: '/cart' },
	{ title: '订单列表', icon: '', link: '/orderlist' },
	{ title: '用户中心', icon: '', link: '/user' }
]

export default class BottomNav extends Component {
	render() {
		const { activeNum, setActiveNum } = this.props
		return (
			<div className={styles.main} >
				{
					menu.map((item, index) => (
						<MenuItem
							key={item.link}
							{...item}
							active={activeNum === index}
							onClick={() => setActiveNum(index)} />
					))
				}
			</div>
		)
	}
}

function MenuItem({ title, icon, active, onClick }) {
	return (
		<div
			className={styles.menuItem}
			onClick={onClick} >
			<span className={"iconfont icon-" + icon}></span>
			<span className={styles.title}>{title}</span>
		</div>
	)
}