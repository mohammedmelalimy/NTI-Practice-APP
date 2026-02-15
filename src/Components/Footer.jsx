import { NavLink } from "react-router-dom"
const Footer = () => {
  return (


<footer className="bg-neutral-primary-soft rounded-base shadow-xs font-bold dark:text-white">
    <div className="w-full max-w-7xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-7" alt="Flowbite Logo" />
                <span className="text-heading self-center text-2xl font-semibold whitespace-nowrap">FlowCart</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-body sm:mb-0">
                    <NavLink to="about" className="hover:underline me-4 md:me-6">About</NavLink>
                    <NavLink to="" className="hover:underline me-4 md:me-6">Privacy Policy</NavLink>
                    <NavLink to="" className="hover:underline me-4 md:me-6">Licensing</NavLink>
                    <NavLink to="contact" className="hover:underline">Contact</NavLink>
            </ul>
        </div>
        <hr className="my-6 border-default sm:mx-auto lg:my-8" />
        <span className="block text-sm text-body sm:text-center">© 2026 <a href="https://flowbite.com/" className="hover:underline">FlowCart™</a>. All Rights Reserved.</span>
    </div>
</footer>


  )
}

export default Footer
