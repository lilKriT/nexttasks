"use client";

import { AuthProvider } from "@/src/context/provider";
import { redirect } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Flash = async () => {
  const [loading, setLoading] = useState(true);
  const context = useContext(AuthProvider);

  useEffect(() => {
    setLoading(true);

    if (!context.user) {
      redirect("/");
    }

    setLoading(false);
  }, [context.user]); // kind of important - if user logs out while viewing, they need to be redirected.

  if (loading) {
    return (
      <div className="bg-blue-300">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          doloremque eligendi sit veniam tempora, perferendis sed totam iste eum
          autem consequatur minima, similique quia nostrum, enim laudantium rem
          recusandae ullam cupiditate aspernatur? Quo dicta veritatis vel
          nostrum earum sit voluptates expedita. Sit quisquam quo dolore,
          voluptas vel vitae repellat. Doloribus.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-pink-300">
      <h1>will this flash?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam iusto
        distinctio nam doloribus iste nisi delectus consequuntur amet tempore
        tempora accusamus, nemo itaque est blanditiis minus expedita, officiis
        nobis aliquid laudantium perspiciatis corporis quae unde labore rerum?
        Quaerat quam error omnis pariatur sed similique animi vel illum, id
        repellat veritatis sequi fuga ad iste laboriosam tempora velit
        perspiciatis, earum exercitationem impedit adipisci molestiae blanditiis
        soluta! Ad, rerum? Nihil, ea dignissimos corrupti consequuntur, officia
        quod enim minima pariatur doloremque voluptatum quisquam, facere aut
        cumque vero. Ea, odio ratione iste quo possimus quas architecto soluta
        explicabo nemo nostrum inventore deleniti iure praesentium laborum unde
        incidunt accusantium tempora sunt, deserunt hic, reiciendis cupiditate
        itaque a? Recusandae sint dignissimos repudiandae a voluptatum debitis
        laborum adipisci optio! Veniam fugit necessitatibus similique laborum,
        sit quod commodi iusto expedita dicta adipisci sed praesentium nihil
        quisquam recusandae qui temporibus repellat accusamus sapiente debitis
        explicabo corrupti. Debitis possimus, laudantium molestias architecto
        accusamus, illo qui necessitatibus assumenda dolore labore cum soluta
        consequatur error vero sequi hic. Inventore enim minus similique earum
        sint, perspiciatis sapiente laboriosam nihil non incidunt tempore amet
        veritatis explicabo repellendus sed iusto! Id enim inventore voluptate
        suscipit laborum modi nesciunt ut. Provident nesciunt esse placeat autem
        totam!
      </p>
    </div>
  );
};

export default Flash;
