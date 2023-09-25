import ContactForm from "./components/ContactForm";

export default function Home() {
  return (
    <main className=''>
      <ContactForm />
      <a
        className='link link-primary fixed top-2 right-6 mx-auto flex items-center'
        href='https://github.com/ThomasDCW/contact-form'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='2.5'
          stroke='currentColor'
          className='w-4 h-4 mr-2 text-base-content'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244'
          />
        </svg>
        View Code on Github
      </a>
    </main>
  );
}
