import "./App.css";
import Heading from "./components/Heading/Heading";

function App() {
  return (
    <>
      <Heading
        label="Services"
        description="At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:"
      />
      <Heading
        label="Case Studies"
        description="Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies"
      />
      <Heading
        label="Our Working Process"
        description="Step-by-Step Guide to Achieving Your Business Goals"
      />
      <Heading
        label="Team"
        description="Meet the skilled and experienced team behind our successful digital marketing strategies"
      />
      <Heading
        label="Testimonials"
        description="Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services"
      />
      <Heading
        label="Contact Us"
        description="Connect with Us: Let's Discuss Your Digital Marketing Needs"
      />
    </>
  );
}

export default App;
