import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto mb-10 text-center text-zinc-700">
      <div className="mb-3 flex justify-center gap-4 border-b-[5px] border-gray-500 px-48 pb-5 max-sm:mx-auto max-sm:w-[80%] max-sm:border-b-[3px] max-sm:px-0">
        <a
          href="https://github.com/monkeystylle"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-500"
        >
          <FaGithub size={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-bayangos/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-gray-500"
        >
          <FaLinkedin size={40} />
        </a>
      </div>
      <h6 className="text-xl max-sm:text-base">Built with</h6>
      <h6 className="text-xl max-sm:text-base">Next.js / Tailwind CSS</h6>
      <h6 className="text-xl max-sm:text-base">© {year}</h6>
    </footer>
  );
};

export default Footer;
