export default function About() {
  return (
    <section className="py-20 px-4 bg-secondary text-primary">
      <div className={`max-w-4xl mx-auto transition-opacity duration-1000`}>
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg mb-4">
          I am a passionate web developer with expertise in React, Next.js, and
          modern web technologies.
        </p>
        <p className="text-lg">
          My goal is to create beautiful, performant, and user-friendly web
          applications that solve real-world problems.
        </p>
      </div>
    </section>
  );
}
