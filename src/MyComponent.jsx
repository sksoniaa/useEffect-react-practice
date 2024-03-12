import {useState, useEffect} from "react"

export default function MyComponent() {

  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)


  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    document.title = `Size: ${width} x ${height}`
  }, [width, height])

  function handleResize() {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

   return(
    <>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>

    </>
   )
}