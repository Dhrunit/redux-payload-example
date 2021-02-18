import React from 'react'
import { Nav, NavbarContainer, NavLogo } from './NavbarElements'

export default function Navbar() {
	return (
		<>
			<Nav>
				<NavbarContainer>
					<NavLogo to='/'>Dolla</NavLogo>
					<MobileIcon>
						<NavMenu>
							<NavLinks to='/about'></NavLinks>
						</NavMenu>
					</MobileIcon>
				</NavbarContainer>
			</Nav>
		</>
	)
}
