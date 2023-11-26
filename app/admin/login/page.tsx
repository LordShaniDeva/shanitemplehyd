'use client';
import SecondryButton from '@/components/button/secondry';
import Input from '@/components/input';
import Label from '@/components/label';
import { loginSchema } from '@/constants/schema';
import axios from '@/network';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import React from 'react';

const AdminLogin = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async (values) => {
      try {
        const { data } = await axios({
          method: 'post',
          url: '/admin',
          data: values,
        });
        router.refresh();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: loginSchema,
  });

  return (
    <div className="bg-white flex h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-xl sm:text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col">
            <Label htmlFor="username">Username</Label>
            <Input
              id="username"
              name="username"
              type="text"
              onBlur={formik.handleBlur}
              value={formik.values.username}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-col">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              name="password"
              type="password"
              onBlur={formik.handleBlur}
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
          <div className="flex flex-col">
            <SecondryButton disabled={formik.isSubmitting} type="submit">
              {formik.isSubmitting ? 'Signing...' : 'Sign in'}
            </SecondryButton>
          </div>
        </form>

        {/* <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?{' '}
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Start a 14 day free trial
          </a>
        </p> */}
      </div>
    </div>
  );
};
export default AdminLogin;
