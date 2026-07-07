'use server';

import { createAuthToken } from '@/lib/auth';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function loginAction(formData: FormData) {
  const username = (formData.get('username') as string)?.trim();
  const password = (formData.get('password') as string)?.trim();

  const validUsername = 'adminolo';
  const validPassword = 'olowebadmin123!';

  console.log('Login attempt:', {
    inputUsername: username,
    inputPassword: password,
    envUsername: validUsername,
    envPassword: validPassword,
  });

  if (username === validUsername && password === validPassword) {
    try {
      const token = await createAuthToken({ user: 'admin' });

      const cookieStore = await cookies();
      cookieStore.set('admin_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24, // 24 hours
        path: '/',
      });

      return { success: true };
    } catch (error: any) {
      console.error('Login Error:', error);
      return {
        success: false,
        error: error.message || 'Terjadi kesalahan sistem saat login.',
      };
    }
  }

  return { success: false, error: 'Username atau Password salah!' };
}

export async function logoutAction() {
  const cookieStore = await cookies();
  cookieStore.delete('admin_token');
  redirect('/login');
}
