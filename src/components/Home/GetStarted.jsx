import ResourceList from "../../Resources/ResourceList";
import BlogList from "../../Blogs/BlogList";

const GetStarted = () => {
  return (
    <section className="min-h-1/2 justify-center px-6 py-4">
      <h3 className="titleHead">Resources.</h3>
      <p className="text-center text-lg font-sans text-gray-500">All the tools you need to better manage your finances</p>
      <ResourceList type={"full"} />
      <hr className="w-3/5 mx-auto" />
      <h3 className="titleHead">Blogs.</h3>
      <p className="text-center text-lg font-sans text-gray-500">All the tools you need to better manage your finances</p>
      <BlogList type="full" />
    </section>
  )
}

export default GetStarted
