import type { CredentialsType } from "../types/CredentialsType.ts";

interface Token {
    token: string;      
};

export async function signup(credentials: CredentialsType): Promise<Token> {
    const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
    });
    if (response.status !== 200)  throw new Error('Signup failed');
    const token: Token = await response.json();
    return token;
};

export async function login(credentials: CredentialsType): Promise<Token> {
    const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(credentials),
        headers: {
            'Content-Type': 'application/json',
        }
    });
    if (response.status !== 200)  throw new Error('Login failed');
    const token: Token = await response.json();
    return token;
}

