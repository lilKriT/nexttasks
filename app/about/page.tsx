import { cookies } from "next/headers";
import Link from "next/link";

const About = () => {
  const cookieStore = cookies();
  console.log(cookieStore.get("auth"));

  return (
    <div className="min-h-screen flex justify-center">
      <div className="container">
        <h1 className="text-4xl">About</h1>
        <p>This is a website dedicated to an exercise made by me.</p>
        <p>Thank you for reading.</p>

        {cookieStore.get("auth") && (
          <div>
            <h2>PS. Did you know that penguins are awesome?</h2>
            <p>
              But only the ones from{" "}
              <Link
                href="https://en.wikipedia.org/wiki/Madagascar_(2005_film)"
                className="link"
              >
                Madagascar
              </Link>
              .
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;

// TODO: check how metadata trickles down in layout and in page itself.
