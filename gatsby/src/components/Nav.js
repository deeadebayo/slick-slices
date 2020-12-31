import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const NavStyles = styled.nav`
	margin-bottom: 3rem;
`;

export default function Nav() {
	return (
		<NavStyles>
			<ul>
				<li>
					<Link to='/'>Hot Now</Link>
				</li>
				<li>
					<Link to='/pizzas'>Pizza Menu</Link>
				</li>
				<li>
					<Link to='/'>LOGO</Link>
				</li>
				<li>
					<Link to='/slicemasters'>Slicemasters</Link>
				</li>
				<li>
					<Link to='/order'>Order Ahead </Link>
				</li>
			</ul>
		</NavStyles>
	);
}
