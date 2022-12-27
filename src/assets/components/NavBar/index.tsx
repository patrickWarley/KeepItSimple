import { RxTriangleDown } from "react-icons/rx";
import * as Accordion from '@radix-ui/react-accordion';
import SideBarMenu from "../SidebarMenu";

const NavBar = () => {
  const courses = [
    {
      title: 'Desenvolvimento web',
      courses: ['Javascript', 'React', 'Java']
    },
    {
      title: 'Design',
      courses: ['UX', 'Desenho']
    },
    {
      title: 'Desenvolvimento de Games',
      courses: ['Unity', 'Unreal Engine', 'C++']
    },
    {
      title: 'Pastelaria',
      courses: ['Flango', 'Carne', 'Queijo']
    }
  ]

  type Props = {
    className: string
  };

  const Menu = ({ className }: Props) => {
    return (
      <div className={`w-full md:flex md:flex-1 md:w-auto md:justify-between ${className}`}>
        <div className="hidden md:block py-2 flex items-center md:p-3 md:m-2 bg-blue-900 text-blue-100 rounded hover:bg-blue-100 hover:text-blue-900">
          Cursos
          <RxTriangleDown />
        </div>

        <ul className="text-base pt-4 md:flex md:items-center md:pt-0">
          <li className="hidden md:block">
            <input
              type="text"
              className="rounded p-3 m-2 w-full md:w-80 text-center text-blue-900 border-none"
              placeholder="O que você deseja aprender?" />
          </li>

          <Accordion.Root className="AccordionRoot" type="single" collapsible>
            {courses.map((category, index) => {
              return (
                <Accordion.Item className="block p-2 m-2 hover:text-blue-200" value={`item-${index}`}>
                  <Accordion.Trigger className="font-bold">{category.title}</Accordion.Trigger>
                  <Accordion.Content>
                    <ul>
                      {category.courses.map(course => <li className="block p-2 m-2 hover:text-blue-200">{course}</li>)}
                    </ul>
                  </Accordion.Content>
                </Accordion.Item>
              );
            })}
          </Accordion.Root>
          <li className="block p-2 m-2 hover:text-blue-200"> <a href="#"></a></li>

        </ul>

        <div className=" md:w-4/12 md:flex md:flex-row flex-col flex md:place-content-end items-center ">
          <button className="p-0 w-11/12 inline-block md:w-auto rounded px-6 py-3 m-2 bg-main text-secondary hover:underline ">Login</button>
          <button className="p-0 w-11/12 inline-block md:w-auto rounded px-6 py-3 m-2 border-main border-2 hover:underline">Cadastrar-se</button>
        </div>
      </div >
    );
  }

  return (
    <header>
      <nav className="flex flex-wrap items-center w-full py-4 md:py-4 px-4 text-blue-400 bg-black" id="menu">
        <div>
          <a href="#" className="w-3/6 md:w-1/12 p-3 logo">KeepItSimple</a>
        </div>

        <div className="md:hidden">
          <SideBarMenu
            title={<span className=" text drop-shadow text-2xl font-extrabold ">KeepItSimple</span>}
            description=""
            className="text-main bg-secondary">
            <Menu className="menu" />
          </SideBarMenu>
        </div>

        <Menu className="hidden md:block" />

      </nav>
    </header>
  );
}

export default NavBar;