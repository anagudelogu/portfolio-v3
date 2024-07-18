export default function Navbar() {
  return (
    <nav className='navbar shadow-sm shadow-[rgba(66,99,248,0.2)]'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-primary font-syne font-bold text-3xl'>
          Andres Agudelo
        </a>
      </div>

      <div>
        <button className='btn btn-square btn-ghost'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='size-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}
