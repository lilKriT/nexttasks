import { redirect } from "next/navigation";
import React from "react";

const page = () => {
  if (true) {
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-pink-400">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta laudantium
      minima amet impedit, natus sequi deserunt exercitationem odio velit beatae
      voluptatem quo tempora? Quos debitis cupiditate nesciunt animi nobis
      temporibus facilis. Omnis officiis nobis nulla saepe, dolores natus.
      Eveniet nam, quos nulla animi laudantium consectetur asperiores ad rerum
      reiciendis voluptatum quam velit minus laborum voluptatem sit, libero ea
      repudiandae facere earum, est rem recusandae! Ab debitis fugiat, provident
      delectus fuga necessitatibus explicabo animi eos! Itaque laborum,
      voluptate, ut quia commodi dolores vero magni culpa ratione natus autem
      ipsum eaque incidunt deserunt similique quidem pariatur eligendi id
      architecto voluptates, quisquam nisi.
    </div>
  );
};

export default page;
