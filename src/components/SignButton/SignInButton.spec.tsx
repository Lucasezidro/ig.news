import { render, screen } from '@testing-library/react'
import { mocked } from 'ts-jest/utils'
import { useSession } from 'next-auth/client'
import { SignButton } from '.'


jest.mock('next-auth/client')

describe('ActiveLink component', () => {

    it('SignInButton renders correctly when user is not authenticated', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(
            <SignButton />
        )
        expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
    })

    it('SignInButton renders correctly when user is authenticated', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([
            { user: { name: 'John Doe', email: 'johndoe@exemple.com'}, expires: 'fake-expires' },
            false])

        render(
            <SignButton />
        )
        expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
})