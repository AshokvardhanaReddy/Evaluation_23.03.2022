import { Link } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/"
  },
  {
    title:"About",
    link: "/about"
  },
  {
    title : "Products",
    link : "/products"
  }
  //   add the other link as well
];
function Navbar(){
  return (
    <div style={{backgroundColor:"grey", padding:"15px"}}>
    {links.map((e, index)=>{
      // console.log(e)
      return <Link key={index} to={e.link} style={{padding:"15px", color:"white", textDecoration:"none"}}>{e.title}</Link>
    })}
    </div>
  )
}

export {Navbar}
