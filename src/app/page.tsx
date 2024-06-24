import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Andres Agudelo',
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>Andres Portfolio</h1>
      <button className='btn btn-primary'>Click me!</button>
    </main>
  );
}
