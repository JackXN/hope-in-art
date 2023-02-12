import React from 'react';
import Link from 'next/link';



const NavItem = ({href, active,text}) => {
  return (
<Link href={href}>
    <a className={`nav__item ${active ? "active" : ""}`}>
{text}
    </a>
</Link>
  )
}

export default NavItem
