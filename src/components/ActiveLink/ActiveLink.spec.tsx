import { render, screen } from '@testing-library/react'
import { ActiveLink } from '.'

// O next/router não tem retorno, pois quero verificar somente os arquivos html
// por isso o mock vai ignorar o next/router, então essa função vai dizer o que ele vai retornar
jest.mock('next/router', () => {
    return {
        useRouter() {
            return {
                asPath: '/'
            }
        }
    }
})

describe('ActiveLink component', () => {

    it('active link renders correctly', () => {
        render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )

        // preciso dizer o que eu espero do retorno da ação do jest

        expect(screen.getByText('Home')).toBeInTheDocument()
    })

    it('active link is receiving active class', () => {
        render(
            <ActiveLink href="/" activeClassName="active">
                <a>Home</a>
            </ActiveLink>
        )

        // preciso dizer o que eu espero do retorno da ação do jest

        expect(screen.getByText('Home')).toHaveClass('active')
    })
})