import CV from "../assets/Resume/resume-ASP.NET-MVC-developer.pdf";
const Contact = () => {
  return (
    <section id="Contact" className="font-kalam mt-14 px-5 pb-10 lg:px-56">
      <div className="text-4xl">Contact</div>
      <p className="mt-8 w-96 pr-2 text-sm">
        I'm currently looking to join an organisation where my skills help your
        organisation as well as help me to develop my skills... Let's connect.
      </p>
      <div className="mt-5">
        <a
          href={CV}
          download
          className="bg-text-1 cursor-pointer rounded-full px-4 py-2 hover:opacity-80"
        >
          Download Resume
        </a>
      </div>
      <h3 className="mt-8">yogeshkumarnandi@gmail.com</h3>
    </section>
  );
};

export default Contact;
