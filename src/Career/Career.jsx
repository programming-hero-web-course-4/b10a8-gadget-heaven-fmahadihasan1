import { useLoaderData } from "react-router-dom";

const Career = () => {
  const jobPosts = useLoaderData();

  return (
    <section className="">
      <section className=" bg-purple-600 text-white ">
        <div className=" max-w-3xl mx-auto text-center py-16 space-y-5 pb-52">
          <h1 className="text-center font-bold text-3xl">Career</h1>
          <p>
            Make your career with us. join us today. we are looking for some
            employees based on the position mentioned below.
          </p>
        </div>
      </section>
      <div className="grid grid-cols-3 gap-3 max-w-7xl mx-auto -mt-36 bg-slate-200 p-5 rounded-xl border border-white">
        {[...jobPosts].map((post) => (
          <div
            className="border p-5 rounded-xl max-w-xl bg-white text-center flex flex-col justify-between"
            key={post.id}
          >
            <div className="space-y-3">
              <h2 className="font-semibold text-2xl">{post.title}</h2>
              <h4 className="font-semibold text-xl">{post.location}</h4>
              <div className="bg-green-400 text-white font-bold py-3 px-5 inline-block rounded-xl">
                {post.type}
              </div>
              <p className="text-justify">{post.description}</p>
              <p className="font-bold">Requirements:</p>
              <ul className="text-left list-decimal list-inside font-normal text-base text-gray-500">
                {post.requirements.map((e, idx) => (
                  <li key={idx}> {e} </li>
                ))}
              </ul>
              <p className="text-left">Salary: {post.salary}</p>
              <br />
              <p className="text-left">Last Date: {post.apply_by}</p>
              <br />

              <p className="text-left">
                {" "}
                Send your CV To: {post.contact_email}
              </p> <br />
            </div>
            <div className="bg-purple-400  text-white font-bold py-3 px-5 inline-block rounded-xl">
              Apply Today
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
