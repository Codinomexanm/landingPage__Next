import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, cloneElement } from 'react'

const ActiveLink = ({ children, activeClassName, ...rest }) => {
  const { asPath } = useRouter();
  const className = asPath === rest.href ? activeClassName : '';
  // se a rota/pagina que estamos acessando for igual ao link ele clicou então estivamos  o classnames
  return (
    <Link {...rest}>
      {cloneElement(children, { className })}
    </Link>
  )
}

export default ActiveLink
