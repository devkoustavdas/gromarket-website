import ResourceList from "../../Resources/ResourceList";
const GetStarted = () => {
  return (
    <section className="min-h-1/2 justify-center px-6 py-4">
          <h3 className="subHead text-center text-3xl font-sans">Resources.</h3>
          <p className="text-center text-lg font-sans">All the tools you need to better manage your finances</p>
          <ResourceList />
          <hr className="w-3/5 mx-auto" />
    </section>
  )
}

export default GetStarted
