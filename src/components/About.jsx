const About = () => {
  return (
    <section id="about" className="bg-[#030a1f] text-[#d1cdc2] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <p className="text-lg text-[#d1cdc2]/80">
              I'm a passionate developer with a keen eye for design and a love for creating seamless user experiences. 
              My journey in web development has led me to work on diverse projects, from dynamic web applications to 
              creative portfolio sites.
            </p>
            <p className="text-lg text-[#d1cdc2]/80">
              I specialize in modern web technologies and believe in writing clean, maintainable code that scales. 
              Whether it's crafting responsive layouts or implementing complex functionalities, I'm always excited 
              to take on new challenges.
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="flex flex-wrap gap-3">
                {['React', 'JavaScript', 'TypeScript', 'Node.js', 'HTML/CSS', 'Tailwind CSS', 'Git', 'Responsive Design',
                    'Webflow'
                ].map((skill) => (
                  <span 
                    key={skill}
                    className="px-4 py-2 rounded-full bg-[#d1cdc2]/10 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right side - Stats or additional info */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-[#d1cdc2]/5">
                <h4 className="text-4xl font-bold mb-2">5+</h4>
                <p className="text-[#d1cdc2]/70">Years Experience</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#d1cdc2]/5">
                <h4 className="text-4xl font-bold mb-2">50+</h4>
                <p className="text-[#d1cdc2]/70">Projects Completed</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#d1cdc2]/5">
                <h4 className="text-4xl font-bold mb-2">100%</h4>
                <p className="text-[#d1cdc2]/70">Client Satisfaction</p>
              </div>
              <div className="p-6 rounded-2xl bg-[#d1cdc2]/5">
                <h4 className="text-4xl font-bold mb-2">24/7</h4>
                <p className="text-[#d1cdc2]/70">Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 